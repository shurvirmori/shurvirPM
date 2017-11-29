"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("../../../../src/app/app.server.module");
var i2 = require("../../../../src/app/app.component");
var i3 = require("./app.component.ngfactory");
var i4 = require("@angular/http");
var i5 = require("@angular/platform-server");
var i6 = require("@angular/common/http");
var i7 = require("@angular/common");
var i8 = require("@angular/platform-browser");
var i9 = require("@angular/animations/browser");
var i10 = require("@angular/platform-browser/animations");
var i11 = require("@angular/animations");
var i12 = require("@angular/forms");
var i13 = require("@angular/router");
var i14 = require("../../../../src/app/app-routing.module");
var i15 = require("../../../../src/app/app.module");
exports.AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]),
        i0.ɵmpd(4608, i4.BrowserXhr, i5.ɵc, []), i0.ɵmpd(4608, i4.ResponseOptions, i4.BaseResponseOptions, []), i0.ɵmpd(4608, i4.XSRFStrategy, i5.ɵd, []), i0.ɵmpd(4608, i4.XHRBackend, i4.XHRBackend, [i4.BrowserXhr,
            i4.ResponseOptions, i4.XSRFStrategy]), i0.ɵmpd(4608, i4.RequestOptions, i4.BaseRequestOptions, []), i0.ɵmpd(5120, i4.Http, i5.ɵe, [i4.XHRBackend,
            i4.RequestOptions]), i0.ɵmpd(4608, i6.HttpXsrfTokenExtractor, i6.ɵg, [i7.DOCUMENT,
            i0.PLATFORM_ID, i6.ɵe]), i0.ɵmpd(4608, i6.ɵh, i6.ɵh, [i6.HttpXsrfTokenExtractor,
            i6.ɵf]), i0.ɵmpd(5120, i6.HTTP_INTERCEPTORS, function (p0_0) {
            return [p0_0];
        }, [i6.ɵh]), i0.ɵmpd(4608, i6.XhrFactory, i5.ɵc, []), i0.ɵmpd(4608, i6.HttpXhrBackend, i6.HttpXhrBackend, [i6.XhrFactory]), i0.ɵmpd(6144, i6.HttpBackend, null, [i6.HttpXhrBackend]), i0.ɵmpd(5120, i6.HttpHandler, i5.ɵf, [i6.HttpBackend, [2, i6.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i6.HttpClient, i6.HttpClient, [i6.HttpHandler]), i0.ɵmpd(4608, i6.ɵd, i6.ɵd, []),
        i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i7.NgLocalization, i7.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []),
        i0.ɵmpd(4608, i8.DomSanitizer, i8.ɵe, [i7.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i8.DomSanitizer]), i0.ɵmpd(4608, i8.HAMMER_GESTURE_CONFIG, i8.HammerGestureConfig, []), i0.ɵmpd(5120, i8.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i8.ɵDomEventsPlugin(p0_0), new i8.ɵKeyEventsPlugin(p1_0),
                new i8.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i7.DOCUMENT, i7.DOCUMENT, i7.DOCUMENT, i8.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i8.EventManager, i8.EventManager, [i8.EVENT_MANAGER_PLUGINS, i0.NgZone]),
        i0.ɵmpd(135680, i8.ɵDomSharedStylesHost, i8.ɵDomSharedStylesHost, [i7.DOCUMENT]),
        i0.ɵmpd(4608, i8.ɵDomRendererFactory2, i8.ɵDomRendererFactory2, [i8.EventManager,
            i8.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i5.ɵb, i5.ɵb, [i8.DOCUMENT, [2, i8.ɵTRANSITION_ID]]),
        i0.ɵmpd(6144, i8.ɵSharedStylesHost, null, [i5.ɵb]), i0.ɵmpd(4608, i5.ɵServerRendererFactory2, i5.ɵServerRendererFactory2, [i0.NgZone, i8.DOCUMENT, i8.ɵSharedStylesHost]),
        i0.ɵmpd(4608, i9.AnimationDriver, i9.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i9.ɵAnimationStyleNormalizer, i10.ɵd, []), i0.ɵmpd(4608, i9.ɵAnimationEngine, i10.ɵb, [i9.AnimationDriver, i9.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i5.ɵa, [i5.ɵServerRendererFactory2, i9.ɵAnimationEngine,
            i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []),
        i0.ɵmpd(4608, i8.Meta, i8.Meta, [i7.DOCUMENT]), i0.ɵmpd(4608, i8.Title, i8.Title, [i7.DOCUMENT]), i0.ɵmpd(4608, i11.AnimationBuilder, i10.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i8.DOCUMENT]), i0.ɵmpd(4608, i12.ɵi, i12.ɵi, []),
        i0.ɵmpd(5120, i13.ActivatedRoute, i13.ɵf, [i13.Router]), i0.ɵmpd(4608, i13.NoPreloading, i13.NoPreloading, []), i0.ɵmpd(6144, i13.PreloadingStrategy, null, [i13.NoPreloading]), i0.ɵmpd(135680, i13.RouterPreloader, i13.RouterPreloader, [i13.Router, i0.NgModuleFactoryLoader, i0.Compiler,
            i0.Injector, i13.PreloadingStrategy]), i0.ɵmpd(4608, i13.PreloadAllModules, i13.PreloadAllModules, []), i0.ɵmpd(5120, i13.ROUTER_INITIALIZER, i13.ɵi, [i13.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i13.ROUTER_INITIALIZER]), i0.ɵmpd(512, i4.HttpModule, i4.HttpModule, []),
        i0.ɵmpd(512, i6.HttpClientXsrfModule, i6.HttpClientXsrfModule, []),
        i0.ɵmpd(512, i6.HttpClientModule, i6.HttpClientModule, []), i0.ɵmpd(512, i7.CommonModule, i7.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i8.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i13.ɵb()];
        }, []), i0.ɵmpd(512, i13.ɵg, i13.ɵg, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, 'ang4-seo', []), i0.ɵmpd(2048, i8.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) {
            return [i8.ɵc(p0_0, p0_1), i13.ɵh(p1_0), i8.ɵf(p2_0, p2_1, p2_2)];
        }, [[2, i8.NgProbeToken], [2, i0.NgProbeToken], i13.ɵg, i8.ɵTRANSITION_ID, i7.DOCUMENT,
            i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole,
            i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]),
        i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i8.BrowserModule, i8.BrowserModule, [[3, i8.BrowserModule]]), i0.ɵmpd(512, i10.NoopAnimationsModule, i10.NoopAnimationsModule, []), i0.ɵmpd(512, i5.ServerModule, i5.ServerModule, []), i0.ɵmpd(512, i12.ɵba, i12.ɵba, []),
        i0.ɵmpd(512, i12.FormsModule, i12.FormsModule, []), i0.ɵmpd(1024, i13.ɵa, i13.ɵd, [[3, i13.Router]]), i0.ɵmpd(512, i13.UrlSerializer, i13.DefaultUrlSerializer, []), i0.ɵmpd(512, i13.ChildrenOutletContexts, i13.ChildrenOutletContexts, []), i0.ɵmpd(256, i13.ROUTER_CONFIGURATION, {}, []),
        i0.ɵmpd(1024, i7.LocationStrategy, i13.ɵc, [i7.PlatformLocation, [2, i7.APP_BASE_HREF],
            i13.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i7.Location, i7.Location, [i7.LocationStrategy]),
        i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]),
        i0.ɵmpd(1024, i13.ROUTES, function () {
            return [[]];
        }, []), i0.ɵmpd(1024, i13.Router, i13.ɵe, [i0.ApplicationRef, i13.UrlSerializer,
            i13.ChildrenOutletContexts, i7.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i13.ROUTES, i13.ROUTER_CONFIGURATION, [2, i13.UrlHandlingStrategy],
            [2, i13.RouteReuseStrategy]]), i0.ɵmpd(512, i13.RouterModule, i13.RouterModule, [[2, i13.ɵa], [2, i13.Router]]), i0.ɵmpd(512, i14.AppRoutingModule, i14.AppRoutingModule, []), i0.ɵmpd(512, i15.AppModule, i15.AppModule, []),
        i0.ɵmpd(512, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i6.ɵe, 'XSRF-TOKEN', []), i0.ɵmpd(256, i6.ɵf, 'X-XSRF-TOKEN', [])]);
});
//# sourceMappingURL=app.server.module.ngfactory.js.map