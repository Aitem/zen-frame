// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zen_frame.pages');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
if((typeof zen_frame !== 'undefined') && (typeof zen_frame.pages !== 'undefined') && (typeof zen_frame.pages.pages !== 'undefined')){
} else {
zen_frame.pages.pages = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
var G__6455_6461 = cljs.core.cst$kw$zen_DASH_frame$pages_SLASH_data;
var G__6456_6462 = ((function (G__6455_6461){
return (function (db,p__6457){
var vec__6458 = p__6457;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6458,(0),null);
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6458,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,pid);
});})(G__6455_6461))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__6455_6461,G__6456_6462) : re_frame.core.reg_sub.call(null,G__6455_6461,G__6456_6462));
zen_frame.pages.reg_page = (function zen_frame$pages$reg_page(key,page){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zen_frame.pages.pages,cljs.core.assoc,key,page);
});
zen_frame.pages.subscribed_page = (function zen_frame$pages$subscribed_page(page_idx,view){
return (function (params){
var m = (function (){var G__6463 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_idx], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__6463) : re_frame.core.subscribe.call(null,G__6463));
})();
return ((function (m){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,cljs.core.deref(m),params], null);
});
;})(m))
});
});
/**
 * register subscribed page under keyword for routing
 */
zen_frame.pages.reg_subs_page = (function zen_frame$pages$reg_subs_page(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6471 = arguments.length;
var i__4731__auto___6472 = (0);
while(true){
if((i__4731__auto___6472 < len__4730__auto___6471)){
args__4736__auto__.push((arguments[i__4731__auto___6472]));

var G__6473 = (i__4731__auto___6472 + (1));
i__4731__auto___6472 = G__6473;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return zen_frame.pages.reg_subs_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

zen_frame.pages.reg_subs_page.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,p__6467){
var vec__6468 = p__6467;
var layout_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6468,(0),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zen_frame.pages.pages,cljs.core.assoc,key,zen_frame.pages.subscribed_page(key,f));
});

zen_frame.pages.reg_subs_page.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zen_frame.pages.reg_subs_page.cljs$lang$applyTo = (function (seq6464){
var G__6465 = cljs.core.first(seq6464);
var seq6464__$1 = cljs.core.next(seq6464);
var G__6466 = cljs.core.first(seq6464__$1);
var seq6464__$2 = cljs.core.next(seq6464__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6465,G__6466,seq6464__$2);
});

