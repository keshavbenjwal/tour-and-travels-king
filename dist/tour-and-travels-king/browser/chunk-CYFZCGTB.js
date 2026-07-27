import{b as A,i as j,j as Se,k as xe,l as F,p as Ee,s as Ce,u as we}from"./chunk-GI7JXH3B.js";import{D as ye,F as P,M as Ae,e as be,m as ke,q as ge,u as ve}from"./chunk-DHKKLAXW.js";import{d as le,e as O,f as y,g as de,h as me,j as he,k as ue,l as _e,m as fe,n as pe}from"./chunk-JCUSL6CW.js";import{$ as c,$b as re,Bb as te,Cb as ne,Db as ae,Fa as K,Ga as $,Ib as v,Jb as b,Kb as ie,Kc as ce,Q as H,Rb as se,Vb as B,W,Xb as D,Z as E,a as l,ac as M,b as x,bb as C,bc as T,c as z,cb as p,db as J,ea as Z,f as q,fa as U,h as m,hc as oe,ia as f,ja as X,jc as R,lc as I,na as G,o as Q,qb as w,sb as g,wb as Y,xb as ee}from"./chunk-XYMSWCK4.js";function Re(s,n){if(s&1){let e=se();v(0,"div",1)(1,"button",2),B("click",function(){Z(e);let a=D();return U(a.action())}),R(2),b()()}if(s&2){let e=D();p(2),I(" ",e.data.action," ")}}var Ie=["label"];function Oe(s,n){}var Pe=Math.pow(2,31)-1,k=class{_overlayRef;instance;containerInstance;_afterDismissed=new m;_afterOpened=new m;_onAction=new m;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,Pe))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Be=new E("MatSnackBarData"),_=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},je=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275dir=g({type:s,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return s})(),Fe=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275dir=g({type:s,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return s})(),Ve=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275dir=g({type:s,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return s})(),Ne=(()=>{class s{snackBarRef=c(k);data=c(Be);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=w({type:s,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,a){t&1&&(v(0,"div",0),R(1),b(),ne(2,Re,3,1,"div",1)),t&2&&(p(),I(" ",a.data.message,`
`),p(),ae(a.hasAction?2:-1))},dependencies:[Ae,je,Fe,Ve],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return s})(),V="_mat-snack-bar-enter",N="_mat-snack-bar-exit",Le=(()=>{class s extends xe{_ngZone=c(G);_elementRef=c($);_changeDetectorRef=c(ce);_platform=c(be);_animationsDisabled=P();snackBarConfig=c(_);_document=c(X);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=c(f);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new m;_onExit=new m;_onEnter=new m;_animationState="void";_live;_label;_role;_liveElementId=c(ve).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===N?this._completeExit():e===V&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?C(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(V)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(V)},200)))}exit(){return this._destroyed?Q(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?C(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(N)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(N),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(r=>e.classList.add(r)):e.classList.add(t)),this._exposeToModals();let a=this._label.nativeElement,i="mdc-snackbar__label";a.classList.toggle(i,!a.querySelector(`.${i}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let a=0;a<t.length;a++){let i=t[a],r=i.getAttribute("aria-owns");this._trackedModals.add(i),r?r.indexOf(e)===-1&&i.setAttribute("aria-owns",r+" "+e):i.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let a=t.replace(this._liveElementId,"").trim();a.length>0?e.setAttribute("aria-owns",a):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),a=e.querySelector("[aria-live]");if(t&&a){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(i=document.activeElement),t.removeAttribute("aria-hidden"),a.appendChild(t),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=w({type:s,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,a){if(t&1&&re(F,7)(Ie,7),t&2){let i;M(i=T())&&(a._portalOutlet=i.first),M(i=T())&&(a._label=i.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,a){t&1&&B("animationend",function(r){return a.onAnimationEnd(r.animationName)})("animationcancel",function(r){return a.onAnimationEnd(r.animationName)}),t&2&&oe("mat-snack-bar-container-enter",a._animationState==="visible")("mat-snack-bar-container-exit",a._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!a._animationsDisabled)},features:[Y],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,a){t&1&&(v(0,"div",1)(1,"div",2,0)(3,"div",3),ee(4,Oe,0,0,"ng-template",4),b(),ie(5,"div"),b()()),t&2&&(p(5),te("aria-live",a._live)("role",a._role)("id",a._liveElementId))},dependencies:[F],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return s})(),ze=new E("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new _}),dt=(()=>{class s{_live=c(ge);_injector=c(f);_breakpointObserver=c(ke);_parentSnackBar=c(s,{optional:!0,skipSelf:!0});_defaultConfig=c(ze);_animationsDisabled=P();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Ne;snackBarContainerComponent=Le;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",a){let i=l(l({},this._defaultConfig),a);return i.data={message:e,action:t},i.announcementMessage===e&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let a=t&&t.viewContainerRef&&t.viewContainerRef.injector,i=f.create({parent:a||this._injector,providers:[{provide:_,useValue:t}]}),r=new j(this.snackBarContainerComponent,t.viewContainerRef,i),o=e.attach(r);return o.instance.snackBarConfig=t,o.instance}_attach(e,t){let a=l(l(l({},new _),this._defaultConfig),t),i=this._createOverlay(a),r=this._attachSnackBarContainer(i,a),o=new k(r,i);if(e instanceof J){let d=new Se(e,null,{$implicit:a.data,snackBarRef:o});o.instance=r.attachTemplatePortal(d)}else{let d=this._createInjector(a,o),h=new j(e,void 0,d),u=r.attachComponentPortal(h);o.instance=u.instance}return this._breakpointObserver.observe(ye.HandsetPortrait).pipe(H(i.detachments())).subscribe(d=>{i.overlayElement.classList.toggle(this.handsetCssClass,d.matches)}),a.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(a.announcementMessage,a.politeness)}),this._animateSnackBar(o,a),this._openedSnackBarRef=o,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Ee;t.direction=e.direction;let a=Ce(this._injector),i=e.direction==="rtl",r=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!i||e.horizontalPosition==="end"&&i,o=!r&&e.horizontalPosition!=="center";return r?a.left("0"):o?a.right("0"):a.centerHorizontally(),e.verticalPosition==="top"?a.top("0"):a.bottom("0"),t.positionStrategy=a,t.disableAnimations=this._animationsDisabled,we(this._injector,t)}_createInjector(e,t){let a=e&&e.viewContainerRef&&e.viewContainerRef.injector;return f.create({parent:a||this._injector,providers:[{provide:k,useValue:t},{provide:Be,useValue:e.data}]})}static \u0275fac=function(t){return new(t||s)};static \u0275prov=K({token:s,factory:s.\u0275fac})}return s})();var De=class s{firebase=c(pe);get col(){return le(this.firebase.db,"packages")}getAll(){let n=de(this.col,me("createdAt","desc"));return new q(e=>{let t=fe(n,a=>{let i=a.docs.map(r=>l({id:r.id},r.data()));e.next(i)},a=>e.error(a));return()=>t()})}add(n){return _e(this.col,x(l({},n),{createdAt:y(),updatedAt:y()})).then(()=>{})}update(n,e){let t=O(this.firebase.db,"packages",n),o=e,{id:a,createdAt:i}=o,r=z(o,["id","createdAt"]);return he(t,x(l({},r),{updatedAt:y()}))}delete(n){return ue(O(this.firebase.db,"packages",n))}static \u0275fac=function(e){return new(e||s)};static \u0275prov=W({token:s,factory:s.\u0275fac,providedIn:"root"})};var L=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new m;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,t=!0,a){this._multiple=n,this._emitChanges=t,this.compareWith=a,e&&e.length&&(n?e.forEach(i=>this._markSelected(i)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(i=>this._getConcreteValue(i)));n.forEach(i=>this._markSelected(i)),e.filter(i=>!t.has(this._getConcreteValue(i,t))).forEach(i=>this._unmarkSelected(i));let a=this._hasQueuedChanges();return this._emitChangeEvent(),a}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Me=class{applyChanges(n,e,t,a,i){n.forEachOperation((r,o,d)=>{let h,u;if(r.previousIndex==null){let S=t(r,o,d);h=e.createEmbeddedView(S.templateRef,S.context,S.index),u=A.INSERTED}else d==null?(e.remove(o),u=A.REMOVED):(h=e.get(o),e.move(h,d),u=A.MOVED);i&&i({context:h?.context,operation:u,record:r})})}detach(){}};export{Me as a,L as b,dt as c,De as d};
