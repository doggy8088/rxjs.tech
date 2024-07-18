!function(){"use strict";function t(e,n,o){return(t="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(e,n,o||e)}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=a(t);if(e){var i=a(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return r(this,n)}}function r(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return i(t)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}(self.webpackChunkrxjs_dev=self.webpackChunkrxjs_dev||[]).push([[912],{40912:function(n,r,s){s.d(r,{en:function(){return _},ig:function(){return R},Pl:function(){return w},C5:function(){return d},u0:function(){return m},eL:function(){return P},UE:function(){return v}});var l,h=s(2316),f=s(54364),p=function(){function t(){c(this,t)}return u(t,[{key:"attach",value:function(t){return this._attachedHost=t,t.attach(this)}},{key:"detach",value:function(){var t=this._attachedHost;null!=t&&(this._attachedHost=null,t.detach())}},{key:"isAttached",get:function(){return null!=this._attachedHost}},{key:"setAttachedHost",value:function(t){this._attachedHost=t}}]),t}(),d=function(t){e(r,t);var n=o(r);function r(t,e,o,i){var a;return c(this,r),(a=n.call(this)).component=t,a.viewContainerRef=e,a.injector=o,a.componentFactoryResolver=i,a}return r}(p),v=function(n){e(i,n);var r=o(i);function i(t,e,n){var o;return c(this,i),(o=r.call(this)).templateRef=t,o.viewContainerRef=e,o.context=n,o}return u(i,[{key:"origin",get:function(){return this.templateRef.elementRef}},{key:"attach",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.context;return this.context=n,t(a(i.prototype),"attach",this).call(this,e)}},{key:"detach",value:function(){return this.context=void 0,t(a(i.prototype),"detach",this).call(this)}}]),i}(p),y=function(t){e(r,t);var n=o(r);function r(t){var e;return c(this,r),(e=n.call(this)).element=t instanceof h.SBq?t.nativeElement:t,e}return r}(p),_=function(){function t(){c(this,t),this._isDisposed=!1,this.attachDomPortal=null}return u(t,[{key:"hasAttached",value:function(){return!!this._attachedPortal}},{key:"attach",value:function(t){return t instanceof d?(this._attachedPortal=t,this.attachComponentPortal(t)):t instanceof v?(this._attachedPortal=t,this.attachTemplatePortal(t)):this.attachDomPortal&&t instanceof y?(this._attachedPortal=t,this.attachDomPortal(t)):void 0}},{key:"detach",value:function(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}},{key:"dispose",value:function(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}},{key:"setDisposeFn",value:function(t){this._disposeFn=t}},{key:"_invokeDisposeFn",value:function(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}]),t}(),m=function(n){e(s,n);var r=o(s);function s(e,n,o,u,l){var h,f;return c(this,s),(f=r.call(this)).outletElement=e,f._componentFactoryResolver=n,f._appRef=o,f._defaultInjector=u,f.attachDomPortal=function(e){var n=e.element,o=f._document.createComment("dom-portal");n.parentNode.insertBefore(o,n),f.outletElement.appendChild(n),f._attachedPortal=e,t((h=i(f),a(s.prototype)),"setDisposeFn",h).call(h,function(){o.parentNode&&o.parentNode.replaceChild(n,o)})},f._document=l,f}return u(s,[{key:"attachComponentPortal",value:function(t){var e,n=this,o=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component);return t.viewContainerRef?(e=t.viewContainerRef.createComponent(o,t.viewContainerRef.length,t.injector||t.viewContainerRef.injector),this.setDisposeFn(function(){return e.destroy()})):(e=o.create(t.injector||this._defaultInjector),this._appRef.attachView(e.hostView),this.setDisposeFn(function(){n._appRef.detachView(e.hostView),e.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}},{key:"attachTemplatePortal",value:function(t){var e=this,n=t.viewContainerRef,o=n.createEmbeddedView(t.templateRef,t.context);return o.rootNodes.forEach(function(t){return e.outletElement.appendChild(t)}),o.detectChanges(),this.setDisposeFn(function(){var t=n.indexOf(o);-1!==t&&n.remove(t)}),this._attachedPortal=t,o}},{key:"dispose",value:function(){t(a(s.prototype),"dispose",this).call(this),null!=this.outletElement.parentNode&&this.outletElement.parentNode.removeChild(this.outletElement)}},{key:"_getComponentRootNode",value:function(t){return t.hostView.rootNodes[0]}}]),s}(_),R=((l=function(t){e(r,t);var n=o(r);function r(t,e){return c(this,r),n.call(this,t,e)}return r}(v)).ɵfac=function(t){return new(t||l)(h.Y36(h.Rgc),h.Y36(h.s_b))},l.ɵdir=h.lG2({type:l,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[h.qOj]}),l),w=function(){var n=function(n){e(s,n);var r=o(s);function s(e,n,o){var u,l;return c(this,s),(l=r.call(this))._componentFactoryResolver=e,l._viewContainerRef=n,l._isInitialized=!1,l.attached=new h.vpe,l.attachDomPortal=function(e){var n=e.element,o=l._document.createComment("dom-portal");e.setAttachedHost(i(l)),n.parentNode.insertBefore(o,n),l._getRootNode().appendChild(n),l._attachedPortal=e,t((u=i(l),a(s.prototype)),"setDisposeFn",u).call(u,function(){o.parentNode&&o.parentNode.replaceChild(n,o)})},l._document=o,l}return u(s,[{key:"portal",get:function(){return this._attachedPortal},set:function(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&t(a(s.prototype),"detach",this).call(this),e&&t(a(s.prototype),"attach",this).call(this,e),this._attachedPortal=e)}},{key:"attachedRef",get:function(){return this._attachedRef}},{key:"ngOnInit",value:function(){this._isInitialized=!0}},{key:"ngOnDestroy",value:function(){t(a(s.prototype),"dispose",this).call(this),this._attachedPortal=null,this._attachedRef=null}},{key:"attachComponentPortal",value:function(e){e.setAttachedHost(this);var n=null!=e.viewContainerRef?e.viewContainerRef:this._viewContainerRef,o=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),r=n.createComponent(o,n.length,e.injector||n.injector);return n!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),t(a(s.prototype),"setDisposeFn",this).call(this,function(){return r.destroy()}),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}},{key:"attachTemplatePortal",value:function(e){var n=this;e.setAttachedHost(this);var o=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context);return t(a(s.prototype),"setDisposeFn",this).call(this,function(){return n._viewContainerRef.clear()}),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}},{key:"_getRootNode",value:function(){var t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}}]),s}(_);return n.ɵfac=function(t){return new(t||n)(h.Y36(h._Vd),h.Y36(h.s_b),h.Y36(f.K0))},n.ɵdir=h.lG2({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[h.qOj]}),n}(),P=function(){var t=function t(){c(this,t)};return t.ɵfac=function(e){return new(e||t)},t.ɵmod=h.oAB({type:t}),t.ɵinj=h.cJS({}),t}()}}])}();
//# sourceMappingURL=912-es5.61cf896372612cac9723.js.map
