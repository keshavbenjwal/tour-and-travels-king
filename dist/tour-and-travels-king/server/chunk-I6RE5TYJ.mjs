import './polyfills.server.mjs';
import{a as Jt}from"./chunk-QV32LXOK.mjs";import{a as di,b as mi,c as pi,d as se,e as ui,f as hi,g as _e,h as gi,i as _i}from"./chunk-ZCNDCBSE.mjs";import{a as At,b as Mt,c as Tt}from"./chunk-XEXEYFX6.mjs";import{c as Zt,d as ei,e as ti,f as ii,g as ni,h as ai,i as oi,j as ri,k as li,l as si,m as ci}from"./chunk-6DQW3HOQ.mjs";import{a as ct,b as dt,c as mt,f as pt,g as ut,h as kt,i as xt,j as St,k as Pt,l as Et,n as Ot,o as It,s as qt,t as Bt}from"./chunk-7T24KLKZ.mjs";import{a as ae,b as Ue,c as Ye,d as u,e as Je,g as Ze,h as et,k as tt,l as it,m as nt,n as at,r as ot,t as rt}from"./chunk-H5LUHUBH.mjs";import{A as Yt,e as Kt,g as Ht,j as Gt,o as jt,p as Wt,s as $t,v as Qt,y as Xt,z as Ut}from"./chunk-2CLM66GO.mjs";import{E as Ct,G as W,I as Ft,K as Dt,L as Lt,N as Rt,P as Vt,Q as zt,R as Nt,a as st,b as oe,c as ht,d as gt,e as _t,h as ft,i as vt,k as bt,m as yt,s as re,t as wt,v as le}from"./chunk-2X656UM6.mjs";import{b as lt}from"./chunk-PMOSHHZF.mjs";import{b as $e,g as Qe,p as Xe}from"./chunk-SA5V7UIT.mjs";import{b as Ge,e as je,f as We}from"./chunk-5S6TG2QY.mjs";import{i as He}from"./chunk-AH35NTHF.mjs";import{$b as B,Aa as Z,C as xe,D as Se,Db as R,Ea as H,Eb as _,Fb as f,Fc as qe,Gb as M,Hb as E,Ib as O,Ic as Be,Jb as w,Kb as r,Lb as o,M as Pe,Mb as h,N as U,Nb as Ve,Ob as ze,Q as Ee,T as Y,Tb as D,Ub as te,V as J,Wc as j,X as K,Xb as v,Z as p,Zb as g,_b as q,a as Q,aa as Oe,ab as Me,ac as Ne,bb as c,bc as ie,bd as S,c as me,ca as b,cb as Te,cc as V,cd as Ke,da as y,dc as z,e as pe,ea as Ie,eb as Fe,fb as k,ga as ge,gb as x,hc as C,jc as N,ka as T,kb as De,kc as ne,l as ue,la as Ae,lc as s,mc as L,nc as I,p as Ce,pa as P,pb as F,qb as ee,rb as Le,u as ke,vc as G,w as X,x as he,xb as Re}from"./chunk-GHVTHEK2.mjs";import{a as de,b as we}from"./chunk-N7QBYMCK.mjs";var Mi=["panel"],Ti=["*"];function Fi(a,n){if(a&1&&(Ve(0,"div",1,0),B(2),ze()),a&2){let e=n.id,i=g();ne(i._classList),N("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),te("id",i.id),R("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var fe=class{source;option;constructor(n,e){this.source=n,this.option=e}},yi=new K("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),wi=(()=>{class a{_changeDetectorRef=p(j);_elementRef=p(H);_defaults=p(yi);_animationsDisabled=W();_activeOptionChanges=Q.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new T;opened=new T;closed=new T;optionActivated=new T;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=p(le).getId("mat-autocomplete-");inertGroups;constructor(){let e=p(_t);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new wt(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new fe(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=F({type:a,selectors:[["mat-autocomplete"]],contentQueries:function(i,t,l){if(i&1&&Ne(l,se,5)(l,mi,5),i&2){let d;V(d=z())&&(t.options=d),V(d=z())&&(t.optionGroups=d)}},viewQuery:function(i,t){if(i&1&&ie(Te,7)(Mi,5),i&2){let l;V(l=z())&&(t.template=l.first),V(l=z())&&(t.panel=l.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",S],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",S],requireSelection:[2,"requireSelection","requireSelection",S],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",S],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",S]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[G([{provide:di,useExisting:a}])],ngContentSelectors:Ti,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,t){i&1&&(q(),Re(0,Fi,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2})}return a})();var Di={provide:ae,useExisting:Y(()=>be),multi:!0};var Li=new K("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let a=p(ge);return()=>jt(a)}}),be=(()=>{class a{_environmentInjector=p(Oe);_element=p(H);_injector=p(ge);_viewContainerRef=p(De);_zone=p(Ae);_changeDetectorRef=p(j);_dir=p(st,{optional:!0});_formField=p(Ot,{optional:!0,host:!0});_viewportRuler=p(Kt);_scrollStrategy=p(Li);_renderer=p(Fe);_animationsDisabled=W();_defaults=p(yi,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new pe;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Q.EMPTY;_breakpointObserver=p(yt);_handsetLandscapeSubscription=Q.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new pe;_overlayPanelClass=bt(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return X(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(he(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(he(()=>this._overlayAttached)):ue()).pipe(Ce(e=>e instanceof pi?e:null))}optionSelections=ke(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Pe(e),U(()=>X(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(U(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new me(e=>{let i=l=>{let d=gt(l),A=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,$=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&d!==this._element.nativeElement&&!this._hasFocus()&&(!A||!A.contains(d))&&(!$||!$.contains(d))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(d)&&e.next(l)},t=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{t.forEach(l=>l())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,t=i.keyCode,l=re(i);if(t===27&&!l&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&t===13&&this.panelOpen&&!l)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let d=this.autocomplete._keyManager.activeItem,A=t===38||t===40;t===9||A&&!l&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):A&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(A||this.autocomplete._keyManager.activeItem!==d)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,t=i.value;if(i.type==="number"&&(t=t==""?null:parseFloat(t)),this._previousValue!==t){if(this._previousValue=t,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(t),!t)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let l=this.autocomplete.options?.find(d=>d.selected);if(l){let d=this._getDisplayValue(l.value);t!==d&&l.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let l=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(l)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return ht()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new me(t=>{Me(()=>{t.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(Ee(()=>this._positionStrategy.reapplyLastPosition()),Se(0))??ue();return X(e,i).pipe(U(()=>this._zone.run(()=>{let t=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),t!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),xe(1)).subscribe(t=>this._setValueAndClose(t))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,t=e?e.source:this._pendingAutoselectedOption;t?(this._clearPreviousSelectedOption(t),this._assignOptionValue(t.value),this._onChange(t.value),i._emitSelectEvent(t),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(t=>{t!==e&&t.selected&&t.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new Gt(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=Qt(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Ct.HandsetLandscape).subscribe(l=>{l.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let t=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&t!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!re(e)||e.keyCode===38&&re(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Wt({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=$t(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],t=this._aboveClass,l=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:t},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:t}],d;this.position==="above"?d=l:this.position==="below"?d=i:d=[...i,...l],e.withPositions(d)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let t=0;t<e.options.length;t++)if(!e.options.get(t).disabled){i=t;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,t=ui(e,i.options,i.optionGroups);if(e===0&&t===1)i._setScrollTop(0);else if(i.panel){let l=i.options.toArray()[e];if(l){let d=l._getHostElement(),A=hi(d.offsetTop,d.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(A)}}}static \u0275fac=function(i){return new(i||a)};static \u0275dir=Le({type:a,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,t){i&1&&v("focusin",function(){return t._handleFocus()})("blur",function(){return t._onTouched()})("input",function(d){return t._handleInput(d)})("keydown",function(d){return t._handleKeydown(d)})("click",function(){return t._handleClick()}),i&2&&R("autocomplete",t.autocompleteAttribute)("role",t.autocompleteDisabled?null:"combobox")("aria-autocomplete",t.autocompleteDisabled?null:"list")("aria-activedescendant",t.panelOpen&&t.activeOption?t.activeOption.id:null)("aria-expanded",t.autocompleteDisabled?null:t.panelOpen.toString())("aria-controls",t.autocompleteDisabled||!t.panelOpen?null:t.autocomplete?.id)("aria-haspopup",t.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",S]},exportAs:["matAutocompleteTrigger"],features:[G([Di]),Z]})}return a})(),Ci=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=ee({type:a});static \u0275inj=J({imports:[Xt,_e,Ht,_e,oe]})}return a})();var Vi=["*"],ki=(()=>{class a{labelPosition="after";static \u0275fac=function(i){return new(i||a)};static \u0275cmp=F({type:a,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,t){i&2&&N("mdc-form-field--align-end",t.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:Vi,decls:1,vars:0,template:function(i,t){i&1&&(q(),B(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return a})();var zi=["switch"],Ni=["*"];function qi(a,n){a&1&&(r(0,"span",11),Ie(),r(1,"svg",13),h(2,"path",14),o(),r(3,"svg",15),h(4,"path",16),o()())}var Bi=new K("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),ce=class{source;checked;constructor(n,e){this.source=n,this.checked=e}},ye=(()=>{class a{_elementRef=p(H);_focusMonitor=p(ft);_changeDetectorRef=p(j);defaults=p(Bi);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new ce(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=W();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new T;toggleChange=new T;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){p(vt).load(Dt);let e=p(new Be("tabindex"),{optional:!0}),i=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||"accent",this.id=this._uniqueId=p(le).getId("mat-mdc-slide-toggle-"),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new ce(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=F({type:a,selectors:[["mat-slide-toggle"]],viewQuery:function(i,t){if(i&1&&ie(zi,5),i&2){let l;V(l=z())&&(t._switchElement=l.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(i,t){i&2&&(te("id",t.id),R("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),ne(t.color?"mat-"+t.color:""),N("mat-mdc-slide-toggle-focused",t._focused)("mat-mdc-slide-toggle-checked",t.checked)("_mat-animation-noopable",t._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",S],color:"color",disabled:[2,"disabled","disabled",S],disableRipple:[2,"disableRipple","disableRipple",S],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ke(e)],checked:[2,"checked","checked",S],hideIcon:[2,"hideIcon","hideIcon",S],disabledInteractive:[2,"disabledInteractive","disabledInteractive",S]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[G([{provide:ae,useExisting:Y(()=>a),multi:!0},{provide:Ye,useExisting:a,multi:!0}]),Z],ngContentSelectors:Ni,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(i,t){if(i&1&&(q(),r(0,"div",1)(1,"button",2,0),v("click",function(){return t._handleClick()}),h(3,"div",3)(4,"span",4),r(5,"span",5)(6,"span",6)(7,"span",7),h(8,"span",8),o(),r(9,"span",9),h(10,"span",10),o(),_(11,qi,5,0,"span",11),o()()(),r(12,"label",12),v("click",function(d){return d.stopPropagation()}),B(13),o()()),i&2){let l=C(2);w("labelPosition",t.labelPosition),c(),N("mdc-switch--selected",t.checked)("mdc-switch--unselected",!t.checked)("mdc-switch--checked",t.checked)("mdc-switch--disabled",t.disabled)("mat-mdc-slide-toggle-disabled-interactive",t.disabledInteractive),w("tabIndex",t.disabled&&!t.disabledInteractive?-1:t.tabIndex)("disabled",t.disabled&&!t.disabledInteractive),R("id",t.buttonId)("name",t.name)("aria-label",t.ariaLabel)("aria-labelledby",t._getAriaLabelledBy())("aria-describedby",t.ariaDescribedby)("aria-required",t.required||null)("aria-checked",t.checked)("aria-disabled",t.disabled&&t.disabledInteractive?"true":null),c(9),w("matRippleTrigger",l)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0),c(),f(t.hideIcon?-1:11),c(),w("for",t.buttonId),R("id",t._labelId)}},dependencies:[Ft,ki],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return a})(),xi=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=ee({type:a});static \u0275inj=J({imports:[ye,oe]})}return a})();var Si=(a,n)=>n.label;function Hi(a,n){a&1&&(r(0,"div",16),h(1,"mat-spinner",18),r(2,"p"),s(3,"Loading package\u2026"),o()())}function Gi(a,n){a&1&&(r(0,"mat-error"),s(1,"Required (min 5 chars)"),o())}function ji(a,n){a&1&&(r(0,"mat-error"),s(1,"Required"),o())}function Wi(a,n){a&1&&(r(0,"mat-error"),s(1,"Required \u2014 only a-z, 0-9, hyphens"),o())}function $i(a,n){a&1&&(r(0,"mat-error"),s(1,"Min 1"),o())}function Qi(a,n){a&1&&(r(0,"mat-error"),s(1,"Min 0"),o())}function Xi(a,n){a&1&&(r(0,"mat-error"),s(1,"Required"),o())}function Ui(a,n){a&1&&(r(0,"mat-error"),s(1,"Required"),o())}function Yi(a,n){a&1&&(r(0,"mat-error"),s(1,"Required"),o())}function Ji(a,n){if(a&1&&(r(0,"mat-option",34),s(1),o()),a&2){let e=n.$implicit;w("value",e),c(),L(e)}}function Zi(a,n){a&1&&(r(0,"mat-error"),s(1,"Required"),o())}function en(a,n){a&1&&(r(0,"mat-error"),s(1,"Required"),o())}function tn(a,n){if(a&1&&(r(0,"mat-option",34),s(1),o()),a&2){let e=n.$implicit;w("value",e),c(),L(e)}}function nn(a,n){a&1&&(r(0,"mat-error"),s(1,"Required"),o())}function an(a,n){a&1&&(r(0,"mat-error"),s(1,"Required"),o())}function on(a,n){if(a&1){let e=D();r(0,"mat-chip",62),v("click",function(){let t=b(e).$implicit,l=g(2);return y(l.applySuggestion(t))}),s(1),o()}if(a&2){let e=n.$implicit;w("matTooltip",e.text),c(),I(" ",e.label," ")}}function rn(a,n){a&1&&(r(0,"mat-error"),s(1,"Required (min 50 chars)"),o())}function ln(a,n){if(a&1){let e=D();r(0,"mat-chip-row",63),v("removed",function(){let t=b(e).$implicit,l=g(2);return y(l.removeItem("highlights",t))}),s(1),r(2,"button",64)(3,"mat-icon"),s(4,"cancel"),o()()()}if(a&2){let e=n.$implicit;c(),I(" ",e," ")}}function sn(a,n){if(a&1&&(r(0,"mat-option",34),s(1),o()),a&2){let e=n.$implicit;w("value",e),c(),L(e)}}function cn(a,n){a&1&&(r(0,"div",50)(1,"mat-icon"),s(2,"error_outline"),o(),s(3," Add at least one highlight"),o())}function dn(a,n){if(a&1){let e=D();r(0,"mat-chip-row",63),v("removed",function(){let t=b(e).$implicit,l=g(2);return y(l.removeItem("includes",t))}),s(1),r(2,"button",65)(3,"mat-icon"),s(4,"cancel"),o()()()}if(a&2){let e=n.$implicit;c(),I(" ",e," ")}}function mn(a,n){if(a&1&&(r(0,"mat-option",34),s(1),o()),a&2){let e=n.$implicit;w("value",e),c(),L(e)}}function pn(a,n){a&1&&(r(0,"div",50)(1,"mat-icon"),s(2,"error_outline"),o(),s(3," Add at least one inclusion"),o())}function un(a,n){if(a&1){let e=D();r(0,"mat-chip-row",63),v("removed",function(){let t=b(e).$implicit,l=g(2);return y(l.removeItem("excludes",t))}),s(1),r(2,"button",66)(3,"mat-icon"),s(4,"cancel"),o()()()}if(a&2){let e=n.$implicit;c(),I(" ",e," ")}}function hn(a,n){if(a&1&&(r(0,"mat-option",34),s(1),o()),a&2){let e=n.$implicit;w("value",e),c(),L(e)}}function gn(a,n){a&1&&(r(0,"div",50)(1,"mat-icon"),s(2,"error_outline"),o(),s(3," Add at least one exclusion"),o())}function _n(a,n){if(a&1){let e=D();r(0,"mat-chip",62),v("click",function(){let t=b(e).$implicit,l=g(2);return y(l.applySuggestion(t,"metaDescription"))}),s(1),o()}if(a&2){let e=n.$implicit;w("matTooltip",e.text),c(),I(" ",e.label," ")}}function fn(a,n){a&1&&(r(0,"mat-error"),s(1,"Required (max 160 chars)"),o())}function vn(a,n){if(a&1){let e=D();r(0,"mat-chip-row",63),v("removed",function(){let t=b(e).$implicit,l=g(2);return y(l.removeItem("keywords",t))}),s(1),r(2,"button",67)(3,"mat-icon"),s(4,"cancel"),o()()()}if(a&2){let e=n.$implicit;c(),I(" ",e," ")}}function bn(a,n){if(a&1&&(r(0,"mat-option",34),s(1),o()),a&2){let e=n.$implicit;w("value",e),c(),L(e)}}function yn(a,n){a&1&&(r(0,"div",50)(1,"mat-icon"),s(2,"error_outline"),o(),s(3," Add at least one keyword"),o())}function wn(a,n){a&1&&(r(0,"button",60),h(1,"mat-spinner",68),s(2," Saving\u2026 "),o())}function Cn(a,n){if(a&1&&(r(0,"button",61)(1,"mat-icon"),s(2,"save"),o(),s(3),o()),a&2){let e=g(2);c(3),I(" ",e.isEditMode()?"Update Package":"Add Package"," ")}}function kn(a,n){if(a&1){let e=D();r(0,"form",19),v("ngSubmit",function(){b(e);let t=g();return y(t.onSubmit())}),r(1,"div",20)(2,"mat-card")(3,"mat-card-header")(4,"mat-card-title"),s(5,"Basic Information"),o()(),r(6,"mat-card-content")(7,"mat-form-field",21)(8,"mat-label"),s(9,"Package Title"),o(),h(10,"input",22),k(),_(11,Gi,2,0,"mat-error"),o(),r(12,"mat-form-field",21)(13,"mat-label"),s(14,"Short Title"),o(),h(15,"input",23),k(),_(16,ji,2,0,"mat-error"),o(),r(17,"mat-form-field",21)(18,"mat-label"),s(19,"URL Slug"),o(),h(20,"input",24),k(),r(21,"mat-hint"),s(22,"Lowercase letters, numbers, and hyphens only"),o(),_(23,Wi,2,0,"mat-error"),o(),r(24,"div",25)(25,"mat-form-field",26)(26,"mat-label"),s(27,"Days"),o(),h(28,"input",27),k(),_(29,$i,2,0,"mat-error"),o(),r(30,"mat-form-field",26)(31,"mat-label"),s(32,"Nights"),o(),h(33,"input",28),k(),_(34,Qi,2,0,"mat-error"),o()(),r(35,"mat-form-field",21)(36,"mat-label"),s(37,"Duration Label"),o(),h(38,"input",29),k(),_(39,Xi,2,0,"mat-error"),o(),r(40,"div",25)(41,"mat-form-field",26)(42,"mat-label"),s(43,"Start Location"),o(),h(44,"input",30),k(),_(45,Ui,2,0,"mat-error"),o(),r(46,"mat-form-field",26)(47,"mat-label"),s(48,"End Location"),o(),h(49,"input",31),k(),_(50,Yi,2,0,"mat-error"),o()(),r(51,"div",32)(52,"mat-form-field",26)(53,"mat-label"),s(54,"Difficulty"),o(),r(55,"mat-select",33),E(56,Ji,2,2,"mat-option",34,M),o(),k(),o(),r(58,"mat-form-field",26)(59,"mat-label"),s(60,"Max Altitude"),o(),h(61,"input",35),k(),_(62,Zi,2,0,"mat-error"),o(),r(63,"mat-form-field",26)(64,"mat-label"),s(65,"Group Size"),o(),h(66,"input",36),k(),_(67,en,2,0,"mat-error"),o()(),r(68,"mat-form-field",21)(69,"mat-label"),s(70,"Badge (optional)"),o(),h(71,"input",37),k(),r(72,"mat-icon",38),s(73,"arrow_drop_down"),o(),r(74,"mat-autocomplete",null,0),E(76,tn,2,2,"mat-option",34,M),o(),r(78,"mat-hint"),s(79,"Choose from the list or enter any custom text"),o()()()(),r(80,"mat-card")(81,"mat-card-header")(82,"mat-card-title"),s(83,"Pricing"),o()(),r(84,"mat-card-content")(85,"div",25)(86,"mat-form-field",26)(87,"mat-label"),s(88,"Selling Price (\u20B9)"),o(),h(89,"input",39),k(),r(90,"mat-icon",40),s(91,"currency_rupee"),o(),_(92,nn,2,0,"mat-error"),o(),r(93,"mat-form-field",26)(94,"mat-label"),s(95,"Original Price (\u20B9)"),o(),h(96,"input",41),k(),r(97,"mat-icon",40),s(98,"currency_rupee"),o(),_(99,an,2,0,"mat-error"),o()()()(),r(100,"mat-card")(101,"mat-card-header")(102,"mat-card-title"),s(103,"Description"),o()(),r(104,"mat-card-content")(105,"div",42)(106,"span",43)(107,"mat-icon"),s(108,"auto_awesome"),o(),s(109," Start from a template: "),o(),r(110,"mat-chip-set"),E(111,on,2,2,"mat-chip",44,Si),o()(),r(113,"mat-form-field",21)(114,"mat-label"),s(115,"Overview"),o(),h(116,"textarea",45),k(),r(117,"mat-hint"),s(118,"Pick a template above, then edit it \u2014 or write your own from scratch"),o(),_(119,rn,2,0,"mat-error"),o(),r(120,"mat-form-field",46)(121,"mat-label"),s(122,"Highlights"),o(),r(123,"mat-chip-grid",47,1),E(125,ln,5,1,"mat-chip-row",null,M),o(),r(127,"input",48,2),v("matChipInputTokenEnd",function(t){b(e);let l=g();return y(l.addTyped("highlights",t))})("input",function(){b(e);let t=C(128),l=g();return y(l.onQuery("highlights",t.value))}),o(),r(129,"mat-autocomplete",49,3),v("optionSelected",function(t){b(e);let l=C(128),d=g();return y(d.pickOption("highlights",t,l))}),E(131,sn,2,2,"mat-option",34,M),o(),r(133,"mat-hint"),s(134),o()(),_(135,cn,4,0,"div",50),r(136,"mat-form-field",46)(137,"mat-label"),s(138,"Includes"),o(),r(139,"mat-chip-grid",51,4),E(141,dn,5,1,"mat-chip-row",null,M),o(),r(143,"input",48,5),v("matChipInputTokenEnd",function(t){b(e);let l=g();return y(l.addTyped("includes",t))})("input",function(){b(e);let t=C(144),l=g();return y(l.onQuery("includes",t.value))}),o(),r(145,"mat-autocomplete",49,6),v("optionSelected",function(t){b(e);let l=C(144),d=g();return y(d.pickOption("includes",t,l))}),E(147,mn,2,2,"mat-option",34,M),o(),r(149,"mat-hint"),s(150),o()(),_(151,pn,4,0,"div",50),r(152,"mat-form-field",46)(153,"mat-label"),s(154,"Excludes"),o(),r(155,"mat-chip-grid",52,7),E(157,un,5,1,"mat-chip-row",null,M),o(),r(159,"input",48,8),v("matChipInputTokenEnd",function(t){b(e);let l=g();return y(l.addTyped("excludes",t))})("input",function(){b(e);let t=C(160),l=g();return y(l.onQuery("excludes",t.value))}),o(),r(161,"mat-autocomplete",49,9),v("optionSelected",function(t){b(e);let l=C(160),d=g();return y(d.pickOption("excludes",t,l))}),E(163,hn,2,2,"mat-option",34,M),o(),r(165,"mat-hint"),s(166),o()(),_(167,gn,4,0,"div",50),o()(),r(168,"mat-card")(169,"mat-card-header")(170,"mat-card-title"),s(171,"SEO & Settings"),o()(),r(172,"mat-card-content")(173,"div",42)(174,"span",43)(175,"mat-icon"),s(176,"auto_awesome"),o(),s(177," Start from a template: "),o(),r(178,"mat-chip-set"),E(179,_n,2,2,"mat-chip",44,Si),o()(),r(181,"mat-form-field",21)(182,"mat-label"),s(183,"Meta Description"),o(),h(184,"textarea",53),k(),r(185,"mat-hint",54),s(186),o(),_(187,fn,2,0,"mat-error"),o(),r(188,"mat-form-field",46)(189,"mat-label"),s(190,"Keywords"),o(),r(191,"mat-chip-grid",55,10),E(193,vn,5,1,"mat-chip-row",null,M),o(),r(195,"input",48,11),v("matChipInputTokenEnd",function(t){b(e);let l=g();return y(l.addTyped("keywords",t))})("input",function(){b(e);let t=C(196),l=g();return y(l.onQuery("keywords",t.value))}),o(),r(197,"mat-autocomplete",49,12),v("optionSelected",function(t){b(e);let l=C(196),d=g();return y(d.pickOption("keywords",t,l))}),E(199,bn,2,2,"mat-option",34,M),o(),r(201,"mat-hint"),s(202),o()(),_(203,yn,4,0,"div",50),r(204,"div",56)(205,"mat-slide-toggle",57),s(206," Package Active (visible on website) "),o(),k(),o()()()(),r(207,"div",58)(208,"a",59),s(209,"Cancel"),o(),_(210,wn,3,0,"button",60)(211,Cn,4,1,"button",61),o()()}if(a&2){let e=C(75),i=C(124),t=C(130),l=C(140),d=C(146),A=C(156),$=C(162),Ei=C(192),Oi=C(198),m=g();w("formGroup",m.form),c(10),x(),c(),f(m.isInvalid("title")?11:-1),c(4),x(),c(),f(m.isInvalid("shortTitle")?16:-1),c(4),x(),c(3),f(m.isInvalid("slug")?23:-1),c(5),x(),c(),f(m.isInvalid("days")?29:-1),c(4),x(),c(),f(m.isInvalid("nights")?34:-1),c(4),x(),c(),f(m.isInvalid("duration")?39:-1),c(5),x(),c(),f(m.isInvalid("startLocation")?45:-1),c(4),x(),c(),f(m.isInvalid("endLocation")?50:-1),c(5),x(),c(),O(m.difficulties),c(5),x(),c(),f(m.isInvalid("maxAltitude")?62:-1),c(4),x(),c(),f(m.isInvalid("groupSize")?67:-1),c(4),w("matAutocomplete",e),x(),c(5),O(m.filteredBadges()),c(13),x(),c(3),f(m.isInvalid("price")?92:-1),c(4),x(),c(3),f(m.isInvalid("originalPrice")?99:-1),c(12),O(m.overviewSuggestions),c(5),x(),c(3),f(m.isInvalid("overview")?119:-1),c(6),O(m.items("highlights")),c(2),w("matChipInputFor",i)("matAutocomplete",t)("matChipInputSeparatorKeyCodes",m.separatorKeys)("matChipInputAddOnBlur",!0),c(4),O(m.availableOptions("highlights")),c(3),I("",m.items("highlights").length," selected \u2014 type anything and press Enter, or pick from the list"),c(),f(m.isInvalid("highlights")?135:-1),c(6),O(m.items("includes")),c(2),w("matChipInputFor",l)("matAutocomplete",d)("matChipInputSeparatorKeyCodes",m.separatorKeys)("matChipInputAddOnBlur",!0),c(4),O(m.availableOptions("includes")),c(3),I("",m.items("includes").length," selected \u2014 type anything and press Enter, or pick from the list"),c(),f(m.isInvalid("includes")?151:-1),c(6),O(m.items("excludes")),c(2),w("matChipInputFor",A)("matAutocomplete",$)("matChipInputSeparatorKeyCodes",m.separatorKeys)("matChipInputAddOnBlur",!0),c(4),O(m.availableOptions("excludes")),c(3),I("",m.items("excludes").length," selected \u2014 type anything and press Enter, or pick from the list"),c(),f(m.isInvalid("excludes")?167:-1),c(12),O(m.metaSuggestions),c(5),x(),c(2),I("",m.form.get("metaDescription")?.value?.length??0,"/160"),c(),f(m.isInvalid("metaDescription")?187:-1),c(6),O(m.items("keywords")),c(2),w("matChipInputFor",Ei)("matAutocomplete",Oi)("matChipInputSeparatorKeyCodes",m.separatorKeys)("matChipInputAddOnBlur",!0),c(4),O(m.availableOptions("keywords")),c(3),I("",m.items("keywords").length," keyword(s) \u2014 type anything and press Enter, or pick from the list"),c(),f(m.isInvalid("keywords")?203:-1),c(2),x(),c(5),f(m.isSaving()?210:211)}}var Pi=class a{fb=p(ot);route=p(Ge);router=p(je);pkgService=p(si);firebase=p(Xe);snackbar=p(li);dialog=p(ri);isEditMode=P(!1);isLoading=P(!1);isSaving=P(!1);editId=P(null);difficulties=["Easy","Moderate","Challenging"];form=this.fb.group({title:["",[u.required,u.minLength(5)]],shortTitle:["",[u.required]],slug:["",[u.required,u.pattern(/^[a-z0-9-]+$/)]],duration:["",u.required],days:[1,[u.required,u.min(1)]],nights:[0,[u.required,u.min(0)]],startLocation:["",u.required],endLocation:["",u.required],price:[0,[u.required,u.min(1)]],originalPrice:[0,[u.required,u.min(1)]],difficulty:["Moderate",u.required],maxAltitude:["",u.required],groupSize:["",u.required],badge:[""],overview:["",[u.required,u.minLength(50)]],highlights:[[],u.required],includes:[[],u.required],excludes:[[],u.required],metaDescription:["",[u.required,u.maxLength(160)]],keywords:["",u.required],active:[!0]});badgeOptions=["New","Popular","Adventure","Premium","Best Value","Most Popular"];separatorKeys=[13,188];presets={keywords:["Adi Kailash tour","Om Parvat darshan","Kumaon pilgrimage","Uttarakhand tour packages","Panchachuli trek","Darma Valley trek","Himalayan pilgrimage","Jolingkong lake","Pithoragarh tour","Chota Kailash yatra","Patal Bhuvaneshwar","Kathgodam to Adi Kailash","Inner Line Permit tour","Uttarakhand trekking"],highlights:["Om Parvat natural snow Shivling darshan","Adi Kailash (Chota Kailash) parikrama","Jolingkong Holy Lake & Parvati Sarovar","Panoramic views of Panchachuli peaks","Nabhidhang border viewpoint trek","Sacred Narayan Ashram visit","Patal Bhuvaneshwar cave temple","Overnight stay in Gunji base village","Traditional Bhotiya village experience","Sunrise viewpoint over Himalayan peaks","Scenic drive through inner Himalayan valleys","Jageshwar Dham ancient Shiva temples"],includes:["All accommodation (hotels/guesthouses/camps)","All meals during the tour (breakfast, lunch, dinner)","Private vehicle transportation throughout","Inner Line Permit for restricted border areas","Experienced local guide and support staff","First Aid kit and emergency support","All tolls, parking, and entry fees","Porterage for common equipment","Oxygen cylinder for high-altitude sections","Welcome and farewell transfers"],excludes:["Travel from/to Delhi or your home city","Personal travel insurance","Personal expenses and tips","Any meals not mentioned in the itinerary","Items of personal nature (clothing, trekking gear)","Any activity not included in the program","Cost due to unforeseen circumstances (roadblocks, weather)","Helicopter evacuation charges","Camera/video entry charges","Medical and emergency evacuation costs"]};itemSignals={highlights:P([]),includes:P([]),excludes:P([]),keywords:P([])};queries={highlights:P(""),includes:P(""),excludes:P(""),keywords:P("")};items(n){return this.itemSignals[n]()}onQuery(n,e){this.queries[n].set(e)}availableOptions(n){let e=this.queries[n]().trim().toLowerCase(),i=new Set(this.itemSignals[n]().map(t=>t.toLowerCase()));return this.presets[n].filter(t=>!i.has(t.toLowerCase())).filter(t=>!e||t.toLowerCase().includes(e))}addTyped(n,e){this.addItem(n,e.value),e.chipInput.clear(),this.queries[n].set("")}pickOption(n,e,i){this.addItem(n,e.option.value),i.value="",this.queries[n].set("")}removeItem(n,e){this.setItems(n,this.itemSignals[n]().filter(i=>i!==e))}addItem(n,e){let i=(e??"").trim();if(!i)return;let t=this.itemSignals[n]();t.some(l=>l.toLowerCase()===i.toLowerCase())||this.setItems(n,[...t,i])}setItems(n,e){if(this.itemSignals[n].set(e),n==="keywords"){let t=this.form.controls.keywords;t.setValue(e.join(", ")),t.markAsDirty(),t.markAsTouched();return}let i=this.form.controls[n];i.setValue(e),i.markAsDirty(),i.markAsTouched()}metaSuggestions=[{label:"Spiritual",text:"Join our guided Adi Kailash and Om Parvat yatra through the sacred Kumaon Himalayas. Stays, meals, permits and expert local guides all included."},{label:"Adventure",text:"Trek the Kumaon Himalayas to Panchachuli Base Camp and remote Darma Valley. Certified guides, camping, permits and all meals included."},{label:"Family",text:"A relaxed Himalayan tour for families and senior travellers. Scenic drives, comfortable hotels, home-style meals and easy walks across Kumaon."},{label:"All-inclusive",text:"Explore Adi Kailash, Om Parvat and Panchachuli on an all-inclusive Kumaon tour. Transport, stays, meals and Inner Line Permits handled for you."},{label:"Scenic",text:"Discover Kumaon's finest Himalayan views \u2014 Panchachuli sunrises, alpine meadows and ancient temples. Small groups and all-inclusive pricing."}];overviewSuggestions=[{label:"Spiritual Pilgrimage",text:"Embark on a soul-stirring Himalayan pilgrimage through the sacred heart of Kumaon. Witness the divine Om Parvat, circumambulate the majestic Adi Kailash, and offer prayers beside pristine glacial lakes. Guided by experienced local hosts, this journey blends ancient devotion with breathtaking mountain scenery, offering pilgrims a rare moment of stillness among the eternal snows."},{label:"Adventure Trek",text:"Designed for trekkers who crave genuine high-altitude adventure, this expedition climbs through alpine meadows, glacial moraines, and remote Himalayan valleys. Expect rewarding ascents, spectacular ridge-line views, and nights beneath brilliant star-filled skies. Our certified mountain guides handle permits, logistics, and safety, leaving you free to focus on the trail and the summit panorama ahead."},{label:"Family & Seniors",text:"A comfortable, gently paced Himalayan journey crafted for families and senior travellers. Enjoy scenic mountain drives, warm local hospitality, and unhurried sightseeing with ample time to rest and acclimatise. Comfortable accommodation, home-style meals, and short, easy walks make this an ideal introduction to Kumaon's ancient temples, green valleys, and legendary snow-capped peaks."},{label:"Scenic & Photography",text:"Travel through some of Uttarakhand's most photogenic landscapes, from terraced hillsides and deodar forests to thundering rivers and the five sacred summits of Panchachuli. Sunrise viewpoints, alpine flower meadows, and traditional stone villages offer endless frames for photographers, while unhurried travel days ensure you never have to rush past a perfect moment."},{label:"Culture & Heritage",text:"Discover the living heritage of the Kumaon Himalayas, where centuries-old stone temples, Bhotiya border villages, and mountain folklore remain beautifully intact. Share meals with local families, explore ancient cave shrines, and learn the myths woven into every ridge and river. A journey for travellers who value culture, conversation, and authentic mountain life."}];badgeInput=lt(this.form.controls.badge.valueChanges,{initialValue:""});filteredBadges=qe(()=>{let n=(this.badgeInput()??"").trim().toLowerCase();if(!n)return this.badgeOptions;let e=this.badgeOptions.filter(i=>i.toLowerCase().includes(n));return e.length?e:this.badgeOptions});ngOnInit(){let n=this.route.snapshot.paramMap.get("id");n&&(this.isEditMode.set(!0),this.editId.set(n),this.loadPackage(n)),this.form.get("title").valueChanges.subscribe(i=>{if(!this.isEditMode()){let t=(i??"").toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-");this.form.get("slug").setValue(t,{emitEvent:!1})}});let e=()=>{let i=this.form.get("days").value,t=this.form.get("nights").value;i&&t!==null&&this.form.get("duration").setValue(`${i} Days / ${t} Nights`,{emitEvent:!1})};this.form.get("days").valueChanges.subscribe(e),this.form.get("nights").valueChanges.subscribe(e)}async loadPackage(n){this.isLoading.set(!0);try{let e=$e(this.firebase.db,"packages",n),i=await Qe(e);if(!i.exists())throw new Error("Package not found");let t=de({id:i.id},i.data());this.patchForm(t)}catch{this.snackbar.open("Could not load package.","Close",{duration:4e3}),this.router.navigate(["/admin/dashboard"])}finally{this.isLoading.set(!1)}}patchForm(n){let e=n.highlights??[],i=n.includes??[],t=n.excludes??[];this.form.patchValue(we(de({},n),{highlights:e,includes:i,excludes:t})),this.itemSignals.highlights.set(e),this.itemSignals.includes.set(i),this.itemSignals.excludes.set(t),this.itemSignals.keywords.set((n.keywords??"").split(",").map(l=>l.trim()).filter(Boolean))}buildPayload(){let n=this.form.value;return{title:n.title,shortTitle:n.shortTitle,slug:n.slug,duration:n.duration,days:Number(n.days),nights:Number(n.nights),startLocation:n.startLocation,endLocation:n.endLocation,price:Number(n.price),originalPrice:Number(n.originalPrice),difficulty:n.difficulty,maxAltitude:n.maxAltitude,groupSize:n.groupSize,badge:n.badge??"",overview:n.overview,highlights:n.highlights??[],includes:n.includes??[],excludes:n.excludes??[],metaDescription:n.metaDescription,keywords:n.keywords,active:n.active??!0}}async onSubmit(){if(this.commitPendingChips(),this.form.invalid){this.form.markAllAsTouched();let n=this.invalidFields();console.warn("[PackageForm] Invalid controls:",n),this.snackbar.open(`Please fix: ${n.join(", ")}`,"Close",{duration:8e3});return}this.isSaving.set(!0);try{let n=this.buildPayload();this.isEditMode()?(await this.pkgService.update(this.editId(),n),this.snackbar.open("Package updated successfully!","Close",{duration:3e3})):(await this.pkgService.add(n),this.snackbar.open("Package added successfully!","Close",{duration:3e3})),this.router.navigate(["/admin/dashboard"])}catch(n){let e=n instanceof Error?n.message:String(n);console.error("Save error:",n),this.snackbar.open(`Save failed: ${e}`,"Close",{duration:8e3})}finally{this.isSaving.set(!1)}}applySuggestion(n,e="overview"){if((this.form.controls[e].value??"").trim().length===0){this.setText(e,n.text);return}let l=e==="overview"?"description":"meta description";this.dialog.open(ci,{data:{title:`Replace ${l}?`,message:`This will replace the ${l} you have written with the "${n.label}" template.`,confirmText:"Replace"}}).afterClosed().subscribe(A=>{A&&this.setText(e,n.text)})}setText(n,e){let i=this.form.controls[n];i.setValue(e),i.markAsDirty(),i.markAsTouched()}commitPendingChips(){Object.keys(this.queries).forEach(n=>{let e=this.queries[n]().trim();e&&(this.addItem(n,e),this.queries[n].set(""))})}invalidFields(){let n={title:"Package Title",shortTitle:"Short Title",slug:"URL Slug",duration:"Duration Label",days:"Days",nights:"Nights",startLocation:"Start Location",endLocation:"End Location",price:"Selling Price",originalPrice:"Original Price",difficulty:"Difficulty",maxAltitude:"Max Altitude",groupSize:"Group Size",overview:"Overview",highlights:"Highlights",includes:"Includes",excludes:"Excludes",metaDescription:"Meta Description",keywords:"Keywords"};return Object.keys(this.form.controls).filter(e=>this.form.get(e)?.invalid).map(e=>n[e]??e)}isInvalid(n){let e=this.form.get(n);return!!(e?.invalid&&e?.touched)}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=F({type:a,selectors:[["app-package-form"]],decls:9,vars:2,consts:[["badgeAuto","matAutocomplete"],["highlightsGrid",""],["highlightsInput",""],["highlightsAuto","matAutocomplete"],["includesGrid",""],["includesInput",""],["includesAuto","matAutocomplete"],["excludesGrid",""],["excludesInput",""],["excludesAuto","matAutocomplete"],["keywordsGrid",""],["keywordsInput",""],["keywordsAuto","matAutocomplete"],[1,"form-page"],[1,"form-header"],["mat-icon-button","","routerLink","/admin/dashboard","matTooltip","Back to Dashboard"],[1,"center-spinner"],["novalidate","",3,"formGroup"],["diameter","48"],["novalidate","",3,"ngSubmit","formGroup"],[1,"form-grid"],["appearance","outline",1,"full-width"],["matInput","","formControlName","title","placeholder","e.g. Adi Kailash 6 Day Expedition"],["matInput","","formControlName","shortTitle","placeholder","e.g. Adi Kailash 6 Days"],["matInput","","formControlName","slug","placeholder","e.g. adi-kailash-6-days"],[1,"row-2"],["appearance","outline"],["matInput","","type","number","formControlName","days","min","1"],["matInput","","type","number","formControlName","nights","min","0"],["matInput","","formControlName","duration","placeholder","e.g. 6 Days / 5 Nights"],["matInput","","formControlName","startLocation","placeholder","Kathgodam"],["matInput","","formControlName","endLocation","placeholder","Kathgodam"],[1,"row-3"],["formControlName","difficulty"],[3,"value"],["matInput","","formControlName","maxAltitude","placeholder","5600m"],["matInput","","formControlName","groupSize","placeholder","2\u201315 pax"],["matInput","","formControlName","badge","placeholder","Pick a badge or type your own",3,"matAutocomplete"],["matSuffix",""],["matInput","","type","number","formControlName","price","min","1"],["matPrefix",""],["matInput","","type","number","formControlName","originalPrice","min","1"],[1,"suggestion-row"],[1,"suggestion-label"],["matTooltipClass","suggestion-tooltip",1,"suggestion-chip",3,"matTooltip"],["matInput","","formControlName","overview","rows","6","placeholder","Describe the tour in detail (min 50 characters)\u2026"],["appearance","outline",1,"full-width","chip-field"],["aria-label","Tour highlights"],["placeholder","Choose from the list or type your own, then press Enter",3,"matChipInputTokenEnd","input","matChipInputFor","matAutocomplete","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],[3,"optionSelected"],[1,"chip-error"],["aria-label","What the tour includes"],["aria-label","What the tour excludes"],["matInput","","formControlName","metaDescription","rows","3","placeholder","Max 160 characters \u2014 shown in Google search results"],["align","end"],["aria-label","SEO keywords"],[1,"toggle-row"],["formControlName","active","color","primary"],[1,"form-actions"],["mat-stroked-button","","routerLink","/admin/dashboard"],["mat-flat-button","","color","primary","disabled","",1,"save-btn"],["mat-flat-button","","color","primary","type","submit",1,"save-btn"],["matTooltipClass","suggestion-tooltip",1,"suggestion-chip",3,"click","matTooltip"],[3,"removed"],["matChipRemove","","aria-label","Remove highlight"],["matChipRemove","","aria-label","Remove inclusion"],["matChipRemove","","aria-label","Remove exclusion"],["matChipRemove","","aria-label","Remove keyword"],["diameter","20"]],template:function(e,i){e&1&&(r(0,"div",13)(1,"div",14)(2,"a",15)(3,"mat-icon"),s(4,"arrow_back"),o()(),r(5,"h1"),s(6),o()(),_(7,Hi,4,0,"div",16)(8,kn,212,42,"form",17),o()),e&2&&(c(6),L(i.isEditMode()?"Edit Package":"Add New Package"),c(),f(i.isLoading()?7:8))},dependencies:[He,rt,tt,Ue,it,Ze,et,Je,at,nt,We,ut,ct,mt,pt,dt,At,It,kt,St,xt,Pt,Et,Tt,Mt,_i,gi,se,Ci,wi,be,Vt,Rt,Lt,Nt,zt,xi,ye,Bt,qt,Jt,Yt,Ut,oi,ei,ni,ai,Zt,ti,ii],styles:[".form-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.form-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.form-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.center-spinner[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;padding:64px;color:#666}.form-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;padding-top:8px!important}.full-width[_ngcontent-%COMP%]{width:100%}.chip-error[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;margin:-14px 0 14px 14px;font-size:.75rem;color:#b00020}.chip-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.chip-field[_ngcontent-%COMP%]     .mat-mdc-chip-set .mdc-evolution-chip-set__chips{flex-wrap:wrap}.chip-field[_ngcontent-%COMP%]     .mat-mdc-chip{max-width:100%}.suggestion-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:14px}.suggestion-row[_ngcontent-%COMP%]   .suggestion-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;font-size:.825rem;font-weight:600;color:#555}.suggestion-row[_ngcontent-%COMP%]   .suggestion-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:#3f51b5}.suggestion-row[_ngcontent-%COMP%]   .suggestion-chip[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .15s ease}.suggestion-row[_ngcontent-%COMP%]   .suggestion-chip[_ngcontent-%COMP%]:hover{background-color:#e8eaf6}  .suggestion-tooltip{font-size:.75rem!important;line-height:1.5!important;max-width:320px!important;white-space:pre-wrap!important}.row-2[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:16px}@media(max-width:600px){.row-2[_ngcontent-%COMP%]{grid-template-columns:1fr}}.row-3[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px}@media(max-width:700px){.row-3[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media(max-width:480px){.row-3[_ngcontent-%COMP%]{grid-template-columns:1fr}}.toggle-row[_ngcontent-%COMP%]{padding:8px 0 4px}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:12px;padding-bottom:16px}.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .form-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;height:44px;padding:0 20px}.save-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.save-btn[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{display:inline-block}"]})};export{Pi as PackageFormComponent};
