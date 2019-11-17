// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zen_frame.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('zen_frame.routing');
goog.require('zen_frame.pages');
zen_frame.core.plus_ab = (function zen_frame$core$plus_ab(a,b){
return (a + b);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zen_DASH_frame$core_SLASH_initialize,(function (p__6676,p__6677){
var map__6678 = p__6676;
var map__6678__$1 = (((((!((map__6678 == null))))?(((((map__6678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6678):map__6678);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6678__$1,cljs.core.cst$kw$db);
var vec__6679 = p__6677;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6679,(0),null);
var routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6679,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$route_DASH_map_SLASH_routes,routes),cljs.core.cst$kw$route_DASH_map_SLASH_start,cljs.core.PersistentArrayMap.EMPTY], null);
}));
zen_frame.core.layout = (function zen_frame$core$layout(page){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Default layout"], null),page], null);
});
zen_frame.core.current_page = (function zen_frame$core$current_page(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6689 = arguments.length;
var i__4731__auto___6690 = (0);
while(true){
if((i__4731__auto___6690 < len__4730__auto___6689)){
args__4736__auto__.push((arguments[i__4731__auto___6690]));

var G__6691 = (i__4731__auto___6690 + (1));
i__4731__auto___6690 = G__6691;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return zen_frame.core.current_page.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

zen_frame.core.current_page.cljs$core$IFn$_invoke$arity$variadic = (function (p__6684){
var vec__6685 = p__6684;
var not_found_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6685,(0),null);
var route = (function (){var G__6688 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__6688) : re_frame.core.subscribe.call(null,G__6688));
})();
return ((function (route,vec__6685,not_found_page){
return (function (){
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zen_frame.pages.pages),cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(route)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(route));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zen_frame.core.layout,(cljs.core.truth_(page)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,params], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [not_found_page], null))], null);
});
;})(route,vec__6685,not_found_page))
});

zen_frame.core.current_page.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
zen_frame.core.current_page.cljs$lang$applyTo = (function (seq6683){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq6683));
});

