[Winter Cardinal UI - v0.227.0](../index.md) / DTableBodyCellSelectPromiseOptions

# Interface: DTableBodyCellSelectPromiseOptions<ROW, VALUE, THEME\>

[DButton](../classes/DButton.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellSelectPromise`](DThemeTableBodyCellSelectPromise.md)<`VALUE`\> = [`DThemeTableBodyCellSelectPromise`](DThemeTableBodyCellSelectPromise.md)<`VALUE`\> |

## Hierarchy

- [`DButtonOptions`](DButtonOptions.md)<`VALUE` \| ``null``, `THEME`\>

  ↳ **`DTableBodyCellSelectPromiseOptions`**

  ↳↳ [`DTableBodyCellActionPromiseOptions`](DTableBodyCellActionPromiseOptions.md)

## Table of contents

### Properties

- [background](DTableBodyCellSelectPromiseOptions.md#background)
- [border](DTableBodyCellSelectPromiseOptions.md#border)
- [children](DTableBodyCellSelectPromiseOptions.md#children)
- [clear](DTableBodyCellSelectPromiseOptions.md#clear)
- [corner](DTableBodyCellSelectPromiseOptions.md#corner)
- [cursor](DTableBodyCellSelectPromiseOptions.md#cursor)
- [group](DTableBodyCellSelectPromiseOptions.md#group)
- [height](DTableBodyCellSelectPromiseOptions.md#height)
- [image](DTableBodyCellSelectPromiseOptions.md#image)
- [interactive](DTableBodyCellSelectPromiseOptions.md#interactive)
- [mask](DTableBodyCellSelectPromiseOptions.md#mask)
- [name](DTableBodyCellSelectPromiseOptions.md#name)
- [on](DTableBodyCellSelectPromiseOptions.md#on)
- [outline](DTableBodyCellSelectPromiseOptions.md#outline)
- [padding](DTableBodyCellSelectPromiseOptions.md#padding)
- [parent](DTableBodyCellSelectPromiseOptions.md#parent)
- [shadow](DTableBodyCellSelectPromiseOptions.md#shadow)
- [shortcut](DTableBodyCellSelectPromiseOptions.md#shortcut)
- [shortcuts](DTableBodyCellSelectPromiseOptions.md#shortcuts)
- [state](DTableBodyCellSelectPromiseOptions.md#state)
- [sync](DTableBodyCellSelectPromiseOptions.md#sync)
- [text](DTableBodyCellSelectPromiseOptions.md#text)
- [theme](DTableBodyCellSelectPromiseOptions.md#theme)
- [title](DTableBodyCellSelectPromiseOptions.md#title)
- [toggle](DTableBodyCellSelectPromiseOptions.md#toggle)
- [visible](DTableBodyCellSelectPromiseOptions.md#visible)
- [weight](DTableBodyCellSelectPromiseOptions.md#weight)
- [when](DTableBodyCellSelectPromiseOptions.md#when)
- [width](DTableBodyCellSelectPromiseOptions.md#width)
- [x](DTableBodyCellSelectPromiseOptions.md#x)
- [y](DTableBodyCellSelectPromiseOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[background](DButtonOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[border](DButtonOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[children](DButtonOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L374)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DButtonOptions](DButtonOptions.md).[clear](DButtonOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[corner](DButtonOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:437](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L437)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[cursor](DButtonOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:477](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L477)

___

### group

• `Optional` **group**: [`DButtonGroup`](../classes/DButtonGroup.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, [`DButtonGroupOptions`](DButtonGroupOptions.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, `any`\>\>

A button group.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[group](DButtonOptions.md#group)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L58)

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

[DButtonOptions](DButtonOptions.md).[height](DButtonOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DButtonOptions](DButtonOptions.md).[image](DButtonOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[interactive](DButtonOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DButtonOptions](DButtonOptions.md).[mask](DButtonOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[name](DButtonOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L377)

___

### on

• `Optional` **on**: [`DButtonOnOptions`](DButtonOnOptions.md)<``null`` \| `VALUE`, `any`\>

Mappings of event names and handlers.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[on](DButtonOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button.ts#L34)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[outline](DButtonOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[padding](DButtonOptions.md#padding)

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

[DButtonOptions](DButtonOptions.md).[parent](DButtonOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L371)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[shadow](DButtonOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[shortcut](DButtonOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:456](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L456)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[shortcuts](DButtonOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[state](DButtonOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L428)

___

### sync

• `Optional` **sync**: `boolean`

False to stop synchronizing the resolved value and the text.

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-promise.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-promise.ts#L20)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<``null`` \| `VALUE`\>

#### Inherited from

[DButtonOptions](DButtonOptions.md).[text](DButtonOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[theme](DButtonOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L440)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[title](DButtonOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L453)

___

### toggle

• `Optional` **toggle**: `boolean`

True to turn a toggle mode on.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[toggle](DButtonOptions.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L53)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[visible](DButtonOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:425](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L425)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DButtonOptions](DButtonOptions.md).[weight](DButtonOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen-1)

An option when to activate a button.

#### Inherited from

[DButtonOptions](DButtonOptions.md).[when](DButtonOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L63)

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

[DButtonOptions](DButtonOptions.md).[width](DButtonOptions.md#width)

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

[DButtonOptions](DButtonOptions.md).[x](DButtonOptions.md#x)

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

[DButtonOptions](DButtonOptions.md).[y](DButtonOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L397)
