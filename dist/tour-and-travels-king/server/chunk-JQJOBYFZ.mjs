import './polyfills.server.mjs';
import{a as Re,b as li,c as si}from"./chunk-HWWCESQZ.mjs";import{a as xi}from"./chunk-EYMUVXXH.mjs";import{b as Si,c as Oi,d as Mi,e as Ei,f as Ii,g as Pi,h as Ai,i as Ti,j as Fi,k as Di,l as Ri,m as Li}from"./chunk-4TOXNNVI.mjs";import{a as Nt,b as Bt,c as zt,e as qt,f as Kt,g as Xt,h as Jt,i as Zt,j as ei,k as ti,l as ii,m as De,n as ni,o as ai,p as oi,q as ri,r as gi,s as _i}from"./chunk-6D6IUIVG.mjs";import{a as Ee,b as St,c as Ot,d as f,e as Mt,f as Et,g as It,h as Pt,i as At,j as Tt,k as Ft,l as Dt,m as Ie,q as Rt,r as Lt}from"./chunk-CZ4VGVNE.mjs";import{A as ki,e as Ne,g as Be,j as fi,o as ze,p as bi,s as vi,u as yi,v as wi,w as et,x as tt,y as qe,z as Ci}from"./chunk-LACXFZEM.mjs";import{E as Yt,G as X,I as Le,K as Ve,L as ci,M as di,N as mi,O as pi,P as hi,Q as ui,a as Pe,b as G,c as Ht,d as Ae,e as jt,h as Wt,i as Te,j as Gt,k as Qt,m as $t,q as Ut,s as Q,t as Fe,v as te}from"./chunk-G44CXGBZ.mjs";import{b as Vt}from"./chunk-FOMMVNGQ.mjs";import{b as Ct,g as kt,p as xt}from"./chunk-Q2OS6GK6.mjs";import{D as vt,G as yt,H as wt,h as bt}from"./chunk-7EYZW2GW.mjs";import{$b as B,Aa as se,Ac as ft,C as Ce,D as lt,Db as R,Dc as Me,Ea as U,Eb as u,Fb as g,Gb as z,Hb as L,Ib as V,Jb as v,Kb as l,Lb as o,M as he,Mb as _,N as ae,Nb as Je,O as le,Ob as Ze,Q as st,Rc as Y,T as ke,Tb as j,Ub as ce,V as K,X as N,Xb as b,Yc as y,Z as m,Zb as h,Zc as ge,_b as W,a as ye,aa as ct,ab as pt,ac as Oe,bb as c,bc as Z,c as Ue,ca as w,cb as ht,cc as E,da as C,dc as I,e as $,ea as xe,eb as Se,fb as S,ga as ue,gb as O,hc as k,jc as D,ka as T,kb as ut,kc as de,l as Ye,la as dt,lc as s,mc as q,nc as A,p as pe,pa as M,pb as F,qb as H,qc as ee,rb as Xe,u as we,w as J,wb as gt,x as re,xb as _t,ya as mt}from"./chunk-HJUNQA25.mjs";import{a as $e,b as rt}from"./chunk-N7QBYMCK.mjs";var Vi=(()=>{class n{_animationsDisabled=X();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=F({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,i){t&2&&D("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return n})();var Yi=["text"],Xi=[[["mat-icon"]],"*"],Ji=["mat-icon","*"];function Zi(n,a){if(n&1&&_(0,"mat-pseudo-checkbox",1),n&2){let e=h();v("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function en(n,a){if(n&1&&_(0,"mat-pseudo-checkbox",3),n&2){let e=h();v("disabled",e.disabled)}}function tn(n,a){if(n&1&&(l(0,"span",4),s(1),o()),n&2){let e=h();c(),A("(",e.group.label,")")}}var fe=new N("MAT_OPTION_PARENT_COMPONENT"),be=new N("MatOptgroup");var _e=class{source;isUserInput;constructor(a,e=!1){this.source=a,this.isUserInput=e}},ne=(()=>{class n{_element=m(U);_changeDetectorRef=m(Y);_parent=m(fe,{optional:!0});group=m(be,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=m(te).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=M(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new T;_text;_stateChanges=new $;constructor(){let e=m(Te);e.load(Ve),e.load(Gt),this._signalDisableRipple=!!this._parent&&mt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Q(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new _e(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=F({type:n,selectors:[["mat-option"]],viewQuery:function(t,i){if(t&1&&Z(Yi,7),t&2){let r;E(r=I())&&(i._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,i){t&1&&b("click",function(){return i._selectViaInteraction()})("keydown",function(d){return i._handleKeydown(d)}),t&2&&(ce("id",i.id),R("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),D("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",y]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Ji,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){t&1&&(W(Xi),u(0,Zi,1,2,"mat-pseudo-checkbox",1),B(1),l(2,"span",2,0),B(4,1),o(),u(5,en,1,1,"mat-pseudo-checkbox",3),u(6,tn,2,1,"span",4),_(7,"div",5)),t&2&&(g(i.multiple?0:-1),c(5),g(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),c(),g(i.group&&i.group._inert?6:-1),c(),v("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[Vi,Le],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();function He(n,a,e){if(e.length){let t=a.toArray(),i=e.toArray(),r=0;for(let d=0;d<n+1;d++)t[d].group&&t[d].group===i[r]&&r++;return r}return 0}function je(n,a,e,t){return n<e?n:n+a>e+t?Math.max(0,n-t+a):e}var Ni=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=K({imports:[G]})}return n})();var me=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=K({imports:[di,Ni,ne,G]})}return n})();var rn=["trigger"],ln=["panel"],sn=[[["mat-select-trigger"]],"*"],cn=["mat-select-trigger","*"];function dn(n,a){if(n&1&&(l(0,"span",4),s(1),o()),n&2){let e=h();c(),q(e.placeholder)}}function mn(n,a){n&1&&B(0)}function pn(n,a){if(n&1&&(l(0,"span",11),s(1),o()),n&2){let e=h(2);c(),q(e.triggerValue)}}function hn(n,a){if(n&1&&(l(0,"span",5),u(1,mn,1,0)(2,pn,2,1,"span",11),o()),n&2){let e=h();c(),g(e.customTrigger?1:2)}}function un(n,a){if(n&1){let e=j();l(0,"div",12,1),b("keydown",function(i){w(e);let r=h();return C(r._handleKeydown(i))}),B(2,1),o()}if(n&2){let e=h();de(e.panelClass),D("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),R("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var gn=new N("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(ue);return()=>ze(n)}}),_n=new N("MAT_SELECT_CONFIG"),fn=new N("MatSelectTrigger"),it=class{source;value;constructor(a,e){this.source=a,this.value=e}},Bi=(()=>{class n{_viewportRuler=m(Ne);_changeDetectorRef=m(Y);_elementRef=m(U);_dir=m(Pe,{optional:!0});_idGenerator=m(te);_renderer=m(Se);_parentFormField=m(De,{optional:!0});ngControl=m(Et,{self:!0,optional:!0});_liveAnnouncer=m(Ut);_defaultOptions=m(_n,{optional:!0});_animationsDisabled=X();_popoverLocation;_initialized=new $;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,r=He(e,this.options,this.optionGroups),d=t._getHostElement();e===0&&r===1?i.scrollTop=0:i.scrollTop=je(d.offsetTop,d.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new it(this,e)}_scrollStrategyFactory=m(gn);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new $;_errorStateTracker;stateChanges=new $;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=M(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(f.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=we(()=>{let e=this.options;return e?e.changes.pipe(he(e),ae(()=>J(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(ae(()=>this.optionSelectionChanges))});openedChange=new T;_openedStream=this.openedChange.pipe(re(e=>e),pe(()=>{}));_closedStream=this.openedChange.pipe(re(e=>!e),pe(()=>{}));selectionChange=new T;valueChange=new T;constructor(){let e=m(oi),t=m(At,{optional:!0}),i=m(Ie,{optional:!0}),r=m(new Me("tabindex"),{optional:!0}),d=m(yi,{optional:!0}),x=m(ai,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ri(e,x||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=d?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Si(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(le(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(le(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(he(null),le(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Ce(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,r=t===13||t===32,d=this._keyManager;if(!d.isTyping()&&r&&!Q(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let x=this.selected;d.onKeydown(e);let P=this.selected;P&&x!==P&&this._liveAnnouncer.announce(P.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,r=i===40||i===38,d=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!d&&(i===13||i===32)&&t.activeItem&&!Q(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!d&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let x=this.options.some(P=>!P.disabled&&!P.selected);this.options.forEach(P=>{P.disabled||(x?P.select():P.deselect())})}else{let x=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==x&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Q(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof et?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Fe(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=J(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(le(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),J(...this.options.map(t=>t._stateChanges)).pipe(le(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Ae(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=F({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,r){if(t&1&&Oe(r,fn,5)(r,ne,5)(r,be,5),t&2){let d;E(d=I())&&(i.customTrigger=d.first),E(d=I())&&(i.options=d),E(d=I())&&(i.optionGroups=d)}},viewQuery:function(t,i){if(t&1&&Z(rn,5)(ln,5)(tt,5),t&2){let r;E(r=I())&&(i.trigger=r.first),E(r=I())&&(i.panel=r.first),E(r=I())&&(i._overlayDir=r.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&b("keydown",function(d){return i._handleKeydown(d)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(R("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),D("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",y],disableRipple:[2,"disableRipple","disableRipple",y],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ge(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",y],placeholder:"placeholder",required:[2,"required","required",y],multiple:[2,"multiple","multiple",y],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",y],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",ge],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",y]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ee([{provide:ii,useExisting:n},{provide:fe,useExisting:n}]),se],ngContentSelectors:cn,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(W(sn),l(0,"div",2,0),b("click",function(){return i.open()}),l(3,"div",3),u(4,dn,2,1,"span",4)(5,hn,3,1,"span",5),o(),l(6,"div",6)(7,"div",7),xe(),l(8,"svg",8),_(9,"path",9),o()()()(),gt(10,un,3,16,"ng-template",10),b("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(d){return i._handleOverlayKeydown(d)})),t&2){let r=k(1);c(3),R("id",i._valueId),c(),g(i.empty?4:5),c(6),v("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[et,tt],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return n})();var zi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=K({imports:[qe,me,G,Be,Re,me]})}return n})();var yn=["panel"],wn=["*"];function Cn(n,a){if(n&1&&(Je(0,"div",1,0),B(2),Ze()),n&2){let e=a.id,t=h();de(t._classList),D("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),ce("id",t.id),R("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var nt=class{source;option;constructor(a,e){this.source=a,this.option=e}},qi=new N("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),Ki=(()=>{class n{_changeDetectorRef=m(Y);_elementRef=m(U);_defaults=m(qi);_animationsDisabled=X();_activeOptionChanges=ye.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new T;opened=new T;closed=new T;optionActivated=new T;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=m(te).getId("mat-autocomplete-");inertGroups;constructor(){let e=m(jt);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Fe(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new nt(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=F({type:n,selectors:[["mat-autocomplete"]],contentQueries:function(t,i,r){if(t&1&&Oe(r,ne,5)(r,be,5),t&2){let d;E(d=I())&&(i.options=d),E(d=I())&&(i.optionGroups=d)}},viewQuery:function(t,i){if(t&1&&Z(ht,7)(yn,5),t&2){let r;E(r=I())&&(i.template=r.first),E(r=I())&&(i.panel=r.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",y],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",y],requireSelection:[2,"requireSelection","requireSelection",y],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",y],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",y]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[ee([{provide:fe,useExisting:n}])],ngContentSelectors:wn,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,i){t&1&&(W(),_t(0,Cn,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2})}return n})();var kn={provide:Ee,useExisting:ke(()=>at),multi:!0};var xn=new N("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(ue);return()=>ze(n)}}),at=(()=>{class n{_environmentInjector=m(ct);_element=m(U);_injector=m(ue);_viewContainerRef=m(ut);_zone=m(dt);_changeDetectorRef=m(Y);_dir=m(Pe,{optional:!0});_formField=m(De,{optional:!0,host:!0});_viewportRuler=m(Ne);_scrollStrategy=m(xn);_renderer=m(Se);_animationsDisabled=X();_defaults=m(qi,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new $;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=ye.EMPTY;_breakpointObserver=m($t);_handsetLandscapeSubscription=ye.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new $;_overlayPanelClass=Qt(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return J(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(re(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(re(()=>this._overlayAttached)):Ye()).pipe(pe(e=>e instanceof _e?e:null))}optionSelections=we(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(he(e),ae(()=>J(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(ae(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new Ue(e=>{let t=r=>{let d=Ae(r),x=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,P=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&d!==this._element.nativeElement&&!this._hasFocus()&&(!x||!x.contains(d))&&(!P||!P.contains(d))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(d)&&e.next(r)},i=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{i.forEach(r=>r())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,i=t.keyCode,r=Q(t);if(i===27&&!r&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&i===13&&this.panelOpen&&!r)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let d=this.autocomplete._keyManager.activeItem,x=i===38||i===40;i===9||x&&!r&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):x&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(x||this.autocomplete._keyManager.activeItem!==d)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,i=t.value;if(t.type==="number"&&(i=i==""?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let r=this.autocomplete.options?.find(d=>d.selected);if(r){let d=this._getDisplayValue(r.value);i!==d&&r.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let r=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(r)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Ht()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new Ue(i=>{pt(()=>{i.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(st(()=>this._positionStrategy.reapplyLastPosition()),lt(0))??Ye();return J(e,t).pipe(ae(()=>this._zone.run(()=>{let i=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),i!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Ce(1)).subscribe(i=>this._setValueAndClose(i))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,i=e?e.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),t._emitSelectEvent(i),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(i=>{i!==e&&i.selected&&i.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){this._attachOverlay(e),this._floatLabel()}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new fi(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=wi(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Yt.HandsetLandscape).subscribe(r=>{r.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this.panelOpen&&i!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Q(e)||e.keyCode===38&&Q(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new bi({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=vi(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,r=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}],d;this.position==="above"?d=r:this.position==="below"?d=t:d=[...t,...r],e.withPositions(d)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let i=0;i<e.options.length;i++)if(!e.options.get(i).disabled){t=i;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,i=He(e,t.options,t.optionGroups);if(e===0&&i===1)t._setScrollTop(0);else if(t.panel){let r=t.options.toArray()[e];if(r){let d=r._getHostElement(),x=je(d.offsetTop,d.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(x)}}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=Xe({type:n,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,i){t&1&&b("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(d){return i._handleInput(d)})("keydown",function(d){return i._handleKeydown(d)})("click",function(){return i._handleClick()}),t&2&&R("autocomplete",i.autocompleteAttribute)("role",i.autocompleteDisabled?null:"combobox")("aria-autocomplete",i.autocompleteDisabled?null:"list")("aria-activedescendant",i.panelOpen&&i.activeOption?i.activeOption.id:null)("aria-expanded",i.autocompleteDisabled?null:i.panelOpen.toString())("aria-controls",i.autocompleteDisabled||!i.panelOpen?null:i.autocomplete?.id)("aria-haspopup",i.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",y]},exportAs:["matAutocompleteTrigger"],features:[ee([kn]),se]})}return n})(),Hi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=K({imports:[qe,me,Be,me,G]})}return n})();var On=["*"],ji=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=F({type:n,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,i){t&2&&D("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:On,decls:1,vars:0,template:function(t,i){t&1&&(W(),B(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2})}return n})();var Mn=["switch"],En=["*"];function In(n,a){n&1&&(l(0,"span",11),xe(),l(1,"svg",13),_(2,"path",14),o(),l(3,"svg",15),_(4,"path",16),o()())}var Pn=new N("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Qe=class{source;checked;constructor(a,e){this.source=a,this.checked=e}},ot=(()=>{class n{_elementRef=m(U);_focusMonitor=m(Wt);_changeDetectorRef=m(Y);defaults=m(Pn);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Qe(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=X();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new T;toggleChange=new T;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){m(Te).load(Ve);let e=m(new Me("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=m(te).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Qe(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=F({type:n,selectors:[["mat-slide-toggle"]],viewQuery:function(t,i){if(t&1&&Z(Mn,5),t&2){let r;E(r=I())&&(i._switchElement=r.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,i){t&2&&(ce("id",i.id),R("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),de(i.color?"mat-"+i.color:""),D("mat-mdc-slide-toggle-focused",i._focused)("mat-mdc-slide-toggle-checked",i.checked)("_mat-animation-noopable",i._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",y],color:"color",disabled:[2,"disabled","disabled",y],disableRipple:[2,"disableRipple","disableRipple",y],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ge(e)],checked:[2,"checked","checked",y],hideIcon:[2,"hideIcon","hideIcon",y],disabledInteractive:[2,"disabledInteractive","disabledInteractive",y]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[ee([{provide:Ee,useExisting:ke(()=>n),multi:!0},{provide:Ot,useExisting:n,multi:!0}]),se],ngContentSelectors:En,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,i){if(t&1&&(W(),l(0,"div",1)(1,"button",2,0),b("click",function(){return i._handleClick()}),_(3,"div",3)(4,"span",4),l(5,"span",5)(6,"span",6)(7,"span",7),_(8,"span",8),o(),l(9,"span",9),_(10,"span",10),o(),u(11,In,5,0,"span",11),o()()(),l(12,"label",12),b("click",function(d){return d.stopPropagation()}),B(13),o()()),t&2){let r=k(2);v("labelPosition",i.labelPosition),c(),D("mdc-switch--selected",i.checked)("mdc-switch--unselected",!i.checked)("mdc-switch--checked",i.checked)("mdc-switch--disabled",i.disabled)("mat-mdc-slide-toggle-disabled-interactive",i.disabledInteractive),v("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex)("disabled",i.disabled&&!i.disabledInteractive),R("id",i.buttonId)("name",i.name)("aria-label",i.ariaLabel)("aria-labelledby",i._getAriaLabelledBy())("aria-describedby",i.ariaDescribedby)("aria-required",i.required||null)("aria-checked",i.checked)("aria-disabled",i.disabled&&i.disabledInteractive?"true":null),c(9),v("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),c(),g(i.hideIcon?-1:11),c(),v("for",i.buttonId),R("id",i._labelId)}},dependencies:[Le,ji],styles:[`.mdc-switch {
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
`],encapsulation:2})}return n})(),Wi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=K({imports:[ot,G]})}return n})();var Gi=(n,a)=>a.label;function Tn(n,a){n&1&&(l(0,"div",16),_(1,"mat-spinner",18),l(2,"p"),s(3,"Loading package\u2026"),o()())}function Fn(n,a){n&1&&(l(0,"mat-error"),s(1,"Required (min 5 chars)"),o())}function Dn(n,a){n&1&&(l(0,"mat-error"),s(1,"Required"),o())}function Rn(n,a){n&1&&(l(0,"mat-error"),s(1,"Required \u2014 only a-z, 0-9, hyphens"),o())}function Ln(n,a){n&1&&(l(0,"mat-error"),s(1,"Min 1"),o())}function Vn(n,a){n&1&&(l(0,"mat-error"),s(1,"Min 0"),o())}function Nn(n,a){n&1&&(l(0,"mat-error"),s(1,"Required"),o())}function Bn(n,a){n&1&&(l(0,"mat-error"),s(1,"Required"),o())}function zn(n,a){n&1&&(l(0,"mat-error"),s(1,"Required"),o())}function qn(n,a){if(n&1&&(l(0,"mat-option",34),s(1),o()),n&2){let e=a.$implicit;v("value",e),c(),q(e)}}function Kn(n,a){n&1&&(l(0,"mat-error"),s(1,"Required"),o())}function Hn(n,a){n&1&&(l(0,"mat-error"),s(1,"Required"),o())}function jn(n,a){if(n&1&&(l(0,"mat-option",34),s(1),o()),n&2){let e=a.$implicit;v("value",e),c(),q(e)}}function Wn(n,a){n&1&&(l(0,"mat-error"),s(1,"Required"),o())}function Gn(n,a){n&1&&(l(0,"mat-error"),s(1,"Required"),o())}function Qn(n,a){if(n&1){let e=j();l(0,"mat-chip",62),b("click",function(){let i=w(e).$implicit,r=h(2);return C(r.applySuggestion(i))}),s(1),o()}if(n&2){let e=a.$implicit;v("matTooltip",e.text),c(),A(" ",e.label," ")}}function $n(n,a){n&1&&(l(0,"mat-error"),s(1,"Required (min 50 chars)"),o())}function Un(n,a){if(n&1){let e=j();l(0,"mat-chip-row",63),b("removed",function(){let i=w(e).$implicit,r=h(2);return C(r.removeItem("highlights",i))}),s(1),l(2,"button",64)(3,"mat-icon"),s(4,"cancel"),o()()()}if(n&2){let e=a.$implicit;c(),A(" ",e," ")}}function Yn(n,a){if(n&1&&(l(0,"mat-option",34),s(1),o()),n&2){let e=a.$implicit;v("value",e),c(),q(e)}}function Xn(n,a){n&1&&(l(0,"div",50)(1,"mat-icon"),s(2,"error_outline"),o(),s(3," Add at least one highlight"),o())}function Jn(n,a){if(n&1){let e=j();l(0,"mat-chip-row",63),b("removed",function(){let i=w(e).$implicit,r=h(2);return C(r.removeItem("includes",i))}),s(1),l(2,"button",65)(3,"mat-icon"),s(4,"cancel"),o()()()}if(n&2){let e=a.$implicit;c(),A(" ",e," ")}}function Zn(n,a){if(n&1&&(l(0,"mat-option",34),s(1),o()),n&2){let e=a.$implicit;v("value",e),c(),q(e)}}function ea(n,a){n&1&&(l(0,"div",50)(1,"mat-icon"),s(2,"error_outline"),o(),s(3," Add at least one inclusion"),o())}function ta(n,a){if(n&1){let e=j();l(0,"mat-chip-row",63),b("removed",function(){let i=w(e).$implicit,r=h(2);return C(r.removeItem("excludes",i))}),s(1),l(2,"button",66)(3,"mat-icon"),s(4,"cancel"),o()()()}if(n&2){let e=a.$implicit;c(),A(" ",e," ")}}function ia(n,a){if(n&1&&(l(0,"mat-option",34),s(1),o()),n&2){let e=a.$implicit;v("value",e),c(),q(e)}}function na(n,a){n&1&&(l(0,"div",50)(1,"mat-icon"),s(2,"error_outline"),o(),s(3," Add at least one exclusion"),o())}function aa(n,a){if(n&1){let e=j();l(0,"mat-chip",62),b("click",function(){let i=w(e).$implicit,r=h(2);return C(r.applySuggestion(i,"metaDescription"))}),s(1),o()}if(n&2){let e=a.$implicit;v("matTooltip",e.text),c(),A(" ",e.label," ")}}function oa(n,a){n&1&&(l(0,"mat-error"),s(1,"Required (max 160 chars)"),o())}function ra(n,a){if(n&1){let e=j();l(0,"mat-chip-row",63),b("removed",function(){let i=w(e).$implicit,r=h(2);return C(r.removeItem("keywords",i))}),s(1),l(2,"button",67)(3,"mat-icon"),s(4,"cancel"),o()()()}if(n&2){let e=a.$implicit;c(),A(" ",e," ")}}function la(n,a){if(n&1&&(l(0,"mat-option",34),s(1),o()),n&2){let e=a.$implicit;v("value",e),c(),q(e)}}function sa(n,a){n&1&&(l(0,"div",50)(1,"mat-icon"),s(2,"error_outline"),o(),s(3," Add at least one keyword"),o())}function ca(n,a){n&1&&(l(0,"button",60),_(1,"mat-spinner",68),s(2," Saving\u2026 "),o())}function da(n,a){if(n&1&&(l(0,"button",61)(1,"mat-icon"),s(2,"save"),o(),s(3),o()),n&2){let e=h(2);c(3),A(" ",e.isEditMode()?"Update Package":"Add Package"," ")}}function ma(n,a){if(n&1){let e=j();l(0,"form",19),b("ngSubmit",function(){w(e);let i=h();return C(i.onSubmit())}),l(1,"div",20)(2,"mat-card")(3,"mat-card-header")(4,"mat-card-title"),s(5,"Basic Information"),o()(),l(6,"mat-card-content")(7,"mat-form-field",21)(8,"mat-label"),s(9,"Package Title"),o(),_(10,"input",22),S(),u(11,Fn,2,0,"mat-error"),o(),l(12,"mat-form-field",21)(13,"mat-label"),s(14,"Short Title"),o(),_(15,"input",23),S(),u(16,Dn,2,0,"mat-error"),o(),l(17,"mat-form-field",21)(18,"mat-label"),s(19,"URL Slug"),o(),_(20,"input",24),S(),l(21,"mat-hint"),s(22,"Lowercase letters, numbers, and hyphens only"),o(),u(23,Rn,2,0,"mat-error"),o(),l(24,"div",25)(25,"mat-form-field",26)(26,"mat-label"),s(27,"Days"),o(),_(28,"input",27),S(),u(29,Ln,2,0,"mat-error"),o(),l(30,"mat-form-field",26)(31,"mat-label"),s(32,"Nights"),o(),_(33,"input",28),S(),u(34,Vn,2,0,"mat-error"),o()(),l(35,"mat-form-field",21)(36,"mat-label"),s(37,"Duration Label"),o(),_(38,"input",29),S(),u(39,Nn,2,0,"mat-error"),o(),l(40,"div",25)(41,"mat-form-field",26)(42,"mat-label"),s(43,"Start Location"),o(),_(44,"input",30),S(),u(45,Bn,2,0,"mat-error"),o(),l(46,"mat-form-field",26)(47,"mat-label"),s(48,"End Location"),o(),_(49,"input",31),S(),u(50,zn,2,0,"mat-error"),o()(),l(51,"div",32)(52,"mat-form-field",26)(53,"mat-label"),s(54,"Difficulty"),o(),l(55,"mat-select",33),L(56,qn,2,2,"mat-option",34,z),o(),S(),o(),l(58,"mat-form-field",26)(59,"mat-label"),s(60,"Max Altitude"),o(),_(61,"input",35),S(),u(62,Kn,2,0,"mat-error"),o(),l(63,"mat-form-field",26)(64,"mat-label"),s(65,"Group Size"),o(),_(66,"input",36),S(),u(67,Hn,2,0,"mat-error"),o()(),l(68,"mat-form-field",21)(69,"mat-label"),s(70,"Badge (optional)"),o(),_(71,"input",37),S(),l(72,"mat-icon",38),s(73,"arrow_drop_down"),o(),l(74,"mat-autocomplete",null,0),L(76,jn,2,2,"mat-option",34,z),o(),l(78,"mat-hint"),s(79,"Choose from the list or enter any custom text"),o()()()(),l(80,"mat-card")(81,"mat-card-header")(82,"mat-card-title"),s(83,"Pricing"),o()(),l(84,"mat-card-content")(85,"div",25)(86,"mat-form-field",26)(87,"mat-label"),s(88,"Selling Price (\u20B9)"),o(),_(89,"input",39),S(),l(90,"mat-icon",40),s(91,"currency_rupee"),o(),u(92,Wn,2,0,"mat-error"),o(),l(93,"mat-form-field",26)(94,"mat-label"),s(95,"Original Price (\u20B9)"),o(),_(96,"input",41),S(),l(97,"mat-icon",40),s(98,"currency_rupee"),o(),u(99,Gn,2,0,"mat-error"),o()()()(),l(100,"mat-card")(101,"mat-card-header")(102,"mat-card-title"),s(103,"Description"),o()(),l(104,"mat-card-content")(105,"div",42)(106,"span",43)(107,"mat-icon"),s(108,"auto_awesome"),o(),s(109," Start from a template: "),o(),l(110,"mat-chip-set"),L(111,Qn,2,2,"mat-chip",44,Gi),o()(),l(113,"mat-form-field",21)(114,"mat-label"),s(115,"Overview"),o(),_(116,"textarea",45),S(),l(117,"mat-hint"),s(118,"Pick a template above, then edit it \u2014 or write your own from scratch"),o(),u(119,$n,2,0,"mat-error"),o(),l(120,"mat-form-field",46)(121,"mat-label"),s(122,"Highlights"),o(),l(123,"mat-chip-grid",47,1),L(125,Un,5,1,"mat-chip-row",null,z),o(),l(127,"input",48,2),b("matChipInputTokenEnd",function(i){w(e);let r=h();return C(r.addTyped("highlights",i))})("input",function(){w(e);let i=k(128),r=h();return C(r.onQuery("highlights",i.value))}),o(),l(129,"mat-autocomplete",49,3),b("optionSelected",function(i){w(e);let r=k(128),d=h();return C(d.pickOption("highlights",i,r))}),L(131,Yn,2,2,"mat-option",34,z),o(),l(133,"mat-hint"),s(134),o()(),u(135,Xn,4,0,"div",50),l(136,"mat-form-field",46)(137,"mat-label"),s(138,"Includes"),o(),l(139,"mat-chip-grid",51,4),L(141,Jn,5,1,"mat-chip-row",null,z),o(),l(143,"input",48,5),b("matChipInputTokenEnd",function(i){w(e);let r=h();return C(r.addTyped("includes",i))})("input",function(){w(e);let i=k(144),r=h();return C(r.onQuery("includes",i.value))}),o(),l(145,"mat-autocomplete",49,6),b("optionSelected",function(i){w(e);let r=k(144),d=h();return C(d.pickOption("includes",i,r))}),L(147,Zn,2,2,"mat-option",34,z),o(),l(149,"mat-hint"),s(150),o()(),u(151,ea,4,0,"div",50),l(152,"mat-form-field",46)(153,"mat-label"),s(154,"Excludes"),o(),l(155,"mat-chip-grid",52,7),L(157,ta,5,1,"mat-chip-row",null,z),o(),l(159,"input",48,8),b("matChipInputTokenEnd",function(i){w(e);let r=h();return C(r.addTyped("excludes",i))})("input",function(){w(e);let i=k(160),r=h();return C(r.onQuery("excludes",i.value))}),o(),l(161,"mat-autocomplete",49,9),b("optionSelected",function(i){w(e);let r=k(160),d=h();return C(d.pickOption("excludes",i,r))}),L(163,ia,2,2,"mat-option",34,z),o(),l(165,"mat-hint"),s(166),o()(),u(167,na,4,0,"div",50),o()(),l(168,"mat-card")(169,"mat-card-header")(170,"mat-card-title"),s(171,"SEO & Settings"),o()(),l(172,"mat-card-content")(173,"div",42)(174,"span",43)(175,"mat-icon"),s(176,"auto_awesome"),o(),s(177," Start from a template: "),o(),l(178,"mat-chip-set"),L(179,aa,2,2,"mat-chip",44,Gi),o()(),l(181,"mat-form-field",21)(182,"mat-label"),s(183,"Meta Description"),o(),_(184,"textarea",53),S(),l(185,"mat-hint",54),s(186),o(),u(187,oa,2,0,"mat-error"),o(),l(188,"mat-form-field",46)(189,"mat-label"),s(190,"Keywords"),o(),l(191,"mat-chip-grid",55,10),L(193,ra,5,1,"mat-chip-row",null,z),o(),l(195,"input",48,11),b("matChipInputTokenEnd",function(i){w(e);let r=h();return C(r.addTyped("keywords",i))})("input",function(){w(e);let i=k(196),r=h();return C(r.onQuery("keywords",i.value))}),o(),l(197,"mat-autocomplete",49,12),b("optionSelected",function(i){w(e);let r=k(196),d=h();return C(d.pickOption("keywords",i,r))}),L(199,la,2,2,"mat-option",34,z),o(),l(201,"mat-hint"),s(202),o()(),u(203,sa,4,0,"div",50),l(204,"div",56)(205,"mat-slide-toggle",57),s(206," Package Active (visible on website) "),o(),S(),o()()()(),l(207,"div",58)(208,"a",59),s(209,"Cancel"),o(),u(210,ca,3,0,"button",60)(211,da,4,1,"button",61),o()()}if(n&2){let e=k(75),t=k(124),i=k(130),r=k(140),d=k(146),x=k(156),P=k(162),$i=k(192),Ui=k(198),p=h();v("formGroup",p.form),c(10),O(),c(),g(p.isInvalid("title")?11:-1),c(4),O(),c(),g(p.isInvalid("shortTitle")?16:-1),c(4),O(),c(3),g(p.isInvalid("slug")?23:-1),c(5),O(),c(),g(p.isInvalid("days")?29:-1),c(4),O(),c(),g(p.isInvalid("nights")?34:-1),c(4),O(),c(),g(p.isInvalid("duration")?39:-1),c(5),O(),c(),g(p.isInvalid("startLocation")?45:-1),c(4),O(),c(),g(p.isInvalid("endLocation")?50:-1),c(5),O(),c(),V(p.difficulties),c(5),O(),c(),g(p.isInvalid("maxAltitude")?62:-1),c(4),O(),c(),g(p.isInvalid("groupSize")?67:-1),c(4),v("matAutocomplete",e),O(),c(5),V(p.filteredBadges()),c(13),O(),c(3),g(p.isInvalid("price")?92:-1),c(4),O(),c(3),g(p.isInvalid("originalPrice")?99:-1),c(12),V(p.overviewSuggestions),c(5),O(),c(3),g(p.isInvalid("overview")?119:-1),c(6),V(p.items("highlights")),c(2),v("matChipInputFor",t)("matAutocomplete",i)("matChipInputSeparatorKeyCodes",p.separatorKeys)("matChipInputAddOnBlur",!0),c(4),V(p.availableOptions("highlights")),c(3),A("",p.items("highlights").length," selected \u2014 type anything and press Enter, or pick from the list"),c(),g(p.isInvalid("highlights")?135:-1),c(6),V(p.items("includes")),c(2),v("matChipInputFor",r)("matAutocomplete",d)("matChipInputSeparatorKeyCodes",p.separatorKeys)("matChipInputAddOnBlur",!0),c(4),V(p.availableOptions("includes")),c(3),A("",p.items("includes").length," selected \u2014 type anything and press Enter, or pick from the list"),c(),g(p.isInvalid("includes")?151:-1),c(6),V(p.items("excludes")),c(2),v("matChipInputFor",x)("matAutocomplete",P)("matChipInputSeparatorKeyCodes",p.separatorKeys)("matChipInputAddOnBlur",!0),c(4),V(p.availableOptions("excludes")),c(3),A("",p.items("excludes").length," selected \u2014 type anything and press Enter, or pick from the list"),c(),g(p.isInvalid("excludes")?167:-1),c(12),V(p.metaSuggestions),c(5),O(),c(2),A("",p.form.get("metaDescription")?.value?.length??0,"/160"),c(),g(p.isInvalid("metaDescription")?187:-1),c(6),V(p.items("keywords")),c(2),v("matChipInputFor",$i)("matAutocomplete",Ui)("matChipInputSeparatorKeyCodes",p.separatorKeys)("matChipInputAddOnBlur",!0),c(4),V(p.availableOptions("keywords")),c(3),A("",p.items("keywords").length," keyword(s) \u2014 type anything and press Enter, or pick from the list"),c(),g(p.isInvalid("keywords")?203:-1),c(2),O(),c(5),g(p.isSaving()?210:211)}}var Qi=class n{fb=m(Rt);route=m(vt);router=m(yt);pkgService=m(Ri);firebase=m(xt);snackbar=m(Di);dialog=m(Fi);isEditMode=M(!1);isLoading=M(!1);isSaving=M(!1);editId=M(null);difficulties=["Easy","Moderate","Challenging"];form=this.fb.group({title:["",[f.required,f.minLength(5)]],shortTitle:["",[f.required]],slug:["",[f.required,f.pattern(/^[a-z0-9-]+$/)]],duration:["",f.required],days:[1,[f.required,f.min(1)]],nights:[0,[f.required,f.min(0)]],startLocation:["",f.required],endLocation:["",f.required],price:[0,[f.required,f.min(1)]],originalPrice:[0,[f.required,f.min(1)]],difficulty:["Moderate",f.required],maxAltitude:["",f.required],groupSize:["",f.required],badge:[""],overview:["",[f.required,f.minLength(50)]],highlights:[[],f.required],includes:[[],f.required],excludes:[[],f.required],metaDescription:["",[f.required,f.maxLength(160)]],keywords:["",f.required],active:[!0]});badgeOptions=["New","Popular","Adventure","Premium","Best Value","Most Popular"];separatorKeys=[13,188];presets={keywords:["Adi Kailash tour","Om Parvat darshan","Kumaon pilgrimage","Uttarakhand tour packages","Panchachuli trek","Darma Valley trek","Himalayan pilgrimage","Jolingkong lake","Pithoragarh tour","Chota Kailash yatra","Patal Bhuvaneshwar","Kathgodam to Adi Kailash","Inner Line Permit tour","Uttarakhand trekking"],highlights:["Om Parvat natural snow Shivling darshan","Adi Kailash (Chota Kailash) parikrama","Jolingkong Holy Lake & Parvati Sarovar","Panoramic views of Panchachuli peaks","Nabhidhang border viewpoint trek","Sacred Narayan Ashram visit","Patal Bhuvaneshwar cave temple","Overnight stay in Gunji base village","Traditional Bhotiya village experience","Sunrise viewpoint over Himalayan peaks","Scenic drive through inner Himalayan valleys","Jageshwar Dham ancient Shiva temples"],includes:["All accommodation (hotels/guesthouses/camps)","All meals during the tour (breakfast, lunch, dinner)","Private vehicle transportation throughout","Inner Line Permit for restricted border areas","Experienced local guide and support staff","First Aid kit and emergency support","All tolls, parking, and entry fees","Porterage for common equipment","Oxygen cylinder for high-altitude sections","Welcome and farewell transfers"],excludes:["Travel from/to Delhi or your home city","Personal travel insurance","Personal expenses and tips","Any meals not mentioned in the itinerary","Items of personal nature (clothing, trekking gear)","Any activity not included in the program","Cost due to unforeseen circumstances (roadblocks, weather)","Helicopter evacuation charges","Camera/video entry charges","Medical and emergency evacuation costs"]};itemSignals={highlights:M([]),includes:M([]),excludes:M([]),keywords:M([])};queries={highlights:M(""),includes:M(""),excludes:M(""),keywords:M("")};items(a){return this.itemSignals[a]()}onQuery(a,e){this.queries[a].set(e)}availableOptions(a){let e=this.queries[a]().trim().toLowerCase(),t=new Set(this.itemSignals[a]().map(i=>i.toLowerCase()));return this.presets[a].filter(i=>!t.has(i.toLowerCase())).filter(i=>!e||i.toLowerCase().includes(e))}addTyped(a,e){this.addItem(a,e.value),e.chipInput.clear(),this.queries[a].set("")}pickOption(a,e,t){this.addItem(a,e.option.value),t.value="",this.queries[a].set("")}removeItem(a,e){this.setItems(a,this.itemSignals[a]().filter(t=>t!==e))}addItem(a,e){let t=(e??"").trim();if(!t)return;let i=this.itemSignals[a]();i.some(r=>r.toLowerCase()===t.toLowerCase())||this.setItems(a,[...i,t])}setItems(a,e){if(this.itemSignals[a].set(e),a==="keywords"){let i=this.form.controls.keywords;i.setValue(e.join(", ")),i.markAsDirty(),i.markAsTouched();return}let t=this.form.controls[a];t.setValue(e),t.markAsDirty(),t.markAsTouched()}metaSuggestions=[{label:"Spiritual",text:"Join our guided Adi Kailash and Om Parvat yatra through the sacred Kumaon Himalayas. Stays, meals, permits and expert local guides all included."},{label:"Adventure",text:"Trek the Kumaon Himalayas to Panchachuli Base Camp and remote Darma Valley. Certified guides, camping, permits and all meals included."},{label:"Family",text:"A relaxed Himalayan tour for families and senior travellers. Scenic drives, comfortable hotels, home-style meals and easy walks across Kumaon."},{label:"All-inclusive",text:"Explore Adi Kailash, Om Parvat and Panchachuli on an all-inclusive Kumaon tour. Transport, stays, meals and Inner Line Permits handled for you."},{label:"Scenic",text:"Discover Kumaon's finest Himalayan views \u2014 Panchachuli sunrises, alpine meadows and ancient temples. Small groups and all-inclusive pricing."}];overviewSuggestions=[{label:"Spiritual Pilgrimage",text:"Embark on a soul-stirring Himalayan pilgrimage through the sacred heart of Kumaon. Witness the divine Om Parvat, circumambulate the majestic Adi Kailash, and offer prayers beside pristine glacial lakes. Guided by experienced local hosts, this journey blends ancient devotion with breathtaking mountain scenery, offering pilgrims a rare moment of stillness among the eternal snows."},{label:"Adventure Trek",text:"Designed for trekkers who crave genuine high-altitude adventure, this expedition climbs through alpine meadows, glacial moraines, and remote Himalayan valleys. Expect rewarding ascents, spectacular ridge-line views, and nights beneath brilliant star-filled skies. Our certified mountain guides handle permits, logistics, and safety, leaving you free to focus on the trail and the summit panorama ahead."},{label:"Family & Seniors",text:"A comfortable, gently paced Himalayan journey crafted for families and senior travellers. Enjoy scenic mountain drives, warm local hospitality, and unhurried sightseeing with ample time to rest and acclimatise. Comfortable accommodation, home-style meals, and short, easy walks make this an ideal introduction to Kumaon's ancient temples, green valleys, and legendary snow-capped peaks."},{label:"Scenic & Photography",text:"Travel through some of Uttarakhand's most photogenic landscapes, from terraced hillsides and deodar forests to thundering rivers and the five sacred summits of Panchachuli. Sunrise viewpoints, alpine flower meadows, and traditional stone villages offer endless frames for photographers, while unhurried travel days ensure you never have to rush past a perfect moment."},{label:"Culture & Heritage",text:"Discover the living heritage of the Kumaon Himalayas, where centuries-old stone temples, Bhotiya border villages, and mountain folklore remain beautifully intact. Share meals with local families, explore ancient cave shrines, and learn the myths woven into every ridge and river. A journey for travellers who value culture, conversation, and authentic mountain life."}];badgeInput=Vt(this.form.controls.badge.valueChanges,{initialValue:""});filteredBadges=ft(()=>{let a=(this.badgeInput()??"").trim().toLowerCase();if(!a)return this.badgeOptions;let e=this.badgeOptions.filter(t=>t.toLowerCase().includes(a));return e.length?e:this.badgeOptions});ngOnInit(){let a=this.route.snapshot.paramMap.get("id");a&&(this.isEditMode.set(!0),this.editId.set(a),this.loadPackage(a)),this.form.get("title").valueChanges.subscribe(t=>{if(!this.isEditMode()){let i=(t??"").toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-");this.form.get("slug").setValue(i,{emitEvent:!1})}});let e=()=>{let t=this.form.get("days").value,i=this.form.get("nights").value;t&&i!==null&&this.form.get("duration").setValue(`${t} Days / ${i} Nights`,{emitEvent:!1})};this.form.get("days").valueChanges.subscribe(e),this.form.get("nights").valueChanges.subscribe(e)}async loadPackage(a){this.isLoading.set(!0);try{let e=Ct(this.firebase.db,"packages",a),t=await kt(e);if(!t.exists())throw new Error("Package not found");let i=$e({id:t.id},t.data());this.patchForm(i)}catch{this.snackbar.open("Could not load package.","Close",{duration:4e3}),this.router.navigate(["/admin/dashboard"])}finally{this.isLoading.set(!1)}}patchForm(a){let e=a.highlights??[],t=a.includes??[],i=a.excludes??[];this.form.patchValue(rt($e({},a),{highlights:e,includes:t,excludes:i})),this.itemSignals.highlights.set(e),this.itemSignals.includes.set(t),this.itemSignals.excludes.set(i),this.itemSignals.keywords.set((a.keywords??"").split(",").map(r=>r.trim()).filter(Boolean))}buildPayload(){let a=this.form.value;return{title:a.title,shortTitle:a.shortTitle,slug:a.slug,duration:a.duration,days:Number(a.days),nights:Number(a.nights),startLocation:a.startLocation,endLocation:a.endLocation,price:Number(a.price),originalPrice:Number(a.originalPrice),difficulty:a.difficulty,maxAltitude:a.maxAltitude,groupSize:a.groupSize,badge:a.badge??"",overview:a.overview,highlights:a.highlights??[],includes:a.includes??[],excludes:a.excludes??[],metaDescription:a.metaDescription,keywords:a.keywords,active:a.active??!0}}async onSubmit(){if(this.commitPendingChips(),this.form.invalid){this.form.markAllAsTouched();let a=this.invalidFields();console.warn("[PackageForm] Invalid controls:",a),this.snackbar.open(`Please fix: ${a.join(", ")}`,"Close",{duration:8e3});return}this.isSaving.set(!0);try{let a=this.buildPayload();this.isEditMode()?(await this.pkgService.update(this.editId(),a),this.snackbar.open("Package updated successfully!","Close",{duration:3e3})):(await this.pkgService.add(a),this.snackbar.open("Package added successfully!","Close",{duration:3e3})),this.router.navigate(["/admin/dashboard"])}catch(a){let e=a instanceof Error?a.message:String(a);console.error("Save error:",a),this.snackbar.open(`Save failed: ${e}`,"Close",{duration:8e3})}finally{this.isSaving.set(!1)}}applySuggestion(a,e="overview"){if((this.form.controls[e].value??"").trim().length===0){this.setText(e,a.text);return}let r=e==="overview"?"description":"meta description";this.dialog.open(Li,{data:{title:`Replace ${r}?`,message:`This will replace the ${r} you have written with the "${a.label}" template.`,confirmText:"Replace"}}).afterClosed().subscribe(x=>{x&&this.setText(e,a.text)})}setText(a,e){let t=this.form.controls[a];t.setValue(e),t.markAsDirty(),t.markAsTouched()}commitPendingChips(){Object.keys(this.queries).forEach(a=>{let e=this.queries[a]().trim();e&&(this.addItem(a,e),this.queries[a].set(""))})}invalidFields(){let a={title:"Package Title",shortTitle:"Short Title",slug:"URL Slug",duration:"Duration Label",days:"Days",nights:"Nights",startLocation:"Start Location",endLocation:"End Location",price:"Selling Price",originalPrice:"Original Price",difficulty:"Difficulty",maxAltitude:"Max Altitude",groupSize:"Group Size",overview:"Overview",highlights:"Highlights",includes:"Includes",excludes:"Excludes",metaDescription:"Meta Description",keywords:"Keywords"};return Object.keys(this.form.controls).filter(e=>this.form.get(e)?.invalid).map(e=>a[e]??e)}isInvalid(a){let e=this.form.get(a);return!!(e?.invalid&&e?.touched)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=F({type:n,selectors:[["app-package-form"]],decls:9,vars:2,consts:[["badgeAuto","matAutocomplete"],["highlightsGrid",""],["highlightsInput",""],["highlightsAuto","matAutocomplete"],["includesGrid",""],["includesInput",""],["includesAuto","matAutocomplete"],["excludesGrid",""],["excludesInput",""],["excludesAuto","matAutocomplete"],["keywordsGrid",""],["keywordsInput",""],["keywordsAuto","matAutocomplete"],[1,"form-page"],[1,"form-header"],["mat-icon-button","","routerLink","/admin/dashboard","matTooltip","Back to Dashboard"],[1,"center-spinner"],["novalidate","",3,"formGroup"],["diameter","48"],["novalidate","",3,"ngSubmit","formGroup"],[1,"form-grid"],["appearance","outline",1,"full-width"],["matInput","","formControlName","title","placeholder","e.g. Adi Kailash 6 Day Expedition"],["matInput","","formControlName","shortTitle","placeholder","e.g. Adi Kailash 6 Days"],["matInput","","formControlName","slug","placeholder","e.g. adi-kailash-6-days"],[1,"row-2"],["appearance","outline"],["matInput","","type","number","formControlName","days","min","1"],["matInput","","type","number","formControlName","nights","min","0"],["matInput","","formControlName","duration","placeholder","e.g. 6 Days / 5 Nights"],["matInput","","formControlName","startLocation","placeholder","Kathgodam"],["matInput","","formControlName","endLocation","placeholder","Kathgodam"],[1,"row-3"],["formControlName","difficulty"],[3,"value"],["matInput","","formControlName","maxAltitude","placeholder","5600m"],["matInput","","formControlName","groupSize","placeholder","2\u201315 pax"],["matInput","","formControlName","badge","placeholder","Pick a badge or type your own",3,"matAutocomplete"],["matSuffix",""],["matInput","","type","number","formControlName","price","min","1"],["matPrefix",""],["matInput","","type","number","formControlName","originalPrice","min","1"],[1,"suggestion-row"],[1,"suggestion-label"],["matTooltipClass","suggestion-tooltip",1,"suggestion-chip",3,"matTooltip"],["matInput","","formControlName","overview","rows","6","placeholder","Describe the tour in detail (min 50 characters)\u2026"],["appearance","outline",1,"full-width","chip-field"],["aria-label","Tour highlights"],["placeholder","Choose from the list or type your own, then press Enter",3,"matChipInputTokenEnd","input","matChipInputFor","matAutocomplete","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur"],[3,"optionSelected"],[1,"chip-error"],["aria-label","What the tour includes"],["aria-label","What the tour excludes"],["matInput","","formControlName","metaDescription","rows","3","placeholder","Max 160 characters \u2014 shown in Google search results"],["align","end"],["aria-label","SEO keywords"],[1,"toggle-row"],["formControlName","active","color","primary"],[1,"form-actions"],["mat-stroked-button","","routerLink","/admin/dashboard"],["mat-flat-button","","color","primary","disabled","",1,"save-btn"],["mat-flat-button","","color","primary","type","submit",1,"save-btn"],["matTooltipClass","suggestion-tooltip",1,"suggestion-chip",3,"click","matTooltip"],[3,"removed"],["matChipRemove","","aria-label","Remove highlight"],["matChipRemove","","aria-label","Remove inclusion"],["matChipRemove","","aria-label","Remove exclusion"],["matChipRemove","","aria-label","Remove keyword"],["diameter","20"]],template:function(e,t){e&1&&(l(0,"div",13)(1,"div",14)(2,"a",15)(3,"mat-icon"),s(4,"arrow_back"),o()(),l(5,"h1"),s(6),o()(),u(7,Tn,4,0,"div",16)(8,ma,212,42,"form",17),o()),e&2&&(c(6),q(t.isEditMode()?"Edit Package":"Add New Package"),c(),g(t.isLoading()?7:8))},dependencies:[bt,Lt,Tt,St,Ft,It,Pt,Mt,Ie,Dt,wt,Kt,Nt,zt,qt,Bt,Re,ni,Xt,Zt,Jt,ei,ti,si,li,zi,Bi,ne,Hi,Ki,at,pi,mi,ci,ui,hi,Wi,ot,_i,gi,xi,ki,Ci,Ti,Mi,Pi,Ai,Oi,Ei,Ii],styles:[".form-page[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.form-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.form-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.center-spinner[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;padding:64px;color:#666}.form-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}mat-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px;padding-top:8px!important}.full-width[_ngcontent-%COMP%]{width:100%}.chip-error[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;margin:-14px 0 14px 14px;font-size:.75rem;color:#b00020}.chip-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.chip-field[_ngcontent-%COMP%]     .mat-mdc-chip-set .mdc-evolution-chip-set__chips{flex-wrap:wrap}.chip-field[_ngcontent-%COMP%]     .mat-mdc-chip{max-width:100%}.suggestion-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:14px}.suggestion-row[_ngcontent-%COMP%]   .suggestion-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px;font-size:.825rem;font-weight:600;color:#555}.suggestion-row[_ngcontent-%COMP%]   .suggestion-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;color:#3f51b5}.suggestion-row[_ngcontent-%COMP%]   .suggestion-chip[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .15s ease}.suggestion-row[_ngcontent-%COMP%]   .suggestion-chip[_ngcontent-%COMP%]:hover{background-color:#e8eaf6}  .suggestion-tooltip{font-size:.75rem!important;line-height:1.5!important;max-width:320px!important;white-space:pre-wrap!important}.row-2[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:16px}@media(max-width:600px){.row-2[_ngcontent-%COMP%]{grid-template-columns:1fr}}.row-3[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px}@media(max-width:700px){.row-3[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media(max-width:480px){.row-3[_ngcontent-%COMP%]{grid-template-columns:1fr}}.toggle-row[_ngcontent-%COMP%]{padding:8px 0 4px}.form-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:12px;padding-bottom:16px}.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .form-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;height:44px;padding:0 20px}.save-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.save-btn[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{display:inline-block}"]})};export{Qi as PackageFormComponent};
