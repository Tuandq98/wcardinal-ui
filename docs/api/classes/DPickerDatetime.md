[Winter Cardinal UI - v0.227.0](../index.md) / DPickerDatetime

# Class: DPickerDatetime<THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemePickerDatetime`](../interfaces/DThemePickerDatetime.md) = [`DThemePickerDatetime`](../interfaces/DThemePickerDatetime.md) |
| `OPTIONS` | extends [`DPickerDatetimeOptions`](../interfaces/DPickerDatetimeOptions.md)<`THEME`\> = [`DPickerDatetimeOptions`](../interfaces/DPickerDatetimeOptions.md)<`THEME`\> |

## Hierarchy

- [`DPickerTime`](DPickerTime.md)<`THEME`, `OPTIONS`\>

  ↳ **`DPickerDatetime`**

  ↳↳ [`DPickerDate`](DPickerDate.md)

## Table of contents

### Constructors

- [constructor](DPickerDatetime.md#constructor)

### Properties

- [\_accessibleActive](DPickerDatetime.md#_accessibleactive)
- [\_accessibleDiv](DPickerDatetime.md#_accessiblediv)
- [\_auto](DPickerDatetime.md#_auto)
- [\_background](DPickerDatetime.md#_background)
- [\_border](DPickerDatetime.md#_border)
- [\_bounds](DPickerDatetime.md#_bounds)
- [\_clearType](DPickerDatetime.md#_cleartype)
- [\_corner](DPickerDatetime.md#_corner)
- [\_cursor](DPickerDatetime.md#_cursor)
- [\_dateBounds](DPickerDatetime.md#_datebounds)
- [\_dateButtons](DPickerDatetime.md#_datebuttons)
- [\_dateCurrent](DPickerDatetime.md#_datecurrent)
- [\_dateDecorator](DPickerDatetime.md#_datedecorator)
- [\_dateNew](DPickerDatetime.md#_datenew)
- [\_datePage](DPickerDatetime.md#_datepage)
- [\_destroyed](DPickerDatetime.md#_destroyed)
- [\_inputHours](DPickerDatetime.md#_inputhours)
- [\_inputMinutes](DPickerDatetime.md#_inputminutes)
- [\_inputSeconds](DPickerDatetime.md#_inputseconds)
- [\_label](DPickerDatetime.md#_label)
- [\_lastDownPoint](DPickerDatetime.md#_lastdownpoint)
- [\_lastSortedIndex](DPickerDatetime.md#_lastsortedindex)
- [\_mask](DPickerDatetime.md#_mask)
- [\_options](DPickerDatetime.md#_options)
- [\_outline](DPickerDatetime.md#_outline)
- [\_padding](DPickerDatetime.md#_padding)
- [\_reflowable](DPickerDatetime.md#_reflowable)
- [\_shortcuts](DPickerDatetime.md#_shortcuts)
- [\_snippet](DPickerDatetime.md#_snippet)
- [\_tempDisplayObjectParent](DPickerDatetime.md#_tempdisplayobjectparent)
- [\_title](DPickerDatetime.md#_title)
- [\_zIndex](DPickerDatetime.md#_zindex)
- [accessible](DPickerDatetime.md#accessible)
- [accessibleChildren](DPickerDatetime.md#accessiblechildren)
- [accessibleHint](DPickerDatetime.md#accessiblehint)
- [accessiblePointerEvents](DPickerDatetime.md#accessiblepointerevents)
- [accessibleTitle](DPickerDatetime.md#accessibletitle)
- [accessibleType](DPickerDatetime.md#accessibletype)
- [alpha](DPickerDatetime.md#alpha)
- [angle](DPickerDatetime.md#angle)
- [buttonMode](DPickerDatetime.md#buttonmode)
- [cacheAsBitmap](DPickerDatetime.md#cacheasbitmap)
- [children](DPickerDatetime.md#children)
- [cursor](DPickerDatetime.md#cursor)
- [filterArea](DPickerDatetime.md#filterarea)
- [filters](DPickerDatetime.md#filters)
- [hitArea](DPickerDatetime.md#hitarea)
- [interactive](DPickerDatetime.md#interactive)
- [interactiveChildren](DPickerDatetime.md#interactivechildren)
- [isMask](DPickerDatetime.md#ismask)
- [isSprite](DPickerDatetime.md#issprite)
- [localTransform](DPickerDatetime.md#localtransform)
- [mask](DPickerDatetime.md#mask)
- [name](DPickerDatetime.md#name)
- [parent](DPickerDatetime.md#parent)
- [pivot](DPickerDatetime.md#pivot)
- [renderable](DPickerDatetime.md#renderable)
- [rotation](DPickerDatetime.md#rotation)
- [sortDirty](DPickerDatetime.md#sortdirty)
- [sortableChildren](DPickerDatetime.md#sortablechildren)
- [transform](DPickerDatetime.md#transform)
- [visible](DPickerDatetime.md#visible)
- [worldAlpha](DPickerDatetime.md#worldalpha)
- [worldTransform](DPickerDatetime.md#worldtransform)
- [worldVisible](DPickerDatetime.md#worldvisible)
- [zIndex](DPickerDatetime.md#zindex)
- [WORK\_CONTAINS\_POINT](DPickerDatetime.md#work_contains_point)

### Accessors

- [background](DPickerDatetime.md#background)
- [border](DPickerDatetime.md#border)
- [bounds](DPickerDatetime.md#bounds)
- [corner](DPickerDatetime.md#corner)
- [current](DPickerDatetime.md#current)
- [height](DPickerDatetime.md#height)
- [new](DPickerDatetime.md#new)
- [options](DPickerDatetime.md#options)
- [outline](DPickerDatetime.md#outline)
- [padding](DPickerDatetime.md#padding)
- [page](DPickerDatetime.md#page)
- [position](DPickerDatetime.md#position)
- [reflowable](DPickerDatetime.md#reflowable)
- [scale](DPickerDatetime.md#scale)
- [shadow](DPickerDatetime.md#shadow)
- [skew](DPickerDatetime.md#skew)
- [snippet](DPickerDatetime.md#snippet)
- [state](DPickerDatetime.md#state)
- [theme](DPickerDatetime.md#theme)
- [title](DPickerDatetime.md#title)
- [type](DPickerDatetime.md#type)
- [unsafe](DPickerDatetime.md#unsafe)
- [weight](DPickerDatetime.md#weight)
- [width](DPickerDatetime.md#width)
- [x](DPickerDatetime.md#x)
- [y](DPickerDatetime.md#y)

### Methods

- [\_calculateBounds](DPickerDatetime.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DPickerDatetime.md#_recursivepostupdatetransform)
- [\_render](DPickerDatetime.md#_render)
- [addChild](DPickerDatetime.md#addchild)
- [addChildAt](DPickerDatetime.md#addchildat)
- [addListener](DPickerDatetime.md#addlistener)
- [adjustInputOptions](DPickerDatetime.md#adjustinputoptions)
- [applyTitle](DPickerDatetime.md#applytitle)
- [back](DPickerDatetime.md#back)
- [blur](DPickerDatetime.md#blur)
- [calculateBounds](DPickerDatetime.md#calculatebounds)
- [containsGlobalPoint](DPickerDatetime.md#containsglobalpoint)
- [containsLocalPoint](DPickerDatetime.md#containslocalpoint)
- [containsPoint](DPickerDatetime.md#containspoint)
- [destroy](DPickerDatetime.md#destroy)
- [displayObjectUpdateTransform](DPickerDatetime.md#displayobjectupdatetransform)
- [emit](DPickerDatetime.md#emit)
- [eventNames](DPickerDatetime.md#eventnames)
- [focus](DPickerDatetime.md#focus)
- [focusOnClosest](DPickerDatetime.md#focusonclosest)
- [getBounds](DPickerDatetime.md#getbounds)
- [getChildAt](DPickerDatetime.md#getchildat)
- [getChildByName](DPickerDatetime.md#getchildbyname)
- [getChildIndex](DPickerDatetime.md#getchildindex)
- [getClearType](DPickerDatetime.md#getcleartype)
- [getClippingRect](DPickerDatetime.md#getclippingrect)
- [getGlobalPosition](DPickerDatetime.md#getglobalposition)
- [getHeight](DPickerDatetime.md#getheight)
- [getLocalBounds](DPickerDatetime.md#getlocalbounds)
- [getMinuteSeparator](DPickerDatetime.md#getminuteseparator)
- [getParentOfSize](DPickerDatetime.md#getparentofsize)
- [getSecondSeparator](DPickerDatetime.md#getsecondseparator)
- [getThemeDefault](DPickerDatetime.md#getthemedefault)
- [getTimeLayoutHeight](DPickerDatetime.md#gettimelayoutheight)
- [getTimeLayoutWidth](DPickerDatetime.md#gettimelayoutwidth)
- [getType](DPickerDatetime.md#gettype)
- [getWidth](DPickerDatetime.md#getwidth)
- [getX](DPickerDatetime.md#getx)
- [getY](DPickerDatetime.md#gety)
- [hasDirty](DPickerDatetime.md#hasdirty)
- [hasHours](DPickerDatetime.md#hashours)
- [hasMinutes](DPickerDatetime.md#hasminutes)
- [hasRefitableHeight](DPickerDatetime.md#hasrefitableheight)
- [hasRefitableWidth](DPickerDatetime.md#hasrefitablewidth)
- [hasSeconds](DPickerDatetime.md#hasseconds)
- [hide](DPickerDatetime.md#hide)
- [init](DPickerDatetime.md#init)
- [initReflowable](DPickerDatetime.md#initreflowable)
- [isDirty](DPickerDatetime.md#isdirty)
- [isEventTarget](DPickerDatetime.md#iseventtarget)
- [isHidden](DPickerDatetime.md#ishidden)
- [isHierarchyDirty](DPickerDatetime.md#ishierarchydirty)
- [isRefitable](DPickerDatetime.md#isrefitable)
- [isShown](DPickerDatetime.md#isshown)
- [listenerCount](DPickerDatetime.md#listenercount)
- [listeners](DPickerDatetime.md#listeners)
- [newBackButton](DPickerDatetime.md#newbackbutton)
- [newChildren](DPickerDatetime.md#newchildren)
- [newDateButton](DPickerDatetime.md#newdatebutton)
- [newDateButtons](DPickerDatetime.md#newdatebuttons)
- [newDateLabel](DPickerDatetime.md#newdatelabel)
- [newDateLabels](DPickerDatetime.md#newdatelabels)
- [newInputHours](DPickerDatetime.md#newinputhours)
- [newInputMinutes](DPickerDatetime.md#newinputminutes)
- [newInputSeconds](DPickerDatetime.md#newinputseconds)
- [newLabel](DPickerDatetime.md#newlabel)
- [newMinuteSeparator](DPickerDatetime.md#newminuteseparator)
- [newNextButton](DPickerDatetime.md#newnextbutton)
- [newSecondSeparator](DPickerDatetime.md#newsecondseparator)
- [newSpace](DPickerDatetime.md#newspace)
- [newTimeLayout](DPickerDatetime.md#newtimelayout)
- [newTimeLayoutChildren](DPickerDatetime.md#newtimelayoutchildren)
- [next](DPickerDatetime.md#next)
- [off](DPickerDatetime.md#off)
- [on](DPickerDatetime.md#on)
- [onBlur](DPickerDatetime.md#onblur)
- [onChildBlur](DPickerDatetime.md#onchildblur)
- [onChildFocus](DPickerDatetime.md#onchildfocus)
- [onChildrenChange](DPickerDatetime.md#onchildrenchange)
- [onDateButtonClicked](DPickerDatetime.md#ondatebuttonclicked)
- [onDblClick](DPickerDatetime.md#ondblclick)
- [onDown](DPickerDatetime.md#ondown)
- [onDownThis](DPickerDatetime.md#ondownthis)
- [onFocus](DPickerDatetime.md#onfocus)
- [onHierarchyDirty](DPickerDatetime.md#onhierarchydirty)
- [onHoursChange](DPickerDatetime.md#onhourschange)
- [onKeyDown](DPickerDatetime.md#onkeydown)
- [onKeyUp](DPickerDatetime.md#onkeyup)
- [onMinutesChange](DPickerDatetime.md#onminuteschange)
- [onMove](DPickerDatetime.md#onmove)
- [onNewChange](DPickerDatetime.md#onnewchange)
- [onOut](DPickerDatetime.md#onout)
- [onOver](DPickerDatetime.md#onover)
- [onPageChange](DPickerDatetime.md#onpagechange)
- [onParentMove](DPickerDatetime.md#onparentmove)
- [onParentResize](DPickerDatetime.md#onparentresize)
- [onRefit](DPickerDatetime.md#onrefit)
- [onReflow](DPickerDatetime.md#onreflow)
- [onReset](DPickerDatetime.md#onreset)
- [onResize](DPickerDatetime.md#onresize)
- [onScale](DPickerDatetime.md#onscale)
- [onSecondsChange](DPickerDatetime.md#onsecondschange)
- [onShortcut](DPickerDatetime.md#onshortcut)
- [onSkew](DPickerDatetime.md#onskew)
- [onStateChange](DPickerDatetime.md#onstatechange)
- [onUp](DPickerDatetime.md#onup)
- [onUpThis](DPickerDatetime.md#onupthis)
- [onWheel](DPickerDatetime.md#onwheel)
- [once](DPickerDatetime.md#once)
- [reflow](DPickerDatetime.md#reflow)
- [removeAllListeners](DPickerDatetime.md#removealllisteners)
- [removeChild](DPickerDatetime.md#removechild)
- [removeChildAt](DPickerDatetime.md#removechildat)
- [removeChildren](DPickerDatetime.md#removechildren)
- [removeListener](DPickerDatetime.md#removelistener)
- [render](DPickerDatetime.md#render)
- [renderAdvanced](DPickerDatetime.md#renderadvanced)
- [reset](DPickerDatetime.md#reset)
- [resize](DPickerDatetime.md#resize)
- [setChildIndex](DPickerDatetime.md#setchildindex)
- [setFocused](DPickerDatetime.md#setfocused)
- [setHeight](DPickerDatetime.md#setheight)
- [setParent](DPickerDatetime.md#setparent)
- [setTransform](DPickerDatetime.md#settransform)
- [setWidth](DPickerDatetime.md#setwidth)
- [setX](DPickerDatetime.md#setx)
- [setY](DPickerDatetime.md#sety)
- [show](DPickerDatetime.md#show)
- [sortChildren](DPickerDatetime.md#sortchildren)
- [swapChildren](DPickerDatetime.md#swapchildren)
- [toCursor](DPickerDatetime.md#tocursor)
- [toDirty](DPickerDatetime.md#todirty)
- [toGlobal](DPickerDatetime.md#toglobal)
- [toHasDirty](DPickerDatetime.md#tohasdirty)
- [toHierarchyDirty](DPickerDatetime.md#tohierarchydirty)
- [toLabelOptions](DPickerDatetime.md#tolabeloptions)
- [toLocal](DPickerDatetime.md#tolocal)
- [toParentHasDirty](DPickerDatetime.md#toparenthasdirty)
- [toParentHierarchyDirty](DPickerDatetime.md#toparenthierarchydirty)
- [toParentResized](DPickerDatetime.md#toparentresized)
- [updateTransform](DPickerDatetime.md#updatetransform)
- [mixin](DPickerDatetime.md#mixin)

## Constructors

### constructor

• **new DPickerDatetime**<`THEME`, `OPTIONS`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemePickerDatetime`](../interfaces/DThemePickerDatetime.md) = [`DThemePickerDatetime`](../interfaces/DThemePickerDatetime.md) |
| `OPTIONS` | extends [`DPickerDatetimeOptions`](../interfaces/DPickerDatetimeOptions.md)<`THEME`, `OPTIONS`\> = [`DPickerDatetimeOptions`](../interfaces/DPickerDatetimeOptions.md)<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Inherited from

[DPickerTime](DPickerTime.md).[constructor](DPickerTime.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L103)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DPickerTime](DPickerTime.md).[_accessibleActive](DPickerTime.md#_accessibleactive)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[_accessibleDiv](DPickerTime.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DPickerTime](DPickerTime.md).[_auto](DPickerTime.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DPickerTime](DPickerTime.md).[_background](DPickerTime.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:754](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L754)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DPickerTime](DPickerTime.md).[_border](DPickerTime.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:755](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L755)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DPickerTime](DPickerTime.md).[_bounds](DPickerTime.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DPickerTime](DPickerTime.md).[_clearType](DPickerTime.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:757](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L757)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DPickerTime](DPickerTime.md).[_corner](DPickerTime.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[_cursor](DPickerTime.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:762](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L762)

___

### \_dateBounds

• `Protected` **\_dateBounds**: [`DPickerTimeBounds`](DPickerTimeBounds.md)

#### Inherited from

[DPickerTime](DPickerTime.md).[_dateBounds](DPickerTime.md#_datebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L96)

___

### \_dateButtons

• `Protected` **\_dateButtons**: ([`DPickerDatetimeSpace`](DPickerDatetimeSpace.md)<[`DThemePickerDatetimeSpace`](../interfaces/DThemePickerDatetimeSpace.md), [`DPickerDatetimeSpaceOptions`](../interfaces/DPickerDatetimeSpaceOptions.md)<[`DThemePickerDatetimeSpace`](../interfaces/DThemePickerDatetimeSpace.md)\>\> \| [`DPickerDatetimeButtonDate`](DPickerDatetimeButtonDate.md)<`unknown`, [`DThemePickerDatetimeButtonDate`](../interfaces/DThemePickerDatetimeButtonDate.md)<`unknown`\>, [`DPickerDatetimeButtonDateOptions`](../interfaces/DPickerDatetimeButtonDateOptions.md)<`unknown`, [`DThemePickerDatetimeButtonDate`](../interfaces/DThemePickerDatetimeButtonDate.md)<`unknown`\>\>\>)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L61)

___

### \_dateCurrent

• `Protected` **\_dateCurrent**: `Date`

#### Inherited from

[DPickerTime](DPickerTime.md).[_dateCurrent](DPickerTime.md#_datecurrent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L97)

___

### \_dateDecorator

• `Protected` **\_dateDecorator**: [`DPickerDatetimeDateDecorator`](../index.md#dpickerdatetimedatedecorator)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L62)

___

### \_dateNew

• `Protected` **\_dateNew**: `Date`

#### Inherited from

[DPickerTime](DPickerTime.md).[_dateNew](DPickerTime.md#_datenew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L98)

___

### \_datePage

• `Protected` **\_datePage**: `Date`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L60)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DPickerTime](DPickerTime.md).[_destroyed](DPickerTime.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_inputHours

• `Protected` **\_inputHours**: ``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\>

#### Inherited from

[DPickerTime](DPickerTime.md).[_inputHours](DPickerTime.md#_inputhours)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L99)

___

### \_inputMinutes

• `Protected` **\_inputMinutes**: ``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\>

#### Inherited from

[DPickerTime](DPickerTime.md).[_inputMinutes](DPickerTime.md#_inputminutes)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L100)

___

### \_inputSeconds

• `Protected` **\_inputSeconds**: ``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\>

#### Inherited from

[DPickerTime](DPickerTime.md).[_inputSeconds](DPickerTime.md#_inputseconds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L101)

___

### \_label

• `Protected` **\_label**: [`DPickerDatetimeLabel`](DPickerDatetimeLabel.md)<[`DThemePickerDatetimeLabel`](../interfaces/DThemePickerDatetimeLabel.md), [`DPickerDatetimeLabelOptions`](../interfaces/DPickerDatetimeLabelOptions.md)<[`DThemePickerDatetimeLabel`](../interfaces/DThemePickerDatetimeLabel.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L63)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DPickerTime](DPickerTime.md).[_lastDownPoint](DPickerTime.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:761](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L761)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DPickerTime](DPickerTime.md).[_lastSortedIndex](DPickerTime.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DPickerTime](DPickerTime.md).[_mask](DPickerTime.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DPickerTime](DPickerTime.md).[_options](DPickerTime.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:737](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L737)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DPickerTime](DPickerTime.md).[_outline](DPickerTime.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:756](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L756)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DPickerTime](DPickerTime.md).[_padding](DPickerTime.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DPickerTime](DPickerTime.md).[_reflowable](DPickerTime.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L760)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DPickerTime](DPickerTime.md).[_shortcuts](DPickerTime.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:758](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L758)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DPickerTime](DPickerTime.md).[_snippet](DPickerTime.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L759)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`Member`**

#### Inherited from

[DPickerTime](DPickerTime.md).[_tempDisplayObjectParent](DPickerTime.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DPickerTime](DPickerTime.md).[_title](DPickerTime.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:753](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L753)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DPickerTime](DPickerTime.md).[_zIndex](DPickerTime.md#_zindex)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[accessible](DPickerTime.md#accessible)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[accessibleChildren](DPickerTime.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DPickerTime](DPickerTime.md).[accessibleHint](DPickerTime.md#accessiblehint)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[accessiblePointerEvents](DPickerTime.md#accessiblepointerevents)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[accessibleTitle](DPickerTime.md#accessibletitle)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[accessibleType](DPickerTime.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DPickerTime](DPickerTime.md).[alpha](DPickerTime.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DPickerTime](DPickerTime.md).[angle](DPickerTime.md#angle)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[buttonMode](DPickerTime.md#buttonmode)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[cacheAsBitmap](DPickerTime.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DPickerTime](DPickerTime.md).[children](DPickerTime.md#children)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[cursor](DPickerTime.md#cursor)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[filterArea](DPickerTime.md#filterarea)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[filters](DPickerTime.md#filters)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[hitArea](DPickerTime.md#hitarea)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[interactive](DPickerTime.md#interactive)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[interactiveChildren](DPickerTime.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DPickerTime](DPickerTime.md).[isMask](DPickerTime.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DPickerTime](DPickerTime.md).[isSprite](DPickerTime.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DPickerTime](DPickerTime.md).[localTransform](DPickerTime.md#localtransform)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[mask](DPickerTime.md#mask)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[name](DPickerTime.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DPickerTime](DPickerTime.md).[parent](DPickerTime.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DPickerTime](DPickerTime.md).[pivot](DPickerTime.md#pivot)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[renderable](DPickerTime.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DPickerTime](DPickerTime.md).[rotation](DPickerTime.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`Member`**

PIXI.Container#sortDirty

#### Inherited from

[DPickerTime](DPickerTime.md).[sortDirty](DPickerTime.md#sortdirty)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[sortableChildren](DPickerTime.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`Member`**

PIXI.DisplayObject#transform

#### Inherited from

[DPickerTime](DPickerTime.md).[transform](DPickerTime.md#transform)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[visible](DPickerTime.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DPickerTime](DPickerTime.md).[worldAlpha](DPickerTime.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DPickerTime](DPickerTime.md).[worldTransform](DPickerTime.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DPickerTime](DPickerTime.md).[worldVisible](DPickerTime.md#worldvisible)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[zIndex](DPickerTime.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DPickerTime](DPickerTime.md).[WORK_CONTAINS_POINT](DPickerTime.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:733](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L733)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DPickerTime.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1369](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1369)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DPickerTime.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1373)

___

### bounds

• `get` **bounds**(): [`DPickerTimeBounds`](DPickerTimeBounds.md)

#### Returns

[`DPickerTimeBounds`](DPickerTimeBounds.md)

#### Inherited from

DPickerTime.bounds

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L154)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DPickerTime.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1365](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1365)

___

### current

• `get` **current**(): `Date`

#### Returns

`Date`

#### Inherited from

DPickerTime.current

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L133)

• `set` **current**(`dateCurrent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dateCurrent` | `Date` |

#### Returns

`void`

#### Inherited from

DPickerTime.current

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L137)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DPickerTime.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1288)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DPickerTime.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1292)

___

### new

• `get` **new**(): `Date`

#### Returns

`Date`

#### Inherited from

DPickerTime.new

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L143)

• `set` **new**(`dateNew`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dateNew` | `Date` |

#### Returns

`void`

#### Inherited from

DPickerTime.new

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L147)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DPickerTime.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DPickerTime.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1377)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DPickerTime.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1361)

___

### page

• `get` **page**(): `Date`

#### Returns

`Date`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L106)

• `set` **page**(`datePage`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `datePage` | `Date` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L110)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DPickerTime.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1347)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DPickerTime.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1026](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1026)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DPickerTime.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DPickerTime.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1701](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1701)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DPickerTime.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1705](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1705)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DPickerTime.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1357)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DPickerTime.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1022](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1022)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DPickerTime.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DPickerTime.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1592)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DPickerTime.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1596)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DPickerTime.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1385](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1385)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DPickerTime.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1389](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1389)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DPickerTime.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1144)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DPickerTime.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1381)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DPickerTime.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1047](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1047)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DPickerTime.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1229)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DPickerTime.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1233)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DPickerTime.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1149)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DPickerTime.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DPickerTime.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1189)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DPickerTime.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1193)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[_calculateBounds](DPickerTime.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1928](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1928)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[_recursivePostUpdateTransform](DPickerTime.md#_recursivepostupdatetransform)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[_render](DPickerTime.md#_render)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[addChild](DPickerTime.md#addchild)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[addChildAt](DPickerTime.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[addListener](DPickerTime.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[addListener](DPickerTime.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### adjustInputOptions

▸ `Protected` **adjustInputOptions**(`theme`, `options`, `max`): [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options` | [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\> |
| `max` | `number` |

#### Returns

[`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>

#### Overrides

[DPickerTime](DPickerTime.md).[adjustInputOptions](DPickerTime.md#adjustinputoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L191)

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[applyTitle](DPickerTime.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

___

### back

▸ **back**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L129)

___

### blur

▸ **blur**(`recursively?`): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[blur](DPickerTime.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1504)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[calculateBounds](DPickerTime.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### containsGlobalPoint

▸ `Protected` **containsGlobalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DPickerTime](DPickerTime.md).[containsGlobalPoint](DPickerTime.md#containsglobalpoint)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[containsLocalPoint](DPickerTime.md#containslocalpoint)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[containsPoint](DPickerTime.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1944](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1944)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[destroy](DPickerTime.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1977](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1977)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[displayObjectUpdateTransform](DPickerTime.md#displayobjectupdatetransform)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[emit](DPickerTime.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DPickerTime](DPickerTime.md).[eventNames](DPickerTime.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[focus](DPickerTime.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[focusOnClosest](DPickerTime.md#focusonclosest)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[getBounds](DPickerTime.md#getbounds)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[getChildAt](DPickerTime.md#getchildat)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[getChildByName](DPickerTime.md#getchildbyname)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[getChildIndex](DPickerTime.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DPickerTime](DPickerTime.md).[getClearType](DPickerTime.md#getcleartype)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[getClippingRect](DPickerTime.md#getclippingrect)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[getGlobalPosition](DPickerTime.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DPickerTime](DPickerTime.md).[getHeight](DPickerTime.md#getheight)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[getLocalBounds](DPickerTime.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getMinuteSeparator

▸ **getMinuteSeparator**(): `string`

#### Returns

`string`

#### Inherited from

[DPickerTime](DPickerTime.md).[getMinuteSeparator](DPickerTime.md#getminuteseparator)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L287)

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DPickerTime](DPickerTime.md).[getParentOfSize](DPickerTime.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1735](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1735)

___

### getSecondSeparator

▸ **getSecondSeparator**(): `string`

#### Returns

`string`

#### Inherited from

[DPickerTime](DPickerTime.md).[getSecondSeparator](DPickerTime.md#getsecondseparator)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L300)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DPickerTime](DPickerTime.md).[getThemeDefault](DPickerTime.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

___

### getTimeLayoutHeight

▸ `Protected` **getTimeLayoutHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DPickerTime](DPickerTime.md).[getTimeLayoutHeight](DPickerTime.md#gettimelayoutheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:250](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L250)

___

### getTimeLayoutWidth

▸ `Protected` **getTimeLayoutWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Overrides

[DPickerTime](DPickerTime.md).[getTimeLayoutWidth](DPickerTime.md#gettimelayoutwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L202)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DPickerTime](DPickerTime.md).[getType](DPickerTime.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:337](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L337)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DPickerTime](DPickerTime.md).[getWidth](DPickerTime.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1237)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DPickerTime](DPickerTime.md).[getX](DPickerTime.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1157)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DPickerTime](DPickerTime.md).[getY](DPickerTime.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1197)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPickerTime](DPickerTime.md).[hasDirty](DPickerTime.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1486)

___

### hasHours

▸ **hasHours**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPickerTime](DPickerTime.md).[hasHours](DPickerTime.md#hashours)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L158)

___

### hasMinutes

▸ **hasMinutes**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPickerTime](DPickerTime.md).[hasMinutes](DPickerTime.md#hasminutes)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L162)

___

### hasRefitableHeight

▸ `Protected` **hasRefitableHeight**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Inherited from

[DPickerTime](DPickerTime.md).[hasRefitableHeight](DPickerTime.md#hasrefitableheight)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[hasRefitableWidth](DPickerTime.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1691](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1691)

___

### hasSeconds

▸ **hasSeconds**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPickerTime](DPickerTime.md).[hasSeconds](DPickerTime.md#hasseconds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L166)

___

### hide

▸ **hide**(): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[hide](DPickerTime.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1418)

___

### init

▸ `Protected` **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Overrides

[DPickerTime](DPickerTime.md).[init](DPickerTime.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L65)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[initReflowable](DPickerTime.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1030](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1030)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPickerTime](DPickerTime.md).[isDirty](DPickerTime.md#isdirty)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[isEventTarget](DPickerTime.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1813](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1813)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPickerTime](DPickerTime.md).[isHidden](DPickerTime.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPickerTime](DPickerTime.md).[isHierarchyDirty](DPickerTime.md#ishierarchydirty)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[isRefitable](DPickerTime.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1681)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPickerTime](DPickerTime.md).[isShown](DPickerTime.md#isshown)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[listenerCount](DPickerTime.md#listenercount)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[listeners](DPickerTime.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newBackButton

▸ `Protected` **newBackButton**(`theme`, `options?`): ``null`` \| [`DPickerDatetimeButtonBack`](DPickerDatetimeButtonBack.md)<`unknown`, [`DThemePickerDatetimeButtonBack`](../interfaces/DThemePickerDatetimeButtonBack.md)<`unknown`\>, [`DPickerDatetimeButtonBackOptions`](../interfaces/DPickerDatetimeButtonBackOptions.md)<`unknown`, [`DThemePickerDatetimeButtonBack`](../interfaces/DThemePickerDatetimeButtonBack.md)<`unknown`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

``null`` \| [`DPickerDatetimeButtonBack`](DPickerDatetimeButtonBack.md)<`unknown`, [`DThemePickerDatetimeButtonBack`](../interfaces/DThemePickerDatetimeButtonBack.md)<`unknown`\>, [`DPickerDatetimeButtonBackOptions`](../interfaces/DPickerDatetimeButtonBackOptions.md)<`unknown`, [`DThemePickerDatetimeButtonBack`](../interfaces/DThemePickerDatetimeButtonBack.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L235)

___

### newChildren

▸ `Protected` **newChildren**(`theme`, `options`, `margin`): (``null`` \| `DisplayObject`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options` | `undefined` \| `OPTIONS` |
| `margin` | `number` |

#### Returns

(``null`` \| `DisplayObject`)[]

#### Overrides

[DPickerTime](DPickerTime.md).[newChildren](DPickerTime.md#newchildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L70)

___

### newDateButton

▸ `Protected` **newDateButton**(`theme`, `options`, `date`): [`DPickerDatetimeButtonDate`](DPickerDatetimeButtonDate.md)<`unknown`, [`DThemePickerDatetimeButtonDate`](../interfaces/DThemePickerDatetimeButtonDate.md)<`unknown`\>, [`DPickerDatetimeButtonDateOptions`](../interfaces/DPickerDatetimeButtonDateOptions.md)<`unknown`, [`DThemePickerDatetimeButtonDate`](../interfaces/DThemePickerDatetimeButtonDate.md)<`unknown`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options` | `undefined` \| `OPTIONS` |
| `date` | `number` |

#### Returns

[`DPickerDatetimeButtonDate`](DPickerDatetimeButtonDate.md)<`unknown`, [`DThemePickerDatetimeButtonDate`](../interfaces/DThemePickerDatetimeButtonDate.md)<`unknown`\>, [`DPickerDatetimeButtonDateOptions`](../interfaces/DPickerDatetimeButtonDateOptions.md)<`unknown`, [`DThemePickerDatetimeButtonDate`](../interfaces/DThemePickerDatetimeButtonDate.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:309](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L309)

___

### newDateButtons

▸ `Protected` **newDateButtons**(`theme`, `options`): ([`DPickerDatetimeSpace`](DPickerDatetimeSpace.md)<[`DThemePickerDatetimeSpace`](../interfaces/DThemePickerDatetimeSpace.md), [`DPickerDatetimeSpaceOptions`](../interfaces/DPickerDatetimeSpaceOptions.md)<[`DThemePickerDatetimeSpace`](../interfaces/DThemePickerDatetimeSpace.md)\>\> \| [`DPickerDatetimeButtonDate`](DPickerDatetimeButtonDate.md)<`unknown`, [`DThemePickerDatetimeButtonDate`](../interfaces/DThemePickerDatetimeButtonDate.md)<`unknown`\>, [`DPickerDatetimeButtonDateOptions`](../interfaces/DPickerDatetimeButtonDateOptions.md)<`unknown`, [`DThemePickerDatetimeButtonDate`](../interfaces/DThemePickerDatetimeButtonDate.md)<`unknown`\>\>\>)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options` | `undefined` \| `OPTIONS` |

#### Returns

([`DPickerDatetimeSpace`](DPickerDatetimeSpace.md)<[`DThemePickerDatetimeSpace`](../interfaces/DThemePickerDatetimeSpace.md), [`DPickerDatetimeSpaceOptions`](../interfaces/DPickerDatetimeSpaceOptions.md)<[`DThemePickerDatetimeSpace`](../interfaces/DThemePickerDatetimeSpace.md)\>\> \| [`DPickerDatetimeButtonDate`](DPickerDatetimeButtonDate.md)<`unknown`, [`DThemePickerDatetimeButtonDate`](../interfaces/DThemePickerDatetimeButtonDate.md)<`unknown`\>, [`DPickerDatetimeButtonDateOptions`](../interfaces/DPickerDatetimeButtonDateOptions.md)<`unknown`, [`DThemePickerDatetimeButtonDate`](../interfaces/DThemePickerDatetimeButtonDate.md)<`unknown`\>\>\>)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L291)

___

### newDateLabel

▸ `Protected` **newDateLabel**(`theme`, `options`, `label`): [`DPickerDatetimeLabelDate`](DPickerDatetimeLabelDate.md)<`unknown`, [`DThemePickerDatetimeLabelDate`](../interfaces/DThemePickerDatetimeLabelDate.md)<`unknown`\>, [`DPickerDatetimeLabelDateOptions`](../interfaces/DPickerDatetimeLabelDateOptions.md)<`unknown`, [`DThemePickerDatetimeLabelDate`](../interfaces/DThemePickerDatetimeLabelDate.md)<`unknown`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options` | `undefined` \| `OPTIONS` |
| `label` | `string` |

#### Returns

[`DPickerDatetimeLabelDate`](DPickerDatetimeLabelDate.md)<`unknown`, [`DThemePickerDatetimeLabelDate`](../interfaces/DThemePickerDatetimeLabelDate.md)<`unknown`\>, [`DPickerDatetimeLabelDateOptions`](../interfaces/DPickerDatetimeLabelDateOptions.md)<`unknown`, [`DThemePickerDatetimeLabelDate`](../interfaces/DThemePickerDatetimeLabelDate.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:279](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L279)

___

### newDateLabels

▸ `Protected` **newDateLabels**(`theme`, `options`): [`DPickerDatetimeLabelDate`](DPickerDatetimeLabelDate.md)<`unknown`, [`DThemePickerDatetimeLabelDate`](../interfaces/DThemePickerDatetimeLabelDate.md)<`unknown`\>, [`DPickerDatetimeLabelDateOptions`](../interfaces/DPickerDatetimeLabelDateOptions.md)<`unknown`, [`DThemePickerDatetimeLabelDate`](../interfaces/DThemePickerDatetimeLabelDate.md)<`unknown`\>\>\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options` | `undefined` \| `OPTIONS` |

#### Returns

[`DPickerDatetimeLabelDate`](DPickerDatetimeLabelDate.md)<`unknown`, [`DThemePickerDatetimeLabelDate`](../interfaces/DThemePickerDatetimeLabelDate.md)<`unknown`\>, [`DPickerDatetimeLabelDateOptions`](../interfaces/DPickerDatetimeLabelDateOptions.md)<`unknown`, [`DThemePickerDatetimeLabelDate`](../interfaces/DThemePickerDatetimeLabelDate.md)<`unknown`\>\>\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:265](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L265)

___

### newInputHours

▸ `Protected` **newInputHours**(`theme`, `options?`): ``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\>

#### Inherited from

[DPickerTime](DPickerTime.md).[newInputHours](DPickerTime.md#newinputhours)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:321](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L321)

___

### newInputMinutes

▸ `Protected` **newInputMinutes**(`theme`, `options?`): ``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\>

#### Inherited from

[DPickerTime](DPickerTime.md).[newInputMinutes](DPickerTime.md#newinputminutes)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:337](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L337)

___

### newInputSeconds

▸ `Protected` **newInputSeconds**(`theme`, `options?`): ``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\>

#### Inherited from

[DPickerTime](DPickerTime.md).[newInputSeconds](DPickerTime.md#newinputseconds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:353](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L353)

___

### newLabel

▸ `Protected` **newLabel**(`theme`, `options?`): [`DPickerDatetimeLabel`](DPickerDatetimeLabel.md)<[`DThemePickerDatetimeLabel`](../interfaces/DThemePickerDatetimeLabel.md), [`DPickerDatetimeLabelOptions`](../interfaces/DPickerDatetimeLabelOptions.md)<[`DThemePickerDatetimeLabel`](../interfaces/DThemePickerDatetimeLabel.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | [`DPickerDatetimeOptions`](../interfaces/DPickerDatetimeOptions.md)<[`DThemePickerDatetime`](../interfaces/DThemePickerDatetime.md)\> |

#### Returns

[`DPickerDatetimeLabel`](DPickerDatetimeLabel.md)<[`DThemePickerDatetimeLabel`](../interfaces/DThemePickerDatetimeLabel.md), [`DPickerDatetimeLabelOptions`](../interfaces/DPickerDatetimeLabelOptions.md)<[`DThemePickerDatetimeLabel`](../interfaces/DThemePickerDatetimeLabel.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:231](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L231)

___

### newMinuteSeparator

▸ `Protected` **newMinuteSeparator**(): ``null`` \| [`DText`](DText.md)<`unknown`, [`DThemeText`](../interfaces/DThemeText.md)<`unknown`\>, [`DTextOptions`](../interfaces/DTextOptions.md)<`unknown`, [`DThemeText`](../interfaces/DThemeText.md)<`unknown`\>\>\>

#### Returns

``null`` \| [`DText`](DText.md)<`unknown`, [`DThemeText`](../interfaces/DThemeText.md)<`unknown`\>, [`DTextOptions`](../interfaces/DTextOptions.md)<`unknown`, [`DThemeText`](../interfaces/DThemeText.md)<`unknown`\>\>\>

#### Inherited from

[DPickerTime](DPickerTime.md).[newMinuteSeparator](DPickerTime.md#newminuteseparator)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L278)

___

### newNextButton

▸ `Protected` **newNextButton**(`theme`, `options?`): ``null`` \| [`DPickerDatetimeButtonNext`](DPickerDatetimeButtonNext.md)<`unknown`, [`DThemePickerDatetimeButtonNext`](../interfaces/DThemePickerDatetimeButtonNext.md)<`unknown`\>, [`DPickerDatetimeButtonNextOptions`](../interfaces/DPickerDatetimeButtonNextOptions.md)<`unknown`, [`DThemePickerDatetimeButtonNext`](../interfaces/DThemePickerDatetimeButtonNext.md)<`unknown`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

``null`` \| [`DPickerDatetimeButtonNext`](DPickerDatetimeButtonNext.md)<`unknown`, [`DThemePickerDatetimeButtonNext`](../interfaces/DThemePickerDatetimeButtonNext.md)<`unknown`\>, [`DPickerDatetimeButtonNextOptions`](../interfaces/DPickerDatetimeButtonNextOptions.md)<`unknown`, [`DThemePickerDatetimeButtonNext`](../interfaces/DThemePickerDatetimeButtonNext.md)<`unknown`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:250](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L250)

___

### newSecondSeparator

▸ `Protected` **newSecondSeparator**(): ``null`` \| [`DText`](DText.md)<`unknown`, [`DThemeText`](../interfaces/DThemeText.md)<`unknown`\>, [`DTextOptions`](../interfaces/DTextOptions.md)<`unknown`, [`DThemeText`](../interfaces/DThemeText.md)<`unknown`\>\>\>

#### Returns

``null`` \| [`DText`](DText.md)<`unknown`, [`DThemeText`](../interfaces/DThemeText.md)<`unknown`\>, [`DTextOptions`](../interfaces/DTextOptions.md)<`unknown`, [`DThemeText`](../interfaces/DThemeText.md)<`unknown`\>\>\>

#### Inherited from

[DPickerTime](DPickerTime.md).[newSecondSeparator](DPickerTime.md#newsecondseparator)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L291)

___

### newSpace

▸ `Protected` **newSpace**(`theme`, `options`): [`DPickerDatetimeSpace`](DPickerDatetimeSpace.md)<[`DThemePickerDatetimeSpace`](../interfaces/DThemePickerDatetimeSpace.md), [`DPickerDatetimeSpaceOptions`](../interfaces/DPickerDatetimeSpaceOptions.md)<[`DThemePickerDatetimeSpace`](../interfaces/DThemePickerDatetimeSpace.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options` | `undefined` \| `OPTIONS` |

#### Returns

[`DPickerDatetimeSpace`](DPickerDatetimeSpace.md)<[`DThemePickerDatetimeSpace`](../interfaces/DThemePickerDatetimeSpace.md), [`DPickerDatetimeSpaceOptions`](../interfaces/DPickerDatetimeSpaceOptions.md)<[`DThemePickerDatetimeSpace`](../interfaces/DThemePickerDatetimeSpace.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:305](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L305)

___

### newTimeLayout

▸ `Protected` **newTimeLayout**(`hours`, `minutes`, `seconds`, `margin`): ``null`` \| [`DLayoutHorizontal`](DLayoutHorizontal.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md), [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hours` | ``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\> |
| `minutes` | ``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\> |
| `seconds` | ``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\> |
| `margin` | `number` |

#### Returns

``null`` \| [`DLayoutHorizontal`](DLayoutHorizontal.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md), [`DLayoutHorizontalOptions`](../interfaces/DLayoutHorizontalOptions.md)<[`DThemeLayoutHorizontal`](../interfaces/DThemeLayoutHorizontal.md)\>\>

#### Inherited from

[DPickerTime](DPickerTime.md).[newTimeLayout](DPickerTime.md#newtimelayout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L228)

___

### newTimeLayoutChildren

▸ `Protected` **newTimeLayoutChildren**(`hours`, `minutes`, `seconds`): (``null`` \| `DisplayObject`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `hours` | ``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\> |
| `minutes` | ``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\> |
| `seconds` | ``null`` \| [`DInputInteger`](DInputInteger.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md), [`DInputIntegerOptions`](../interfaces/DInputIntegerOptions.md)<[`DThemeInputInteger`](../interfaces/DThemeInputInteger.md)\>\> |

#### Returns

(``null`` \| `DisplayObject`)[]

#### Inherited from

[DPickerTime](DPickerTime.md).[newTimeLayoutChildren](DPickerTime.md#newtimelayoutchildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:254](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L254)

___

### next

▸ **next**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L122)

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[off](DPickerTime.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[on](DPickerTime.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[on](DPickerTime.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[onBlur](DPickerTime.md#onblur)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onChildBlur](DPickerTime.md#onchildblur)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onChildFocus](DPickerTime.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1556)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[onChildrenChange](DPickerTime.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1034](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1034)

___

### onDateButtonClicked

▸ `Protected` **onDateButtonClicked**(`date`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:326](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L326)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onDblClick](DPickerTime.md#ondblclick)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onDown](DPickerTime.md#ondown)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onDownThis](DPickerTime.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1834](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1834)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[onFocus](DPickerTime.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1563)

___

### onHierarchyDirty

▸ `Protected` **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[onHierarchyDirty](DPickerTime.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1478](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1478)

___

### onHoursChange

▸ `Protected` **onHoursChange**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[onHoursChange](DPickerTime.md#onhourschange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L331)

___

### onKeyDown

▸ `Protected` **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DPickerTime](DPickerTime.md).[onKeyDown](DPickerTime.md#onkeydown)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onKeyUp](DPickerTime.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1807](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1807)

___

### onMinutesChange

▸ `Protected` **onMinutesChange**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[onMinutesChange](DPickerTime.md#onminuteschange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:347](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L347)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onMove](DPickerTime.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1051](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1051)

___

### onNewChange

▸ **onNewChange**(): `void`

#### Returns

`void`

#### Overrides

[DPickerTime](DPickerTime.md).[onNewChange](DPickerTime.md#onnewchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L136)

___

### onOut

▸ `Protected` **onOut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[onOut](DPickerTime.md#onout)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onOver](DPickerTime.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1877](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1877)

___

### onPageChange

▸ `Protected` **onPageChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L142)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onParentMove](DPickerTime.md#onparentmove)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onParentResize](DPickerTime.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1750)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[onRefit](DPickerTime.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1637](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1637)

___

### onReflow

▸ `Protected` **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[onReflow](DPickerTime.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1697)

___

### onReset

▸ `Protected` **onReset**(): `void`

#### Returns

`void`

#### Overrides

[DPickerTime](DPickerTime.md).[onReset](DPickerTime.md#onreset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L117)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onResize](DPickerTime.md#onresize)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onScale](DPickerTime.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1134)

___

### onSecondsChange

▸ `Protected` **onSecondsChange**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[onSecondsChange](DPickerTime.md#onsecondschange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L363)

___

### onShortcut

▸ `Protected` **onShortcut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[onShortcut](DPickerTime.md#onshortcut)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onSkew](DPickerTime.md#onskew)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onStateChange](DPickerTime.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1527](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1527)

___

### onUp

▸ `Protected` **onUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[onUp](DPickerTime.md#onup)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onUpThis](DPickerTime.md#onupthis)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[onWheel](DPickerTime.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1796)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[once](DPickerTime.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[once](DPickerTime.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[reflow](DPickerTime.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1610](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1610)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[removeAllListeners](DPickerTime.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[removeAllListeners](DPickerTime.md#removealllisteners)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[removeChild](DPickerTime.md#removechild)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[removeChildAt](DPickerTime.md#removechildat)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[removeChildren](DPickerTime.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[removeListener](DPickerTime.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[removeListener](DPickerTime.md#removelistener)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[render](DPickerTime.md#render)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[renderAdvanced](DPickerTime.md#renderadvanced)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8406

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[reset](DPickerTime.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L170)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[resize](DPickerTime.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1063](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1063)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[setChildIndex](DPickerTime.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[setFocused](DPickerTime.md#setfocused)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[setHeight](DPickerTime.md#setheight)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[setParent](DPickerTime.md#setparent)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[setTransform](DPickerTime.md#settransform)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[setWidth](DPickerTime.md#setwidth)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[setX](DPickerTime.md#setx)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[setY](DPickerTime.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1206)

___

### show

▸ **show**(): [`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DPickerDatetime`](DPickerDatetime.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DPickerTime](DPickerTime.md).[show](DPickerTime.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1405](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1405)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[sortChildren](DPickerTime.md#sortchildren)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[swapChildren](DPickerTime.md#swapchildren)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[toCursor](DPickerTime.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1005](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1005)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPickerTime](DPickerTime.md).[toDirty](DPickerTime.md#todirty)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[toGlobal](DPickerTime.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPickerTime](DPickerTime.md).[toHasDirty](DPickerTime.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1441)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DPickerTime](DPickerTime.md).[toHierarchyDirty](DPickerTime.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1457)

___

### toLabelOptions

▸ `Protected` **toLabelOptions**(`theme`, `options?`): [`DPickerDatetimeLabelOptions`](../interfaces/DPickerDatetimeLabelOptions.md)<[`DThemePickerDatetimeLabel`](../interfaces/DThemePickerDatetimeLabel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | [`DPickerDatetimeOptions`](../interfaces/DPickerDatetimeOptions.md)<[`DThemePickerDatetime`](../interfaces/DThemePickerDatetime.md)\> |

#### Returns

[`DPickerDatetimeLabelOptions`](../interfaces/DPickerDatetimeLabelOptions.md)<[`DThemePickerDatetimeLabel`](../interfaces/DThemePickerDatetimeLabel.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L206)

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

#### Inherited from

[DPickerTime](DPickerTime.md).[toLocal](DPickerTime.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[toParentHasDirty](DPickerTime.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1450)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[toParentHierarchyDirty](DPickerTime.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[toParentResized](DPickerTime.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L1728)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DPickerTime](DPickerTime.md).[updateTransform](DPickerTime.md#updatetransform)

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

[DPickerTime](DPickerTime.md).[mixin](DPickerTime.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
