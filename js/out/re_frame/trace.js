// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__5834){
var map__5835 = p__5834;
var map__5835__$1 = (((((!((map__5835 == null))))?(((((map__5835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5835):map__5835);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5835__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5835__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5835__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5835__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__5837_5861 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__5838_5862 = null;
var count__5839_5863 = (0);
var i__5840_5864 = (0);
while(true){
if((i__5840_5864 < count__5839_5863)){
var vec__5851_5865 = chunk__5838_5862.cljs$core$IIndexed$_nth$arity$2(null,i__5840_5864);
var k_5866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5851_5865,(0),null);
var cb_5867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5851_5865,(1),null);
try{var G__5855_5868 = cljs.core.deref(re_frame.trace.traces);
(cb_5867.cljs$core$IFn$_invoke$arity$1 ? cb_5867.cljs$core$IFn$_invoke$arity$1(G__5855_5868) : cb_5867.call(null,G__5855_5868));
}catch (e5854){var e_5869 = e5854;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_5866,"while storing",cljs.core.deref(re_frame.trace.traces),e_5869], 0));
}

var G__5870 = seq__5837_5861;
var G__5871 = chunk__5838_5862;
var G__5872 = count__5839_5863;
var G__5873 = (i__5840_5864 + (1));
seq__5837_5861 = G__5870;
chunk__5838_5862 = G__5871;
count__5839_5863 = G__5872;
i__5840_5864 = G__5873;
continue;
} else {
var temp__5720__auto___5874 = cljs.core.seq(seq__5837_5861);
if(temp__5720__auto___5874){
var seq__5837_5875__$1 = temp__5720__auto___5874;
if(cljs.core.chunked_seq_QMARK_(seq__5837_5875__$1)){
var c__4550__auto___5876 = cljs.core.chunk_first(seq__5837_5875__$1);
var G__5877 = cljs.core.chunk_rest(seq__5837_5875__$1);
var G__5878 = c__4550__auto___5876;
var G__5879 = cljs.core.count(c__4550__auto___5876);
var G__5880 = (0);
seq__5837_5861 = G__5877;
chunk__5838_5862 = G__5878;
count__5839_5863 = G__5879;
i__5840_5864 = G__5880;
continue;
} else {
var vec__5856_5881 = cljs.core.first(seq__5837_5875__$1);
var k_5882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5856_5881,(0),null);
var cb_5883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5856_5881,(1),null);
try{var G__5860_5884 = cljs.core.deref(re_frame.trace.traces);
(cb_5883.cljs$core$IFn$_invoke$arity$1 ? cb_5883.cljs$core$IFn$_invoke$arity$1(G__5860_5884) : cb_5883.call(null,G__5860_5884));
}catch (e5859){var e_5885 = e5859;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_5882,"while storing",cljs.core.deref(re_frame.trace.traces),e_5885], 0));
}

var G__5886 = cljs.core.next(seq__5837_5875__$1);
var G__5887 = null;
var G__5888 = (0);
var G__5889 = (0);
seq__5837_5861 = G__5886;
chunk__5838_5862 = G__5887;
count__5839_5863 = G__5888;
i__5840_5864 = G__5889;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
