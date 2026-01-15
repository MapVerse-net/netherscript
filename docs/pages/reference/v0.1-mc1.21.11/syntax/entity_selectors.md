# Entity Selectors

Entity selectors are used to reference and create entities according to provided conditions and values.

## Defining

Entity selectors can be defined with

```ntscript
@NAME = @FULL_SELECTOR
```

or

```ntscript
@NAME : @FULL_SELECTOR
```

where `@NAME` represents an `@` followed by a valid id, and `@FULL_SELECTOR` is a valid Minecraft entity selector. Previously defined NetherScript selectors can be used in place of `@FULL_SELECTOR`.

:::info Example
```ntscript
@ExplodingCow : @e[type=cow,tag=exploding_cow]
```
:::

## Referencing

Entity selectors can be referenced by their name.

:::info Example
```ntscript
@ExplodingCow
```
:::

## Defining with `create`

Optionally, entity selectors can also be defined using a `define`/`create`/`end` codeblock, which functions similar to a constructor in other languages.

```ntscript
define @NAME : @FULL_SELECTOR
    create {NBT_VALUES}
end
```

where `@NAME` and `@FULL_SELECTOR` are the same, with key-value pairs for valid Minecraft NBT data.

:::info Example
```ntscript
define @TacoCat : @e[type=cat,tag=tacocat]
    create {CustomName: "tacocat"}
end
```
:::

## Referencing with `create`

Entity selectors can then be referenced using `create` to summon them into the world.

```ntscript
create @NAME
```

:::info Example
```ntscript
define @TacoCat : @e[type=cat,tag=tacocat]
    create {CustomName: "tacocat"}
end

create @TacoCat
```
:::