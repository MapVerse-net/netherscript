import click
import dload
import os
import pathlib
import requests
import shutil

install_path: pathlib.Path

def get_releases():
    releases = []

    response: requests.Response = requests.get("https://api.github.com/repos/Mapverse-Net/netherscript/releases")
    response_json = response.json()

    for index, i in enumerate(response_json):
        assets_index = None

        for j in i["assets"]:
            if j["name"] == "compiler-src.zip":
                assets_index = index
                break
        
        if assets_index == None:
            continue

        releases.append(
            {
                "name": i["name"],
                "download_url": i["assets"][assets_index]["browser_download_url"]
            }
        )

        return releases

@click.group()
def manage():
    pass

@manage.command(help="install compiler")
@click.argument('version', default="latest")
def install(version):
    releases = get_releases()

    for i in releases:
        if i["name"] == version:
            click.echo(f"Compiler version '{i["name"]}' is available to install.")
            continue_bool = click.prompt("Would you like to proceed? (y/n)")

            compiler_path: pathlib.Path = pathlib.Path.joinpath(install_path, pathlib.Path(f"compilers/{i["name"]}/"))

            if continue_bool == "y":
                try:
                    os.makedirs(compiler_path)
                except FileExistsError:
                    click.echo("File already exists.")

                if os.listdir(compiler_path):
                    click.echo("Install directory is not empty. Try uninstalling compiler first.")
                    return

                dload.save_unzip(i["download_url"], str(compiler_path))


@manage.command(help="list compilers")
@click.option("--filter", "filter", default="installed", help="list installed or available compilers")
def list(filter: str):
    filter = filter.lower()
    compiler_path: pathlib.Path = pathlib.Path.joinpath(install_path, pathlib.Path(f"compilers"))

    match filter:
        case "installed":
            click.echo("Installed compilers:")
            for i in os.listdir(compiler_path):
                click.echo(f"\t{i}")

        case "available":
            releases = get_releases()
            
            click.echo("Available compiler versions")
            for i in releases:
                click.echo(f"\t{i["name"]}")

        case _:
            click.echo("option --filter requires one of 'installed' or 'available'")
            return


@manage.command(help="uninstall compiler")
@click.argument('version')
def uninstall(version):
    
    dir_path: pathlib.Path = pathlib.Path.joinpath(install_path, f"compilers")
    version_path: pathlib.Path = pathlib.Path.joinpath(install_path, f"compilers/", version)

    try:
        shutil.rmtree(version_path)
        click.echo("Success.")
    except FileNotFoundError:
        click.echo("Compiler not installed.")


if __name__ == '__main__':
    
    install_path = pathlib.Path(__file__).parent.resolve()
    compiler_path: pathlib.Path = pathlib.Path.joinpath(install_path, pathlib.Path(f"compilers"))

    try:
        os.makedirs(compiler_path)
    except:
        pass

    manage()