// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('zen_frame.core');
goog.require('app.index.view');
goog.require('app.route');
app.core.mount_root = (function app$core$mount_root(){
var G__6705_6706 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zen_DASH_frame$core_SLASH_initialize,app.route.route], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__6705_6706) : re_frame.core.dispatch_sync.call(null,G__6705_6706));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zen_frame.core.current_page], null),document.getElementById("app"));
});
app.core.re_render = (function app$core$re_render(){
return app.core.mount_root();
});
