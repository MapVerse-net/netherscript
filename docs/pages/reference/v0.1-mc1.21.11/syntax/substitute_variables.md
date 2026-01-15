# Substitute Variables

Substitute variables are keys which are substituted for their values at compile-time.

## Declaring Substitute Variables

Substitute variables can be declared with

```ntscript
$NAME = VALUE
```

where `$NAME` represents an `$` followed by a valid id, and `VALUE` represents any string value.

:::info Example
```ntscript
$CowType = "Exploding"
```
:::

:::tip
In this case, numeric values are treated as strings.
:::

:::warning
Neither `NAME` nor `VALUE` may be left blank.
:::