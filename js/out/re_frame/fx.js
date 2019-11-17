// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__5992 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__5993 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__5993;

try{try{var seq__5994 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__5995 = null;
var count__5996 = (0);
var i__5997 = (0);
while(true){
if((i__5997 < count__5996)){
var vec__6004 = chunk__5995.cljs$core$IIndexed$_nth$arity$2(null,i__5997);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6004,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6004,(1),null);
var temp__5718__auto___6026 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6026)){
var effect_fn_6027 = temp__5718__auto___6026;
(effect_fn_6027.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6027.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6027.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6028 = seq__5994;
var G__6029 = chunk__5995;
var G__6030 = count__5996;
var G__6031 = (i__5997 + (1));
seq__5994 = G__6028;
chunk__5995 = G__6029;
count__5996 = G__6030;
i__5997 = G__6031;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__5994);
if(temp__5720__auto__){
var seq__5994__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5994__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5994__$1);
var G__6032 = cljs.core.chunk_rest(seq__5994__$1);
var G__6033 = c__4550__auto__;
var G__6034 = cljs.core.count(c__4550__auto__);
var G__6035 = (0);
seq__5994 = G__6032;
chunk__5995 = G__6033;
count__5996 = G__6034;
i__5997 = G__6035;
continue;
} else {
var vec__6007 = cljs.core.first(seq__5994__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6007,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6007,(1),null);
var temp__5718__auto___6036 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6036)){
var effect_fn_6037 = temp__5718__auto___6036;
(effect_fn_6037.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6037.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6037.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6038 = cljs.core.next(seq__5994__$1);
var G__6039 = null;
var G__6040 = (0);
var G__6041 = (0);
seq__5994 = G__6038;
chunk__5995 = G__6039;
count__5996 = G__6040;
i__5997 = G__6041;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__5812__auto___6042 = re_frame.interop.now();
var duration__5813__auto___6043 = (end__5812__auto___6042 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__5813__auto___6043,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__5812__auto___6042);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__5992;
}} else {
var seq__6010 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__6011 = null;
var count__6012 = (0);
var i__6013 = (0);
while(true){
if((i__6013 < count__6012)){
var vec__6020 = chunk__6011.cljs$core$IIndexed$_nth$arity$2(null,i__6013);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6020,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6020,(1),null);
var temp__5718__auto___6044 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6044)){
var effect_fn_6045 = temp__5718__auto___6044;
(effect_fn_6045.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6045.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6045.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6046 = seq__6010;
var G__6047 = chunk__6011;
var G__6048 = count__6012;
var G__6049 = (i__6013 + (1));
seq__6010 = G__6046;
chunk__6011 = G__6047;
count__6012 = G__6048;
i__6013 = G__6049;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6010);
if(temp__5720__auto__){
var seq__6010__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6010__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6010__$1);
var G__6050 = cljs.core.chunk_rest(seq__6010__$1);
var G__6051 = c__4550__auto__;
var G__6052 = cljs.core.count(c__4550__auto__);
var G__6053 = (0);
seq__6010 = G__6050;
chunk__6011 = G__6051;
count__6012 = G__6052;
i__6013 = G__6053;
continue;
} else {
var vec__6023 = cljs.core.first(seq__6010__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6023,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6023,(1),null);
var temp__5718__auto___6054 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6054)){
var effect_fn_6055 = temp__5718__auto___6054;
(effect_fn_6055.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6055.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6055.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6056 = cljs.core.next(seq__6010__$1);
var G__6057 = null;
var G__6058 = (0);
var G__6059 = (0);
seq__6010 = G__6056;
chunk__6011 = G__6057;
count__6012 = G__6058;
i__6013 = G__6059;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__6060 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__6061 = null;
var count__6062 = (0);
var i__6063 = (0);
while(true){
if((i__6063 < count__6062)){
var map__6068 = chunk__6061.cljs$core$IIndexed$_nth$arity$2(null,i__6063);
var map__6068__$1 = (((((!((map__6068 == null))))?(((((map__6068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6068):map__6068);
var effect = map__6068__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6068__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6068__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__6060,chunk__6061,count__6062,i__6063,map__6068,map__6068__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__6060,chunk__6061,count__6062,i__6063,map__6068,map__6068__$1,effect,ms,dispatch))
,ms);
}


var G__6072 = seq__6060;
var G__6073 = chunk__6061;
var G__6074 = count__6062;
var G__6075 = (i__6063 + (1));
seq__6060 = G__6072;
chunk__6061 = G__6073;
count__6062 = G__6074;
i__6063 = G__6075;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6060);
if(temp__5720__auto__){
var seq__6060__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6060__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6060__$1);
var G__6076 = cljs.core.chunk_rest(seq__6060__$1);
var G__6077 = c__4550__auto__;
var G__6078 = cljs.core.count(c__4550__auto__);
var G__6079 = (0);
seq__6060 = G__6076;
chunk__6061 = G__6077;
count__6062 = G__6078;
i__6063 = G__6079;
continue;
} else {
var map__6070 = cljs.core.first(seq__6060__$1);
var map__6070__$1 = (((((!((map__6070 == null))))?(((((map__6070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6070):map__6070);
var effect = map__6070__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6070__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6070__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__6060,chunk__6061,count__6062,i__6063,map__6070,map__6070__$1,effect,ms,dispatch,seq__6060__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__6060,chunk__6061,count__6062,i__6063,map__6070,map__6070__$1,effect,ms,dispatch,seq__6060__$1,temp__5720__auto__))
,ms);
}


var G__6080 = cljs.core.next(seq__6060__$1);
var G__6081 = null;
var G__6082 = (0);
var G__6083 = (0);
seq__6060 = G__6080;
chunk__6061 = G__6081;
count__6062 = G__6082;
i__6063 = G__6083;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__6084 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__6085 = null;
var count__6086 = (0);
var i__6087 = (0);
while(true){
if((i__6087 < count__6086)){
var event = chunk__6085.cljs$core$IIndexed$_nth$arity$2(null,i__6087);
re_frame.router.dispatch(event);


var G__6088 = seq__6084;
var G__6089 = chunk__6085;
var G__6090 = count__6086;
var G__6091 = (i__6087 + (1));
seq__6084 = G__6088;
chunk__6085 = G__6089;
count__6086 = G__6090;
i__6087 = G__6091;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6084);
if(temp__5720__auto__){
var seq__6084__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6084__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6084__$1);
var G__6092 = cljs.core.chunk_rest(seq__6084__$1);
var G__6093 = c__4550__auto__;
var G__6094 = cljs.core.count(c__4550__auto__);
var G__6095 = (0);
seq__6084 = G__6092;
chunk__6085 = G__6093;
count__6086 = G__6094;
i__6087 = G__6095;
continue;
} else {
var event = cljs.core.first(seq__6084__$1);
re_frame.router.dispatch(event);


var G__6096 = cljs.core.next(seq__6084__$1);
var G__6097 = null;
var G__6098 = (0);
var G__6099 = (0);
seq__6084 = G__6096;
chunk__6085 = G__6097;
count__6086 = G__6098;
i__6087 = G__6099;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__6100 = cljs.core.seq(value);
var chunk__6101 = null;
var count__6102 = (0);
var i__6103 = (0);
while(true){
if((i__6103 < count__6102)){
var event = chunk__6101.cljs$core$IIndexed$_nth$arity$2(null,i__6103);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__6104 = seq__6100;
var G__6105 = chunk__6101;
var G__6106 = count__6102;
var G__6107 = (i__6103 + (1));
seq__6100 = G__6104;
chunk__6101 = G__6105;
count__6102 = G__6106;
i__6103 = G__6107;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6100);
if(temp__5720__auto__){
var seq__6100__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6100__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6100__$1);
var G__6108 = cljs.core.chunk_rest(seq__6100__$1);
var G__6109 = c__4550__auto__;
var G__6110 = cljs.core.count(c__4550__auto__);
var G__6111 = (0);
seq__6100 = G__6108;
chunk__6101 = G__6109;
count__6102 = G__6110;
i__6103 = G__6111;
continue;
} else {
var event = cljs.core.first(seq__6100__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__6112 = cljs.core.next(seq__6100__$1);
var G__6113 = null;
var G__6114 = (0);
var G__6115 = (0);
seq__6100 = G__6112;
chunk__6101 = G__6113;
count__6102 = G__6114;
i__6103 = G__6115;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
