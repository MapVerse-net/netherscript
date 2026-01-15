import click

@click.group()
def manage():
    pass

@manage.command()
def install():
    pass

@manage.command()
def list():
    pass

@manage.command()
def remove():
    pass
