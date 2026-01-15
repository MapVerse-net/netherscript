# Headers

Headers are keys placed at the beginning of each `.ntscript` file. The compiler references these headers to determine how to compile the file.

## `desc` <Badge type="tip" text="optional" />

The `desc` header is used to include a description in the compiled `pack.mcmeta`. It must be denoted by using quotes around the path.

:::info Example
```ntscript
desc "This is a cool description!"
```
:::

## `dir` <Badge type="danger" text="required" />

The `dir` header is used to specify the output directory in which to save the compiled datapack. The target path must contain a `datapacks` directory. It must be denoted by using quotes around the path.

:::info Example
```ntscript
dir "C:\Users\Wiki\AppData\Roaming\.minecraft\saves\ExampleWorld"
```
:::

## `import` <Badge type="tip" text="optional" />

The `import` header is used to import NetherScript libraries (`.ntlib`) for reference in NetherScript. For a list of provided libraries, reference "Internal Libraries"

:::info Example
```ntscript
import common
```
:::

## `scale` <Badge type="tip" text="optional" />

The `scale` header is used to specify the multiplier of `double` type values. If not specified, `scale` defaults to `10000`

:::info Example
```ntscript
scale 10000
```
:::

:::warning
It is untested whether `.ntscript` files which use non-integers work as expected.
:::