import './polyfills.server.mjs';
import{a as yi,c as bi,d as Ci}from"./chunk-J4FKZ7QL.mjs";import{a as Kt,f as $t,p as Xt,r as ni,s as ai}from"./chunk-J5EU475W.mjs";import"./chunk-4PC2IVGC.mjs";import{a as Qe,b as oi,c as ri,d as si,e as ci,f as li,h as di,i as ft,j as hi,k as mi,l as Ce,m as we,n as qe,p as pi,q as ui,r as fi,s as Ue,u as gi,x as We,y as _i,z as vi}from"./chunk-I6W3E6FB.mjs";import{F as be,G as Jt,I as ei,J as ut,K as ti,L as ii,M as He,N as je,O as Ve,P as Ge,a as pe,b as ee,c as Pe,e as Be,f as ht,h as Le,i as mt,j as Zt,o as pt,p as Yt,r as Ne,s as ze,u as te}from"./chunk-3KYVMR67.mjs";import"./chunk-G5Y4AOBB.mjs";import{H as Wt,g as qt,h as Ut}from"./chunk-WHHTTK76.mjs";import{$a as Y,$b as ye,Aa as _,Bb as U,Bc as Vt,C as ce,Ca as Fe,Cb as M,Cc as Gt,Da as R,Db as E,Hb as W,Ib as d,Jb as l,Kb as oe,L as Ae,N as ne,Ob as K,Oc as dt,Pb as $,Pc as me,Qb as A,Rb as st,Sb as _e,U as B,Vb as J,W as w,Wc as S,Xb as Z,Xc as Qt,Y as s,Yb as he,Zb as N,_b as ve,ab as p,ac as v,ba as at,bb as X,bc as y,ca as ot,db as rt,e as x,f as Pt,fa as F,g as it,ga as le,h as Bt,hc as z,i as Lt,ic as Oe,ja as q,jb as de,jc as h,ka as Te,kc as j,l as nt,lc as G,n as Nt,oa as ge,ob as C,oc as O,pb as L,q as Me,qb as u,qc as jt,rc as ct,sc as lt,tb as Ht,u as Ee,ub as g,vb as I,w as Ie,x as fe,y as zt,za as ae}from"./chunk-VYMEAAJO.mjs";import{a as Q,b as Ot}from"./chunk-N7QBYMCK.mjs";var pn=[[["caption"]],[["colgroup"],["col"]],"*"],un=["caption","colgroup, col","*"];function fn(i,a){i&1&&N(0,2)}function gn(i,a){i&1&&(d(0,"thead",0),A(1,1),l(),d(2,"tbody",0),A(3,2)(4,3),l(),d(5,"tfoot",0),A(6,4),l())}function _n(i,a){i&1&&A(0,1)(1,2)(2,3)(3,4)}var V=new w("CDK_TABLE");var Ze=(()=>{class i{template=s(X);static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","cdkCellDef",""]]})}return i})(),Ye=(()=>{class i{template=s(X);static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","cdkHeaderCellDef",""]]})}return i})(),ki=(()=>{class i{template=s(X);static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","cdkFooterCellDef",""]]})}return i})(),ue=(()=>{class i{_table=s(V,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,n,o){if(t&1&&ve(o,Ze,5)(o,Ye,5)(o,ki,5),t&2){let r;v(r=y())&&(n.cell=r.first),v(r=y())&&(n.headerCell=r.first),v(r=y())&&(n.footerCell=r.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",S],stickyEnd:[2,"stickyEnd","stickyEnd",S]}})}return i})(),$e=class{constructor(a,e){e.nativeElement.classList.add(...a._columnCssClassName)}},xi=(()=>{class i extends $e{constructor(){super(s(ue),s(R))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[g]})}return i})();var Ri=(()=>{class i extends $e{constructor(){let e=s(ue),t=s(R);super(e,t);let n=e._table?._getCellRole();n&&t.nativeElement.setAttribute("role",n)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[g]})}return i})();var _t=(()=>{class i{template=s(X);_differs=s(dt);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof ke?e.headerCell.template:this instanceof vt?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,features:[ae]})}return i})(),ke=(()=>{class i extends _t{_table=s(V,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",S]},features:[g,ae]})}return i})(),vt=(()=>{class i extends _t{_table=s(V,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",S]},features:[g,ae]})}return i})(),Xe=(()=>{class i extends _t{_table=s(V,{optional:!0});when;static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[g]})}return i})(),re=(()=>{class i{_viewContainer=s(de);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","cdkCellOutlet",""]]})}return i})(),yt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&A(0,0)},dependencies:[re],encapsulation:2,changeDetection:1})}return i})();var bt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&A(0,0)},dependencies:[re],encapsulation:2,changeDetection:1})}return i})(),Si=(()=>{class i{templateRef=s(X);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["ng-template","cdkNoDataRow",""]]})}return i})(),wi=["top","bottom","left","right"],gt=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(a=>this._updateCachedSizes(a)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(a,e,t=!0,n=!0,o,r,c){this._isNativeHtmlTable=a,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=n,this.direction=o,this._positionListener=r,this._tableInjector=c,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(a,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(a);let t=[];for(let n of a)n.nodeType===n.ELEMENT_NODE&&t.push(n,...Array.from(n.children));Y({write:()=>{for(let n of t)this._removeStickyStyle(n,e)}},{injector:this._tableInjector})}updateStickyColumns(a,e,t,n=!0,o=!0){if(!a.length||!this._isBrowser||!(e.some(H=>H)||t.some(H=>H))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=a[0],c=r.children.length,m=this.direction==="rtl",f=m?"right":"left",b=m?"left":"right",P=e.lastIndexOf(!0),D=t.indexOf(!0),k,At,Tt;o&&this._updateStickyColumnReplayQueue({rows:[...a],stickyStartStates:[...e],stickyEndStates:[...t]}),Y({earlyRead:()=>{k=this._getCellWidths(r,n),At=this._getStickyStartColumnPositions(k,e),Tt=this._getStickyEndColumnPositions(k,t)},write:()=>{for(let H of a)for(let T=0;T<c;T++){let Ft=H.children[T];e[T]&&this._addStickyStyle(Ft,f,At[T],T===P),t[T]&&this._addStickyStyle(Ft,b,Tt[T],T===D)}this._positionListener&&k.some(H=>!!H)&&(this._positionListener.stickyColumnsUpdated({sizes:P===-1?[]:k.slice(0,P+1).map((H,T)=>e[T]?H:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:D===-1?[]:k.slice(D).map((H,T)=>t[T+D]?H:null).reverse()}))}},{injector:this._tableInjector})}stickRows(a,e,t){if(!this._isBrowser)return;let n=t==="bottom"?a.slice().reverse():a,o=t==="bottom"?e.slice().reverse():e,r=[],c=[],m=[];Y({earlyRead:()=>{for(let f=0,b=0;f<n.length;f++){if(!o[f])continue;r[f]=b;let P=n[f];m[f]=this._isNativeHtmlTable?Array.from(P.children):[P];let D=this._retrieveElementSize(P).height;b+=D,c[f]=D}},write:()=>{let f=o.lastIndexOf(!0);for(let b=0;b<n.length;b++){if(!o[b])continue;let P=r[b],D=b===f;for(let k of m[b])this._addStickyStyle(k,t,P,D)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:c,offsets:r,elements:m}):this._positionListener?.stickyFooterRowsUpdated({sizes:c,offsets:r,elements:m})}},{injector:this._tableInjector})}updateStickyFooterContainer(a,e){this._isNativeHtmlTable&&Y({write:()=>{let t=a.querySelector("tfoot");t&&(e.some(n=>!n)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(a,e){if(!a.classList.contains(this._stickCellCss))return;for(let n of e)a.style[n]="",a.classList.remove(this._borderCellCss[n]);wi.some(n=>e.indexOf(n)===-1&&a.style[n])?a.style.zIndex=this._getCalculatedZIndex(a):(a.style.zIndex="",this._needsPositionStickyOnElement&&(a.style.position=""),a.classList.remove(this._stickCellCss))}_addStickyStyle(a,e,t,n){a.classList.add(this._stickCellCss),n&&a.classList.add(this._borderCellCss[e]),a.style[e]=`${t}px`,a.style.zIndex=this._getCalculatedZIndex(a),this._needsPositionStickyOnElement&&(a.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(a){let e={top:100,bottom:10,left:1,right:1},t=0;for(let n of wi)a.style[n]&&(t+=e[n]);return t?`${t}`:""}_getCellWidths(a,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],n=a.children;for(let o=0;o<n.length;o++){let r=n[o];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(a,e){let t=[],n=0;for(let o=0;o<a.length;o++)e[o]&&(t[o]=n,n+=a[o]);return t}_getStickyEndColumnPositions(a,e){let t=[],n=0;for(let o=a.length;o>0;o--)e[o]&&(t[o]=n,n+=a[o]);return t}_retrieveElementSize(a){let e=this._elemSizeCache.get(a);if(e)return e;let t=a.getBoundingClientRect(),n={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(a,n),this._resizeObserver.observe(a,{box:"border-box"})),n}_updateStickyColumnReplayQueue(a){this._removeFromStickyColumnReplayQueue(a.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(a)}_removeFromStickyColumnReplayQueue(a){let e=new Set(a);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(a){let e=!1;for(let t of a){let n=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};n.width!==this._elemSizeCache.get(t.target)?.width&&vn(t.target)&&(e=!0),this._elemSizeCache.set(t.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function vn(i){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(a=>i.classList.contains(a))}var De=new w("STICKY_POSITIONING_LISTENER");var Ct=(()=>{class i{viewContainer=s(de);elementRef=s(R);constructor(){let e=s(V);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","rowOutlet",""]]})}return i})(),wt=(()=>{class i{viewContainer=s(de);elementRef=s(R);constructor(){let e=s(V);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","headerRowOutlet",""]]})}return i})(),Dt=(()=>{class i{viewContainer=s(de);elementRef=s(R);constructor(){let e=s(V);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","footerRowOutlet",""]]})}return i})(),kt=(()=>{class i{viewContainer=s(de);elementRef=s(R);constructor(){let e=s(V);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","noDataRowOutlet",""]]})}return i})(),xt=(()=>{class i{_differs=s(dt);_changeDetectorRef=s(me);_elementRef=s(R);_dir=s(pe,{optional:!0});_platform=s(Be);_viewRepeater;_viewportRuler=s(ci);_injector=s(F);_virtualScrollViewport=s(li,{optional:!0,host:!0});_positionListener=s(De,{optional:!0})||s(De,{optional:!0,skipSelf:!0});_document=s(le);_data;_renderedRange;_onDestroy=new x;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new x;_footerRowStickyUpdates=new x;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new x;_dataStream=new x;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new q;viewChange=new Pt({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){s(new Vt("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(ne(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new ri:new yi,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Qe(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(n,o,r)=>this._getEmbeddedViewArgs(n.item,r),n=>n.item.data,n=>{n.operation===oi.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{let o=t.get(n.currentIndex);o.context.$implicit=n.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=Di(this._headerRowOutlet,"thead");n&&(n.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=Di(this._footerRowOutlet,"tfoot");n&&(n.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...n],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,r)=>{this._addStickyColumnStyles([o],this._headerRowDefs[r])}),this._rowDefs.forEach(o=>{let r=[];for(let c=0;c<t.length;c++)this._renderRows[c].rowDef===o&&r.push(t[c]);this._addStickyColumnStyles(r,o)}),n.forEach((o,r)=>{this._addStickyColumnStyles([o],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<t;o++){let r=this._data[o],c=this._getRenderRowsForData(r,o,n.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let m=0;m<c.length;m++){let f=c[m],b=this._cachedRenderRowsMap.get(f.data);b.has(f.rowDef)?b.get(f.rowDef).push(f):b.set(f.rowDef,[f]),e.push(f)}}return e}_getRenderRowsForData(e,t,n){return this._getRowDefs(e,t).map(r=>{let c=n&&n.has(r)?n.get(r):[];if(c.length){let m=c.shift();return m.dataIndex=t,m}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ke(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Ke(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ke(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ke(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,c)=>{let m=!!c.getColumnsDiff();return r||m},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),t||n||o}_switchDataSource(e){this._data=[],Qe(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Qe(this.dataSource)?e=this.dataSource.connect(this):Nt(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=nt(this.dataSource)),this._renderChangeSubscription=Me([e,this.viewChange]).pipe(ne(this._onDestroy)).subscribe(([t,n])=>{this._data=t||[],this._renderedRange=n,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let n=Array.from(t?.columns||[]).map(c=>{let m=this._columnDefsByName.get(c);return m}),o=n.map(c=>c.sticky),r=n.map(c=>c.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let n=0;n<e.viewContainer.length;n++){let o=e.viewContainer.get(n);t.push(o.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(o=>!o.when||o.when(t,e));else{let o=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;o&&n.push(o)}return n.length,n}_getEmbeddedViewArgs(e,t){let n=e.rowDef,o={$implicit:e.data};return{templateRef:n.template,context:o,index:t}}_renderRow(e,t,n,o={}){let r=e.viewContainer.createEmbeddedView(t.template,o,n);return this._renderCellTemplateForItem(t,o),r}_renderCellTemplateForItem(e,t){for(let n of this._getCellTemplates(e))re.mostRecentCellOutlet&&re.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,n=e.length;t<n;t++){let r=e.get(t).context;r.count=n,r.first=t===0,r.last=t===n-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let n=this._columnDefsByName.get(t);return e.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,n)=>t||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new gt(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:nt()).pipe(ne(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?Lt:Bt;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(zt(0,t),ne(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(n,o)=>this._measureRangeSize(n,o)}),Me([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(ne(this._onDestroy)).subscribe(([n,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let c=o.elements[r];if(c){let m=o.offsets[r],f=n!==0?Math.max(n-m,m):-m;for(let b of c)b.style.top=`${-f}px`}}}),Me([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(ne(this._onDestroy)).subscribe(([n,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let c=o.elements[r];if(c)for(let m of c)m.style.bottom=`${n+o.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(t){let o=n.createEmbeddedView(e.templateRef),r=o.rootNodes[0];if(o.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute("role","row"),r.classList.add(...e._contentClassNames);let c=r.querySelectorAll(e._cellSelector);for(let m=0;m<c.length;m++)c[m].classList.add(...e._cellClassNames)}}else n.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let n=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<n.start||e.end>n.end;let r=e.start-n.start,c=e.end-e.start,m,f;for(let D=0;D<c;D++){let k=o.get(D+r);if(k&&k.rootNodes.length){m=f=k.rootNodes[0];break}}for(let D=c-1;D>-1;D--){let k=o.get(D+r);if(k&&k.rootNodes.length){f=k.rootNodes[k.rootNodes.length-1];break}}let b=m?.getBoundingClientRect?.(),P=f?.getBoundingClientRect?.();return b&&P?P.bottom-b.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,n,o){if(t&1&&ve(o,Si,5)(o,ue,5)(o,Xe,5)(o,ke,5)(o,vt,5),t&2){let r;v(r=y())&&(n._noDataRow=r.first),v(r=y())&&(n._contentColumnDefs=r),v(r=y())&&(n._contentRowDefs=r),v(r=y())&&(n._contentHeaderRowDefs=r),v(r=y())&&(n._contentFooterRowDefs=r)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,n){t&2&&z("cdk-table-fixed-layout",n.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",S],fixedLayout:[2,"fixedLayout","fixedLayout",S],recycleRows:[2,"recycleRows","recycleRows",S]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[O([{provide:V,useExisting:i},{provide:De,useValue:null}])],ngContentSelectors:un,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){t&1&&(he(pn),N(0),N(1,1),M(2,fn,1,0),M(3,gn,7,0)(4,_n,4,0)),t&2&&(p(2),E(n._isServer?2:-1),p(),E(n._isNativeHtmlTable?3:4))},dependencies:[wt,Ct,kt,Dt],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return i})();function Ke(i,a){return i.concat(Array.from(a))}function Di(i,a){let e=a.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let n=t.nodeType===1?t.nodeName:null;if(n===e)return t;if(n==="TABLE")break;t=t.parentNode}return null}var Mi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=L({type:i});static \u0275inj=B({imports:[di]})}return i})();var yn=[[["caption"]],[["colgroup"],["col"]],"*"],bn=["caption","colgroup, col","*"];function Cn(i,a){i&1&&N(0,2)}function wn(i,a){i&1&&(d(0,"thead",0),A(1,1),l(),d(2,"tbody",2),A(3,3)(4,4),l(),d(5,"tfoot",0),A(6,5),l())}function Dn(i,a){i&1&&A(0,1)(1,3)(2,4)(3,5)}var Ei=(()=>{class i extends xt{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275cmp=C({type:i,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,n){t&2&&z("mat-table-fixed-layout",n.fixedLayout)},exportAs:["matTable"],features:[O([{provide:xt,useExisting:i},{provide:V,useExisting:i},{provide:De,useValue:null}]),g],ngContentSelectors:bn,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){t&1&&(he(yn),N(0),N(1,1),M(2,Cn,1,0),M(3,wn,7,0)(4,Dn,4,0)),t&2&&(p(2),E(n._isServer?2:-1),p(),E(n._isNativeHtmlTable?3:4))},dependencies:[wt,Ct,kt,Dt],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return i})(),Ii=(()=>{class i extends Ze{static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["","matCellDef",""]],features:[O([{provide:Ze,useExisting:i}]),g]})}return i})(),Ai=(()=>{class i extends Ye{static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["","matHeaderCellDef",""]],features:[O([{provide:Ye,useExisting:i}]),g]})}return i})();var Ti=(()=>{class i extends ue{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[O([{provide:ue,useExisting:i}]),g]})}return i})(),Fi=(()=>{class i extends xi{static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[g]})}return i})();var Oi=(()=>{class i extends Ri{static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[g]})}return i})();var Pi=(()=>{class i extends ke{static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",S]},features:[O([{provide:ke,useExisting:i}]),g]})}return i})();var Bi=(()=>{class i extends Xe{static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[O([{provide:Xe,useExisting:i}]),g]})}return i})(),Li=(()=>{class i extends yt{static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275cmp=C({type:i,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[O([{provide:yt,useExisting:i}]),g],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&A(0,0)},dependencies:[re],encapsulation:2,changeDetection:1})}return i})();var Ni=(()=>{class i extends bt{static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275cmp=C({type:i,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[O([{provide:bt,useExisting:i}]),g],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&A(0,0)},dependencies:[re],encapsulation:2,changeDetection:1})}return i})();var zi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=L({type:i});static \u0275inj=B({imports:[Mi,ee]})}return i})();var xn=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Rn=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Sn(i,a){i&1&&(d(0,"span",3),N(1,1),l())}function Mn(i,a){i&1&&(d(0,"span",6),N(1,2),l())}var En=new w("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Hi=new w("MatChipAvatar"),ji=new w("MatChipTrailingIcon"),Vi=new w("MatChipEdit"),Gi=new w("MatChipRemove"),qi=new w("MatChip"),Ui=(()=>{class i{_elementRef=s(R);_parentChip=s(qi);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){s(mt).load(ut),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,n){t&2&&(U("disabled",n._getDisabledAttribute())("aria-disabled",n.disabled),z("mdc-evolution-chip__action--primary",n._isPrimary)("mdc-evolution-chip__action--secondary",!n._isPrimary)("mdc-evolution-chip__action--trailing",!n._isPrimary&&!n._isLeading))},inputs:{disabled:[2,"disabled","disabled",S],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Qt(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return i})(),In=(()=>{class i extends Ui{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,n){t&1&&J("click",function(r){return n._handleClick(r)})("keydown",function(r){return n._handleKeydown(r)}),t&2&&(U("tabindex",n._getTabindex()),z("mdc-evolution-chip__action--presentational",!1))},features:[g]})}return i})();var Wi=(()=>{class i{_changeDetectorRef=s(me);_elementRef=s(R);_tagName=s(Gt);_ngZone=s(Te);_focusMonitor=s(Le);_globalRippleOptions=s(Jt,{optional:!0});_document=s(le);_onFocus=new x;_onBlur=new x;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=be();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=s(te).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new q;destroyed=new q;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=s(ei);_injector=s(F);constructor(){let e=s(mt);e.load(ut),e.load(Zt),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Ie(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let n=t._elementRef.nativeElement;return n===e||n.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,n,o){if(t&1&&ve(o,Hi,5)(o,Vi,5)(o,ji,5)(o,Gi,5)(o,Hi,5)(o,ji,5)(o,Vi,5)(o,Gi,5),t&2){let r;v(r=y())&&(n.leadingIcon=r.first),v(r=y())&&(n.editIcon=r.first),v(r=y())&&(n.trailingIcon=r.first),v(r=y())&&(n.removeIcon=r.first),v(r=y())&&(n._allLeadingIcons=r),v(r=y())&&(n._allTrailingIcons=r),v(r=y())&&(n._allEditIcons=r),v(r=y())&&(n._allRemoveIcons=r)}},viewQuery:function(t,n){if(t&1&&ye(In,5),t&2){let o;v(o=y())&&(n.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,n){t&1&&J("keydown",function(r){return n._handleKeydown(r)}),t&2&&(_e("id",n.id),U("role",n.role)("aria-label",n.ariaLabel),Oe("mat-"+(n.color||"primary")),z("mdc-evolution-chip",!n._isBasicChip)("mdc-evolution-chip--disabled",n.disabled)("mdc-evolution-chip--with-trailing-action",n._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",n.leadingIcon)("mdc-evolution-chip--with-primary-icon",n.leadingIcon)("mdc-evolution-chip--with-avatar",n.leadingIcon)("mat-mdc-chip-with-avatar",n.leadingIcon)("mat-mdc-chip-highlighted",n.highlighted)("mat-mdc-chip-disabled",n.disabled)("mat-mdc-basic-chip",n._isBasicChip)("mat-mdc-standard-chip",!n._isBasicChip)("mat-mdc-chip-with-trailing-icon",n._hasTrailingIcon())("_mat-animation-noopable",n._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",S],highlighted:[2,"highlighted","highlighted",S],disableRipple:[2,"disableRipple","disableRipple",S],disabled:[2,"disabled","disabled",S]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[O([{provide:qi,useExisting:i}])],ngContentSelectors:Rn,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,n){t&1&&(he(xn),oe(0,"span",0),d(1,"span",1)(2,"span",2),M(3,Sn,2,0,"span",3),d(4,"span",4),N(5),oe(6,"span",5),l()()(),M(7,Mn,2,0,"span",6)),t&2&&(p(3),E(n.leadingIcon?3:-1),p(4),E(n._hasTrailingIcon()?7:-1))},dependencies:[Ui],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return i})();var Ki=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=L({type:i});static \u0275inj=B({providers:[Xt,{provide:En,useValue:{separatorKeyCodes:[13]}}],imports:[ii,ee]})}return i})();function Tn(i,a){}var ie=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var St=(()=>{class i extends mi{_elementRef=s(R);_focusTrapFactory=s(Yt);_config;_interactivityChecker=s(pt);_ngZone=s(Te);_focusMonitor=s(Le);_renderer=s(rt);_changeDetectorRef=s(me);_injector=s(F);_platform=s(Be);_document=s(le);_portalOutlet;_focusTrapped=new x;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(ie,{optional:!0})||new ie,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),r(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",n),r=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||Y(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=Pe(),o=this._elementRef.nativeElement;(!n||n===this._document.body||n===o||o.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Pe();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Pe()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&ye(Ce,7),t&2){let o;v(o=y())&&(n._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&U("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[g],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&I(0,Tn,0,0,"ng-template",0)},dependencies:[Ce],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return i})(),xe=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new x;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!ze(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",e=""){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}},Fn=new w("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=s(F);return()=>qe(i)}}),On=new w("DialogData"),Pn=new w("DefaultDialogConfig");function Bn(i){let a=ge(i),e=new q;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var Mt=(()=>{class i{_injector=s(F);_defaultOptions=s(Pn,{optional:!0});_parentDialog=s(i,{optional:!0,skipSelf:!0});_overlayContainer=s(ui);_idGenerator=s(te);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;_ariaHiddenElements=new Map;_scrollStrategy=s(Fn);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Ee(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ae(void 0)));open(e,t){let n=this._defaultOptions||new ie;t=Q(Q({},n),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),r=gi(this._injector,o),c=new xe(r,t),m=this._attachContainer(r,c,t);if(c.containerInstance=m,!this.openDialogs.length){let f=this._overlayContainer.getContainerElement();m._focusTrapped?m._focusTrapped.pipe(ce(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(f)}):this._hideNonDialogContentFromAssistiveTechnology(f)}return this._attachDialogContent(e,c,m,t),this.openDialogs.push(c),c.closed.subscribe(()=>this._removeOpenDialog(c,!0)),this.afterOpened.next(c),c}closeAll(){Rt(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Rt(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Rt(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new pi({positionStrategy:e.positionStrategy||Ue().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let o=n.injector||n.viewContainerRef?.injector,r=[{provide:ie,useValue:n},{provide:xe,useValue:t},{provide:fi,useValue:e}],c;n.container?typeof n.container=="function"?c=n.container:(c=n.container.type,r.push(...n.container.providers(n))):c=St;let m=new ft(c,n.viewContainerRef,F.create({parent:o||this._injector,providers:r}));return e.attach(m).instance}_attachDialogContent(e,t,n,o){if(e instanceof X){let r=this._createInjector(o,t,n,void 0),c={$implicit:o.data,dialogRef:t};o.templateContext&&(c=Q(Q({},c),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),n.attachTemplatePortal(new hi(e,null,c,r))}else{let r=this._createInjector(o,t,n,this._injector),c=n.attachComponentPortal(new ft(e,o.viewContainerRef,r,null,o.bindings));t.componentRef=c,t.componentInstance=c.instance}}_createInjector(e,t,n,o){let r=e.injector||e.viewContainerRef?.injector,c=[{provide:On,useValue:e.data},{provide:xe,useValue:t}];return e.providers&&(typeof e.providers=="function"?c.push(...e.providers(t,e,n)):c.push(...e.providers)),e.direction&&(!r||!r.get(pe,null,{optional:!0}))&&c.push({provide:pe,useValue:Bn(e.direction)}),F.create({parent:r||o,providers:c})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,r)=>{o?r.setAttribute("aria-hidden",o):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let o=t[n];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Fe({token:i,factory:i.\u0275fac})}return i})();function Rt(i,a){let e=i.length;for(;e--;)a(i[e])}var Zi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=L({type:i});static \u0275inj=B({providers:[Mt],imports:[We,we,Ne,we]})}return i})();function Ln(i,a){}var et=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},Et="mdc-dialog--open",Yi="mdc-dialog--opening",Xi="mdc-dialog--closing",Nn=150,zn=75,Hn=(()=>{class i extends St{_animationStateChanged=new q;_animationsEnabled=!be();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?en(this._config.enterAnimationDuration)??Nn:0;_exitAnimationDuration=this._animationsEnabled?en(this._config.exitAnimationDuration)??zn:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Ji,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Yi,Et)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Et),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Et),this._animationsEnabled?(this._hostElement.style.setProperty(Ji,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Xi)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Yi,Xi)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275cmp=C({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(_e("id",n._config.id),U("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),z("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[g],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(d(0,"div",0)(1,"div",1),I(2,Ln,0,0,"ng-template",2),l()())},dependencies:[Ce],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return i})(),Ji="--mat-dialog-transition-duration";function en(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?ht(i.substring(0,i.length-2)):i.endsWith("s")?ht(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var Je=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(Je||{}),Re=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new it(1);_beforeClosed=new it(1);_result;_closeFallbackTimeout;_state=Je.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(fe(n=>n.state==="opened"),ce(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(fe(n=>n.state==="closed"),ce(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Ie(this.backdropClick(),this.keydownEvents().pipe(fe(n=>n.keyCode===27&&!this.disableClose&&!ze(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),tn(this,n.type==="keydown"?"keyboard":"mouse"))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(fe(t=>t.state==="closing"),ce(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Je.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",e=""){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=Je.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function tn(i,a,e){return i._closeInteractionType=a,i.close(e)}var It=new w("MatMdcDialogData"),jn=new w("mat-mdc-dialog-default-options"),Vn=new w("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(F);return()=>qe(i)}}),Se=(()=>{class i{_defaultOptions=s(jn,{optional:!0});_scrollStrategy=s(Vn);_parentDialog=s(i,{optional:!0,skipSelf:!0});_idGenerator=s(te);_injector=s(F);_dialog=s(Mt);_animationsDisabled=be();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;dialogConfigClass=et;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Ee(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Ae(void 0)));constructor(){this._dialogRefConstructor=Re,this._dialogContainerType=Hn,this._dialogDataToken=It}open(e,t){let n;t=Q(Q({},this._defaultOptions||new et),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,Ot(Q({},t),{positionStrategy:Ue(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:ie,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(r,c,m)=>(n=new this._dialogRefConstructor(r,t,m),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:m},{provide:this._dialogDataToken,useValue:c.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=o.componentRef,n.componentInstance=o.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(n);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Fe({token:i,factory:i.\u0275fac})}return i})(),nn=(()=>{class i{dialogRef=s(Re,{optional:!0});_elementRef=s(R);_dialog=s(Se);ariaLabel;type="button";dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=cn(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute("aria-disabled")!=="true"&&tn(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,n){t&1&&J("click",function(r){return n._onButtonClick(r)}),t&2&&U("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[ae]})}return i})(),an=(()=>{class i{_dialogRef=s(Re,{optional:!0});_elementRef=s(R);_dialog=s(Se);ngOnInit(){this._dialogRef||(this._dialogRef=cn(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i})}return i})(),on=(()=>{class i extends an{id=s(te).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,n){t&2&&_e("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[g]})}return i})(),rn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=u({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Ht([si])]})}return i})(),sn=(()=>{class i extends an{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=_(i)))(n||i)}})();static \u0275dir=u({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,n){t&2&&z("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[g]})}return i})();function cn(i,a){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var ln=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=L({type:i});static \u0275inj=B({providers:[Se],imports:[Zi,We,we,ee]})}return i})();var dn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=L({type:i});static \u0275inj=B({imports:[Ne,ee]})}return i})();var tt=class i{data=s(It);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-confirm-dialog"]],decls:11,vars:4,consts:[["mat-dialog-title",""],["color","warn"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","warn",3,"mat-dialog-close"]],template:function(e,t){e&1&&(d(0,"h2",0)(1,"mat-icon",1),h(2,"warning"),l(),h(3),l(),d(4,"mat-dialog-content"),h(5),l(),d(6,"mat-dialog-actions",2)(7,"button",3),h(8,"Cancel"),l(),d(9,"button",4),h(10),l()()),e&2&&(p(3),G(" ",t.data.title," "),p(2),j(t.data.message),p(4),W("mat-dialog-close",!0),p(),G(" ",t.data.confirmText??"Delete"," "))},dependencies:[ln,nn,on,sn,rn,je,He,Ge,Ve],styles:["h2[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}mat-dialog-content[_ngcontent-%COMP%]{min-width:320px;padding:16px 24px}mat-dialog-actions[_ngcontent-%COMP%]{padding:8px 16px 16px;gap:8px}"]})};var Wn=i=>["/admin/packages",i,"edit"];function Kn(i,a){i&1&&(d(0,"div",10),oe(1,"mat-spinner",13),d(2,"p"),h(3,"Loading packages\u2026"),l()())}function $n(i,a){i&1&&(d(0,"mat-card",11)(1,"mat-icon"),h(2,"inventory_2"),l(),d(3,"h3"),h(4,"No packages yet"),l(),d(5,"p"),h(6,"Add your first tour package to get started."),l(),d(7,"a",9)(8,"mat-icon"),h(9,"add"),l(),h(10," Add Package "),l()())}function Zn(i,a){i&1&&(d(0,"th",26),h(1,"Package Name"),l())}function Yn(i,a){if(i&1&&(d(0,"span",29),h(1),l()),i&2){let e=Z().$implicit;p(),j(e.badge)}}function Xn(i,a){if(i&1&&(d(0,"td",27)(1,"div",28)(2,"strong"),h(3),l(),M(4,Yn,2,1,"span",29),l(),d(5,"div",30),h(6),l()()),i&2){let e=a.$implicit;p(3),j(e.title),p(),E(e.badge?4:-1),p(2),j(e.slug)}}function Jn(i,a){i&1&&(d(0,"th",26),h(1,"Duration"),l())}function ea(i,a){if(i&1&&(d(0,"td",27),h(1),l()),i&2){let e=a.$implicit;p(),j(e.duration)}}function ta(i,a){i&1&&(d(0,"th",26),h(1,"Price"),l())}function ia(i,a){if(i&1&&(d(0,"div",32),h(1),ct(2,"number"),l()),i&2){let e=Z().$implicit;p(),G("\u20B9",lt(2,1,e.originalPrice))}}function na(i,a){if(i&1&&(d(0,"td",27)(1,"div",31),h(2),ct(3,"number"),l(),M(4,ia,3,3,"div",32),l()),i&2){let e=a.$implicit;p(2),G("\u20B9",lt(3,2,e.price)),p(2),E(e.originalPrice>e.price?4:-1)}}function aa(i,a){i&1&&(d(0,"th",26),h(1,"Difficulty"),l())}function oa(i,a){if(i&1&&(d(0,"td",27)(1,"mat-chip"),h(2),l()()),i&2){let e=a.$implicit;p(),Oe("diff-"+e.difficulty?.toLowerCase()),p(),G(" ",e.difficulty," ")}}function ra(i,a){i&1&&(d(0,"th",26),h(1,"Status"),l())}function sa(i,a){if(i&1){let e=st();d(0,"td",27)(1,"button",33),J("click",function(){let n=at(e).$implicit,o=Z(2);return ot(o.toggleActive(n))}),d(2,"mat-icon"),h(3),l(),h(4),l()()}if(i&2){let e=a.$implicit;p(),W("color",e.active?"primary":"")("matTooltip",e.active?"Click to deactivate":"Click to activate"),p(2),j(e.active?"check_circle":"pause_circle"),p(),G(" ",e.active?"Active":"Inactive"," ")}}function ca(i,a){i&1&&(d(0,"th",26),h(1,"Actions"),l())}function la(i,a){if(i&1){let e=st();d(0,"td",27)(1,"div",34)(2,"a",35)(3,"mat-icon"),h(4,"edit"),l()(),d(5,"button",36),J("click",function(){let n=at(e).$implicit,o=Z(2);return ot(o.openDeleteDialog(n))}),d(6,"mat-icon"),h(7,"delete"),l()()()()}if(i&2){let e=a.$implicit;p(2),W("routerLink",jt(1,Wn,e.id))}}function da(i,a){i&1&&oe(0,"tr",37)}function ha(i,a){i&1&&oe(0,"tr",38)}function ma(i,a){if(i&1&&(d(0,"mat-card",12)(1,"div",14)(2,"table",15),K(3,16),I(4,Zn,2,0,"th",17)(5,Xn,7,3,"td",18),$(),K(6,19),I(7,Jn,2,0,"th",17)(8,ea,2,1,"td",18),$(),K(9,20),I(10,ta,2,0,"th",17)(11,na,5,4,"td",18),$(),K(12,21),I(13,aa,2,0,"th",17)(14,oa,3,3,"td",18),$(),K(15,22),I(16,ra,2,0,"th",17)(17,sa,5,4,"td",18),$(),K(18,23),I(19,ca,2,0,"th",17)(20,la,8,3,"td",18),$(),I(21,da,1,0,"tr",24)(22,ha,1,0,"tr",25),l()()()),i&2){let e=Z();p(2),W("dataSource",e.packages()),p(19),W("matHeaderRowDef",e.displayedColumns),p(),W("matRowDefColumns",e.displayedColumns)}}var hn=class i{pkgService=s(Ci);dialog=s(Se);snackbar=s(bi);packages=ge([]);isLoading=ge(!0);displayedColumns=["title","duration","price","difficulty","status","actions"];sub;ngOnInit(){this.sub=this.pkgService.getAll().subscribe({next:a=>{this.packages.set(a),this.isLoading.set(!1)},error:()=>{this.snackbar.open("Failed to load packages.","Close",{duration:4e3}),this.isLoading.set(!1)}})}ngOnDestroy(){this.sub?.unsubscribe()}openDeleteDialog(a){this.dialog.open(tt,{data:{title:"Delete Package",message:`Are you sure you want to delete "${a.title}"? This cannot be undone.`,confirmText:"Delete"}}).afterClosed().subscribe(async t=>{if(t)try{await this.pkgService.delete(a.id),this.snackbar.open("Package deleted successfully.","Close",{duration:3e3})}catch{this.snackbar.open("Failed to delete package.","Close",{duration:4e3})}})}async toggleActive(a){try{await this.pkgService.update(a.id,{active:!a.active}),this.snackbar.open(`Package ${a.active?"deactivated":"activated"}.`,"Close",{duration:2500})}catch{this.snackbar.open("Update failed.","Close",{duration:3e3})}}get activeCount(){return this.packages().filter(a=>a.active).length}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["app-admin-dashboard"]],decls:36,vars:6,consts:[[1,"dashboard"],[1,"stats-row"],[1,"stat-card"],["color","primary"],[1,"stat-value"],[1,"stat-label"],[2,"color","#4caf50"],[2,"color","#ff9800"],[1,"section-header"],["mat-flat-button","","color","primary","routerLink","/admin/packages/new"],[1,"center-spinner"],[1,"empty-state"],[1,"table-card"],["diameter","48"],[1,"table-wrapper"],["mat-table","",1,"packages-table",3,"dataSource"],["matColumnDef","title"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","duration"],["matColumnDef","price"],["matColumnDef","difficulty"],["matColumnDef","status"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"pkg-name"],[1,"badge"],[1,"pkg-slug"],[1,"price"],[1,"original-price"],["mat-stroked-button","",1,"status-btn",3,"click","color","matTooltip"],[1,"actions"],["mat-icon-button","","matTooltip","Edit",3,"routerLink"],["mat-icon-button","","color","warn","matTooltip","Delete",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){e&1&&(d(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-icon",3),h(4,"inventory_2"),l(),d(5,"div")(6,"div",4),h(7),l(),d(8,"div",5),h(9,"Total Packages"),l()()(),d(10,"mat-card",2)(11,"mat-icon",6),h(12,"check_circle"),l(),d(13,"div")(14,"div",4),h(15),l(),d(16,"div",5),h(17,"Active"),l()()(),d(18,"mat-card",2)(19,"mat-icon",7),h(20,"pause_circle"),l(),d(21,"div")(22,"div",4),h(23),l(),d(24,"div",5),h(25,"Inactive"),l()()()(),d(26,"div",8)(27,"h1"),h(28,"Tour Packages"),l(),d(29,"a",9)(30,"mat-icon"),h(31,"add"),l(),h(32," Add Package "),l()(),M(33,Kn,4,0,"div",10),M(34,$n,11,0,"mat-card",11),M(35,ma,23,3,"mat-card",12),l()),e&2&&(p(7),j(t.packages().length),p(8),j(t.activeCount),p(8),j(t.packages().length-t.activeCount),p(10),E(t.isLoading()?33:-1),p(),E(!t.isLoading()&&t.packages().length===0?34:-1),p(),E(!t.isLoading()&&t.packages().length>0?35:-1))},dependencies:[Ut,Wt,zi,Ei,Ai,Pi,Ti,Ii,Bi,Fi,Oi,Li,Ni,je,He,ti,Ge,Ve,$t,Kt,Ki,Wi,vi,_i,ai,ni,dn,qt],styles:[".dashboard[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.stats-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}@media(max-width:600px){.stats-row[_ngcontent-%COMP%]{grid-template-columns:1fr}}.stat-card[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:20px!important}.stat-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:36px;width:36px;height:36px}.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%]{font-size:1.75rem;font-weight:700;line-height:1}.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%]{font-size:.825rem;color:#666;margin-top:4px}.section-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.section-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.center-spinner[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;padding:48px;color:#666}.empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:12px;padding:64px 24px!important;text-align:center}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:56px;width:56px;height:56px;color:#ccc}.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#555}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#888}.table-card[_ngcontent-%COMP%]{overflow:hidden}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto}.packages-table[_ngcontent-%COMP%]{width:100%}.packages-table[_ngcontent-%COMP%]   .pkg-name[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.packages-table[_ngcontent-%COMP%]   .pkg-name[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{background:#ff6f00;color:#fff;font-size:.65rem;padding:2px 6px;border-radius:4px;font-weight:700;text-transform:uppercase}.packages-table[_ngcontent-%COMP%]   .pkg-slug[_ngcontent-%COMP%]{font-size:.75rem;color:#888;margin-top:2px}.packages-table[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-weight:600;color:#1a237e}.packages-table[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%]{font-size:.75rem;color:#999;text-decoration:line-through}.packages-table[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%]{font-size:.75rem!important}.packages-table[_ngcontent-%COMP%]   mat-chip.diff-easy[_ngcontent-%COMP%]{--mdc-chip-label-text-color: #2e7d32;background:#e8f5e9}.packages-table[_ngcontent-%COMP%]   mat-chip.diff-moderate[_ngcontent-%COMP%]{--mdc-chip-label-text-color: #e65100;background:#fff3e0}.packages-table[_ngcontent-%COMP%]   mat-chip.diff-challenging[_ngcontent-%COMP%]{--mdc-chip-label-text-color: #b71c1c;background:#ffebee}.packages-table[_ngcontent-%COMP%]   .status-btn[_ngcontent-%COMP%]{font-size:.8rem;display:flex;align-items:center;gap:4px}.packages-table[_ngcontent-%COMP%]   .status-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px}.packages-table[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;gap:4px}"]})};export{hn as AdminDashboardComponent};
