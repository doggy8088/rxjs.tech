"use strict";(self.webpackChunkrxjs_dev=self.webpackChunkrxjs_dev||[]).push([[317],{74317:function(t,e,i){i.r(e),i.d(e,{CodeTabsModule:function(){return yt}});var n=i(54364),a=i(34622),s=i(2316),o=i(42118),r=i(51606),l=i(90851),c=i(40912),d=i(24298),h=i(71918),b=i(20749),u=i(90930),p=i(17159),m=i(12027),g=i(47599),_=i(59439),f=i(97175),x=i(57993),y=i(52249),v=i(44094),C=i(20657),T=i(36145),I=i(90084),w=i(772),k=i(12770);function S(t,e){1&t&&s.Hsn(0)}const P=["*"];function R(t,e){}const D=function(t){return{animationDuration:t}},L=function(t,e){return{value:t,params:e}},A=["tabBodyWrapper"],B=["tabHeader"];function H(t,e){}function O(t,e){if(1&t&&s.YNc(0,H,0,0,"ng-template",9),2&t){const t=s.oxw().$implicit;s.Q6J("cdkPortalOutlet",t.templateLabel)}}function Y(t,e){if(1&t&&s._uU(0),2&t){const t=s.oxw().$implicit;s.Oqu(t.textLabel)}}function E(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"div",6),s.NdJ("click",function(){const e=s.CHM(t),i=e.$implicit,n=e.index,a=s.oxw(),o=s.MAs(1);return a._handleClick(i,o,n)})("cdkFocusChange",function(e){const i=s.CHM(t).index;return s.oxw()._tabFocusChanged(e,i)}),s.TgZ(1,"div",7),s.YNc(2,O,1,1,"ng-template",8),s.YNc(3,Y,1,1,"ng-template",8),s.qZA(),s.qZA()}if(2&t){const t=e.$implicit,i=e.index,n=s.oxw();s.ekj("mat-tab-label-active",n.selectedIndex==i),s.Q6J("id",n._getTabLabelId(i))("disabled",t.disabled)("matRippleDisabled",t.disabled||n.disableRipple),s.uIk("tabIndex",n._getTabIndex(t,i))("aria-posinset",i+1)("aria-setsize",n._tabs.length)("aria-controls",n._getTabContentId(i))("aria-selected",n.selectedIndex==i)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),s.xp6(2),s.Q6J("ngIf",t.templateLabel),s.xp6(1),s.Q6J("ngIf",!t.templateLabel)}}function M(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"mat-tab-body",10),s.NdJ("_onCentered",function(){return s.CHM(t),s.oxw()._removeTabBodyWrapperHeight()})("_onCentering",function(e){return s.CHM(t),s.oxw()._setTabBodyWrapperHeight(e)}),s.qZA()}if(2&t){const t=e.$implicit,i=e.index,n=s.oxw();s.ekj("mat-tab-body-active",n.selectedIndex===i),s.Q6J("id",n._getTabContentId(i))("content",t.content)("position",t.position)("origin",t.origin)("animationDuration",n.animationDuration),s.uIk("tabindex",null!=n.contentTabIndex&&n.selectedIndex===i?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(i))}}const F=["tabListContainer"],G=["tabList"],q=["nextPaginator"],Z=["previousPaginator"],W=new s.OlP("MatInkBarPositioner",{providedIn:"root",factory:function(){return t=>({left:t?(t.offsetLeft||0)+"px":"0",width:t?(t.offsetWidth||0)+"px":"0"})}});let j=(()=>{class t{constructor(t,e,i,n){this._elementRef=t,this._ngZone=e,this._inkBarPositioner=i,this._animationMode=n}alignToElement(t){this.show(),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._setStyles(t))}):this._setStyles(t)}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}_setStyles(t){const e=this._inkBarPositioner(t),i=this._elementRef.nativeElement;i.style.left=e.left,i.style.width=e.width}}return t.ɵfac=function(e){return new(e||t)(s.Y36(s.SBq),s.Y36(s.R0b),s.Y36(W),s.Y36(h.Qb,8))},t.ɵdir=s.lG2({type:t,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(t,e){2&t&&s.ekj("_mat-animation-noopable","NoopAnimations"===e._animationMode)}}),t})();const Q=new s.OlP("MatTabContent"),J=new s.OlP("MatTabLabel");let N=(()=>{class t extends c.ig{}return t.ɵfac=function(){let e;return function(i){return(e||(e=s.n5z(t)))(i||t)}}(),t.ɵdir=s.lG2({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[s._Bn([{provide:J,useExisting:t}]),s.qOj]}),t})();const z=(0,d.Id)(class{}),$=new s.OlP("MAT_TAB_GROUP");let V=(()=>{class t extends z{constructor(t,e){super(),this._viewContainerRef=t,this._closestTabGroup=e,this.textLabel="",this._contentPortal=null,this._stateChanges=new b.x,this.position=null,this.origin=null,this.isActive=!1}get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}get content(){return this._contentPortal}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new c.UE(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&(this._templateLabel=t)}}return t.ɵfac=function(e){return new(e||t)(s.Y36(s.s_b),s.Y36($,8))},t.ɵcmp=s.Xpm({type:t,selectors:[["mat-tab"]],contentQueries:function(t,e,i){if(1&t&&(s.Suo(i,J,5),s.Suo(i,Q,7,s.Rgc)),2&t){let t;s.iGM(t=s.CRH())&&(e.templateLabel=t.first),s.iGM(t=s.CRH())&&(e._explicitContent=t.first)}},viewQuery:function(t,e){if(1&t&&s.Gf(s.Rgc,7),2&t){let t;s.iGM(t=s.CRH())&&(e._implicitContent=t.first)}},inputs:{disabled:"disabled",textLabel:["label","textLabel"],ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"]},exportAs:["matTab"],features:[s.qOj,s.TTD],ngContentSelectors:P,decls:1,vars:0,template:function(t,e){1&t&&(s.F$t(),s.YNc(0,S,1,0,"ng-template"))},encapsulation:2}),t})();const U={translateTab:(0,f.X$)("translateTab",[(0,f.SB)("center, void, left-origin-center, right-origin-center",(0,f.oB)({transform:"none"})),(0,f.SB)("left",(0,f.oB)({transform:"translate3d(-100%, 0, 0)",minHeight:"1px"})),(0,f.SB)("right",(0,f.oB)({transform:"translate3d(100%, 0, 0)",minHeight:"1px"})),(0,f.eR)("* => left, * => right, left => center, right => center",(0,f.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),(0,f.eR)("void => left-origin-center",[(0,f.oB)({transform:"translate3d(-100%, 0, 0)"}),(0,f.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),(0,f.eR)("void => right-origin-center",[(0,f.oB)({transform:"translate3d(100%, 0, 0)"}),(0,f.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])])};let K=(()=>{class t extends c.Pl{constructor(t,e,i,n){super(t,e,n),this._host=i,this._centeringSub=u.w0.EMPTY,this._leavingSub=u.w0.EMPTY}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe((0,x.O)(this._host._isCenterPosition(this._host._position))).subscribe(t=>{t&&!this.hasAttached()&&this.attach(this._host._content)}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this.detach()})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}}return t.ɵfac=function(e){return new(e||t)(s.Y36(s._Vd),s.Y36(s.s_b),s.Y36((0,s.Gpc)(()=>tt)),s.Y36(n.K0))},t.ɵdir=s.lG2({type:t,selectors:[["","matTabBodyHost",""]],features:[s.qOj]}),t})(),X=(()=>{class t{constructor(t,e,i){this._elementRef=t,this._dir=e,this._dirChangeSubscription=u.w0.EMPTY,this._translateTabComplete=new b.x,this._onCentering=new s.vpe,this._beforeCentering=new s.vpe,this._afterLeavingCenter=new s.vpe,this._onCentered=new s.vpe(!0),this.animationDuration="500ms",e&&(this._dirChangeSubscription=e.change.subscribe(t=>{this._computePositionAnimationState(t),i.markForCheck()})),this._translateTabComplete.pipe((0,y.x)((t,e)=>t.fromState===e.fromState&&t.toState===e.toState)).subscribe(t=>{this._isCenterPosition(t.toState)&&this._isCenterPosition(this._position)&&this._onCentered.emit(),this._isCenterPosition(t.fromState)&&!this._isCenterPosition(this._position)&&this._afterLeavingCenter.emit()})}set position(t){this._positionIndex=t,this._computePositionAnimationState()}ngOnInit(){"center"==this._position&&null!=this.origin&&(this._position=this._computePositionFromOrigin(this.origin))}ngOnDestroy(){this._dirChangeSubscription.unsubscribe(),this._translateTabComplete.complete()}_onTranslateTabStarted(t){const e=this._isCenterPosition(t.toState);this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_isCenterPosition(t){return"center"==t||"left-origin-center"==t||"right-origin-center"==t}_computePositionAnimationState(t=this._getLayoutDirection()){this._position=this._positionIndex<0?"ltr"==t?"left":"right":this._positionIndex>0?"ltr"==t?"right":"left":"center"}_computePositionFromOrigin(t){const e=this._getLayoutDirection();return"ltr"==e&&t<=0||"rtl"==e&&t>0?"left-origin-center":"right-origin-center"}}return t.ɵfac=function(e){return new(e||t)(s.Y36(s.SBq),s.Y36(w.Is,8),s.Y36(s.sBO))},t.ɵdir=s.lG2({type:t,inputs:{animationDuration:"animationDuration",position:"position",_content:["content","_content"],origin:"origin"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_afterLeavingCenter:"_afterLeavingCenter",_onCentered:"_onCentered"}}),t})(),tt=(()=>{class t extends X{constructor(t,e,i){super(t,e,i)}}return t.ɵfac=function(e){return new(e||t)(s.Y36(s.SBq),s.Y36(w.Is,8),s.Y36(s.sBO))},t.ɵcmp=s.Xpm({type:t,selectors:[["mat-tab-body"]],viewQuery:function(t,e){if(1&t&&s.Gf(c.Pl,5),2&t){let t;s.iGM(t=s.CRH())&&(e._portalHost=t.first)}},hostAttrs:[1,"mat-tab-body"],features:[s.qOj],decls:3,vars:6,consts:[["cdkScrollable","",1,"mat-tab-body-content"],["content",""],["matTabBodyHost",""]],template:function(t,e){1&t&&(s.TgZ(0,"div",0,1),s.NdJ("@translateTab.start",function(t){return e._onTranslateTabStarted(t)})("@translateTab.done",function(t){return e._translateTabComplete.next(t)}),s.YNc(2,R,0,0,"ng-template",2),s.qZA()),2&t&&s.Q6J("@translateTab",s.WLB(3,L,e._position,s.VKq(1,D,e.animationDuration)))},directives:[K],styles:[".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[U.translateTab]}}),t})();const et=new s.OlP("MAT_TABS_CONFIG");let it=0;class nt{}const at=(0,d.pj)((0,d.Kr)(class{constructor(t){this._elementRef=t}}),"primary");let st=(()=>{class t extends at{constructor(t,e,i,n){var a;super(t),this._changeDetectorRef=e,this._animationMode=n,this._tabs=new s.n_E,this._indexToSelect=0,this._tabBodyWrapperHeight=0,this._tabsSubscription=u.w0.EMPTY,this._tabLabelSubscription=u.w0.EMPTY,this._selectedIndex=null,this.headerPosition="above",this.selectedIndexChange=new s.vpe,this.focusChange=new s.vpe,this.animationDone=new s.vpe,this.selectedTabChange=new s.vpe(!0),this._groupId=it++,this.animationDuration=i&&i.animationDuration?i.animationDuration:"500ms",this.disablePagination=!(!i||null==i.disablePagination)&&i.disablePagination,this.dynamicHeight=!(!i||null==i.dynamicHeight)&&i.dynamicHeight,this.contentTabIndex=null!==(a=null==i?void 0:i.contentTabIndex)&&void 0!==a?a:null}get dynamicHeight(){return this._dynamicHeight}set dynamicHeight(t){this._dynamicHeight=(0,C.Ig)(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=(0,C.su)(t,null)}get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=/^\d+$/.test(t)?t+"ms":t}get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(t){this._contentTabIndex=(0,C.su)(t,null)}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){const e=this._elementRef.nativeElement;e.classList.remove(`mat-background-${this.backgroundColor}`),t&&e.classList.add(`mat-background-${t}`),this._backgroundColor=t}ngAfterContentChecked(){const t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){const e=null==this._selectedIndex;if(!e){this.selectedTabChange.emit(this._createChangeEvent(t));const e=this._tabBodyWrapper.nativeElement;e.style.minHeight=e.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((e,i)=>e.isActive=i===t),e||(this.selectedIndexChange.emit(t),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((e,i)=>{e.position=i-t,null!=this._selectedIndex&&0==e.position&&!e.origin&&(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{if(this._clampTabIndex(this._indexToSelect)===this._selectedIndex){const t=this._tabs.toArray();for(let e=0;e<t.length;e++)if(t[e].isActive){this._indexToSelect=this._selectedIndex=e;break}}this._changeDetectorRef.markForCheck()})}_subscribeToAllTabChanges(){this._allTabs.changes.pipe((0,x.O)(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}focusTab(t){const e=this._tabHeader;e&&(e.focusIndex=t)}_focusChanged(t){this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){const e=new nt;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=(0,p.T)(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t){return`mat-tab-label-${this._groupId}-${t}`}_getTabContentId(t){return`mat-tab-content-${this._groupId}-${t}`}_setTabBodyWrapperHeight(t){if(!this._dynamicHeight||!this._tabBodyWrapperHeight)return;const e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){const t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this.animationDone.emit()}_handleClick(t,e,i){t.disabled||(this.selectedIndex=e.focusIndex=i)}_getTabIndex(t,e){return t.disabled?null:this.selectedIndex===e?0:-1}_tabFocusChanged(t,e){t&&"mouse"!==t&&"touch"!==t&&(this._tabHeader.focusIndex=e)}}return t.ɵfac=function(e){return new(e||t)(s.Y36(s.SBq),s.Y36(s.sBO),s.Y36(et,8),s.Y36(h.Qb,8))},t.ɵdir=s.lG2({type:t,inputs:{headerPosition:"headerPosition",animationDuration:"animationDuration",disablePagination:"disablePagination",dynamicHeight:"dynamicHeight",contentTabIndex:"contentTabIndex",selectedIndex:"selectedIndex",backgroundColor:"backgroundColor"},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},features:[s.qOj]}),t})(),ot=(()=>{class t extends st{constructor(t,e,i,n){super(t,e,i,n)}}return t.ɵfac=function(e){return new(e||t)(s.Y36(s.SBq),s.Y36(s.sBO),s.Y36(et,8),s.Y36(h.Qb,8))},t.ɵcmp=s.Xpm({type:t,selectors:[["mat-tab-group"]],contentQueries:function(t,e,i){if(1&t&&s.Suo(i,V,5),2&t){let t;s.iGM(t=s.CRH())&&(e._allTabs=t)}},viewQuery:function(t,e){if(1&t&&(s.Gf(A,5),s.Gf(B,5)),2&t){let t;s.iGM(t=s.CRH())&&(e._tabBodyWrapper=t.first),s.iGM(t=s.CRH())&&(e._tabHeader=t.first)}},hostAttrs:[1,"mat-tab-group"],hostVars:4,hostBindings:function(t,e){2&t&&s.ekj("mat-tab-group-dynamic-height",e.dynamicHeight)("mat-tab-group-inverted-header","below"===e.headerPosition)},inputs:{color:"color",disableRipple:"disableRipple"},exportAs:["matTabGroup"],features:[s._Bn([{provide:$,useExisting:t}]),s.qOj],decls:6,vars:7,consts:[[3,"selectedIndex","disableRipple","disablePagination","indexFocused","selectFocusedIndex"],["tabHeader",""],["class","mat-tab-label mat-focus-indicator","role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",3,"id","mat-tab-label-active","disabled","matRippleDisabled","click","cdkFocusChange",4,"ngFor","ngForOf"],[1,"mat-tab-body-wrapper"],["tabBodyWrapper",""],["role","tabpanel",3,"id","mat-tab-body-active","content","position","origin","animationDuration","_onCentered","_onCentering",4,"ngFor","ngForOf"],["role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",1,"mat-tab-label","mat-focus-indicator",3,"id","disabled","matRippleDisabled","click","cdkFocusChange"],[1,"mat-tab-label-content"],[3,"ngIf"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"id","content","position","origin","animationDuration","_onCentered","_onCentering"]],template:function(t,e){1&t&&(s.TgZ(0,"mat-tab-header",0,1),s.NdJ("indexFocused",function(t){return e._focusChanged(t)})("selectFocusedIndex",function(t){return e.selectedIndex=t}),s.YNc(2,E,4,14,"div",2),s.qZA(),s.TgZ(3,"div",3,4),s.YNc(5,M,1,9,"mat-tab-body",5),s.qZA()),2&t&&(s.Q6J("selectedIndex",e.selectedIndex||0)("disableRipple",e.disableRipple)("disablePagination",e.disablePagination),s.xp6(2),s.Q6J("ngForOf",e._tabs),s.xp6(1),s.ekj("_mat-animation-noopable","NoopAnimations"===e._animationMode),s.xp6(2),s.Q6J("ngForOf",e._tabs))},directives:function(){return[bt,n.sg,lt,d.wG,r.kH,n.O5,c.Pl,tt]},styles:[".mat-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],encapsulation:2}),t})();const rt=(0,d.Id)(class{});let lt=(()=>{class t extends rt{constructor(t){super(),this.elementRef=t}focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}}return t.ɵfac=function(e){return new(e||t)(s.Y36(s.SBq))},t.ɵdir=s.lG2({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,e){2&t&&(s.uIk("aria-disabled",!!e.disabled),s.ekj("mat-tab-disabled",e.disabled))},inputs:{disabled:"disabled"},features:[s.qOj]}),t})();const ct=(0,T.i$)({passive:!0});let dt=(()=>{class t{constructor(t,e,i,n,a,o,r){this._elementRef=t,this._changeDetectorRef=e,this._viewportRuler=i,this._dir=n,this._ngZone=a,this._platform=o,this._animationMode=r,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new b.x,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new b.x,this.disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new s.vpe,this.indexFocused=new s.vpe,a.runOutsideAngular(()=>{(0,m.R)(t.nativeElement,"mouseleave").pipe((0,v.R)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){t=(0,C.su)(t),this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}ngAfterViewInit(){(0,m.R)(this._previousPaginator.nativeElement,"touchstart",ct).pipe((0,v.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),(0,m.R)(this._nextPaginator.nativeElement,"touchstart",ct).pipe((0,v.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const t=this._dir?this._dir.change:(0,g.of)("ltr"),e=this._viewportRuler.change(150),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new r.Em(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap(),this._keyManager.updateActiveItem(this._selectedIndex),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(i):i(),(0,p.T)(t,e,this._items.changes).pipe((0,v.R)(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>Promise.resolve().then(i)),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe((0,v.R)(this._destroyed)).subscribe(t=>{this.indexFocused.emit(t),this._setTabFocus(t)})}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!(0,I.Vb)(t))switch(t.keyCode){case I.K5:case I.L_:this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){const t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){if(!this._items)return!0;const e=this._items?this._items.toArray()[t]:null;return!!e&&!e.disabled}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();const e=this._tabListContainer.nativeElement;e.scrollLeft="ltr"==this._getLayoutDirection()?0:e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const t=this.scrollDistance,e="ltr"===this._getLayoutDirection()?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){return this._scrollTo(this._scrollDistance+("before"==t?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;const e=this._items?this._items.toArray()[t]:null;if(!e)return;const i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:n,offsetWidth:a}=e.elementRef.nativeElement;let s,o;"ltr"==this._getLayoutDirection()?(s=n,o=s+a):(o=this._tabList.nativeElement.offsetWidth-n,s=o-a);const r=this.scrollDistance,l=this.scrollDistance+i;s<r?this.scrollDistance-=r-s+60:o>l&&(this.scrollDistance+=o-l+60)}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const t=this._tabList.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;t||(this.scrollDistance=0),t!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=t}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabList.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&null!=e.button&&0!==e.button||(this._stopInterval(),(0,_.H)(650,100).pipe((0,v.R)((0,p.T)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:e,distance:i}=this._scrollHeader(t);(0===i||i>=e)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}}return t.ɵfac=function(e){return new(e||t)(s.Y36(s.SBq),s.Y36(s.sBO),s.Y36(k.rL),s.Y36(w.Is,8),s.Y36(s.R0b),s.Y36(T.t4),s.Y36(h.Qb,8))},t.ɵdir=s.lG2({type:t,inputs:{disablePagination:"disablePagination"}}),t})(),ht=(()=>{class t extends dt{constructor(t,e,i,n,a,s,o){super(t,e,i,n,a,s,o),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=(0,C.Ig)(t)}_itemSelected(t){t.preventDefault()}}return t.ɵfac=function(e){return new(e||t)(s.Y36(s.SBq),s.Y36(s.sBO),s.Y36(k.rL),s.Y36(w.Is,8),s.Y36(s.R0b),s.Y36(T.t4),s.Y36(h.Qb,8))},t.ɵdir=s.lG2({type:t,inputs:{disableRipple:"disableRipple"},features:[s.qOj]}),t})(),bt=(()=>{class t extends ht{constructor(t,e,i,n,a,s,o){super(t,e,i,n,a,s,o)}}return t.ɵfac=function(e){return new(e||t)(s.Y36(s.SBq),s.Y36(s.sBO),s.Y36(k.rL),s.Y36(w.Is,8),s.Y36(s.R0b),s.Y36(T.t4),s.Y36(h.Qb,8))},t.ɵcmp=s.Xpm({type:t,selectors:[["mat-tab-header"]],contentQueries:function(t,e,i){if(1&t&&s.Suo(i,lt,4),2&t){let t;s.iGM(t=s.CRH())&&(e._items=t)}},viewQuery:function(t,e){if(1&t&&(s.Gf(j,7),s.Gf(F,7),s.Gf(G,7),s.Gf(q,5),s.Gf(Z,5)),2&t){let t;s.iGM(t=s.CRH())&&(e._inkBar=t.first),s.iGM(t=s.CRH())&&(e._tabListContainer=t.first),s.iGM(t=s.CRH())&&(e._tabList=t.first),s.iGM(t=s.CRH())&&(e._nextPaginator=t.first),s.iGM(t=s.CRH())&&(e._previousPaginator=t.first)}},hostAttrs:[1,"mat-tab-header"],hostVars:4,hostBindings:function(t,e){2&t&&s.ekj("mat-tab-header-pagination-controls-enabled",e._showPaginationControls)("mat-tab-header-rtl","rtl"==e._getLayoutDirection())},inputs:{selectedIndex:"selectedIndex"},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"},features:[s.qOj],ngContentSelectors:P,decls:13,vars:8,consts:[["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-label-container",3,"keydown"],["tabListContainer",""],["role","tablist",1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-labels"],["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(t,e){1&t&&(s.F$t(),s.TgZ(0,"div",0,1),s.NdJ("click",function(){return e._handlePaginatorClick("before")})("mousedown",function(t){return e._handlePaginatorPress("before",t)})("touchend",function(){return e._stopInterval()}),s._UZ(2,"div",2),s.qZA(),s.TgZ(3,"div",3,4),s.NdJ("keydown",function(t){return e._handleKeydown(t)}),s.TgZ(5,"div",5,6),s.NdJ("cdkObserveContent",function(){return e._onContentChanges()}),s.TgZ(7,"div",7),s.Hsn(8),s.qZA(),s._UZ(9,"mat-ink-bar"),s.qZA(),s.qZA(),s.TgZ(10,"div",8,9),s.NdJ("mousedown",function(t){return e._handlePaginatorPress("after",t)})("click",function(){return e._handlePaginatorClick("after")})("touchend",function(){return e._stopInterval()}),s._UZ(12,"div",2),s.qZA()),2&t&&(s.ekj("mat-tab-header-pagination-disabled",e._disableScrollBefore),s.Q6J("matRippleDisabled",e._disableScrollBefore||e.disableRipple),s.xp6(5),s.ekj("_mat-animation-noopable","NoopAnimations"===e._animationMode),s.xp6(5),s.ekj("mat-tab-header-pagination-disabled",e._disableScrollAfter),s.Q6J("matRippleDisabled",e._disableScrollAfter||e.disableRipple))},directives:[d.wG,l.wD,j],styles:['.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n'],encapsulation:2}),t})(),ut=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=s.oAB({type:t}),t.ɵinj=s.cJS({imports:[[n.ez,d.BQ,c.eL,d.si,l.Q8,r.rt],d.BQ]}),t})();const pt=["content"];function mt(t,e){if(1&t&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&t){const t=s.oxw().$implicit;s.Tol(t.class),s.xp6(1),s.Oqu(t.header)}}function gt(t,e){if(1&t&&(s.TgZ(0,"mat-tab",4),s.YNc(1,mt,2,4,"ng-template",5),s._UZ(2,"aio-code",6),s.qZA()),2&t){const t=e.$implicit;s.xp6(2),s.Tol(t.class),s.Q6J("language",t.language)("linenums",t.linenums)("path",t.path)("region",t.region)("header",t.header)}}const _t=["*"];let ft=(()=>{class t{ngOnInit(){this.tabs=[];const t=Array.from(this.content.nativeElement.querySelectorAll("code-pane"));for(const e of t)this.tabs.push(this.getTabInfo(e))}ngAfterViewInit(){this.codeComponents.toArray().forEach((t,e)=>{t.code=this.tabs[e].code})}getTabInfo(t){return{class:t.getAttribute("class"),code:t.innerHTML,language:t.getAttribute("language"),linenums:t.getAttribute("linenums")||this.linenums,path:t.getAttribute("path")||"",region:t.getAttribute("region")||"",header:t.getAttribute("header")}}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=s.Xpm({type:t,selectors:[["code-tabs"]],viewQuery:function(t,e){if(1&t&&(s.Gf(pt,7),s.Gf(a.Q,5)),2&t){let t;s.iGM(t=s.CRH())&&(e.content=t.first),s.iGM(t=s.CRH())&&(e.codeComponents=t)}},inputs:{linenums:"linenums"},ngContentSelectors:_t,decls:6,vars:1,consts:[[2,"display","none"],["content",""],["disableRipple","",1,"code-tab-group"],["style","overflow-y: hidden;",4,"ngFor","ngForOf"],[2,"overflow-y","hidden"],["mat-tab-label",""],[3,"language","linenums","path","region","header"]],template:function(t,e){1&t&&(s.F$t(),s.TgZ(0,"div",0,1),s.Hsn(2),s.qZA(),s.TgZ(3,"mat-card"),s.TgZ(4,"mat-tab-group",2),s.YNc(5,gt,3,8,"mat-tab",3),s.qZA(),s.qZA()),2&t&&(s.xp6(5),s.Q6J("ngForOf",e.tabs))},directives:[o.a8,ot,n.sg,V,N,a.Q],encapsulation:2}),t})();var xt=i(99835);let yt=(()=>{class t{constructor(){this.customElementComponent=ft}}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=s.oAB({type:t}),t.ɵinj=s.cJS({imports:[[n.ez,o.QW,ut,xt.r]]}),t})()}}]);
//# sourceMappingURL=317-es2015.0c9c46f347d9bb4902ce.js.map
