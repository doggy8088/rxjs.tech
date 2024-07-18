!function(){"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}(self.webpackChunkrxjs_dev=self.webpackChunkrxjs_dev||[]).push([[48],{45048:function(r,n,o){o.r(n),o.d(n,{ResourceListModule:function(){return C}});var i,c=o(54364),s=o(2316),u=o(49005),a=o(14823),f=o(70095),l=o(53882),p=f.bL+"resources.json",d=((i=function(){function r(t){e(this,r),this.http=t,this.categories=this.getCategories()}return t(r,[{key:"getCategories",value:function(){var e=this.http.get(p).pipe((0,u.U)(function(e){return function(e){return Object.keys(e).map(function(r){var t=e[r];return{id:b(r),title:r,order:t.order,subCategories:g(t.subCategories,r)}}).sort(h)}(e)}),(0,a.C)());return e.connect(),e}}]),r}()).ɵfac=function(e){return new(e||i)(s.LFG(l.eN))},i.ɵprov=s.Yz7({token:i,factory:i.ɵfac}),i);function g(e,r){return Object.keys(e).map(function(t){var n=e[t];return{id:b(t),title:t,order:n.order,resources:v(n.resources,t,r)}}).sort(h)}function v(e,r,t){return Object.keys(e).map(function(n){var o=e[n];return o.category=t,o.subCategory=r,o.id=b(n),o}).sort(Z)}function h(e,r){return e.order===r.order?Z(e,r):e.order>r.order?1:-1}function Z(e,r){return e.title.toUpperCase()>r.title.toUpperCase()?1:-1}function b(e){return e.toLowerCase().replace(/\s+/g,"-")}function m(e,r){if(1&e&&(s.TgZ(0,"div",10),s.TgZ(1,"a",11),s.TgZ(2,"div"),s.TgZ(3,"h4"),s._uU(4),s.qZA(),s.TgZ(5,"p",12),s._uU(6),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e){var t=s.oxw().$implicit;s.xp6(1),s.Q6J("href",t.url,s.LSH),s.xp6(3),s.Oqu(t.title),s.xp6(2),s.Oqu(t.desc||"No Description")}}function q(e,r){if(1&e&&(s.TgZ(0,"div"),s.YNc(1,m,7,3,"div",9),s.qZA()),2&e){var t=r.$implicit;s.xp6(1),s.Q6J("ngIf",t.rev)}}function y(e,r){if(1&e&&(s.TgZ(0,"div"),s._UZ(1,"a",5),s.TgZ(2,"h3",8),s._uU(3),s.qZA(),s.YNc(4,q,2,1,"div",7),s.qZA()),2&e){var t=r.$implicit;s.xp6(1),s.s9C("id",t.id),s.xp6(2),s.Oqu(t.title),s.xp6(1),s.Q6J("ngForOf",t.resources)}}function T(e,r){if(1&e&&(s.TgZ(0,"div",3),s.TgZ(1,"header",4),s._UZ(2,"a",5),s.TgZ(3,"h2"),s._uU(4),s.qZA(),s.qZA(),s.TgZ(5,"div",6),s.YNc(6,y,5,3,"div",7),s.qZA(),s.qZA()),2&e){var t=r.$implicit;s.xp6(2),s.s9C("id",t.id),s.xp6(2),s.Oqu(t.title),s.xp6(2),s.Q6J("ngForOf",t.subCategories)}}var x=function(){var r=function(){function r(t,n){e(this,r),this.resourceService=n,this.scrollPos=0,this.location=t.pathname.replace(/^\/+/,"")}return t(r,[{key:"href",value:function(e){return this.location+"#"+e.id}},{key:"ngOnInit",value:function(){var e=this;this.resourceService.categories.subscribe(function(r){return e.categories=r})}},{key:"onScroll",value:function(e){this.scrollPos=e&&(e.scrollTop||e.body.scrollTop)||0}}]),r}();return r.ɵfac=function(e){return new(e||r)(s.Y36(c.lw),s.Y36(d))},r.ɵcmp=s.Xpm({type:r,selectors:[["aio-resource-list"]],hostBindings:function(e,r){1&e&&s.NdJ("scroll",function(e){return r.onScroll(e.target)},!1,s.Jf7)},decls:3,vars:1,consts:[[1,"resources-container"],[1,"l-flex--column"],["class","showcase",4,"ngFor","ngForOf"],[1,"showcase"],[1,"c-resource-header"],[1,"h-anchor-offset",3,"id"],[1,"shadow-1"],[4,"ngFor","ngForOf"],[1,"subcategory-title"],["class","c-resource",4,"ngIf"],[1,"c-resource"],["target","_blank",1,"l-flex--column","resource-row-link",3,"href"],[1,"resource-description"]],template:function(e,r){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.YNc(2,T,7,3,"div",2),s.qZA(),s.qZA()),2&e&&(s.xp6(2),s.Q6J("ngForOf",r.categories))},directives:[c.sg,c.O5],encapsulation:2}),r}(),C=function(){var r=function r(){e(this,r),this.customElementComponent=x};return r.ɵfac=function(e){return new(e||r)},r.ɵmod=s.oAB({type:r}),r.ɵinj=s.cJS({providers:[d],imports:[[c.ez]]}),r}()}}])}();
//# sourceMappingURL=48-es5.8742e57dd108b16e310a.js.map
