[Winter Cardinal UI - v0.227.0](../index.md) / DTableBodyCellActionDialogOptions

# Interface: DTableBodyCellActionDialogOptions<ROW, VALUE, THEME\>

[DButton](../classes/DButton.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellActionDialog`](DThemeTableBodyCellActionDialog.md)<`VALUE`\> = [`DThemeTableBodyCellActionDialog`](DThemeTableBodyCellActionDialog.md)<`VALUE`\> |

## Hierarchy

- [`DTableBodyCellSelectDialogOptions`](DTableBodyCellSelectDialogOptions.md)<`ROW`, `VALUE`, `THEME`\>

  ↳ **`DTableBodyCellActionDialogOptions`**

## Table of contents

### Properties

- [background](DTableBodyCellActionDialogOptions.md#background)
- [border](DTableBodyCellActionDialogOptions.md#border)
- [children](DTableBodyCellActionDialogOptions.md#children)
- [clear](DTableBodyCellActionDialogOptions.md#clear)
- [corner](DTableBodyCellActionDialogOptions.md#corner)
- [cursor](DTableBodyCellActionDialogOptions.md#cursor)
- [group](DTableBodyCellActionDialogOptions.md#group)
- [height](DTableBodyCellActionDialogOptions.md#height)
- [image](DTableBodyCellActionDialogOptions.md#image)
- [interactive](DTableBodyCellActionDialogOptions.md#interactive)
- [mask](DTableBodyCellActionDialogOptions.md#mask)
- [name](DTableBodyCellActionDialogOptions.md#name)
- [on](DTableBodyCellActionDialogOptions.md#on)
- [outline](DTableBodyCellActionDialogOptions.md#outline)
- [padding](DTableBodyCellActionDialogOptions.md#padding)
- [parent](DTableBodyCellActionDialogOptions.md#parent)
- [shadow](DTableBodyCellActionDialogOptions.md#shadow)
- [shortcut](DTableBodyCellActionDialogOptions.md#shortcut)
- [shortcuts](DTableBodyCellActionDialogOptions.md#shortcuts)
- [state](DTableBodyCellActionDialogOptions.md#state)
- [sync](DTableBodyCellActionDialogOptions.md#sync)
- [text](DTableBodyCellActionDialogOptions.md#text)
- [theme](DTableBodyCellActionDialogOptions.md#theme)
- [title](DTableBodyCellActionDialogOptions.md#title)
- [toggle](DTableBodyCellActionDialogOptions.md#toggle)
- [visible](DTableBodyCellActionDialogOptions.md#visible)
- [weight](DTableBodyCellActionDialogOptions.md#weight)
- [when](DTableBodyCellActionDialogOptions.md#when)
- [width](DTableBodyCellActionDialogOptions.md#width)
- [x](DTableBodyCellActionDialogOptions.md#x)
- [y](DTableBodyCellActionDialogOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[background](DTableBodyCellSelectDialogOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[border](DTableBodyCellSelectDialogOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[children](DTableBodyCellSelectDialogOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L374)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[clear](DTableBodyCellSelectDialogOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[corner](DTableBodyCellSelectDialogOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:437](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L437)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[cursor](DTableBodyCellSelectDialogOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:477](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L477)

___

### group

• `Optional` **group**: [`DButtonGroup`](../classes/DButtonGroup.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, [`DButtonGroupOptions`](DButtonGroupOptions.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, `any`\>\>

A button group.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[group](DTableBodyCellSelectDialogOptions.md#group)

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

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[height](DTableBodyCellSelectDialogOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[image](DTableBodyCellSelectDialogOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[interactive](DTableBodyCellSelectDialogOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[mask](DTableBodyCellSelectDialogOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[name](DTableBodyCellSelectDialogOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L377)

___

### on

• `Optional` **on**: [`DButtonOnOptions`](DButtonOnOptions.md)<``null`` \| `VALUE`, `any`\>

Mappings of event names and handlers.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[on](DTableBodyCellSelectDialogOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-button.ts#L34)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[outline](DTableBodyCellSelectDialogOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[padding](DTableBodyCellSelectDialogOptions.md#padding)

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

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[parent](DTableBodyCellSelectDialogOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L371)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[shadow](DTableBodyCellSelectDialogOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[shortcut](DTableBodyCellSelectDialogOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:456](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L456)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[shortcuts](DTableBodyCellSelectDialogOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[state](DTableBodyCellSelectDialogOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L428)

___

### sync

• `Optional` **sync**: `boolean`

False to stop synchronization of the selected value and the text.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[sync](DTableBodyCellSelectDialogOptions.md#sync)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-select-dialog.ts#L20)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<``null`` \| `VALUE`\>

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[text](DTableBodyCellSelectDialogOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[theme](DTableBodyCellSelectDialogOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L440)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[title](DTableBodyCellSelectDialogOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L453)

___

### toggle

• `Optional` **toggle**: `boolean`

True to turn a toggle mode on.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[toggle](DTableBodyCellSelectDialogOptions.md#toggle)

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

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[visible](DTableBodyCellSelectDialogOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:425](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L425)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[weight](DTableBodyCellSelectDialogOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen-1)

An option when to activate a button.

#### Inherited from

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[when](DTableBodyCellSelectDialogOptions.md#when)

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

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[width](DTableBodyCellSelectDialogOptions.md#width)

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

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[x](DTableBodyCellSelectDialogOptions.md#x)

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

[DTableBodyCellSelectDialogOptions](DTableBodyCellSelectDialogOptions.md).[y](DTableBodyCellSelectDialogOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L397)
