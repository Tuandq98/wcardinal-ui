[Winter Cardinal UI - v0.227.0](../index.md) / DTableHeaderOptions

# Interface: DTableHeaderOptions<ROW, THEME\>

[DBase](../classes/DBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `ROW` |
| `THEME` | extends [`DThemeTableHeader`](DThemeTableHeader.md) = [`DThemeTableHeader`](DThemeTableHeader.md) |

## Hierarchy

- [`DTableRowOptions`](DTableRowOptions.md)<`ROW`, [`DTableColumn`](DTableColumn.md)<`ROW`, `unknown`\>, `THEME`\>

  ↳ **`DTableHeaderOptions`**

## Table of contents

### Properties

- [background](DTableHeaderOptions.md#background)
- [border](DTableHeaderOptions.md#border)
- [cell](DTableHeaderOptions.md#cell)
- [children](DTableHeaderOptions.md#children)
- [clear](DTableHeaderOptions.md#clear)
- [column](DTableHeaderOptions.md#column)
- [columns](DTableHeaderOptions.md#columns)
- [corner](DTableHeaderOptions.md#corner)
- [cursor](DTableHeaderOptions.md#cursor)
- [direction](DTableHeaderOptions.md#direction)
- [frozen](DTableHeaderOptions.md#frozen)
- [height](DTableHeaderOptions.md#height)
- [interactive](DTableHeaderOptions.md#interactive)
- [margin](DTableHeaderOptions.md#margin)
- [name](DTableHeaderOptions.md#name)
- [offset](DTableHeaderOptions.md#offset)
- [on](DTableHeaderOptions.md#on)
- [outline](DTableHeaderOptions.md#outline)
- [padding](DTableHeaderOptions.md#padding)
- [parent](DTableHeaderOptions.md#parent)
- [reverse](DTableHeaderOptions.md#reverse)
- [row](DTableHeaderOptions.md#row)
- [shadow](DTableHeaderOptions.md#shadow)
- [shortcut](DTableHeaderOptions.md#shortcut)
- [shortcuts](DTableHeaderOptions.md#shortcuts)
- [state](DTableHeaderOptions.md#state)
- [table](DTableHeaderOptions.md#table)
- [theme](DTableHeaderOptions.md#theme)
- [title](DTableHeaderOptions.md#title)
- [visible](DTableHeaderOptions.md#visible)
- [weight](DTableHeaderOptions.md#weight)
- [width](DTableHeaderOptions.md#width)
- [x](DTableHeaderOptions.md#x)
- [y](DTableHeaderOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[background](DTableRowOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[border](DTableRowOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### cell

• `Optional` **cell**: [`DTableHeaderCellOptions`](DTableHeaderCellOptions.md)<`ROW`, [`DThemeTableHeaderCell`](DThemeTableHeaderCell.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-header.ts#L25)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[children](DTableRowOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L374)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[clear](DTableRowOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### column

• `Optional` **column**: `number`

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[column](DTableRowOptions.md#column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L34)

___

### columns

• `Optional` **columns**: [`DTableColumn`](DTableColumn.md)<`ROW`, `unknown`, `unknown`, [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)<`unknown`\>\>[]

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[columns](DTableRowOptions.md#columns)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L17)

___

### corner

• `Optional` **corner**: `number` \| [`DLayoutCornerOptions`](DLayoutCornerOptions.md)

A corner options.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[corner](DTableRowOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L32)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[cursor](DTableRowOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:477](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L477)

___

### direction

• `Optional` **direction**: ``"HORIZONTAL"`` \| ``"VERTICAL"`` \| [`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[direction](DTableRowOptions.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L35)

___

### frozen

• `Optional` **frozen**: `number`

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[frozen](DTableRowOptions.md#frozen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L18)

___

### height

• `Optional` **height**: [`DCoordinateSize`](../index.md#dcoordinatesize)

One of the followings:
* A height
* A size keyword
* A size expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a hight ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a hight ([DScalar](DScalar.md))

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[height](DTableRowOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[interactive](DTableRowOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### margin

• `Optional` **margin**: `number` \| [`DLayoutMarginOptions`](DLayoutMarginOptions.md)

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[margin](DTableRowOptions.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L31)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[name](DTableRowOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L377)

___

### offset

• `Optional` **offset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-header.ts#L24)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[on](DTableRowOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[outline](DTableRowOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[padding](DTableRowOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:434](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L434)

___

### parent

• `Optional` **parent**: `Container`

A parent.

In the case of UI classes which pop up (e.g., [DDialog](../classes/DDialog.md) and [DMenu](../classes/DMenu.md)),
if multiple application instances are there, better to set
this to an `application.stage` so that they pick a right application.
By default, they assume the last created application is
the one they belong to at the time when they are created.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[parent](DTableRowOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L371)

___

### reverse

• `Optional` **reverse**: `boolean`

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[reverse](DTableRowOptions.md#reverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L36)

___

### row

• `Optional` **row**: `number`

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[row](DTableRowOptions.md#row)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-layout.ts#L33)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[shadow](DTableRowOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[shortcut](DTableRowOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:456](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L456)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[shortcuts](DTableRowOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[state](DTableRowOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L428)

___

### table

• `Optional` **table**: [`DTableHeaderTable`](DTableHeaderTable.md)<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-header.ts#L23)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[theme](DTableRowOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L440)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[title](DTableRowOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L453)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[visible](DTableRowOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:425](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L425)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[weight](DTableRowOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### width

• `Optional` **width**: [`DCoordinateSize`](../index.md#dcoordinatesize)

One of the followings:
* A width
* A size keyword
* A size expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a width ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a width ([DScalar](DScalar.md))

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[width](DTableRowOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:407](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L407)

___

### x

• `Optional` **x**: [`DCoordinatePosition`](../index.md#dcoordinateposition)

One of the followings:
* A X position
* A position keyword
* A position expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a X position ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a X position ([DScalar](DScalar.md))

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[x](DTableRowOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:387](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L387)

___

### y

• `Optional` **y**: [`DCoordinatePosition`](../index.md#dcoordinateposition)

One of the followings:
* A Y position
* A position keyword
* A position expresion (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a Y position ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a Y position ([DScalar](DScalar.md))

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[y](DTableRowOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L397)
