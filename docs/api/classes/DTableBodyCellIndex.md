[Winter Cardinal UI - v0.227.0](../index.md) / DTableBodyCellIndex

# Class: DTableBodyCellIndex<ROW, VALUE, THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellIndex`](../interfaces/DThemeTableBodyCellIndex.md)<`VALUE`\> = [`DThemeTableBodyCellIndex`](../interfaces/DThemeTableBodyCellIndex.md)<`VALUE`\> |
| `OPTIONS` | extends [`DTableBodyCellIndexOptions`](../interfaces/DTableBodyCellIndexOptions.md)<`ROW`, `VALUE`, `THEME`\> = [`DTableBodyCellIndexOptions`](../interfaces/DTableBodyCellIndexOptions.md)<`ROW`, `VALUE`, `THEME`\> |

## Hierarchy

- [`DImageBase`](DImageBase.md)<`number`, `THEME`, `OPTIONS`\>

  ↳ **`DTableBodyCellIndex`**

## Implements

- [`DTableBodyCell`](../interfaces/DTableBodyCell.md)<`ROW`, `VALUE`\>

## Table of contents

### Constructors

- [constructor](DTableBodyCellIndex.md#constructor)

### Properties

- [\_accessibleActive](DTableBodyCellIndex.md#_accessibleactive)
- [\_accessibleDiv](DTableBodyCellIndex.md#_accessiblediv)
- [\_auto](DTableBodyCellIndex.md#_auto)
- [\_background](DTableBodyCellIndex.md#_background)
- [\_border](DTableBodyCellIndex.md#_border)
- [\_bounds](DTableBodyCellIndex.md#_bounds)
- [\_clearType](DTableBodyCellIndex.md#_cleartype)
- [\_column](DTableBodyCellIndex.md#_column)
- [\_columnIndex](DTableBodyCellIndex.md#_columnindex)
- [\_corner](DTableBodyCellIndex.md#_corner)
- [\_cursor](DTableBodyCellIndex.md#_cursor)
- [\_destroyed](DTableBodyCellIndex.md#_destroyed)
- [\_images](DTableBodyCellIndex.md#_images)
- [\_isOverflowMaskEnabled](DTableBodyCellIndex.md#_isoverflowmaskenabled)
- [\_isTextVisible](DTableBodyCellIndex.md#_istextvisible)
- [\_lastDownPoint](DTableBodyCellIndex.md#_lastdownpoint)
- [\_lastSortedIndex](DTableBodyCellIndex.md#_lastsortedindex)
- [\_mask](DTableBodyCellIndex.md#_mask)
- [\_onChange](DTableBodyCellIndex.md#_onchange)
- [\_options](DTableBodyCellIndex.md#_options)
- [\_outline](DTableBodyCellIndex.md#_outline)
- [\_overflowMask](DTableBodyCellIndex.md#_overflowmask)
- [\_padding](DTableBodyCellIndex.md#_padding)
- [\_reflowable](DTableBodyCellIndex.md#_reflowable)
- [\_row](DTableBodyCellIndex.md#_row)
- [\_rowIndex](DTableBodyCellIndex.md#_rowindex)
- [\_shortcuts](DTableBodyCellIndex.md#_shortcuts)
- [\_snippet](DTableBodyCellIndex.md#_snippet)
- [\_tempDisplayObjectParent](DTableBodyCellIndex.md#_tempdisplayobjectparent)
- [\_text](DTableBodyCellIndex.md#_text)
- [\_textAlign](DTableBodyCellIndex.md#_textalign)
- [\_textAlpha](DTableBodyCellIndex.md#_textalpha)
- [\_textColor](DTableBodyCellIndex.md#_textcolor)
- [\_textFormatter](DTableBodyCellIndex.md#_textformatter)
- [\_textStyle](DTableBodyCellIndex.md#_textstyle)
- [\_textValue](DTableBodyCellIndex.md#_textvalue)
- [\_textValueComputed](DTableBodyCellIndex.md#_textvaluecomputed)
- [\_title](DTableBodyCellIndex.md#_title)
- [\_zIndex](DTableBodyCellIndex.md#_zindex)
- [accessible](DTableBodyCellIndex.md#accessible)
- [accessibleChildren](DTableBodyCellIndex.md#accessiblechildren)
- [accessibleHint](DTableBodyCellIndex.md#accessiblehint)
- [accessiblePointerEvents](DTableBodyCellIndex.md#accessiblepointerevents)
- [accessibleTitle](DTableBodyCellIndex.md#accessibletitle)
- [accessibleType](DTableBodyCellIndex.md#accessibletype)
- [alpha](DTableBodyCellIndex.md#alpha)
- [angle](DTableBodyCellIndex.md#angle)
- [buttonMode](DTableBodyCellIndex.md#buttonmode)
- [cacheAsBitmap](DTableBodyCellIndex.md#cacheasbitmap)
- [children](DTableBodyCellIndex.md#children)
- [cursor](DTableBodyCellIndex.md#cursor)
- [filterArea](DTableBodyCellIndex.md#filterarea)
- [filters](DTableBodyCellIndex.md#filters)
- [hitArea](DTableBodyCellIndex.md#hitarea)
- [interactive](DTableBodyCellIndex.md#interactive)
- [interactiveChildren](DTableBodyCellIndex.md#interactivechildren)
- [isMask](DTableBodyCellIndex.md#ismask)
- [isSprite](DTableBodyCellIndex.md#issprite)
- [localTransform](DTableBodyCellIndex.md#localtransform)
- [mask](DTableBodyCellIndex.md#mask)
- [name](DTableBodyCellIndex.md#name)
- [parent](DTableBodyCellIndex.md#parent)
- [pivot](DTableBodyCellIndex.md#pivot)
- [renderable](DTableBodyCellIndex.md#renderable)
- [rotation](DTableBodyCellIndex.md#rotation)
- [sortDirty](DTableBodyCellIndex.md#sortdirty)
- [sortableChildren](DTableBodyCellIndex.md#sortablechildren)
- [transform](DTableBodyCellIndex.md#transform)
- [visible](DTableBodyCellIndex.md#visible)
- [worldAlpha](DTableBodyCellIndex.md#worldalpha)
- [worldTransform](DTableBodyCellIndex.md#worldtransform)
- [worldVisible](DTableBodyCellIndex.md#worldvisible)
- [zIndex](DTableBodyCellIndex.md#zindex)
- [LAYOUTER](DTableBodyCellIndex.md#layouter)
- [WORK\_CONTAINS\_POINT](DTableBodyCellIndex.md#work_contains_point)

### Accessors

- [background](DTableBodyCellIndex.md#background)
- [border](DTableBodyCellIndex.md#border)
- [column](DTableBodyCellIndex.md#column)
- [columnIndex](DTableBodyCellIndex.md#columnindex)
- [corner](DTableBodyCellIndex.md#corner)
- [height](DTableBodyCellIndex.md#height)
- [image](DTableBodyCellIndex.md#image)
- [options](DTableBodyCellIndex.md#options)
- [outline](DTableBodyCellIndex.md#outline)
- [padding](DTableBodyCellIndex.md#padding)
- [position](DTableBodyCellIndex.md#position)
- [reflowable](DTableBodyCellIndex.md#reflowable)
- [row](DTableBodyCellIndex.md#row)
- [rowIndex](DTableBodyCellIndex.md#rowindex)
- [scale](DTableBodyCellIndex.md#scale)
- [shadow](DTableBodyCellIndex.md#shadow)
- [skew](DTableBodyCellIndex.md#skew)
- [snippet](DTableBodyCellIndex.md#snippet)
- [state](DTableBodyCellIndex.md#state)
- [text](DTableBodyCellIndex.md#text)
- [theme](DTableBodyCellIndex.md#theme)
- [title](DTableBodyCellIndex.md#title)
- [type](DTableBodyCellIndex.md#type)
- [unsafe](DTableBodyCellIndex.md#unsafe)
- [weight](DTableBodyCellIndex.md#weight)
- [width](DTableBodyCellIndex.md#width)
- [x](DTableBodyCellIndex.md#x)
- [y](DTableBodyCellIndex.md#y)

### Methods

- [\_calculateBounds](DTableBodyCellIndex.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DTableBodyCellIndex.md#_recursivepostupdatetransform)
- [\_render](DTableBodyCellIndex.md#_render)
- [addChild](DTableBodyCellIndex.md#addchild)
- [addChildAt](DTableBodyCellIndex.md#addchildat)
- [addListener](DTableBodyCellIndex.md#addlistener)
- [applyTitle](DTableBodyCellIndex.md#applytitle)
- [blur](DTableBodyCellIndex.md#blur)
- [calculateBounds](DTableBodyCellIndex.md#calculatebounds)
- [computeTextValue](DTableBodyCellIndex.md#computetextvalue)
- [containsGlobalPoint](DTableBodyCellIndex.md#containsglobalpoint)
- [containsLocalPoint](DTableBodyCellIndex.md#containslocalpoint)
- [containsPoint](DTableBodyCellIndex.md#containspoint)
- [createOrUpdateText](DTableBodyCellIndex.md#createorupdatetext)
- [createText](DTableBodyCellIndex.md#createtext)
- [destroy](DTableBodyCellIndex.md#destroy)
- [displayObjectUpdateTransform](DTableBodyCellIndex.md#displayobjectupdatetransform)
- [emit](DTableBodyCellIndex.md#emit)
- [eventNames](DTableBodyCellIndex.md#eventnames)
- [focus](DTableBodyCellIndex.md#focus)
- [focusOnClosest](DTableBodyCellIndex.md#focusonclosest)
- [getBounds](DTableBodyCellIndex.md#getbounds)
- [getChildAt](DTableBodyCellIndex.md#getchildat)
- [getChildByName](DTableBodyCellIndex.md#getchildbyname)
- [getChildIndex](DTableBodyCellIndex.md#getchildindex)
- [getClearType](DTableBodyCellIndex.md#getcleartype)
- [getClippingRect](DTableBodyCellIndex.md#getclippingrect)
- [getGlobalPosition](DTableBodyCellIndex.md#getglobalposition)
- [getHeight](DTableBodyCellIndex.md#getheight)
- [getLocalBounds](DTableBodyCellIndex.md#getlocalbounds)
- [getOverflowMask](DTableBodyCellIndex.md#getoverflowmask)
- [getParentOfSize](DTableBodyCellIndex.md#getparentofsize)
- [getTextAlpha](DTableBodyCellIndex.md#gettextalpha)
- [getTextColor](DTableBodyCellIndex.md#gettextcolor)
- [getThemeDefault](DTableBodyCellIndex.md#getthemedefault)
- [getType](DTableBodyCellIndex.md#gettype)
- [getWidth](DTableBodyCellIndex.md#getwidth)
- [getX](DTableBodyCellIndex.md#getx)
- [getY](DTableBodyCellIndex.md#gety)
- [hasDirty](DTableBodyCellIndex.md#hasdirty)
- [hasRefitableHeight](DTableBodyCellIndex.md#hasrefitableheight)
- [hasRefitableWidth](DTableBodyCellIndex.md#hasrefitablewidth)
- [hide](DTableBodyCellIndex.md#hide)
- [hideText](DTableBodyCellIndex.md#hidetext)
- [init](DTableBodyCellIndex.md#init)
- [initReflowable](DTableBodyCellIndex.md#initreflowable)
- [isDirty](DTableBodyCellIndex.md#isdirty)
- [isEventTarget](DTableBodyCellIndex.md#iseventtarget)
- [isHidden](DTableBodyCellIndex.md#ishidden)
- [isHierarchyDirty](DTableBodyCellIndex.md#ishierarchydirty)
- [isRefitable](DTableBodyCellIndex.md#isrefitable)
- [isShown](DTableBodyCellIndex.md#isshown)
- [listenerCount](DTableBodyCellIndex.md#listenercount)
- [listeners](DTableBodyCellIndex.md#listeners)
- [newImage](DTableBodyCellIndex.md#newimage)
- [newImages](DTableBodyCellIndex.md#newimages)
- [off](DTableBodyCellIndex.md#off)
- [on](DTableBodyCellIndex.md#on)
- [onBlur](DTableBodyCellIndex.md#onblur)
- [onChildBlur](DTableBodyCellIndex.md#onchildblur)
- [onChildFocus](DTableBodyCellIndex.md#onchildfocus)
- [onChildrenChange](DTableBodyCellIndex.md#onchildrenchange)
- [onDblClick](DTableBodyCellIndex.md#ondblclick)
- [onDown](DTableBodyCellIndex.md#ondown)
- [onDownThis](DTableBodyCellIndex.md#ondownthis)
- [onFocus](DTableBodyCellIndex.md#onfocus)
- [onHierarchyDirty](DTableBodyCellIndex.md#onhierarchydirty)
- [onKeyDown](DTableBodyCellIndex.md#onkeydown)
- [onKeyUp](DTableBodyCellIndex.md#onkeyup)
- [onMove](DTableBodyCellIndex.md#onmove)
- [onOut](DTableBodyCellIndex.md#onout)
- [onOver](DTableBodyCellIndex.md#onover)
- [onParentMove](DTableBodyCellIndex.md#onparentmove)
- [onParentResize](DTableBodyCellIndex.md#onparentresize)
- [onRefit](DTableBodyCellIndex.md#onrefit)
- [onReflow](DTableBodyCellIndex.md#onreflow)
- [onResize](DTableBodyCellIndex.md#onresize)
- [onScale](DTableBodyCellIndex.md#onscale)
- [onShortcut](DTableBodyCellIndex.md#onshortcut)
- [onSkew](DTableBodyCellIndex.md#onskew)
- [onStateChange](DTableBodyCellIndex.md#onstatechange)
- [onTextChange](DTableBodyCellIndex.md#ontextchange)
- [onUp](DTableBodyCellIndex.md#onup)
- [onUpThis](DTableBodyCellIndex.md#onupthis)
- [onWheel](DTableBodyCellIndex.md#onwheel)
- [once](DTableBodyCellIndex.md#once)
- [reflow](DTableBodyCellIndex.md#reflow)
- [removeAllListeners](DTableBodyCellIndex.md#removealllisteners)
- [removeChild](DTableBodyCellIndex.md#removechild)
- [removeChildAt](DTableBodyCellIndex.md#removechildat)
- [removeChildren](DTableBodyCellIndex.md#removechildren)
- [removeListener](DTableBodyCellIndex.md#removelistener)
- [render](DTableBodyCellIndex.md#render)
- [renderAdvanced](DTableBodyCellIndex.md#renderadvanced)
- [resize](DTableBodyCellIndex.md#resize)
- [set](DTableBodyCellIndex.md#set)
- [setChildIndex](DTableBodyCellIndex.md#setchildindex)
- [setFocused](DTableBodyCellIndex.md#setfocused)
- [setHeight](DTableBodyCellIndex.md#setheight)
- [setParent](DTableBodyCellIndex.md#setparent)
- [setTransform](DTableBodyCellIndex.md#settransform)
- [setWidth](DTableBodyCellIndex.md#setwidth)
- [setX](DTableBodyCellIndex.md#setx)
- [setY](DTableBodyCellIndex.md#sety)
- [show](DTableBodyCellIndex.md#show)
- [showText](DTableBodyCellIndex.md#showtext)
- [sortChildren](DTableBodyCellIndex.md#sortchildren)
- [swapChildren](DTableBodyCellIndex.md#swapchildren)
- [toCursor](DTableBodyCellIndex.md#tocursor)
- [toDirty](DTableBodyCellIndex.md#todirty)
- [toGlobal](DTableBodyCellIndex.md#toglobal)
- [toHasDirty](DTableBodyCellIndex.md#tohasdirty)
- [toHierarchyDirty](DTableBodyCellIndex.md#tohierarchydirty)
- [toImageOptions](DTableBodyCellIndex.md#toimageoptions)
- [toLocal](DTableBodyCellIndex.md#tolocal)
- [toParentHasDirty](DTableBodyCellIndex.md#toparenthasdirty)
- [toParentHierarchyDirty](DTableBodyCellIndex.md#toparenthierarchydirty)
- [toParentResized](DTableBodyCellIndex.md#toparentresized)
- [unset](DTableBodyCellIndex.md#unset)
- [updateText](DTableBodyCellIndex.md#updatetext)
- [updateTextAndImage](DTableBodyCellIndex.md#updatetextandimage)
- [updateTextColor](DTableBodyCellIndex.md#updatetextcolor)
- [updateTextPosition](DTableBodyCellIndex.md#updatetextposition)
- [updateTextValue](DTableBodyCellIndex.md#updatetextvalue)
- [updateTransform](DTableBodyCellIndex.md#updatetransform)
- [mixin](DTableBodyCellIndex.md#mixin)

## Constructors

### constructor

• **new DTableBodyCellIndex**<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>(`columnIndex`, `column`, `onChange`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellIndex`](../interfaces/DThemeTableBodyCellIndex.md)<`VALUE`, `THEME`\> = [`DThemeTableBodyCellIndex`](../interfaces/DThemeTableBodyCellIndex.md)<`VALUE`\> |
| `OPTIONS` | extends [`DTableBodyCellIndexOptions`](../interfaces/DTableBodyCellIndexOptions.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\> = [`DTableBodyCellIndexOptions`](../interfaces/DTableBodyCellIndexOptions.md)<`ROW`, `VALUE`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `VALUE`, `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`VALUE`\>\> |
| `onChange` | [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)<`ROW`, `unknown`, `any`\> |
| `options?` | `OPTIONS` |

#### Overrides

[DImageBase](DImageBase.md).[constructor](DImageBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts#L38)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_accessibleActive](../interfaces/DTableBodyCell.md#_accessibleactive)

#### Inherited from

[DImageBase](DImageBase.md).[_accessibleActive](DImageBase.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_accessibleDiv](../interfaces/DTableBodyCell.md#_accessiblediv)

#### Inherited from

[DImageBase](DImageBase.md).[_accessibleDiv](DImageBase.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_auto](../interfaces/DTableBodyCell.md#_auto)

#### Inherited from

[DImageBase](DImageBase.md).[_auto](DImageBase.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_background](../interfaces/DTableBodyCell.md#_background)

#### Inherited from

[DImageBase](DImageBase.md).[_background](DImageBase.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:754](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L754)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_border](../interfaces/DTableBodyCell.md#_border)

#### Inherited from

[DImageBase](DImageBase.md).[_border](DImageBase.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:755](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L755)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_bounds](../interfaces/DTableBodyCell.md#_bounds)

#### Inherited from

[DImageBase](DImageBase.md).[_bounds](DImageBase.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_clearType](../interfaces/DTableBodyCell.md#_cleartype)

#### Inherited from

[DImageBase](DImageBase.md).[_clearType](DImageBase.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:757](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L757)

___

### \_column

• `Protected` **\_column**: [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `VALUE`, `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`VALUE`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts#L35)

___

### \_columnIndex

• `Protected` **\_columnIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts#L34)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_corner](../interfaces/DTableBodyCell.md#_corner)

#### Inherited from

[DImageBase](DImageBase.md).[_corner](DImageBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_cursor](../interfaces/DTableBodyCell.md#_cursor)

#### Inherited from

[DImageBase](DImageBase.md).[_cursor](DImageBase.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:762](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L762)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_destroyed](../interfaces/DTableBodyCell.md#_destroyed)

#### Inherited from

[DImageBase](DImageBase.md).[_destroyed](DImageBase.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_images

• `Protected` **\_images**: [`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DImageBase](DImageBase.md).[_images](DImageBase.md#_images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L95)

___

### \_isOverflowMaskEnabled

• `Protected` **\_isOverflowMaskEnabled**: `boolean`

#### Inherited from

[DImageBase](DImageBase.md).[_isOverflowMaskEnabled](DImageBase.md#_isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L168)

___

### \_isTextVisible

• `Protected` **\_isTextVisible**: `boolean`

#### Inherited from

[DImageBase](DImageBase.md).[_isTextVisible](DImageBase.md#_istextvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L170)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_lastDownPoint](../interfaces/DTableBodyCell.md#_lastdownpoint)

#### Inherited from

[DImageBase](DImageBase.md).[_lastDownPoint](DImageBase.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:761](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L761)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_lastSortedIndex](../interfaces/DTableBodyCell.md#_lastsortedindex)

#### Inherited from

[DImageBase](DImageBase.md).[_lastSortedIndex](DImageBase.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_mask](../interfaces/DTableBodyCell.md#_mask)

#### Inherited from

[DImageBase](DImageBase.md).[_mask](DImageBase.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_onChange

• `Protected` **\_onChange**: [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)<`ROW`, `VALUE`, `any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts#L36)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_options](../interfaces/DTableBodyCell.md#_options)

#### Inherited from

[DImageBase](DImageBase.md).[_options](DImageBase.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:737](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L737)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_outline](../interfaces/DTableBodyCell.md#_outline)

#### Inherited from

[DImageBase](DImageBase.md).[_outline](DImageBase.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:756](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L756)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DImageBase](DImageBase.md).[_overflowMask](DImageBase.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L169)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_padding](../interfaces/DTableBodyCell.md#_padding)

#### Inherited from

[DImageBase](DImageBase.md).[_padding](DImageBase.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_reflowable](../interfaces/DTableBodyCell.md#_reflowable)

#### Inherited from

[DImageBase](DImageBase.md).[_reflowable](DImageBase.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L760)

___

### \_row

• `Protected` `Optional` **\_row**: `ROW`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts#L32)

___

### \_rowIndex

• `Protected` **\_rowIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts#L33)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_shortcuts](../interfaces/DTableBodyCell.md#_shortcuts)

#### Inherited from

[DImageBase](DImageBase.md).[_shortcuts](DImageBase.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:758](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L758)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_snippet](../interfaces/DTableBodyCell.md#_snippet)

#### Inherited from

[DImageBase](DImageBase.md).[_snippet](DImageBase.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L759)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_tempDisplayObjectParent](../interfaces/DTableBodyCell.md#_tempdisplayobjectparent)

#### Inherited from

[DImageBase](DImageBase.md).[_tempDisplayObjectParent](DImageBase.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_text

• `Protected` `Optional` **\_text**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Inherited from

[DImageBase](DImageBase.md).[_text](DImageBase.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L160)

___

### \_textAlign

• `Protected` **\_textAlign**: [`DTextBaseAlign`](../interfaces/DTextBaseAlign.md)

#### Inherited from

[DImageBase](DImageBase.md).[_textAlign](DImageBase.md#_textalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L166)

___

### \_textAlpha

• `Protected` **\_textAlpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DImageBase](DImageBase.md).[_textAlpha](DImageBase.md#_textalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L164)

___

### \_textColor

• `Protected` **\_textColor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DImageBase](DImageBase.md).[_textColor](DImageBase.md#_textcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L163)

___

### \_textFormatter

• `Protected` **\_textFormatter**: (`value`: `number`, `caller`: `any`) => `string`

#### Type declaration

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[DImageBase](DImageBase.md).[_textFormatter](DImageBase.md#_textformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L167)

___

### \_textStyle

• `Protected` **\_textStyle**: [`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)

#### Inherited from

[DImageBase](DImageBase.md).[_textStyle](DImageBase.md#_textstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L165)

___

### \_textValue

• `Protected` `Optional` **\_textValue**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DImageBase](DImageBase.md).[_textValue](DImageBase.md#_textvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L161)

___

### \_textValueComputed

• `Protected` `Optional` **\_textValueComputed**: `number`

#### Inherited from

[DImageBase](DImageBase.md).[_textValueComputed](DImageBase.md#_textvaluecomputed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L162)

___

### \_title

• `Protected` **\_title**: `string`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_title](../interfaces/DTableBodyCell.md#_title)

#### Inherited from

[DImageBase](DImageBase.md).[_title](DImageBase.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:753](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L753)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_zIndex](../interfaces/DTableBodyCell.md#_zindex)

#### Inherited from

[DImageBase](DImageBase.md).[_zIndex](DImageBase.md#_zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8583

___

### accessible

• **accessible**: `boolean`

Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessible](../interfaces/DTableBodyCell.md#accessible)

#### Inherited from

[DImageBase](DImageBase.md).[accessible](DImageBase.md#accessible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8468

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

true

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessibleChildren](../interfaces/DTableBodyCell.md#accessiblechildren)

#### Inherited from

[DImageBase](DImageBase.md).[accessibleChildren](DImageBase.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessibleHint](../interfaces/DTableBodyCell.md#accessiblehint)

#### Inherited from

[DImageBase](DImageBase.md).[accessibleHint](DImageBase.md#accessiblehint)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8483

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

'auto'

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessiblePointerEvents](../interfaces/DTableBodyCell.md#accessiblepointerevents)

#### Inherited from

[DImageBase](DImageBase.md).[accessiblePointerEvents](DImageBase.md#accessiblepointerevents)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8513

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessibleTitle](../interfaces/DTableBodyCell.md#accessibletitle)

#### Inherited from

[DImageBase](DImageBase.md).[accessibleTitle](DImageBase.md#accessibletitle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8476

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

'button'

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[accessibleType](../interfaces/DTableBodyCell.md#accessibletype)

#### Inherited from

[DImageBase](DImageBase.md).[accessibleType](DImageBase.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[alpha](../interfaces/DTableBodyCell.md#alpha)

#### Inherited from

[DImageBase](DImageBase.md).[alpha](DImageBase.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[angle](../interfaces/DTableBodyCell.md#angle)

#### Inherited from

[DImageBase](DImageBase.md).[angle](DImageBase.md#angle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8771

___

### buttonMode

• **buttonMode**: `boolean`

If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
Setting this changes the 'cursor' property to `'pointer'`.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.buttonMode = true;
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[buttonMode](../interfaces/DTableBodyCell.md#buttonmode)

#### Inherited from

[DImageBase](DImageBase.md).[buttonMode](DImageBase.md#buttonmode)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8853

___

### cacheAsBitmap

• **cacheAsBitmap**: `boolean`

Set this to true if you want this display object to be cached as a bitmap.
This basically takes a snap shot of the display object as it is at that moment. It can
provide a performance benefit for complex static displayObjects.
To remove simply set this property to `false`

IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[cacheAsBitmap](../interfaces/DTableBodyCell.md#cacheasbitmap)

#### Inherited from

[DImageBase](DImageBase.md).[cacheAsBitmap](DImageBase.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[children](../interfaces/DTableBodyCell.md#children)

#### Inherited from

[DImageBase](DImageBase.md).[children](DImageBase.md#children)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8277

___

### cursor

• **cursor**: `string`

This defines what cursor mode is used when the mouse cursor
is hovered over the displayObject.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.cursor = 'wait';
```

**`See`**

https://developer.mozilla.org/en/docs/Web/CSS/cursor

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[cursor](../interfaces/DTableBodyCell.md#cursor)

#### Inherited from

[DImageBase](DImageBase.md).[cursor](DImageBase.md#cursor)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8867

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`Member`**

PIXI.DisplayObject#filterArea

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[filterArea](../interfaces/DTableBodyCell.md#filterarea)

#### Inherited from

[DImageBase](DImageBase.md).[filterArea](DImageBase.md#filterarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8592

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`Member`**

PIXI.DisplayObject#filters

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[filters](../interfaces/DTableBodyCell.md#filters)

#### Inherited from

[DImageBase](DImageBase.md).[filters](DImageBase.md#filters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8600

___

### hitArea

• **hitArea**: `IHitArea`

Interaction shape. Children will be hit first, then this shape will be checked.
Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hitArea](../interfaces/DTableBodyCell.md#hitarea)

#### Inherited from

[DImageBase](DImageBase.md).[hitArea](DImageBase.md#hitarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8841

___

### interactive

• **interactive**: `boolean`

Enable interaction events for the DisplayObject. Touch, pointer and mouse
events will not be emitted unless `interactive` is set to `true`.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.on('tap', (event) => {
   //handle event
});
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[interactive](../interfaces/DTableBodyCell.md#interactive)

#### Inherited from

[DImageBase](DImageBase.md).[interactive](DImageBase.md#interactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8829

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`Member`**

**`Memberof`**

PIXI.Container#

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[interactiveChildren](../interfaces/DTableBodyCell.md#interactivechildren)

#### Inherited from

[DImageBase](DImageBase.md).[interactiveChildren](DImageBase.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isMask](../interfaces/DTableBodyCell.md#ismask)

#### Inherited from

[DImageBase](DImageBase.md).[isMask](DImageBase.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isSprite](../interfaces/DTableBodyCell.md#issprite)

#### Inherited from

[DImageBase](DImageBase.md).[isSprite](DImageBase.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[localTransform](../interfaces/DTableBodyCell.md#localtransform)

#### Inherited from

[DImageBase](DImageBase.md).[localTransform](DImageBase.md#localtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8729

___

### mask

• **mask**: `Container` \| `MaskData`

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it. In PixiJS a regular mask must be a
PIXI.Graphics or a PIXI.Sprite object. This allows for much faster masking in canvas as it
utilities shape clipping. To remove a mask, set this property to `null`.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

**`Example`**

```ts
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFF3300);
graphics.drawRect(50, 250, 100, 100);
graphics.endFill();

const sprite = new PIXI.Sprite(texture);
sprite.mask = graphics;
```

**`Todo`**

At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[mask](../interfaces/DTableBodyCell.md#mask)

#### Inherited from

[DImageBase](DImageBase.md).[mask](DImageBase.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`Memberof`**

PIXI.DisplayObject#

**`Member`**

name

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[name](../interfaces/DTableBodyCell.md#name)

#### Inherited from

[DImageBase](DImageBase.md).[name](DImageBase.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[parent](../interfaces/DTableBodyCell.md#parent)

#### Inherited from

[DImageBase](DImageBase.md).[parent](DImageBase.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[pivot](../interfaces/DTableBodyCell.md#pivot)

#### Inherited from

[DImageBase](DImageBase.md).[pivot](DImageBase.md#pivot)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8750

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`Member`**

PIXI.DisplayObject#renderable

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[renderable](../interfaces/DTableBodyCell.md#renderable)

#### Inherited from

[DImageBase](DImageBase.md).[renderable](DImageBase.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[rotation](../interfaces/DTableBodyCell.md#rotation)

#### Inherited from

[DImageBase](DImageBase.md).[rotation](DImageBase.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`Member`**

PIXI.Container#sortDirty

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[sortDirty](../interfaces/DTableBodyCell.md#sortdirty)

#### Inherited from

[DImageBase](DImageBase.md).[sortDirty](DImageBase.md#sortdirty)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8300

___

### sortableChildren

• **sortableChildren**: `boolean`

If set to true, the container will sort its children by zIndex value
when updateTransform() is called, or manually if sortChildren() is called.

This actually changes the order of elements in the array, so should be treated
as a basic solution that is not performant compared to other solutions,
such as

**`Link`**

https://github.com/pixijs/pixi-display

Also be aware of that this may not work nicely with the addChildAt() function,
as the zIndex sorting may cause the child to automatically sorted to another position.

**`See`**

PIXI.settings.SORTABLE_CHILDREN

**`Member`**

PIXI.Container#sortableChildren

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[sortableChildren](../interfaces/DTableBodyCell.md#sortablechildren)

#### Inherited from

[DImageBase](DImageBase.md).[sortableChildren](DImageBase.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`Member`**

PIXI.DisplayObject#transform

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[transform](../interfaces/DTableBodyCell.md#transform)

#### Inherited from

[DImageBase](DImageBase.md).[transform](DImageBase.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8529

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`Member`**

PIXI.DisplayObject#visible

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[visible](../interfaces/DTableBodyCell.md#visible)

#### Inherited from

[DImageBase](DImageBase.md).[visible](DImageBase.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[worldAlpha](../interfaces/DTableBodyCell.md#worldalpha)

#### Inherited from

[DImageBase](DImageBase.md).[worldAlpha](DImageBase.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[worldTransform](../interfaces/DTableBodyCell.md#worldtransform)

#### Inherited from

[DImageBase](DImageBase.md).[worldTransform](DImageBase.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[worldVisible](../interfaces/DTableBodyCell.md#worldvisible)

#### Inherited from

[DImageBase](DImageBase.md).[worldVisible](DImageBase.md#worldvisible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8787

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`Member`**

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[zIndex](../interfaces/DTableBodyCell.md#zindex)

#### Inherited from

[DImageBase](DImageBase.md).[zIndex](DImageBase.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### LAYOUTER

▪ `Static` `Protected` `Optional` **LAYOUTER**: [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DImageBase](DImageBase.md).[LAYOUTER](DImageBase.md#layouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L94)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DImageBase](DImageBase.md).[WORK_CONTAINS_POINT](DImageBase.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:733](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L733)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Implementation of

DTableBodyCell.background

#### Inherited from

DImageBase.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1369](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1369)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Implementation of

DTableBodyCell.border

#### Inherited from

DImageBase.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1373)

___

### column

• `get` **column**(): [`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `VALUE`, `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`VALUE`\>\>

A column.

#### Returns

[`DTableColumn`](../interfaces/DTableColumn.md)<`ROW`, `VALUE`, `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)<`VALUE`\>\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[column](../interfaces/DTableBodyCell.md#column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts#L64)

___

### columnIndex

• `get` **columnIndex**(): `number`

A column index.

#### Returns

`number`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[columnIndex](../interfaces/DTableBodyCell.md#columnindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts#L60)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Implementation of

DTableBodyCell.corner

#### Inherited from

DImageBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1365](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1365)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.height

#### Inherited from

DImageBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1288)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Implementation of

DTableBodyCell.height

#### Inherited from

DImageBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1292)

___

### image

• `get` **image**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\>

#### Inherited from

DImageBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L125)

• `set` **image**(`imageSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageSource` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `DisplayObject` \| `Texture`\> |

#### Returns

`void`

#### Inherited from

DImageBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L129)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Implementation of

DTableBodyCell.options

#### Inherited from

DImageBase.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Implementation of

DTableBodyCell.outline

#### Inherited from

DImageBase.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1377)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Implementation of

DTableBodyCell.padding

#### Inherited from

DImageBase.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1361)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.position

#### Inherited from

DImageBase.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Implementation of

DTableBodyCell.reflowable

#### Inherited from

DImageBase.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1026](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1026)

___

### row

• `get` **row**(): `undefined` \| `ROW`

A row data if exists.
Otherwise, Undefined.

#### Returns

`undefined` \| `ROW`

a row data or undefined.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[row](../interfaces/DTableBodyCell.md#row)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts#L52)

___

### rowIndex

• `get` **rowIndex**(): `number`

A row index if a row data exists.
Otherise, -1.

#### Returns

`number`

a row index or -1.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[rowIndex](../interfaces/DTableBodyCell.md#rowindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts#L56)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.scale

#### Inherited from

DImageBase.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

DTableBodyCell.shadow

#### Inherited from

DImageBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1701](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1701)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Implementation of

DTableBodyCell.shadow

#### Inherited from

DImageBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Implementation of

DTableBodyCell.skew

#### Inherited from

DImageBase.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1357)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Implementation of

DTableBodyCell.snippet

#### Inherited from

DImageBase.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1022](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1022)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Implementation of

DTableBodyCell.state

#### Inherited from

DImageBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### text

• `get` **text**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Inherited from

DImageBase.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L197)

• `set` **text**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\> |

#### Returns

`void`

#### Inherited from

DImageBase.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L190)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Implementation of

DTableBodyCell.theme

#### Inherited from

DImageBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1592)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Implementation of

DTableBodyCell.theme

#### Inherited from

DImageBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1596)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Implementation of

DTableBodyCell.title

#### Inherited from

DImageBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1385](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1385)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Implementation of

DTableBodyCell.title

#### Inherited from

DImageBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1389](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1389)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Implementation of

DTableBodyCell.type

#### Inherited from

DImageBase.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1144)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Implementation of

DTableBodyCell.unsafe

#### Inherited from

DImageBase.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1381)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.weight

#### Inherited from

DImageBase.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1047](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1047)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.width

#### Inherited from

DImageBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1229)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Implementation of

DTableBodyCell.width

#### Inherited from

DImageBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1233)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.x

#### Inherited from

DImageBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1149)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Implementation of

DTableBodyCell.x

#### Inherited from

DImageBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Implementation of

DTableBodyCell.y

#### Inherited from

DImageBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1189)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Implementation of

DTableBodyCell.y

#### Inherited from

DImageBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1193)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_calculateBounds](../interfaces/DTableBodyCell.md#_calculatebounds)

#### Inherited from

[DImageBase](DImageBase.md).[_calculateBounds](DImageBase.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1928](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1928)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_recursivePostUpdateTransform](../interfaces/DTableBodyCell.md#_recursivepostupdatetransform)

#### Inherited from

[DImageBase](DImageBase.md).[_recursivePostUpdateTransform](DImageBase.md#_recursivepostupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8641

___

### \_render

▸ `Protected` **_render**(`renderer`): `void`

To be overridden by the subclasses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[_render](../interfaces/DTableBodyCell.md#_render)

#### Inherited from

[DImageBase](DImageBase.md).[_render](DImageBase.md#_render)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8413

___

### addChild

▸ **addChild**<`TChildren`\>(...`child`): `TChildren`[``0``]

Adds one or more children to the container.

Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...child` | `TChildren` | The DisplayObject(s) to add to the container |

#### Returns

`TChildren`[``0``]

The first child that was added.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[addChild](../interfaces/DTableBodyCell.md#addchild)

#### Inherited from

[DImageBase](DImageBase.md).[addChild](DImageBase.md#addchild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8315

___

### addChildAt

▸ **addChildAt**<`T`\>(`child`, `index`): `T`

Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DisplayObject`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `T` | The child to add |
| `index` | `number` | The index to place the child in |

#### Returns

`T`

The child that was added.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[addChildAt](../interfaces/DTableBodyCell.md#addchildat)

#### Inherited from

[DImageBase](DImageBase.md).[addChildAt](DImageBase.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[addListener](../interfaces/DTableBodyCell.md#addlistener)

#### Inherited from

[DImageBase](DImageBase.md).[addListener](DImageBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[addListener](../interfaces/DTableBodyCell.md#addlistener)

#### Inherited from

[DImageBase](DImageBase.md).[addListener](DImageBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[applyTitle](../interfaces/DTableBodyCell.md#applytitle)

#### Inherited from

[DImageBase](DImageBase.md).[applyTitle](DImageBase.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L383)

___

### blur

▸ **blur**(`recursively?`): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[blur](../interfaces/DTableBodyCell.md#blur)

#### Inherited from

[DImageBase](DImageBase.md).[blur](DImageBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1504)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[calculateBounds](../interfaces/DTableBodyCell.md#calculatebounds)

#### Inherited from

[DImageBase](DImageBase.md).[calculateBounds](DImageBase.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### computeTextValue

▸ `Protected` **computeTextValue**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Inherited from

[DImageBase](DImageBase.md).[computeTextValue](DImageBase.md#computetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:205](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L205)

___

### containsGlobalPoint

▸ `Protected` **containsGlobalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[containsGlobalPoint](../interfaces/DTableBodyCell.md#containsglobalpoint)

#### Inherited from

[DImageBase](DImageBase.md).[containsGlobalPoint](DImageBase.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1953](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1953)

___

### containsLocalPoint

▸ `Protected` **containsLocalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[containsLocalPoint](../interfaces/DTableBodyCell.md#containslocalpoint)

#### Inherited from

[DImageBase](DImageBase.md).[containsLocalPoint](DImageBase.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1957](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1957)

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[containsPoint](../interfaces/DTableBodyCell.md#containspoint)

#### Inherited from

[DImageBase](DImageBase.md).[containsPoint](DImageBase.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1944](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1944)

___

### createOrUpdateText

▸ `Protected` **createOrUpdateText**(): `void`

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[createOrUpdateText](DImageBase.md#createorupdatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L220)

___

### createText

▸ `Protected` **createText**(`formatted`): [`DDynamicText`](DDynamicText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `formatted` | `string` |

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Inherited from

[DImageBase](DImageBase.md).[createText](DImageBase.md#createtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L247)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[destroy](../interfaces/DTableBodyCell.md#destroy)

#### Inherited from

[DImageBase](DImageBase.md).[destroy](DImageBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L195)

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

**`Memberof`**

PIXI.DisplayObject#

**`Function`**

displayObjectUpdateTransform

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[displayObjectUpdateTransform](../interfaces/DTableBodyCell.md#displayobjectupdatetransform)

#### Inherited from

[DImageBase](DImageBase.md).[displayObjectUpdateTransform](DImageBase.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8815

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `...args` | `any`[] | Arguments that are passed to registered listeners |

#### Returns

`boolean`

`true` if the event had listeners, else `false`.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[emit](../interfaces/DTableBodyCell.md#emit)

#### Inherited from

[DImageBase](DImageBase.md).[emit](DImageBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[eventNames](../interfaces/DTableBodyCell.md#eventnames)

#### Inherited from

[DImageBase](DImageBase.md).[eventNames](DImageBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[focus](../interfaces/DTableBodyCell.md#focus)

#### Inherited from

[DImageBase](DImageBase.md).[focus](DImageBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[focusOnClosest](../interfaces/DTableBodyCell.md#focusonclosest)

#### Inherited from

[DImageBase](DImageBase.md).[focusOnClosest](DImageBase.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1868)

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `rect?`): `Rectangle`

Retrieves the bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skipUpdate?` | `boolean` | Setting to `true` will stop the transforms of the scene graph from  being updated. This means the calculation returned MAY be out of date BUT will give you a  nice performance boost. |
| `rect?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getBounds](../interfaces/DTableBodyCell.md#getbounds)

#### Inherited from

[DImageBase](DImageBase.md).[getBounds](DImageBase.md#getbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8651

___

### getChildAt

▸ **getChildAt**(`index`): `DisplayObject`

Returns the child at the specified index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to get the child at |

#### Returns

`DisplayObject`

The child at the given index, if any.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getChildAt](../interfaces/DTableBodyCell.md#getchildat)

#### Inherited from

[DImageBase](DImageBase.md).[getChildAt](DImageBase.md#getchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8351

___

### getChildByName

▸ **getChildByName**(`name`): `DisplayObject`

Returns the display object in the container.

**`Method`**

getChildByName

**`Memberof`**

PIXI.Container#

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Instance name. |

#### Returns

`DisplayObject`

The child with the specified name.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getChildByName](../interfaces/DTableBodyCell.md#getchildbyname)

#### Inherited from

[DImageBase](DImageBase.md).[getChildByName](DImageBase.md#getchildbyname)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8460

___

### getChildIndex

▸ **getChildIndex**(`child`): `number`

Returns the index position of a child DisplayObject instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | The DisplayObject instance to identify |

#### Returns

`number`

The index position of the child display object to identify

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getChildIndex](../interfaces/DTableBodyCell.md#getchildindex)

#### Inherited from

[DImageBase](DImageBase.md).[getChildIndex](DImageBase.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getClearType](../interfaces/DTableBodyCell.md#getcleartype)

#### Inherited from

[DImageBase](DImageBase.md).[getClearType](DImageBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1113)

___

### getClippingRect

▸ **getClippingRect**(`target`, `result`): `void`

Returns a clipping rect.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `unknown` | - |
| `result` | `Rectangle` | a clipping rect |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getClippingRect](../interfaces/DTableBodyCell.md#getclippingrect)

#### Inherited from

[DImageBase](DImageBase.md).[getClippingRect](DImageBase.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1970](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1970)

___

### getGlobalPosition

▸ **getGlobalPosition**(`point?`, `skipUpdate?`): `Point`

Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.

**`Method`**

getGlobalPosition

**`Memberof`**

PIXI.DisplayObject#

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point?` | `Point` | - |
| `skipUpdate?` | `boolean` | Setting to true will stop the transforms of the scene graph from  being updated. This means the calculation returned MAY be out of date BUT will give you a  nice performance boost. |

#### Returns

`Point`

The updated point.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getGlobalPosition](../interfaces/DTableBodyCell.md#getglobalposition)

#### Inherited from

[DImageBase](DImageBase.md).[getGlobalPosition](DImageBase.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getHeight](../interfaces/DTableBodyCell.md#getheight)

#### Inherited from

[DImageBase](DImageBase.md).[getHeight](DImageBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1296)

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`): `Rectangle`

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rect?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getLocalBounds](../interfaces/DTableBodyCell.md#getlocalbounds)

#### Inherited from

[DImageBase](DImageBase.md).[getLocalBounds](DImageBase.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DImageBase](DImageBase.md).[getOverflowMask](DImageBase.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L251)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getParentOfSize](../interfaces/DTableBodyCell.md#getparentofsize)

#### Inherited from

[DImageBase](DImageBase.md).[getParentOfSize](DImageBase.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1735](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1735)

___

### getTextAlpha

▸ `Protected` **getTextAlpha**(`theme`, `state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DImageBase](DImageBase.md).[getTextAlpha](DImageBase.md#gettextalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:318](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L318)

___

### getTextColor

▸ `Protected` **getTextColor**(`theme`, `state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Inherited from

[DImageBase](DImageBase.md).[getTextColor](DImageBase.md#gettextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:303](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L303)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getThemeDefault](../interfaces/DTableBodyCell.md#getthemedefault)

#### Inherited from

[DImageBase](DImageBase.md).[getThemeDefault](DImageBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getType](../interfaces/DTableBodyCell.md#gettype)

#### Overrides

[DImageBase](DImageBase.md).[getType](DImageBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts#L88)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getWidth](../interfaces/DTableBodyCell.md#getwidth)

#### Inherited from

[DImageBase](DImageBase.md).[getWidth](DImageBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1237)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getX](../interfaces/DTableBodyCell.md#getx)

#### Inherited from

[DImageBase](DImageBase.md).[getX](DImageBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1157)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[getY](../interfaces/DTableBodyCell.md#gety)

#### Inherited from

[DImageBase](DImageBase.md).[getY](DImageBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1197)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hasDirty](../interfaces/DTableBodyCell.md#hasdirty)

#### Inherited from

[DImageBase](DImageBase.md).[hasDirty](DImageBase.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1486)

___

### hasRefitableHeight

▸ `Protected` **hasRefitableHeight**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hasRefitableHeight](../interfaces/DTableBodyCell.md#hasrefitableheight)

#### Inherited from

[DImageBase](DImageBase.md).[hasRefitableHeight](DImageBase.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1685](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1685)

___

### hasRefitableWidth

▸ `Protected` **hasRefitableWidth**(`target`): target is DBase<any, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DBase<any, any\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hasRefitableWidth](../interfaces/DTableBodyCell.md#hasrefitablewidth)

#### Inherited from

[DImageBase](DImageBase.md).[hasRefitableWidth](DImageBase.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1691)

___

### hide

▸ **hide**(): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[hide](../interfaces/DTableBodyCell.md#hide)

#### Inherited from

[DImageBase](DImageBase.md).[hide](DImageBase.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

___

### hideText

▸ `Protected` **hideText**(): `void`

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[hideText](DImageBase.md#hidetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L366)

___

### init

▸ `Protected` **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[init](../interfaces/DTableBodyCell.md#init)

#### Inherited from

[DImageBase](DImageBase.md).[init](DImageBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L97)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[initReflowable](../interfaces/DTableBodyCell.md#initreflowable)

#### Inherited from

[DImageBase](DImageBase.md).[initReflowable](DImageBase.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1030](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1030)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isDirty](../interfaces/DTableBodyCell.md#isdirty)

#### Inherited from

[DImageBase](DImageBase.md).[isDirty](DImageBase.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1482](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1482)

___

### isEventTarget

▸ `Protected` **isEventTarget**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isEventTarget](../interfaces/DTableBodyCell.md#iseventtarget)

#### Inherited from

[DImageBase](DImageBase.md).[isEventTarget](DImageBase.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1813](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1813)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isHidden](../interfaces/DTableBodyCell.md#ishidden)

#### Inherited from

[DImageBase](DImageBase.md).[isHidden](DImageBase.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isHierarchyDirty](../interfaces/DTableBodyCell.md#ishierarchydirty)

#### Inherited from

[DImageBase](DImageBase.md).[isHierarchyDirty](DImageBase.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1474)

___

### isRefitable

▸ `Protected` **isRefitable**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isRefitable](../interfaces/DTableBodyCell.md#isrefitable)

#### Inherited from

[DImageBase](DImageBase.md).[isRefitable](DImageBase.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L176)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[isShown](../interfaces/DTableBodyCell.md#isshown)

#### Inherited from

[DImageBase](DImageBase.md).[isShown](DImageBase.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1414)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`number`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[listenerCount](../interfaces/DTableBodyCell.md#listenercount)

#### Inherited from

[DImageBase](DImageBase.md).[listenerCount](DImageBase.md#listenercount)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24013

___

### listeners

▸ **listeners**(`event`): `Function`[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`Function`[]

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[listeners](../interfaces/DTableBodyCell.md#listeners)

#### Inherited from

[DImageBase](DImageBase.md).[listeners](DImageBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newImage

▸ `Protected` **newImage**(`theme`, `options?`): [`DImagePiece`](DImagePiece.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeImagePiece`](../interfaces/DThemeImagePiece.md) |
| `options?` | [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md) |

#### Returns

[`DImagePiece`](DImagePiece.md)

#### Inherited from

[DImageBase](DImageBase.md).[newImage](DImageBase.md#newimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L121)

___

### newImages

▸ `Protected` **newImages**(`theme`, `options?`): [`DImagePiece`](DImagePiece.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`DImagePiece`](DImagePiece.md)[]

#### Inherited from

[DImageBase](DImageBase.md).[newImages](DImageBase.md#newimages)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L102)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[off](../interfaces/DTableBodyCell.md#off)

#### Inherited from

[DImageBase](DImageBase.md).[off](DImageBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[on](../interfaces/DTableBodyCell.md#on)

#### Inherited from

[DImageBase](DImageBase.md).[on](DImageBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[on](../interfaces/DTableBodyCell.md#on)

#### Inherited from

[DImageBase](DImageBase.md).[on](DImageBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onBlur](../interfaces/DTableBodyCell.md#onblur)

#### Inherited from

[DImageBase](DImageBase.md).[onBlur](DImageBase.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1577](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1577)

___

### onChildBlur

▸ `Protected` **onChildBlur**(`blured`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blured` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onChildBlur](../interfaces/DTableBodyCell.md#onchildblur)

#### Inherited from

[DImageBase](DImageBase.md).[onChildBlur](DImageBase.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1570](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1570)

___

### onChildFocus

▸ `Protected` **onChildFocus**(`focused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onChildFocus](../interfaces/DTableBodyCell.md#onchildfocus)

#### Inherited from

[DImageBase](DImageBase.md).[onChildFocus](DImageBase.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1556)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onChildrenChange](../interfaces/DTableBodyCell.md#onchildrenchange)

#### Inherited from

[DImageBase](DImageBase.md).[onChildrenChange](DImageBase.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1034](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1034)

___

### onDblClick

▸ `Protected` **onDblClick**(`e`, `interactionManager`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onDblClick](../interfaces/DTableBodyCell.md#ondblclick)

#### Inherited from

[DImageBase](DImageBase.md).[onDblClick](DImageBase.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1900](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1900)

___

### onDown

▸ `Protected` **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onDown](../interfaces/DTableBodyCell.md#ondown)

#### Inherited from

[DImageBase](DImageBase.md).[onDown](DImageBase.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1827](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1827)

___

### onDownThis

▸ `Protected` **onDownThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onDownThis](../interfaces/DTableBodyCell.md#ondownthis)

#### Inherited from

[DImageBase](DImageBase.md).[onDownThis](DImageBase.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1834](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1834)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onFocus](../interfaces/DTableBodyCell.md#onfocus)

#### Inherited from

[DImageBase](DImageBase.md).[onFocus](DImageBase.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1563)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onHierarchyDirty](../interfaces/DTableBodyCell.md#onhierarchydirty)

#### Inherited from

[DImageBase](DImageBase.md).[onHierarchyDirty](DImageBase.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1478](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1478)

___

### onKeyDown

▸ `Protected` **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onKeyDown](../interfaces/DTableBodyCell.md#onkeydown)

#### Inherited from

[DImageBase](DImageBase.md).[onKeyDown](DImageBase.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1802](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1802)

___

### onKeyUp

▸ `Protected` **onKeyUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onKeyUp](../interfaces/DTableBodyCell.md#onkeyup)

#### Inherited from

[DImageBase](DImageBase.md).[onKeyUp](DImageBase.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1807](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1807)

___

### onMove

▸ `Protected` **onMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onMove](../interfaces/DTableBodyCell.md#onmove)

#### Inherited from

[DImageBase](DImageBase.md).[onMove](DImageBase.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1051](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1051)

___

### onOut

▸ `Protected` **onOut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onOut](../interfaces/DTableBodyCell.md#onout)

#### Inherited from

[DImageBase](DImageBase.md).[onOut](DImageBase.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1891](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1891)

___

### onOver

▸ `Protected` **onOver**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onOver](../interfaces/DTableBodyCell.md#onover)

#### Inherited from

[DImageBase](DImageBase.md).[onOver](DImageBase.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1877](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1877)

___

### onParentMove

▸ `Protected` **onParentMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

Called when a parent moved.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newX` | `number` | a new parent's local x position |
| `newY` | `number` | a new parent's local y position |
| `oldX` | `number` | an old parent's local x position |
| `oldY` | `number` | an old parent's local y position |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onParentMove](../interfaces/DTableBodyCell.md#onparentmove)

#### Inherited from

[DImageBase](DImageBase.md).[onParentMove](DImageBase.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1791)

___

### onParentResize

▸ **onParentResize**(`parentWidth`, `parentHeight`, `parentPadding`): `void`

Called when a parent resized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentWidth` | `number` | a parent's local width |
| `parentHeight` | `number` | a parent's local height |
| `parentPadding` | [`DPadding`](../interfaces/DPadding.md) | - |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onParentResize](../interfaces/DTableBodyCell.md#onparentresize)

#### Inherited from

[DImageBase](DImageBase.md).[onParentResize](DImageBase.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1750)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onRefit](../interfaces/DTableBodyCell.md#onrefit)

#### Inherited from

[DImageBase](DImageBase.md).[onRefit](DImageBase.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1637](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1637)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onReflow](../interfaces/DTableBodyCell.md#onreflow)

#### Inherited from

[DImageBase](DImageBase.md).[onReflow](DImageBase.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L374)

___

### onResize

▸ **onResize**(`newWidth`, `newHeight`, `oldWidth`, `oldHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newWidth` | `number` |
| `newHeight` | `number` |
| `oldWidth` | `number` |
| `oldHeight` | `number` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onResize](../interfaces/DTableBodyCell.md#onresize)

#### Inherited from

[DImageBase](DImageBase.md).[onResize](DImageBase.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1117)

___

### onScale

▸ `Protected` **onScale**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onScale](../interfaces/DTableBodyCell.md#onscale)

#### Inherited from

[DImageBase](DImageBase.md).[onScale](DImageBase.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1134)

___

### onShortcut

▸ `Protected` **onShortcut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onShortcut](../interfaces/DTableBodyCell.md#onshortcut)

#### Inherited from

[DImageBase](DImageBase.md).[onShortcut](DImageBase.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1039](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1039)

___

### onSkew

▸ `Protected` **onSkew**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onSkew](../interfaces/DTableBodyCell.md#onskew)

#### Inherited from

[DImageBase](DImageBase.md).[onSkew](DImageBase.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1139)

___

### onStateChange

▸ `Protected` **onStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onStateChange](../interfaces/DTableBodyCell.md#onstatechange)

#### Inherited from

[DImageBase](DImageBase.md).[onStateChange](DImageBase.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L135)

___

### onTextChange

▸ `Protected` **onTextChange**(): `void`

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[onTextChange](DImageBase.md#ontextchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L201)

___

### onUp

▸ `Protected` **onUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onUp](../interfaces/DTableBodyCell.md#onup)

#### Inherited from

[DImageBase](DImageBase.md).[onUp](DImageBase.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1845](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1845)

___

### onUpThis

▸ `Protected` **onUpThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onUpThis](../interfaces/DTableBodyCell.md#onupthis)

#### Inherited from

[DImageBase](DImageBase.md).[onUpThis](DImageBase.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1852)

___

### onWheel

▸ `Protected` **onWheel**(`e`, `deltas`, `global`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `WheelEvent` |
| `deltas` | [`UtilWheelEventDeltas`](../interfaces/UtilWheelEventDeltas.md) |
| `global` | `Point` |

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[onWheel](../interfaces/DTableBodyCell.md#onwheel)

#### Inherited from

[DImageBase](DImageBase.md).[onWheel](DImageBase.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1796)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[once](../interfaces/DTableBodyCell.md#once)

#### Inherited from

[DImageBase](DImageBase.md).[once](DImageBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[once](../interfaces/DTableBodyCell.md#once)

#### Inherited from

[DImageBase](DImageBase.md).[once](DImageBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[reflow](../interfaces/DTableBodyCell.md#reflow)

#### Inherited from

[DImageBase](DImageBase.md).[reflow](DImageBase.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1610](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1610)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeAllListeners](../interfaces/DTableBodyCell.md#removealllisteners)

#### Inherited from

[DImageBase](DImageBase.md).[removeAllListeners](DImageBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeAllListeners](../interfaces/DTableBodyCell.md#removealllisteners)

#### Inherited from

[DImageBase](DImageBase.md).[removeAllListeners](DImageBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24099

___

### removeChild

▸ **removeChild**<`TChildren`\>(...`child`): `TChildren`[``0``]

Removes one or more children from the container.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...child` | `TChildren` | The DisplayObject(s) to remove |

#### Returns

`TChildren`[``0``]

The first child that was removed.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeChild](../interfaces/DTableBodyCell.md#removechild)

#### Inherited from

[DImageBase](DImageBase.md).[removeChild](DImageBase.md#removechild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8358

___

### removeChildAt

▸ **removeChildAt**(`index`): `DisplayObject`

Removes a child from the specified index position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to get the child from |

#### Returns

`DisplayObject`

The child that was removed.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeChildAt](../interfaces/DTableBodyCell.md#removechildat)

#### Inherited from

[DImageBase](DImageBase.md).[removeChildAt](DImageBase.md#removechildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8365

___

### removeChildren

▸ **removeChildren**(`beginIndex?`, `endIndex?`): `DisplayObject`[]

Removes all children from this container that are within the begin and end indexes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `beginIndex?` | `number` | The beginning position. |
| `endIndex?` | `number` | The ending position. Default value is size of the container. |

#### Returns

`DisplayObject`[]

List of removed children

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeChildren](../interfaces/DTableBodyCell.md#removechildren)

#### Inherited from

[DImageBase](DImageBase.md).[removeChildren](DImageBase.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeListener](../interfaces/DTableBodyCell.md#removelistener)

#### Inherited from

[DImageBase](DImageBase.md).[removeListener](DImageBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[removeListener](../interfaces/DTableBodyCell.md#removelistener)

#### Inherited from

[DImageBase](DImageBase.md).[removeListener](DImageBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24097

___

### render

▸ **render**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[render](../interfaces/DTableBodyCell.md#render)

#### Inherited from

[DImageBase](DImageBase.md).[render](DImageBase.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1909](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1909)

___

### renderAdvanced

▸ `Protected` **renderAdvanced**(`renderer`): `void`

Render the object using the WebGL renderer and advanced features.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[renderAdvanced](../interfaces/DTableBodyCell.md#renderadvanced)

#### Inherited from

[DImageBase](DImageBase.md).[renderAdvanced](DImageBase.md#renderadvanced)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8406

___

### resize

▸ **resize**(`width?`, `height?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[resize](../interfaces/DTableBodyCell.md#resize)

#### Inherited from

[DImageBase](DImageBase.md).[resize](DImageBase.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1063](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1063)

___

### set

▸ **set**(`value`, `row`, `supplimental`, `rowIndex`, `columnIndex`, `forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `row` | `ROW` |
| `supplimental` | `unknown` |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[set](../interfaces/DTableBodyCell.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts#L68)

___

### setChildIndex

▸ **setChildIndex**(`child`, `index`): `void`

Changes the position of an existing child in the display object container

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | The child DisplayObject instance for which you want to change the index number |
| `index` | `number` | The resulting index number for the child display object |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setChildIndex](../interfaces/DTableBodyCell.md#setchildindex)

#### Inherited from

[DImageBase](DImageBase.md).[setChildIndex](DImageBase.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setFocused](../interfaces/DTableBodyCell.md#setfocused)

#### Inherited from

[DImageBase](DImageBase.md).[setFocused](DImageBase.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1490)

___

### setHeight

▸ **setHeight**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setHeight](../interfaces/DTableBodyCell.md#setheight)

#### Inherited from

[DImageBase](DImageBase.md).[setHeight](DImageBase.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1300)

___

### setParent

▸ **setParent**(`container`): `Container`

Set the parent Container of this DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `Container` | The Container to add this DisplayObject to. |

#### Returns

`Container`

The Container that this DisplayObject was added to.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setParent](../interfaces/DTableBodyCell.md#setparent)

#### Inherited from

[DImageBase](DImageBase.md).[setParent](DImageBase.md#setparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8686

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): `DisplayObject`

Convenience function to set the position, scale, skew and pivot at once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The X position |
| `y?` | `number` | The Y position |
| `scaleX?` | `number` | The X scale value |
| `scaleY?` | `number` | The Y scale value |
| `rotation?` | `number` | The rotation |
| `skewX?` | `number` | The X skew value |
| `skewY?` | `number` | The Y skew value |
| `pivotX?` | `number` | The X pivot value |
| `pivotY?` | `number` | The Y pivot value |

#### Returns

`DisplayObject`

The DisplayObject instance

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setTransform](../interfaces/DTableBodyCell.md#settransform)

#### Inherited from

[DImageBase](DImageBase.md).[setTransform](DImageBase.md#settransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### setWidth

▸ **setWidth**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setWidth](../interfaces/DTableBodyCell.md#setwidth)

#### Inherited from

[DImageBase](DImageBase.md).[setWidth](DImageBase.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1241)

___

### setX

▸ **setX**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setX](../interfaces/DTableBodyCell.md#setx)

#### Inherited from

[DImageBase](DImageBase.md).[setX](DImageBase.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1166)

___

### setY

▸ **setY**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[setY](../interfaces/DTableBodyCell.md#sety)

#### Inherited from

[DImageBase](DImageBase.md).[setY](DImageBase.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1206)

___

### show

▸ **show**(): [`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Returns

[`DTableBodyCellIndex`](DTableBodyCellIndex.md)<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[show](../interfaces/DTableBodyCell.md#show)

#### Inherited from

[DImageBase](DImageBase.md).[show](DImageBase.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1405](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1405)

___

### showText

▸ `Protected` **showText**(): `void`

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[showText](DImageBase.md#showtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:358](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L358)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[sortChildren](../interfaces/DTableBodyCell.md#sortchildren)

#### Inherited from

[DImageBase](DImageBase.md).[sortChildren](DImageBase.md#sortchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8377

___

### swapChildren

▸ **swapChildren**(`child`, `child2`): `void`

Swaps the position of 2 Display Objects within this container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | First display object to swap |
| `child2` | `DisplayObject` | Second display object to swap |

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[swapChildren](../interfaces/DTableBodyCell.md#swapchildren)

#### Inherited from

[DImageBase](DImageBase.md).[swapChildren](DImageBase.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toCursor

▸ `Protected` **toCursor**(`cursor`, `state`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\> |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`string`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toCursor](../interfaces/DTableBodyCell.md#tocursor)

#### Inherited from

[DImageBase](DImageBase.md).[toCursor](DImageBase.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1005](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1005)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toDirty](../interfaces/DTableBodyCell.md#todirty)

#### Inherited from

[DImageBase](DImageBase.md).[toDirty](DImageBase.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1432)

___

### toGlobal

▸ **toGlobal**(`position`, `point?`, `skipUpdate?`): `IPoint`

Calculates the global position of the display object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `point?` | `IPoint` | A Point object in which to store the value, optional  (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform. |

#### Returns

`IPoint`

A point object representing the position of this object.

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toGlobal](../interfaces/DTableBodyCell.md#toglobal)

#### Inherited from

[DImageBase](DImageBase.md).[toGlobal](DImageBase.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toHasDirty](../interfaces/DTableBodyCell.md#tohasdirty)

#### Inherited from

[DImageBase](DImageBase.md).[toHasDirty](DImageBase.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1441)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toHierarchyDirty](../interfaces/DTableBodyCell.md#tohierarchydirty)

#### Inherited from

[DImageBase](DImageBase.md).[toHierarchyDirty](DImageBase.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1457)

___

### toImageOptions

▸ `Protected` **toImageOptions**(`theme`, `options?`): `undefined` \| [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md) |

#### Returns

`undefined` \| [`DImagePieceOptions`](../interfaces/DImagePieceOptions.md)

#### Inherited from

[DImageBase](DImageBase.md).[toImageOptions](DImageBase.md#toimageoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L114)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `IPoint`

Calculates the local position of the display object relative to another point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `from?` | `DisplayObject` | The DisplayObject to calculate the global position from. |
| `point?` | `IPoint` | A Point object in which to store the value, optional  (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform |

#### Returns

`IPoint`

A point object representing the position of this object

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toLocal](../interfaces/DTableBodyCell.md#tolocal)

#### Inherited from

[DImageBase](DImageBase.md).[toLocal](DImageBase.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentHasDirty](../interfaces/DTableBodyCell.md#toparenthasdirty)

#### Inherited from

[DImageBase](DImageBase.md).[toParentHasDirty](DImageBase.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1450)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentHierarchyDirty](../interfaces/DTableBodyCell.md#toparenthierarchydirty)

#### Inherited from

[DImageBase](DImageBase.md).[toParentHierarchyDirty](DImageBase.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[toParentResized](../interfaces/DTableBodyCell.md#toparentresized)

#### Inherited from

[DImageBase](DImageBase.md).[toParentResized](DImageBase.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1728)

___

### unset

▸ **unset**(): `void`

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[unset](../interfaces/DTableBodyCell.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-table-body-cell-index.ts#L83)

___

### updateText

▸ `Protected` **updateText**(): `void`

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[updateText](DImageBase.md#updatetext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L144)

___

### updateTextAndImage

▸ `Protected` **updateTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[updateTextAndImage](DImageBase.md#updatetextandimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L149)

___

### updateTextColor

▸ `Protected` **updateTextColor**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DDynamicText`](DDynamicText.md) |

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[updateTextColor](DImageBase.md#updatetextcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L333)

___

### updateTextPosition

▸ `Protected` **updateTextPosition**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DDynamicText`](DDynamicText.md) |

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[updateTextPosition](DImageBase.md#updatetextposition)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L263)

___

### updateTextValue

▸ `Protected` **updateTextValue**(): `void`

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[updateTextValue](DImageBase.md#updatetextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:340](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L340)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Implementation of

[DTableBodyCell](../interfaces/DTableBodyCell.md).[updateTransform](../interfaces/DTableBodyCell.md#updatetransform)

#### Inherited from

[DImageBase](DImageBase.md).[updateTransform](DImageBase.md#updatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8381

___

### mixin

▸ `Static` **mixin**(`source`): `void`

Mixes all enumerable properties and methods from a source object to DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `any` | The source of properties and methods to mix in. |

#### Returns

`void`

#### Inherited from

[DImageBase](DImageBase.md).[mixin](DImageBase.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
