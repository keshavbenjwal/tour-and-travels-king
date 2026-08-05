import './polyfills.server.mjs';
import{a as B}from"./chunk-QV32LXOK.mjs";import{A as N,z as I}from"./chunk-2CLM66GO.mjs";import{L as R,N as L,P as S,Q as z,R as j,b as D,e as A}from"./chunk-2X656UM6.mjs";import{a as E}from"./chunk-VDTAARA3.mjs";import"./chunk-SA5V7UIT.mjs";import{c as P,f as T,g as k}from"./chunk-5S6TG2QY.mjs";import"./chunk-AH35NTHF.mjs";import{$b as d,Ea as p,Kb as r,Lb as e,Mb as h,V as c,Xb as x,Z as l,_b as M,ac as v,bb as f,cc as w,dc as y,ha as b,jc as _,kc as C,lc as n,mc as O,pb as m,qb as u,rb as g}from"./chunk-GHVTHEK2.mjs";import"./chunk-N7QBYMCK.mjs";var H=["*",[["mat-toolbar-row"]]],K=["*","mat-toolbar-row"],Y=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275dir=g({type:o,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return o})(),F=(()=>{class o{_elementRef=l(p);_platform=l(A);_document=l(b);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=m({type:o,selectors:[["mat-toolbar"]],contentQueries:function(t,i,q){if(t&1&&v(q,Y,5),t&2){let s;w(s=y())&&(i._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,i){t&2&&(C(i.color?"mat-"+i.color:""),_("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:K,decls:2,vars:0,template:function(t,i){t&1&&(M(H),d(0),d(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return o})();var Q=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=u({type:o});static \u0275inj=c({imports:[D]})}return o})();var U=class o{auth=l(E);logout(){this.auth.signOut()}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=m({type:o,selectors:[["app-admin-layout"]],decls:30,vars:1,consts:[[1,"admin-shell"],["color","primary",1,"admin-toolbar"],[1,"toolbar-brand"],[1,"brand-icon"],[1,"brand-name"],[1,"brand-tag"],[1,"toolbar-nav"],["mat-button","","routerLink","/admin/dashboard","routerLinkActive","nav-active"],["mat-button","","routerLink","/admin/packages/new"],["mat-button","","routerLink","/admin/gallery","routerLinkActive","nav-active"],[1,"toolbar-user"],[1,"user-email"],["mat-icon-button","","matTooltip","Sign Out",3,"click"],[1,"admin-content"]],template:function(a,t){a&1&&(r(0,"div",0)(1,"mat-toolbar",1)(2,"div",2)(3,"mat-icon",3),n(4,"terrain"),e(),r(5,"span",4),n(6,"Kumaon Yatra Tours"),e(),r(7,"span",5),n(8,"Admin"),e()(),r(9,"div",6)(10,"a",7)(11,"mat-icon"),n(12,"dashboard"),e(),n(13," Dashboard "),e(),r(14,"a",8)(15,"mat-icon"),n(16,"add_circle"),e(),n(17," Add Package "),e(),r(18,"a",9)(19,"mat-icon"),n(20,"photo_library"),e(),n(21," Gallery "),e()(),r(22,"div",10)(23,"span",11),n(24),e(),r(25,"button",12),x("click",function(){return t.logout()}),r(26,"mat-icon"),n(27,"logout"),e()()()(),r(28,"main",13),h(29,"router-outlet"),e()()),a&2&&(f(24),O(t.auth.userEmail))},dependencies:[P,T,k,Q,F,S,L,R,j,z,N,I,B],styles:[".admin-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh;background:#f5f5f5}.admin-toolbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:100;display:flex;align-items:center;gap:8px;padding:0 16px;background:#1a237e!important}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-right:24px}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%]{color:#ffd54f}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-brand[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%]{font-weight:700;font-size:1rem;white-space:nowrap}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-brand[_ngcontent-%COMP%]   .brand-tag[_ngcontent-%COMP%]{background:#fff3;padding:2px 8px;border-radius:4px;font-size:.7rem;letter-spacing:.05em;text-transform:uppercase}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-nav[_ngcontent-%COMP%]{display:flex;gap:4px;flex:1}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-nav[_ngcontent-%COMP%]   a.nav-active[_ngcontent-%COMP%]{background:#ffffff26;border-radius:4px}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-user[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-left:auto}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-user[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%]{font-size:.82rem;opacity:.85;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media(max-width:600px){.admin-toolbar[_ngcontent-%COMP%]   .toolbar-user[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%]{display:none}}.admin-content[_ngcontent-%COMP%]{flex:1;padding:24px;max-width:1200px;width:100%;margin:0 auto;box-sizing:border-box}@media(max-width:600px){.admin-content[_ngcontent-%COMP%]{padding:16px}}"]})};export{U as AdminLayoutComponent};
