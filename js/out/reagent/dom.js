// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if((!((reagent.dom.imported == null)))){
return reagent.dom.imported;
} else {
if((typeof ReactDOM !== 'undefined')){
return reagent.dom.imported = ReactDOM;
} else {
if((typeof require !== 'undefined')){
var or__4131__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__5238 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__5239 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__5239;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR__orig_val__5238,_STAR_always_update_STAR__temp_val__5239){
return (function (){
var _STAR_always_update_STAR__orig_val__5240 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__5241 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__5241;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__5240;
}});})(_STAR_always_update_STAR__orig_val__5238,_STAR_always_update_STAR__temp_val__5239))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__5238;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__5243 = arguments.length;
switch (G__5243) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__5245_5249 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__5246_5250 = null;
var count__5247_5251 = (0);
var i__5248_5252 = (0);
while(true){
if((i__5248_5252 < count__5247_5251)){
var v_5253 = chunk__5246_5250.cljs$core$IIndexed$_nth$arity$2(null,i__5248_5252);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_5253);


var G__5254 = seq__5245_5249;
var G__5255 = chunk__5246_5250;
var G__5256 = count__5247_5251;
var G__5257 = (i__5248_5252 + (1));
seq__5245_5249 = G__5254;
chunk__5246_5250 = G__5255;
count__5247_5251 = G__5256;
i__5248_5252 = G__5257;
continue;
} else {
var temp__5720__auto___5258 = cljs.core.seq(seq__5245_5249);
if(temp__5720__auto___5258){
var seq__5245_5259__$1 = temp__5720__auto___5258;
if(cljs.core.chunked_seq_QMARK_(seq__5245_5259__$1)){
var c__4550__auto___5260 = cljs.core.chunk_first(seq__5245_5259__$1);
var G__5261 = cljs.core.chunk_rest(seq__5245_5259__$1);
var G__5262 = c__4550__auto___5260;
var G__5263 = cljs.core.count(c__4550__auto___5260);
var G__5264 = (0);
seq__5245_5249 = G__5261;
chunk__5246_5250 = G__5262;
count__5247_5251 = G__5263;
i__5248_5252 = G__5264;
continue;
} else {
var v_5265 = cljs.core.first(seq__5245_5259__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_5265);


var G__5266 = cljs.core.next(seq__5245_5259__$1);
var G__5267 = null;
var G__5268 = (0);
var G__5269 = (0);
seq__5245_5249 = G__5266;
chunk__5246_5250 = G__5267;
count__5247_5251 = G__5268;
i__5248_5252 = G__5269;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
