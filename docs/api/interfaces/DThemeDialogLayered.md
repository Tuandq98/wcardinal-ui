[Winter Cardinal UI - v0.227.0](../index.md) / DThemeDialogLayered

# Interface: DThemeDialogLayered

[DDialogLayered](../classes/DDialogLayered.md) theme.

## Hierarchy

- [`DThemeDialog`](DThemeDialog.md)

  ↳ **`DThemeDialogLayered`**

  ↳↳ [`DThemeDialogConfirm`](DThemeDialogConfirm.md)

  ↳↳ [`DThemeDialogFitted`](DThemeDialogFitted.md)

  ↳↳ [`DThemeDialogInput`](DThemeDialogInput.md)

  ↳↳ [`DThemeDialogSelect`](DThemeDialogSelect.md)

## Implemented by

- [`DThemeDarkDialogLayered`](../classes/DThemeDarkDialogLayered.md)
- [`DThemeWhiteDialogLayered`](../classes/DThemeWhiteDialogLayered.md)

## Table of contents

### Methods

- [closeOn](DThemeDialogLayered.md#closeon)
- [getAlign](DThemeDialogLayered.md#getalign)
- [getAlpha](DThemeDialogLayered.md#getalpha)
- [getBackgroundAlpha](DThemeDialogLayered.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDialogLayered.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDialogLayered.md#getbackgroundtexture)
- [getBorderAlign](DThemeDialogLayered.md#getborderalign)
- [getBorderAlpha](DThemeDialogLayered.md#getborderalpha)
- [getBorderColor](DThemeDialogLayered.md#getbordercolor)
- [getBorderMask](DThemeDialogLayered.md#getbordermask)
- [getBorderTexture](DThemeDialogLayered.md#getbordertexture)
- [getBorderWidth](DThemeDialogLayered.md#getborderwidth)
- [getClearType](DThemeDialogLayered.md#getcleartype)
- [getColor](DThemeDialogLayered.md#getcolor)
- [getContent](DThemeDialogLayered.md#getcontent)
- [getCornerMask](DThemeDialogLayered.md#getcornermask)
- [getCornerRadius](DThemeDialogLayered.md#getcornerradius)
- [getCursor](DThemeDialogLayered.md#getcursor)
- [getFontFamilly](DThemeDialogLayered.md#getfontfamilly)
- [getFontSize](DThemeDialogLayered.md#getfontsize)
- [getFontStyle](DThemeDialogLayered.md#getfontstyle)
- [getFontVariant](DThemeDialogLayered.md#getfontvariant)
- [getFontWeight](DThemeDialogLayered.md#getfontweight)
- [getFooter](DThemeDialogLayered.md#getfooter)
- [getGestureMode](DThemeDialogLayered.md#getgesturemode)
- [getHeader](DThemeDialogLayered.md#getheader)
- [getHeight](DThemeDialogLayered.md#getheight)
- [getInteractive](DThemeDialogLayered.md#getinteractive)
- [getLayout](DThemeDialogLayered.md#getlayout)
- [getLineHeight](DThemeDialogLayered.md#getlineheight)
- [getMode](DThemeDialogLayered.md#getmode)
- [getOffsetX](DThemeDialogLayered.md#getoffsetx)
- [getOffsetY](DThemeDialogLayered.md#getoffsety)
- [getOutlineAlign](DThemeDialogLayered.md#getoutlinealign)
- [getOutlineAlpha](DThemeDialogLayered.md#getoutlinealpha)
- [getOutlineColor](DThemeDialogLayered.md#getoutlinecolor)
- [getOutlineMask](DThemeDialogLayered.md#getoutlinemask)
- [getOutlineOffset](DThemeDialogLayered.md#getoutlineoffset)
- [getOutlineWidth](DThemeDialogLayered.md#getoutlinewidth)
- [getPaddingBottom](DThemeDialogLayered.md#getpaddingbottom)
- [getPaddingLeft](DThemeDialogLayered.md#getpaddingleft)
- [getPaddingRight](DThemeDialogLayered.md#getpaddingright)
- [getPaddingTop](DThemeDialogLayered.md#getpaddingtop)
- [getShadow](DThemeDialogLayered.md#getshadow)
- [getTitle](DThemeDialogLayered.md#gettitle)
- [getWeight](DThemeDialogLayered.md#getweight)
- [getWidth](DThemeDialogLayered.md#getwidth)
- [getX](DThemeDialogLayered.md#getx)
- [getY](DThemeDialogLayered.md#gety)
- [isGestureEnabled](DThemeDialogLayered.md#isgestureenabled)
- [isSticky](DThemeDialogLayered.md#issticky)
- [newAnimation](DThemeDialogLayered.md#newanimation)
- [newShadow](DThemeDialogLayered.md#newshadow)
- [newShadowWeak](DThemeDialogLayered.md#newshadowweak)
- [newState](DThemeDialogLayered.md#newstate)

## Methods

### closeOn

▸ **closeOn**(`mode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[closeOn](DThemeDialog.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L85)

___

### getAlign

▸ **getAlign**(`mode`): ``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

``null`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getAlign](DThemeDialog.md#getalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L91)

___

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getAlpha](DThemeDialog.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L34)

___

### getBackgroundAlpha

▸ **getBackgroundAlpha**(`state`): `number`

Returns a background alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getBackgroundAlpha](DThemeDialog.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:517](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L517)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getBackgroundColor](DThemeDialog.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:510](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L510)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getBackgroundTexture](DThemeDialog.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L522)

___

### getBorderAlign

▸ **getBorderAlign**(`state`): `number`

Returns a border align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getBorderAlign](DThemeDialog.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:551](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L551)

___

### getBorderAlpha

▸ **getBorderAlpha**(`state`): `number`

Returns a border alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getBorderAlpha](DThemeDialog.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L537)

___

### getBorderColor

▸ **getBorderColor**(`state`): ``null`` \| `number`

Returns a border color.
If the color is null, borders are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getBorderColor](DThemeDialog.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L530)

___

### getBorderMask

▸ **getBorderMask**(`state`): `number`

Returns a border mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a mask |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getBorderMask](DThemeDialog.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:558](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L558)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getBorderTexture](DThemeDialog.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L563)

___

### getBorderWidth

▸ **getBorderWidth**(`state`): `number`

Returns a border width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getBorderWidth](DThemeDialog.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L544)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getClearType](DThemeDialog.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:663](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L663)

___

### getColor

▸ **getColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getColor](DThemeDialog.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L33)

___

### getContent

▸ **getContent**(): `undefined` \| [`DDialogLayeredContentOptions`](DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](DThemeDialogLayeredContent.md)\>

#### Returns

`undefined` \| [`DDialogLayeredContentOptions`](DDialogLayeredContentOptions.md)<[`DThemeDialogLayeredContent`](DThemeDialogLayeredContent.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L83)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getCornerMask](DThemeDialog.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:593](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L593)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getCornerRadius](DThemeDialog.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L588)

___

### getCursor

▸ **getCursor**(`state`): `string`

Returns a cursor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getCursor](DThemeDialog.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:685](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L685)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getFontFamilly](DThemeDialog.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L28)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getFontSize](DThemeDialog.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L29)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getFontStyle](DThemeDialog.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L31)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getFontVariant](DThemeDialog.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L32)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getFontWeight](DThemeDialog.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L30)

___

### getFooter

▸ **getFooter**(): `undefined` \| ``null`` \| [`DDialogLayeredFooterOptions`](DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](DThemeDialogLayeredFooter.md)\>

#### Returns

`undefined` \| ``null`` \| [`DDialogLayeredFooterOptions`](DDialogLayeredFooterOptions.md)<[`DThemeDialogLayeredFooter`](DThemeDialogLayeredFooter.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L84)

___

### getGestureMode

▸ **getGestureMode**(`mode`): [`DDialogGestureMode`](../index.md#ddialoggesturemode-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

[`DDialogGestureMode`](../index.md#ddialoggesturemode-1)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getGestureMode](DThemeDialog.md#getgesturemode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L88)

___

### getHeader

▸ **getHeader**(): `undefined` \| ``null`` \| [`DDialogLayeredHeaderOptions`](DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](DThemeDialogLayeredHeader.md)\>

#### Returns

`undefined` \| ``null`` \| [`DDialogLayeredHeaderOptions`](DDialogLayeredHeaderOptions.md)<[`DThemeDialogLayeredHeader`](DThemeDialogLayeredHeader.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L82)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getHeight](DThemeDialog.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L497)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getInteractive](DThemeDialog.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:647](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L647)

___

### getLayout

▸ **getLayout**(): `undefined` \| [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](DThemeLayoutVertical.md)\>

#### Returns

`undefined` \| [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](DThemeLayoutVertical.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L81)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getLineHeight](DThemeDialog.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-font.ts#L35)

___

### getMode

▸ **getMode**(): [`DDialogMode`](../index.md#ddialogmode-1)

#### Returns

[`DDialogMode`](../index.md#ddialogmode-1)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getMode](DThemeDialog.md#getmode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L84)

___

### getOffsetX

▸ **getOffsetX**(`mode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getOffsetX](DThemeDialog.md#getoffsetx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L89)

___

### getOffsetY

▸ **getOffsetY**(`mode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getOffsetY](DThemeDialog.md#getoffsety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L90)

___

### getOutlineAlign

▸ **getOutlineAlign**(`state`): `number`

Returns an outline align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getOutlineAlign](DThemeDialog.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:629](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L629)

___

### getOutlineAlpha

▸ **getOutlineAlpha**(`state`): `number`

Returns an outline alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getOutlineAlpha](DThemeDialog.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L608)

___

### getOutlineColor

▸ **getOutlineColor**(`state`): ``null`` \| `number`

Returns an outline color.
If the color is null, outlines are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getOutlineColor](DThemeDialog.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L601)

___

### getOutlineMask

▸ **getOutlineMask**(`state`): `number`

Returns an outline mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getOutlineMask](DThemeDialog.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:636](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L636)

___

### getOutlineOffset

▸ **getOutlineOffset**(`state`): `number`

Returns an outline offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getOutlineOffset](DThemeDialog.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L622)

___

### getOutlineWidth

▸ **getOutlineWidth**(`state`): `number`

Returns an outline width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) | a state |

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getOutlineWidth](DThemeDialog.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L615)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getPaddingBottom](DThemeDialog.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:583](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L583)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getPaddingLeft](DThemeDialog.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:568](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L568)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getPaddingRight](DThemeDialog.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L573)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getPaddingTop](DThemeDialog.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:578](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L578)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getShadow](DThemeDialog.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:642](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L642)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getTitle](DThemeDialog.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L657)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](../classes/DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getWeight](DThemeDialog.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L670)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getWidth](DThemeDialog.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getX](DThemeDialog.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[getY](DThemeDialog.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:492](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L492)

___

### isGestureEnabled

▸ **isGestureEnabled**(`mode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

`boolean`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[isGestureEnabled](DThemeDialog.md#isgestureenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L87)

___

### isSticky

▸ **isSticky**(`mode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

`boolean`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[isSticky](DThemeDialog.md#issticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L86)

___

### newAnimation

▸ **newAnimation**(`mode`): ``null`` \| [`DAnimation`](DAnimation.md)<[`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogMode`](../index.md#ddialogmode-1) |

#### Returns

``null`` \| [`DAnimation`](DAnimation.md)<[`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Inherited from

[DThemeDialog](DThemeDialog.md).[newAnimation](DThemeDialog.md#newanimation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L92)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[newShadow](DThemeDialog.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:675](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L675)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](DShadow.md)

#### Inherited from

[DThemeDialog](DThemeDialog.md).[newShadowWeak](DThemeDialog.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:680](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L680)

___

### newState

▸ **newState**(`state`): `void`

Returns true if focusable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DThemeDialog](DThemeDialog.md).[newState](DThemeDialog.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:652](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L652)
