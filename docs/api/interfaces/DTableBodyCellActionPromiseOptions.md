[Winter Cardinal UI - v0.227.0](../index.md) / DTableBodyCellActionPromiseOptions

# Interface: DTableBodyCellActionPromiseOptions<ROW, VALUE, THEME\>

[DButton](../classes/DButton.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellActionPromise`](DThemeTableBodyCellActionPromise.md)<`VALUE`\> = [`DThemeTableBodyCellActionPromise`](DThemeTableBodyCellActionPromise.md)<`VALUE`\> |

## Hierarchy

- [`DTableBodyCellSelectPromiseOptions`](DTableBodyCellSelectPromiseOptions.md)<`ROW`, `VALUE`, `THEME`\>

  ↳ **`DTableBodyCellActionPromiseOptions`**

## Table of contents

### Properties

- [background](DTableBodyCellActionPromiseOptions.md#background)
- [border](DTableBodyCellActionPromiseOptions.md#border)
- [children](DTableBodyCellActionPromiseOptions.md#children)
- [clear](DTableBodyCellActionPromiseOptions.md#clear)
- [corner](DTableBodyCellActionPromiseOptions.md#corner)
- [cursor](DTableBodyCellActionPromiseOptions.md#cursor)
- [group](DTableBodyCellActionPromiseOptions.md#group)
- [height](DTableBodyCellActionPromiseOptions.md#height)
- [image](DTableBodyCellActionPromiseOptions.md#image)
- [interactive](DTableBodyCellActionPromiseOptions.md#interactive)
- [mask](DTableBodyCellActionPromiseOptions.md#mask)
- [name](DTableBodyCellActionPromiseOptions.md#name)
- [on](DTableBodyCellActionPromiseOptions.md#on)
- [outline](DTableBodyCellActionPromiseOptions.md#outline)
- [padding](DTableBodyCellActionPromiseOptions.md#padding)
- [parent](DTableBodyCellActionPromiseOptions.md#parent)
- [shadow](DTableBodyCellActionPromiseOptions.md#shadow)
- [shortcut](DTableBodyCellActionPromiseOptions.md#shortcut)
- [shortcuts](DTableBodyCellActionPromiseOptions.md#shortcuts)
- [state](DTableBodyCellActionPromiseOptions.md#state)
- [sync](DTableBodyCellActionPromiseOptions.md#sync)
- [text](DTableBodyCellActionPromiseOptions.md#text)
- [theme](DTableBodyCellActionPromiseOptions.md#theme)
- [title](DTableBodyCellActionPromiseOptions.md#title)
- [toggle](DTableBodyCellActionPromiseOptions.md#toggle)
- [visible](DTableBodyCellActionPromiseOptions.md#visible)
- [weight](DTableBodyCellActionPromiseOptions.md#weight)
- [when](DTableBodyCellActionPromiseOptions.md#when)
- [width](DTableBodyCellActionPromiseOptions.md#width)
- [x](DTableBodyCellActionPromiseOptions.md#x)
- [y](DTableBodyCellActionPromiseOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[background](DTableBodyCellSelectPromiseOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[border](DTableBodyCellSelectPromiseOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[children](DTableBodyCellSelectPromiseOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L374)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[clear](DTableBodyCellSelectPromiseOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[corner](DTableBodyCellSelectPromiseOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:437](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L437)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[cursor](DTableBodyCellSelectPromiseOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:477](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L477)

___

### group

• `Optional` **group**: [`DButtonGroup`](../classes/DButtonGroup.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, [`DButtonGroupOptions`](DButtonGroupOptions.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, `any`\>\>

A button group.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[group](DTableBodyCellSelectPromiseOptions.md#group)

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

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[height](DTableBodyCellSelectPromiseOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[image](DTableBodyCellSelectPromiseOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[interactive](DTableBodyCellSelectPromiseOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[mask](DTableBodyCellSelectPromiseOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[name](DTableBodyCellSelectPromiseOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L377)

___

### on

• `Optional` **on**: [`DButtonOnOptions`](DButtonOnOptions.md)<``null`` \| `VALUE`, `any`\>

Mappings of event names and handlers.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[on](DTableBodyCellSelectPromiseOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button.ts#L34)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[outline](DTableBodyCellSelectPromiseOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[padding](DTableBodyCellSelectPromiseOptions.md#padding)

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

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[parent](DTableBodyCellSelectPromiseOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L371)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[shadow](DTableBodyCellSelectPromiseOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[shortcut](DTableBodyCellSelectPromiseOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:456](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L456)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[shortcuts](DTableBodyCellSelectPromiseOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[state](DTableBodyCellSelectPromiseOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L428)

___

### sync

• `Optional` **sync**: `boolean`

False to stop synchronizing the resolved value and the text.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[sync](DTableBodyCellSelectPromiseOptions.md#sync)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-promise.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-promise.ts#L20)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<``null`` \| `VALUE`\>

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[text](DTableBodyCellSelectPromiseOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[theme](DTableBodyCellSelectPromiseOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L440)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[title](DTableBodyCellSelectPromiseOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L453)

___

### toggle

• `Optional` **toggle**: `boolean`

True to turn a toggle mode on.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[toggle](DTableBodyCellSelectPromiseOptions.md#toggle)

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

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[visible](DTableBodyCellSelectPromiseOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:425](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L425)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[weight](DTableBodyCellSelectPromiseOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen-1)

An option when to activate a button.

#### Inherited from

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[when](DTableBodyCellSelectPromiseOptions.md#when)

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

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[width](DTableBodyCellSelectPromiseOptions.md#width)

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

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[x](DTableBodyCellSelectPromiseOptions.md#x)

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

[DTableBodyCellSelectPromiseOptions](DTableBodyCellSelectPromiseOptions.md).[y](DTableBodyCellSelectPromiseOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L397)
