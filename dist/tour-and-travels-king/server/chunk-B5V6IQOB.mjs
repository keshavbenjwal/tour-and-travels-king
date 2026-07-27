import './polyfills.server.mjs';
import{a as B}from"./chunk-OKZWELBN.mjs";import{y as I,z as N}from"./chunk-I6W3E6FB.mjs";import{K as R,M as S,N as L,O as z,P as j,b as D,e as A}from"./chunk-3KYVMR67.mjs";import{a as E}from"./chunk-7WK6WUYV.mjs";import"./chunk-G5Y4AOBB.mjs";import{E as P,H as T,I as k}from"./chunk-WHHTTK76.mjs";import{Da as p,Ib as a,Jb as n,Kb as h,U as c,Vb as x,Y as l,Yb as M,Zb as d,_b as v,ab as f,ac as w,bc as _,ga as b,hc as y,ic as C,jc as r,kc as O,ob as m,pb as u,qb as g}from"./chunk-VYMEAAJO.mjs";import"./chunk-N7QBYMCK.mjs";var K=["*",[["mat-toolbar-row"]]],Y=["*","mat-toolbar-row"],G=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275dir=g({type:o,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return o})(),F=(()=>{class o{_elementRef=l(p);_platform=l(A);_document=l(b);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=m({type:o,selectors:[["mat-toolbar"]],contentQueries:function(t,i,q){if(t&1&&v(q,G,5),t&2){let s;w(s=_())&&(i._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,i){t&2&&(C(i.color?"mat-"+i.color:""),y("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Y,decls:2,vars:0,template:function(t,i){t&1&&(M(K),d(0),d(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})}return o})();var Q=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=u({type:o});static \u0275inj=c({imports:[D]})}return o})();var U=class o{auth=l(E);logout(){this.auth.signOut()}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=m({type:o,selectors:[["app-admin-layout"]],decls:26,vars:1,consts:[[1,"admin-shell"],["color","primary",1,"admin-toolbar"],[1,"toolbar-brand"],[1,"brand-icon"],[1,"brand-name"],[1,"brand-tag"],[1,"toolbar-nav"],["mat-button","","routerLink","/admin/dashboard","routerLinkActive","nav-active"],["mat-button","","routerLink","/admin/packages/new"],[1,"toolbar-user"],[1,"user-email"],["mat-icon-button","","matTooltip","Sign Out",3,"click"],[1,"admin-content"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"mat-toolbar",1)(2,"div",2)(3,"mat-icon",3),r(4,"terrain"),n(),a(5,"span",4),r(6,"Kumaon Yatra Tours"),n(),a(7,"span",5),r(8,"Admin"),n()(),a(9,"div",6)(10,"a",7)(11,"mat-icon"),r(12,"dashboard"),n(),r(13," Dashboard "),n(),a(14,"a",8)(15,"mat-icon"),r(16,"add_circle"),n(),r(17," Add Package "),n()(),a(18,"div",9)(19,"span",10),r(20),n(),a(21,"button",11),x("click",function(){return t.logout()}),a(22,"mat-icon"),r(23,"logout"),n()()()(),a(24,"main",12),h(25,"router-outlet"),n()()),e&2&&(f(20),O(t.auth.userEmail))},dependencies:[P,T,k,Q,F,L,S,R,j,z,N,I,B],styles:[".admin-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh;background:#f5f5f5}.admin-toolbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:100;display:flex;align-items:center;gap:8px;padding:0 16px;background:#1a237e!important}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-right:24px}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%]{color:#ffd54f}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-brand[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%]{font-weight:700;font-size:1rem;white-space:nowrap}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-brand[_ngcontent-%COMP%]   .brand-tag[_ngcontent-%COMP%]{background:#fff3;padding:2px 8px;border-radius:4px;font-size:.7rem;letter-spacing:.05em;text-transform:uppercase}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-nav[_ngcontent-%COMP%]{display:flex;gap:4px;flex:1}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-nav[_ngcontent-%COMP%]   a.nav-active[_ngcontent-%COMP%]{background:#ffffff26;border-radius:4px}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-user[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-left:auto}.admin-toolbar[_ngcontent-%COMP%]   .toolbar-user[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%]{font-size:.82rem;opacity:.85;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media(max-width:600px){.admin-toolbar[_ngcontent-%COMP%]   .toolbar-user[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%]{display:none}}.admin-content[_ngcontent-%COMP%]{flex:1;padding:24px;max-width:1200px;width:100%;margin:0 auto;box-sizing:border-box}@media(max-width:600px){.admin-content[_ngcontent-%COMP%]{padding:16px}}"]})};export{U as AdminLayoutComponent};
