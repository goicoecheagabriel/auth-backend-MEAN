"use strict";(self.webpackChunkauthApp=self.webpackChunkauthApp||[]).push([[322],{6322:(Te,x,c)=>{c.r(x),c.d(x,{ProtectedModule:()=>ye});var r=c(6019),m=c(9870),y=c(6077),e=c(2383),d=c(9814),w=c(5759),a=c(3758),h=c(481),b=c(2323);function Z(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(o){return e.CHM(t),e.oxw(2).close(o)})("keydown.enter",function(o){return e.CHM(t),e.oxw(2).close(o)}),e._UZ(1,"span",8),e.qZA()}if(2&i){const t=e.oxw(2);e.uIk("aria-label",t.ariaCloseLabel)}}function z(i,s){1&i&&e.GkF(0)}const E=function(i,s,t,n,o,l){return{"p-sidebar":!0,"p-sidebar-active":i,"p-sidebar-left":s,"p-sidebar-right":t,"p-sidebar-top":n,"p-sidebar-bottom":o,"p-sidebar-full":l}},k=function(i,s){return{transform:i,transition:s}},A=function(i){return{value:"visible",params:i}};function L(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",1,2),e.NdJ("@panelState.start",function(o){return e.CHM(t),e.oxw().onAnimationStart(o)})("@panelState.done",function(o){return e.CHM(t),e.oxw().onAnimationEnd(o)}),e.TgZ(2,"div",3),e.YNc(3,Z,2,1,"button",4),e.qZA(),e.TgZ(4,"div",5),e.Hsn(5),e.YNc(6,z,1,0,"ng-container",6),e.qZA(),e.qZA()}if(2&i){const t=e.oxw();e.Tol(t.styleClass),e.Q6J("ngClass",e.HTZ(8,E,t.visible,"left"===t.position&&!t.fullScreen,"right"===t.position&&!t.fullScreen,"top"===t.position&&!t.fullScreen,"bottom"===t.position&&!t.fullScreen,t.fullScreen))("@panelState",e.VKq(18,A,e.WLB(15,k,t.transformOptions,t.transitionOptions)))("ngStyle",t.style),e.uIk("aria-modal",t.modal),e.xp6(3),e.Q6J("ngIf",t.showCloseIcon),e.xp6(3),e.Q6J("ngTemplateOutlet",t.contentTemplate)}}const B=["*"],P=(0,d.oQ)([(0,d.oB)({transform:"{{transform}}",opacity:0}),(0,d.jt)("{{transition}}")]),D=(0,d.oQ)([(0,d.jt)("{{transition}}",(0,d.oB)({transform:"{{transform}}",opacity:0}))]);let O=(()=>{class i{constructor(t,n,o,l){this.el=t,this.renderer=n,this.cd=o,this.config=l,this.blockScroll=!1,this.autoZIndex=!0,this.baseZIndex=0,this.modal=!0,this.dismissible=!0,this.showCloseIcon=!0,this.closeOnEscape=!0,this.transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.onShow=new e.vpe,this.onHide=new e.vpe,this.visibleChange=new e.vpe,this._position="left",this._fullScreen=!1,this.transformOptions="translate3d(-100%, 0px, 0px)"}ngAfterViewInit(){this.initialized=!0}ngAfterContentInit(){this.templates.forEach(t=>{t.getType(),this.contentTemplate=t.template})}get visible(){return this._visible}set visible(t){this._visible=t}get position(){return this._position}set position(t){switch(this._position=t,t){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)"}}get fullScreen(){return this._fullScreen}set fullScreen(t){this._fullScreen=t,t&&(this.transformOptions="none")}show(){this.autoZIndex&&b.P9.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(){this.onHide.emit({}),this.modal&&this.disableModality()}close(t){this.hide(),this.visibleChange.emit(!1),t.preventDefault()}enableModality(){this.mask||(this.mask=document.createElement("div"),this.mask.style.zIndex=String(parseInt(this.container.style.zIndex)-1),a.p.addMultipleClasses(this.mask,"p-component-overlay p-sidebar-mask p-component-overlay p-component-overlay-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",t=>{this.dismissible&&this.close(t)})),document.body.appendChild(this.mask),this.blockScroll&&a.p.addClass(document.body,"p-overflow-hidden"))}disableModality(){this.mask&&(a.p.addClass(this.mask,"p-component-overlay-leave"),this.animationEndListener=this.destroyModal.bind(this),this.mask.addEventListener("animationend",this.animationEndListener))}destroyModal(){this.unbindMaskClickListener(),this.mask&&document.body.removeChild(this.mask),this.blockScroll&&a.p.removeClass(document.body,"p-overflow-hidden"),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(t){"visible"===t.toState&&(this.container=t.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener())}onAnimationEnd(t){"void"===t.toState&&(this.hide(),b.P9.clear(this.container),this.unbindGlobalListeners())}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.container):a.p.appendChild(this.container,this.appendTo))}bindDocumentEscapeListener(){this.documentEscapeListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","keydown",n=>{27==n.which&&parseInt(this.container.style.zIndex)===a.p.zindex+this.baseZIndex&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.mask.removeEventListener("animationend",this.animationEndListener),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.el.nativeElement.appendChild(this.container),this.container&&this.autoZIndex&&b.P9.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(h.b4))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-sidebar"]],contentQueries:function(t,n,o){if(1&t&&e.Suo(o,h.jx,4),2&t){let l;e.iGM(l=e.CRH())&&(n.templates=l)}},hostAttrs:[1,"p-element"],inputs:{appendTo:"appendTo",blockScroll:"blockScroll",style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",modal:"modal",dismissible:"dismissible",showCloseIcon:"showCloseIcon",closeOnEscape:"closeOnEscape",transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},ngContentSelectors:B,decls:1,vars:1,consts:[["role","complementary",3,"ngClass","ngStyle","class",4,"ngIf"],["role","complementary",3,"ngClass","ngStyle"],["container",""],[1,"p-sidebar-header"],["type","button","class","p-sidebar-close p-sidebar-icon p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[1,"p-sidebar-content"],[4,"ngTemplateOutlet"],["type","button","pRipple","",1,"p-sidebar-close","p-sidebar-icon","p-link",3,"click","keydown.enter"],[1,"p-sidebar-close-icon","pi","pi-times"]],template:function(t,n){1&t&&(e.F$t(),e.YNc(0,L,7,20,"div",0)),2&t&&e.Q6J("ngIf",n.visible)},directives:[r.O5,r.mk,r.PC,r.tP,w.H],styles:[".p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto}.p-sidebar-header{display:flex;align-items:center;justify-content:flex-end}.p-sidebar-icon{display:flex;align-items:center;justify-content:center}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}\n"],encapsulation:2,data:{animation:[(0,d.X$)("panelState",[(0,d.eR)("void => visible",[(0,d._7)(P)]),(0,d.eR)("visible => void",[(0,d._7)(D)])])]},changeDetection:0}),i})(),q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[r.ez,w.T]]}),i})();var _=c(4750);const g=function(){return{exact:!0}};let F=(()=>{class i{constructor(t,n){this.authService=t,this.router=n,this.display=!1}logout(){this.authService.logout(),this.router.navigateByUrl("/auth")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(y.e),e.Y36(m.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-dashboard"]],decls:18,vars:13,consts:[[3,"visible","visibleChange"],["routerLink","/dashboard","routerLinkActive","activo",3,"routerLinkActiveOptions"],["routerLink","/dashboard/chat","routerLinkActive","activo",3,"routerLinkActiveOptions"],["routerLink","/","routerLinkActive","activo",3,"routerLinkActiveOptions"],["routerLink","/dashboard/otro","routerLinkActive","activo",3,"routerLinkActiveOptions"],[3,"click"],["type","text","icon","pi pi-plus","label","Show",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"p-sidebar",0),e.NdJ("visibleChange",function(l){return n.display=l}),e.TgZ(1,"ul"),e.TgZ(2,"li",1),e._uU(3,"Dashboard"),e.qZA(),e.TgZ(4,"li",2),e._uU(5,"Chat"),e.qZA(),e.TgZ(6,"li",3),e._uU(7,"Store"),e.qZA(),e.TgZ(8,"li",4),e._uU(9,"Menu-4"),e.qZA(),e.TgZ(10,"li",4),e._uU(11,"Menu-5"),e.qZA(),e.TgZ(12,"li",4),e._uU(13,"Menu-6"),e.qZA(),e.TgZ(14,"li",5),e.NdJ("click",function(){return n.logout()}),e._uU(15,"Logout"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"p-button",6),e.NdJ("click",function(){return n.display=!0}),e.qZA(),e._UZ(17,"router-outlet")),2&t&&(e.Q6J("visible",n.display),e.xp6(2),e.Q6J("routerLinkActiveOptions",e.DdM(7,g)),e.xp6(2),e.Q6J("routerLinkActiveOptions",e.DdM(8,g)),e.xp6(2),e.Q6J("routerLinkActiveOptions",e.DdM(9,g)),e.xp6(2),e.Q6J("routerLinkActiveOptions",e.DdM(10,g)),e.xp6(2),e.Q6J("routerLinkActiveOptions",e.DdM(11,g)),e.xp6(2),e.Q6J("routerLinkActiveOptions",e.DdM(12,g)))},directives:[O,m.rH,m.Od,_.zx,m.lC],styles:["ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{color:#707070;background-color:#fff;padding:5px 8px;cursor:pointer;list-style:none;border-radius:4px}.activo[_ngcontent-%COMP%]{color:#fff!important;background-color:violet!important;padding:5px 8px!important}"]}),i})();const I=["container"];function Y(i,s){1&i&&e.GkF(0)}function H(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",5),e.NdJ("mousedown",function(o){e.CHM(t);const l=e.oxw().index;return e.oxw().onGutterMouseDown(o,l)})("touchstart",function(o){e.CHM(t);const l=e.oxw().index;return e.oxw().onGutterTouchStart(o,l)}),e._UZ(1,"div",6),e.qZA()}if(2&i){const t=e.oxw(2);e.Q6J("ngStyle",t.gutterStyle())}}function J(i,s){if(1&i&&(e.TgZ(0,"div",0),e.YNc(1,Y,1,0,"ng-container",3),e.qZA(),e.YNc(2,H,2,1,"div",4)),2&i){const t=s.$implicit,n=s.index,o=e.oxw();e.Tol(o.panelStyleClass),e.Q6J("ngClass",o.panelContainerClass())("ngStyle",o.panelStyle),e.xp6(1),e.Q6J("ngTemplateOutlet",t),e.xp6(1),e.Q6J("ngIf",n!==o.panels.length-1)}}let Q=(()=>{class i{constructor(t,n){this.cd=t,this.el=n,this.stateStorage="session",this.stateKey=null,this.layout="horizontal",this.gutterSize=4,this.minSizes=[],this.onResizeEnd=new e.vpe,this.onResizeStart=new e.vpe,this.nested=!1,this.panels=[],this.dragging=!1,this.mouseMoveListener=null,this.mouseUpListener=null,this.touchMoveListener=null,this.touchEndListener=null,this.size=null,this.gutterElement=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.nextPanelSize=null,this.prevPanelSize=null,this._panelSizes=[],this.prevPanelIndex=null}get panelSizes(){return this._panelSizes}set panelSizes(t){if(this._panelSizes=t,this.el&&this.el.nativeElement&&this.panels.length>0){let n=[...this.el.nativeElement.children[0].children].filter(l=>a.p.hasClass(l,"p-splitter-panel")),o=[];this.panels.map((l,p)=>{let u=(this.panelSizes.length-1>=p?this.panelSizes[p]:null)||100/this.panels.length;o[p]=u,n[p].style.flexBasis="calc("+u+"% - "+(this.panels.length-1)*this.gutterSize+"px)"})}}ngOnInit(){this.nested=this.isNested()}ngAfterContentInit(){this.templates.forEach(t=>{t.getType(),this.panels.push(t.template)})}ngAfterViewInit(){if(this.panels&&this.panels.length){let t=!1;if(this.isStateful()&&(t=this.restoreState()),!t){let n=[...this.el.nativeElement.children[0].children].filter(l=>a.p.hasClass(l,"p-splitter-panel")),o=[];this.panels.map((l,p)=>{let u=(this.panelSizes.length-1>=p?this.panelSizes[p]:null)||100/this.panels.length;o[p]=u,n[p].style.flexBasis="calc("+u+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),this._panelSizes=o}}}resizeStart(t,n){this.gutterElement=t.currentTarget,this.size=this.horizontal()?a.p.getWidth(this.containerViewChild.nativeElement):a.p.getHeight(this.containerViewChild.nativeElement),this.dragging=!0,this.startPos=this.horizontal()?t.pageX||t.changedTouches[0].pageX:t.pageY||t.changedTouches[0].pageY,this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,this.prevPanelSize=100*(this.horizontal()?a.p.getOuterWidth(this.prevPanelElement,!0):a.p.getOuterHeight(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal()?a.p.getOuterWidth(this.nextPanelElement,!0):a.p.getOuterHeight(this.nextPanelElement,!0))/this.size,this.prevPanelIndex=n,a.p.addClass(this.gutterElement,"p-splitter-gutter-resizing"),a.p.addClass(this.containerViewChild.nativeElement,"p-splitter-resizing"),this.onResizeStart.emit({originalEvent:t,sizes:this._panelSizes})}onResize(t){let n;n=this.horizontal()?100*t.pageX/this.size-100*this.startPos/this.size:100*t.pageY/this.size-100*this.startPos/this.size;let o=this.prevPanelSize+n,l=this.nextPanelSize-n;this.validateResize(o,l)&&(this.prevPanelElement.style.flexBasis="calc("+o+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+l+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this._panelSizes[this.prevPanelIndex]=o,this._panelSizes[this.prevPanelIndex+1]=l)}resizeEnd(t){this.isStateful()&&this.saveState(),this.onResizeEnd.emit({originalEvent:t,sizes:this._panelSizes}),a.p.removeClass(this.gutterElement,"p-splitter-gutter-resizing"),a.p.removeClass(this.containerViewChild.nativeElement,"p-splitter-resizing"),this.clear()}onGutterMouseDown(t,n){this.resizeStart(t,n),this.bindMouseListeners()}onGutterTouchStart(t,n){t.cancelable&&(this.resizeStart(t,n),this.bindTouchListeners(),t.preventDefault())}onGutterTouchEnd(t){this.resizeEnd(t),this.unbindTouchListeners(),t.cancelable&&t.preventDefault()}validateResize(t,n){return!(this.minSizes.length>=1&&this.minSizes[0]&&this.minSizes[0]>t||this.minSizes.length>1&&this.minSizes[1]&&this.minSizes[1]>n)}bindMouseListeners(){this.mouseMoveListener||(this.mouseMoveListener=t=>this.onResize(t),document.addEventListener("mousemove",this.mouseMoveListener)),this.mouseUpListener||(this.mouseUpListener=t=>{this.resizeEnd(t),this.unbindMouseListeners()},document.addEventListener("mouseup",this.mouseUpListener))}bindTouchListeners(){this.touchMoveListener||(this.touchMoveListener=t=>this.onResize(t.changedTouches[0]),document.addEventListener("touchmove",this.touchMoveListener)),this.touchEndListener||(this.touchEndListener=t=>{this.resizeEnd(t),this.unbindTouchListeners()},document.addEventListener("touchend",this.touchEndListener))}unbindMouseListeners(){this.mouseMoveListener&&(document.removeEventListener("mousemove",this.mouseMoveListener),this.mouseMoveListener=null),this.mouseUpListener&&(document.removeEventListener("mouseup",this.mouseUpListener),this.mouseUpListener=null)}unbindTouchListeners(){this.touchMoveListener&&(document.removeEventListener("touchmove",this.touchMoveListener),this.touchMoveListener=null),this.touchEndListener&&(document.removeEventListener("touchend",this.touchEndListener),this.touchEndListener=null)}clear(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null}isNested(){if(this.el.nativeElement){let t=this.el.nativeElement.parentElement;for(;t&&!a.p.hasClass(t,"p-splitter");)t=t.parentElement;return null!==t}return!1}isStateful(){return null!=this.stateKey}getStorage(){switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}}saveState(){this.getStorage().setItem(this.stateKey,JSON.stringify(this._panelSizes))}restoreState(){const n=this.getStorage().getItem(this.stateKey);return!!n&&(this._panelSizes=JSON.parse(n),[...this.containerViewChild.nativeElement.children].filter(l=>a.p.hasClass(l,"p-splitter-panel")).forEach((l,p)=>{l.style.flexBasis="calc("+this._panelSizes[p]+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),!0)}containerClass(){return{"p-splitter p-component":!0,"p-splitter-horizontal":"horizontal"===this.layout,"p-splitter-vertical":"vertical"===this.layout}}panelContainerClass(){return{"p-splitter-panel":!0,"p-splitter-panel-nested":!0}}gutterStyle(){return this.horizontal()?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}}horizontal(){return"horizontal"===this.layout}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.sBO),e.Y36(e.SBq))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-splitter"]],contentQueries:function(t,n,o){if(1&t&&e.Suo(o,h.jx,4),2&t){let l;e.iGM(l=e.CRH())&&(n.templates=l)}},viewQuery:function(t,n){if(1&t&&e.Gf(I,5),2&t){let o;e.iGM(o=e.CRH())&&(n.containerViewChild=o.first)}},hostAttrs:[1,"p-element"],hostVars:2,hostBindings:function(t,n){2&t&&e.ekj("p-splitter-panel-nested",n.nested)},inputs:{styleClass:"styleClass",panelStyleClass:"panelStyleClass",style:"style",panelStyle:"panelStyle",stateStorage:"stateStorage",stateKey:"stateKey",layout:"layout",gutterSize:"gutterSize",minSizes:"minSizes",panelSizes:"panelSizes"},outputs:{onResizeEnd:"onResizeEnd",onResizeStart:"onResizeStart"},decls:3,vars:5,consts:[[3,"ngClass","ngStyle"],["container",""],["ngFor","",3,"ngForOf"],[4,"ngTemplateOutlet"],["class","p-splitter-gutter",3,"ngStyle","mousedown","touchstart",4,"ngIf"],[1,"p-splitter-gutter",3,"ngStyle","mousedown","touchstart"],[1,"p-splitter-gutter-handle"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0,1),e.YNc(2,J,3,6,"ng-template",2),e.qZA()),2&t&&(e.Tol(n.styleClass),e.Q6J("ngClass",n.containerClass())("ngStyle",n.style),e.xp6(2),e.Q6J("ngForOf",n.panels))},directives:[r.mk,r.PC,r.sg,r.tP,r.O5],styles:[".p-splitter{display:flex;flex-wrap:nowrap}.p-splitter-vertical{flex-direction:column}.p-splitter-panel{flex-grow:1}.p-splitter-panel-nested{display:flex}.p-splitter-panel p-splitter{flex-grow:1}.p-splitter-panel .p-splitter{flex-grow:1;border:0 none}.p-splitter-gutter{flex-grow:0;flex-shrink:0;display:flex;align-items:center;justify-content:center;cursor:col-resize}.p-splitter-horizontal.p-splitter-resizing{cursor:col-resize;-webkit-user-select:none;user-select:none}.p-splitter-horizontal>.p-splitter-gutter>.p-splitter-gutter-handle{height:24px;width:100%}.p-splitter-horizontal>.p-splitter-gutter{cursor:col-resize}.p-splitter-vertical.p-splitter-resizing{cursor:row-resize;-webkit-user-select:none;user-select:none}.p-splitter-vertical>.p-splitter-gutter{cursor:row-resize}.p-splitter-vertical>.p-splitter-gutter>.p-splitter-gutter-handle{width:24px;height:100%}\n"],encapsulation:2,changeDetection:0}),i})(),U=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[r.ez],h.m8]}),i})();const R=["container"],V=["content"],N=["xBar"],X=["yBar"];function G(i,s){1&i&&e.GkF(0)}const j=["*"];let W=(()=>{class i{constructor(t,n,o){this.el=t,this.zone=n,this.cd=o,this.timeoutFrame=l=>setTimeout(l,0)}ngAfterViewInit(){this.zone.runOutsideAngular(()=>{this.moveBar(),this.moveBar=this.moveBar.bind(this),this.onXBarMouseDown=this.onXBarMouseDown.bind(this),this.onYBarMouseDown=this.onYBarMouseDown.bind(this),this.onDocumentMouseMove=this.onDocumentMouseMove.bind(this),this.onDocumentMouseUp=this.onDocumentMouseUp.bind(this),window.addEventListener("resize",this.moveBar),this.contentViewChild.nativeElement.addEventListener("scroll",this.moveBar),this.contentViewChild.nativeElement.addEventListener("mouseenter",this.moveBar),this.xBarViewChild.nativeElement.addEventListener("mousedown",this.onXBarMouseDown),this.yBarViewChild.nativeElement.addEventListener("mousedown",this.onYBarMouseDown),this.calculateContainerHeight(),this.initialized=!0})}ngAfterContentInit(){this.templates.forEach(t=>{t.getType(),this.contentTemplate=t.template})}calculateContainerHeight(){let t=this.containerViewChild.nativeElement,n=this.contentViewChild.nativeElement,o=this.xBarViewChild.nativeElement,l=getComputedStyle(t),p=getComputedStyle(o),f=a.p.getHeight(t)-parseInt(p.height,10);"none"!=l["max-height"]&&0==f&&(t.style.height=n.offsetHeight+parseInt(p.height,10)>parseInt(l["max-height"],10)?l["max-height"]:n.offsetHeight+parseFloat(l.paddingTop)+parseFloat(l.paddingBottom)+parseFloat(l.borderTopWidth)+parseFloat(l.borderBottomWidth)+"px")}moveBar(){let t=this.containerViewChild.nativeElement,n=this.contentViewChild.nativeElement,o=this.xBarViewChild.nativeElement,l=n.scrollWidth,p=n.clientWidth,f=-1*(t.clientHeight-o.clientHeight);this.scrollXRatio=p/l;let u=this.yBarViewChild.nativeElement,T=n.scrollHeight,M=n.clientHeight,we=-1*(t.clientWidth-u.clientWidth);this.scrollYRatio=M/T,this.requestAnimationFrame(()=>{if(this.scrollXRatio>=1)a.p.addClass(o,"p-scrollpanel-hidden");else{a.p.removeClass(o,"p-scrollpanel-hidden");const v=Math.max(100*this.scrollXRatio,10);o.style.cssText="width:"+v+"%; left:"+n.scrollLeft*(100-v)/(l-p)+"%;bottom:"+f+"px;"}if(this.scrollYRatio>=1)a.p.addClass(u,"p-scrollpanel-hidden");else{a.p.removeClass(u,"p-scrollpanel-hidden");const v=Math.max(100*this.scrollYRatio,10);u.style.cssText="height:"+v+"%; top: calc("+n.scrollTop*(100-v)/(T-M)+"% - "+o.clientHeight+"px);right:"+we+"px;"}}),this.cd.markForCheck()}onYBarMouseDown(t){this.isYBarClicked=!0,this.lastPageY=t.pageY,a.p.addClass(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),a.p.addClass(document.body,"p-scrollpanel-grabbed"),document.addEventListener("mousemove",this.onDocumentMouseMove),document.addEventListener("mouseup",this.onDocumentMouseUp),t.preventDefault()}onXBarMouseDown(t){this.isXBarClicked=!0,this.lastPageX=t.pageX,a.p.addClass(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),a.p.addClass(document.body,"p-scrollpanel-grabbed"),document.addEventListener("mousemove",this.onDocumentMouseMove),document.addEventListener("mouseup",this.onDocumentMouseUp),t.preventDefault()}onDocumentMouseMove(t){this.isXBarClicked?this.onMouseMoveForXBar(t):(this.isYBarClicked||this.onMouseMoveForXBar(t),this.onMouseMoveForYBar(t))}onMouseMoveForXBar(t){let n=t.pageX-this.lastPageX;this.lastPageX=t.pageX,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollLeft+=n/this.scrollXRatio})}onMouseMoveForYBar(t){let n=t.pageY-this.lastPageY;this.lastPageY=t.pageY,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollTop+=n/this.scrollYRatio})}scrollTop(t){let n=this.contentViewChild.nativeElement.scrollHeight-this.contentViewChild.nativeElement.clientHeight;this.contentViewChild.nativeElement.scrollTop=t=t>n?n:t>0?t:0}onDocumentMouseUp(t){a.p.removeClass(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),a.p.removeClass(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),a.p.removeClass(document.body,"p-scrollpanel-grabbed"),document.removeEventListener("mousemove",this.onDocumentMouseMove),document.removeEventListener("mouseup",this.onDocumentMouseUp),this.isXBarClicked=!1,this.isYBarClicked=!1}requestAnimationFrame(t){(window.requestAnimationFrame||this.timeoutFrame)(t)}ngOnDestroy(){this.initialized&&(window.removeEventListener("resize",this.moveBar),this.contentViewChild.nativeElement.removeEventListener("scroll",this.moveBar),this.contentViewChild.nativeElement.removeEventListener("mouseenter",this.moveBar),this.xBarViewChild.nativeElement.removeEventListener("mousedown",this.onXBarMouseDown),this.yBarViewChild.nativeElement.removeEventListener("mousedown",this.onYBarMouseDown))}refresh(){this.moveBar()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-scrollPanel"]],contentQueries:function(t,n,o){if(1&t&&e.Suo(o,h.jx,4),2&t){let l;e.iGM(l=e.CRH())&&(n.templates=l)}},viewQuery:function(t,n){if(1&t&&(e.Gf(R,5),e.Gf(V,5),e.Gf(N,5),e.Gf(X,5)),2&t){let o;e.iGM(o=e.CRH())&&(n.containerViewChild=o.first),e.iGM(o=e.CRH())&&(n.contentViewChild=o.first),e.iGM(o=e.CRH())&&(n.xBarViewChild=o.first),e.iGM(o=e.CRH())&&(n.yBarViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:j,decls:11,vars:5,consts:[[3,"ngClass","ngStyle"],["container",""],[1,"p-scrollpanel-wrapper"],[1,"p-scrollpanel-content"],["content",""],[4,"ngTemplateOutlet"],[1,"p-scrollpanel-bar","p-scrollpanel-bar-x"],["xBar",""],[1,"p-scrollpanel-bar","p-scrollpanel-bar-y"],["yBar",""]],template:function(t,n){1&t&&(e.F$t(),e.TgZ(0,"div",0,1),e.TgZ(2,"div",2),e.TgZ(3,"div",3,4),e.Hsn(5),e.YNc(6,G,1,0,"ng-container",5),e.qZA(),e.qZA(),e._UZ(7,"div",6,7),e._UZ(9,"div",8,9),e.qZA()),2&t&&(e.Tol(n.styleClass),e.Q6J("ngClass","p-scrollpanel p-component")("ngStyle",n.style),e.xp6(6),e.Q6J("ngTemplateOutlet",n.contentTemplate))},directives:[r.mk,r.PC,r.tP],styles:[".p-scrollpanel-wrapper{overflow:hidden;width:100%;height:100%;position:relative;z-index:1;float:left}.p-scrollpanel-content{height:calc(100% + 18px);width:calc(100% + 18px);padding:0 18px 18px 0;position:relative;overflow:auto;box-sizing:border-box}.p-scrollpanel-bar{position:relative;background:#c1c1c1;border-radius:3px;z-index:2;cursor:pointer;opacity:0;transition:opacity .25s linear}.p-scrollpanel-bar-y{width:9px;top:0}.p-scrollpanel-bar-x{height:9px;bottom:0}.p-scrollpanel-hidden{visibility:hidden}.p-scrollpanel:hover .p-scrollpanel-bar,.p-scrollpanel:active .p-scrollpanel-bar{opacity:1}.p-scrollpanel-grabbed{-webkit-user-select:none;user-select:none}\n"],encapsulation:2,changeDetection:0}),i})(),K=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[r.ez]]}),i})();function $(i,s){1&i&&(e.TgZ(0,"div",11),e._uU(1," Contacto "),e.qZA())}const C=function(){return{width:"100%",height:"100%"}};function ee(i,s){if(1&i&&(e.TgZ(0,"p-scrollPanel",8),e.TgZ(1,"div",9),e.YNc(2,$,2,0,"div",10),e.qZA(),e.qZA()),2&i){const t=e.oxw();e.Akn(e.DdM(4,C)),e.xp6(2),e.Q6J("ngFor",t.contacto)("ngForOf",t.contactos)}}function te(i,s){1&i&&e._uU(0," Hola a todos! ")}function ie(i,s){1&i&&(e.TgZ(0,"div",11),e._uU(1," Contacto "),e.qZA())}function ne(i,s){if(1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e._uU(5,"Aca va el titulo"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",12),e.TgZ(7,"div",13),e.TgZ(8,"p-scrollPanel",8),e.TgZ(9,"div",9),e.YNc(10,ie,2,0,"div",10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"div",14),e.TgZ(12,"p-scrollPanel",8),e.TgZ(13,"div",15),e.TgZ(14,"div",9),e.TgZ(15,"div"),e._uU(16," mensajes "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i){const t=e.oxw();e.xp6(8),e.Akn(e.DdM(6,C)),e.xp6(2),e.Q6J("ngFor",t.contacto)("ngForOf",t.contactos),e.xp6(2),e.Akn(e.DdM(7,C))}}const se=function(){return{height:"600px","background-color":"transparent","border-color":"transparent"}},oe=function(){return[20,70]};let le=(()=>{class i{constructor(){this.contactos=["Carlos","Marcos","Diego","Mariano","Carlos","Marcos","Diego","Mariano","Carlos","Marcos","Diego","Mariano"]}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-chat"]],decls:10,vars:6,consts:[[1,"container"],[1,"mensajes"],[1,"row"],[1,"col"],[1,"titulo"],["layout","horizontal",1,"",3,"panelSizes"],["pTemplate",""],["class","container",4,"ngIf"],["styleClass","custom"],[1,"p-left"],["class","contacto",4,"ngFor","ngForOf"],[1,"contacto"],[1,"row",2,"height","600px"],[1,"col","col-md-4",2,"height","600px"],[1,"col","col-md-8"],[2,"height","600px"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e._uU(5,"Aca va el titulo"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"p-splitter",5),e.YNc(7,ee,3,5,"ng-template",6),e.YNc(8,te,1,0,"ng-template",6),e.qZA(),e.qZA(),e.qZA(),e.YNc(9,ne,17,8,"div",7)),2&t&&(e.xp6(6),e.Akn(e.DdM(4,se)),e.Q6J("panelSizes",e.DdM(5,oe)),e.xp6(3),e.Q6J("ngIf",!1))},directives:[Q,h.jx,r.O5,W,r.sg],styles:[".mensajes[_ngcontent-%COMP%]{background:linear-gradient(315deg,rgba(146,200,62,1) 0%,rgba(0,178,227,1) 100%);margin-top:20px;border-radius:8px}.titulo[_ngcontent-%COMP%]{padding:20px}.p-left[_ngcontent-%COMP%]{padding:5px;width:100%;overflow-y:auto}.contacto[_ngcontent-%COMP%]{background-color:#003da662;color:#fff;padding:10px 15px;border-radius:4px;margin:5px 0;min-height:80px;min-width:300px;max-width:350px;cursor:pointer;transition:.18s ease-in-out}.contacto[_ngcontent-%COMP%]:hover{background-color:#003da68e}.p-scrollpanel-content[_ngcontent-%COMP%]{padding:0 8px 20px 0!important}"]}),i})();function ae(i,s){1&i&&e.GkF(0)}function re(i,s){if(1&i&&(e.TgZ(0,"div",8),e.Hsn(1,1),e.YNc(2,ae,1,0,"ng-container",6),e.qZA()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",t.headerTemplate)}}function pe(i,s){1&i&&e.GkF(0)}function ce(i,s){if(1&i&&(e.TgZ(0,"div",9),e._uU(1),e.YNc(2,pe,1,0,"ng-container",6),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij(" ",t.header," "),e.xp6(1),e.Q6J("ngTemplateOutlet",t.titleTemplate)}}function de(i,s){1&i&&e.GkF(0)}function he(i,s){if(1&i&&(e.TgZ(0,"div",10),e._uU(1),e.YNc(2,de,1,0,"ng-container",6),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.hij(" ",t.subheader," "),e.xp6(1),e.Q6J("ngTemplateOutlet",t.subtitleTemplate)}}function ue(i,s){1&i&&e.GkF(0)}function me(i,s){1&i&&e.GkF(0)}function ge(i,s){if(1&i&&(e.TgZ(0,"div",11),e.Hsn(1,2),e.YNc(2,me,1,0,"ng-container",6),e.qZA()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",t.footerTemplate)}}const fe=["*",[["p-header"]],[["p-footer"]]],ve=["*","p-header","p-footer"];let be=(()=>{class i{constructor(t){this.el=t}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"title":this.titleTemplate=t.template;break;case"subtitle":this.subtitleTemplate=t.template;break;default:this.contentTemplate=t.template;break;case"footer":this.footerTemplate=t.template}})}getBlockableElement(){return this.el.nativeElement.children[0]}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-card"]],contentQueries:function(t,n,o){if(1&t&&(e.Suo(o,h.h4,5),e.Suo(o,h.$_,5),e.Suo(o,h.jx,4)),2&t){let l;e.iGM(l=e.CRH())&&(n.headerFacet=l.first),e.iGM(l=e.CRH())&&(n.footerFacet=l.first),e.iGM(l=e.CRH())&&(n.templates=l)}},hostAttrs:[1,"p-element"],inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},ngContentSelectors:ve,decls:9,vars:9,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(t,n){1&t&&(e.F$t(fe),e.TgZ(0,"div",0),e.YNc(1,re,3,1,"div",1),e.TgZ(2,"div",2),e.YNc(3,ce,3,2,"div",3),e.YNc(4,he,3,2,"div",4),e.TgZ(5,"div",5),e.Hsn(6),e.YNc(7,ue,1,0,"ng-container",6),e.qZA(),e.YNc(8,ge,3,1,"div",7),e.qZA(),e.qZA()),2&t&&(e.Tol(n.styleClass),e.Q6J("ngClass","p-card p-component")("ngStyle",n.style),e.xp6(1),e.Q6J("ngIf",n.headerFacet||n.headerTemplate),e.xp6(2),e.Q6J("ngIf",n.header||n.titleTemplate),e.xp6(1),e.Q6J("ngIf",n.subheader||n.subtitleTemplate),e.xp6(3),e.Q6J("ngTemplateOutlet",n.contentTemplate),e.xp6(1),e.Q6J("ngIf",n.footerFacet||n.footerTemplate))},directives:[r.mk,r.PC,r.O5,r.tP],styles:[".p-card-header img{width:100%}\n"],encapsulation:2,changeDetection:0}),i})(),_e=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[r.ez],h.m8]}),i})();const Ce=[{path:"",component:F,children:[{path:"",component:(()=>{class i{constructor(t,n){this.router=t,this.authService=n}get usuario(){return this.authService.usuario}logout(){this.authService.logout(),this.router.navigateByUrl("/auth")}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.F0),e.Y36(y.e))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-home"]],decls:22,vars:3,consts:[[1,"container","text-layout"],[1,"row"],[1,"col"],["header","header","subheader","Esto es un subheader"],[1,"col-6"],["pButton","","label","Probando",1,""],["pButton","","icon","pi pi-sign-out","iconPos","right","label","Logout",1,"p-button-danger",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h1"),e._uU(4,"Dashboard"),e.qZA(),e._UZ(5,"hr"),e.qZA(),e.qZA(),e.TgZ(6,"div",1),e.TgZ(7,"div",2),e.TgZ(8,"p"),e._uU(9," Esta p\xe1gina slo funciona si estas autenticado "),e.qZA(),e.TgZ(10,"h4"),e._uU(11,"User info"),e.qZA(),e.TgZ(12,"pre"),e._uU(13),e.ALo(14,"json"),e.qZA(),e.qZA(),e.TgZ(15,"div",2),e.TgZ(16,"p-card",3),e._uU(17," Content "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"div",1),e.TgZ(19,"div",4),e._UZ(20,"button",5),e.TgZ(21,"button",6),e.NdJ("click",function(){return n.logout()}),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(13),e.hij(" ",e.lcZ(14,1,n.usuario)," "))},directives:[be,_.Hq],pipes:[r.Ts],styles:[""]}),i})()},{path:"chat",component:le},{path:"**",redirectTo:""}]}];let Se=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[m.Bz.forChild(Ce)],m.Bz]}),i})(),xe=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[_.hJ,_e,U,K,q]}),i})(),ye=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[r.ez,Se,xe]]}),i})()}}]);