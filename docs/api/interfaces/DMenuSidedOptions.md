[Winter Cardinal UI - v0.227.0](../index.md) / DMenuSidedOptions

# Interface: DMenuSidedOptions<VALUE, THEME, CONTENT_OPTIONS\>

[DPane](../classes/DPane.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeMenuSided`](DThemeMenuSided.md) = [`DThemeMenuSided`](DThemeMenuSided.md) |
| `CONTENT_OPTIONS` | extends [`DBaseOptions`](DBaseOptions.md) = [`DMenuSidedContentOptions`](DMenuSidedContentOptions.md) |

## Hierarchy

- [`DPaneOptions`](DPaneOptions.md)<`THEME`, `CONTENT_OPTIONS`\>

  ↳ **`DMenuSidedOptions`**

## Table of contents

### Properties

- [background](DMenuSidedOptions.md#background)
- [border](DMenuSidedOptions.md#border)
- [children](DMenuSidedOptions.md#children)
- [clear](DMenuSidedOptions.md#clear)
- [content](DMenuSidedOptions.md#content)
- [corner](DMenuSidedOptions.md#corner)
- [cursor](DMenuSidedOptions.md#cursor)
- [gesture](DMenuSidedOptions.md#gesture)
- [height](DMenuSidedOptions.md#height)
- [interactive](DMenuSidedOptions.md#interactive)
- [items](DMenuSidedOptions.md#items)
- [mask](DMenuSidedOptions.md#mask)
- [name](DMenuSidedOptions.md#name)
- [on](DMenuSidedOptions.md#on)
- [outline](DMenuSidedOptions.md#outline)
- [padding](DMenuSidedOptions.md#padding)
- [parent](DMenuSidedOptions.md#parent)
- [scrollbar](DMenuSidedOptions.md#scrollbar)
- [selection](DMenuSidedOptions.md#selection)
- [shadow](DMenuSidedOptions.md#shadow)
- [shortcut](DMenuSidedOptions.md#shortcut)
- [shortcuts](DMenuSidedOptions.md#shortcuts)
- [state](DMenuSidedOptions.md#state)
- [sticky](DMenuSidedOptions.md#sticky)
- [theme](DMenuSidedOptions.md#theme)
- [title](DMenuSidedOptions.md#title)
- [visible](DMenuSidedOptions.md#visible)
- [weight](DMenuSidedOptions.md#weight)
- [width](DMenuSidedOptions.md#width)
- [x](DMenuSidedOptions.md#x)
- [y](DMenuSidedOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[background](DPaneOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[border](DPaneOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[children](DPaneOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L374)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DPaneOptions](DPaneOptions.md).[clear](DPaneOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### content

• `Optional` **content**: [`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\> \| `CONTENT_OPTIONS`

Content options or a content.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[content](DPaneOptions.md#content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pane.ts#L40)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[corner](DPaneOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:437](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L437)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[cursor](DPaneOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:477](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L477)

___

### gesture

• `Optional` **gesture**: [`DPaneGestureOptions`](DPaneGestureOptions.md)

Gesture options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[gesture](DPaneOptions.md#gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pane.ts#L50)

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

[DPaneOptions](DPaneOptions.md).[height](DPaneOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[interactive](DPaneOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### items

• `Optional` **items**: (`DisplayObject` \| [`DMenuItemOptionsUnion`](../index.md#dmenuitemoptionsunion)<`VALUE`\>)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-sided.ts#L21)

___

### mask

• `Optional` **mask**: `boolean`

True to enable an overflow mask.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[mask](DPaneOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pane.ts#L35)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[name](DPaneOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L377)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[on](DPaneOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[outline](DPaneOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[padding](DPaneOptions.md#padding)

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

[DPaneOptions](DPaneOptions.md).[parent](DPaneOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L371)

___

### scrollbar

• `Optional` **scrollbar**: [`DPaneScrollBarOptions`](DPaneScrollBarOptions.md)

Scroll bar options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[scrollbar](DPaneOptions.md#scrollbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-pane.ts#L45)

___

### selection

• `Optional` **selection**: [`DMenuSidedSelectionOptions`](DMenuSidedSelectionOptions.md)<`any`\> \| [`DMenuSidedSelection`](../classes/DMenuSidedSelection.md)<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-sided.ts#L23)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[shadow](DPaneOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[shortcut](DPaneOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:456](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L456)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[shortcuts](DPaneOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[state](DPaneOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L428)

___

### sticky

• `Optional` **sticky**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-sided.ts#L22)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[theme](DPaneOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L440)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[title](DPaneOptions.md#title)

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

[DPaneOptions](DPaneOptions.md).[visible](DPaneOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:425](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L425)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DPaneOptions](DPaneOptions.md).[weight](DPaneOptions.md#weight)

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

[DPaneOptions](DPaneOptions.md).[width](DPaneOptions.md#width)

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

[DPaneOptions](DPaneOptions.md).[x](DPaneOptions.md#x)

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

[DPaneOptions](DPaneOptions.md).[y](DPaneOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L397)
