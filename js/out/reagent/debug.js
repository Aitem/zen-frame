// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__4833__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__4833 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4834__i = 0, G__4834__a = new Array(arguments.length -  0);
while (G__4834__i < G__4834__a.length) {G__4834__a[G__4834__i] = arguments[G__4834__i + 0]; ++G__4834__i;}
  args = new cljs.core.IndexedSeq(G__4834__a,0,null);
} 
return G__4833__delegate.call(this,args);};
G__4833.cljs$lang$maxFixedArity = 0;
G__4833.cljs$lang$applyTo = (function (arglist__4835){
var args = cljs.core.seq(arglist__4835);
return G__4833__delegate(args);
});
G__4833.cljs$core$IFn$_invoke$arity$variadic = G__4833__delegate;
return G__4833;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__4836__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__4836 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4837__i = 0, G__4837__a = new Array(arguments.length -  0);
while (G__4837__i < G__4837__a.length) {G__4837__a[G__4837__i] = arguments[G__4837__i + 0]; ++G__4837__i;}
  args = new cljs.core.IndexedSeq(G__4837__a,0,null);
} 
return G__4836__delegate.call(this,args);};
G__4836.cljs$lang$maxFixedArity = 0;
G__4836.cljs$lang$applyTo = (function (arglist__4838){
var args = cljs.core.seq(arglist__4838);
return G__4836__delegate(args);
});
G__4836.cljs$core$IFn$_invoke$arity$variadic = G__4836__delegate;
return G__4836;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
