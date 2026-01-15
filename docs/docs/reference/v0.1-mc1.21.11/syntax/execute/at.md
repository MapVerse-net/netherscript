# Execute `at`

The `at` codeblock compiles into `/execute at`. In the following syntax examples, `@FULL_SELECTOR` is a valid entity selector, `COORDS` is a valid Minecraft coordinate set, and `ANCHOR` is either `eyes` or `feet`.

## At Selector

```ntscript
at @FULL_SELECTOR ANCHOR
    ...
end
```

## At Coords

```ntscript
at ANCHOR COORDS
    ...
end
```

## At Relative to Selector

```ntscript
at @FULL_SELECTOR ANCHOR COORDS
    ...
end
```

## At Vector

```ntscript
at <X_VALUE, Y_VALUE, Z_VALUE>
    ...
end
```

or

```ntscript
at <VECTOR_ID>
    ...
end
```

:::tip
See this [page on Vectors](/reference/v0.1-mc1.21.11/syntax/vectors) for more details. 
:::

## At Vector Scale

...

See this [minecraft.wiki](https://minecraft.wiki/w/Commands/execute#at) page for more details.