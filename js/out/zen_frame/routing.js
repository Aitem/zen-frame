// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('zen_frame.routing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('zen_frame.window_location');
goog.require('route_map.core');
zen_frame.routing.dispatch_routes = (function zen_frame$routing$dispatch_routes(_){
var fragment = window.location.hash;
var G__6584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fragment_DASH_changed,fragment], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__6584) : re_frame.core.dispatch.call(null,G__6584));
});
var G__6585_6587 = cljs.core.cst$kw$route_DASH_map_SLASH_fragment_DASH_params;
var G__6586_6588 = ((function (G__6585_6587){
return (function (db,_){
return cljs.core.cst$kw$fragment_DASH_params.cljs$core$IFn$_invoke$arity$1(db);
});})(G__6585_6587))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__6585_6587,G__6586_6588) : re_frame.core.reg_sub.call(null,G__6585_6587,G__6586_6588));
var G__6589_6591 = cljs.core.cst$kw$route_DASH_map_SLASH_fragment;
var G__6590_6592 = ((function (G__6589_6591){
return (function (db,_){
return cljs.core.cst$kw$fragment.cljs$core$IFn$_invoke$arity$1(db);
});})(G__6589_6591))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__6589_6591,G__6590_6592) : re_frame.core.reg_sub.call(null,G__6589_6591,G__6590_6592));
var G__6593_6595 = cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route;
var G__6594_6596 = ((function (G__6593_6595){
return (function (db,_){
return cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route.cljs$core$IFn$_invoke$arity$1(db);
});})(G__6593_6595))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__6593_6595,G__6594_6596) : re_frame.core.reg_sub.call(null,G__6593_6595,G__6594_6596));
var G__6597_6599 = cljs.core.cst$kw$route_DASH_map_SLASH_fragment_DASH_path;
var G__6598_6600 = ((function (G__6597_6599){
return (function (db,_){
return cljs.core.cst$kw$fragment_DASH_path.cljs$core$IFn$_invoke$arity$1(db);
});})(G__6597_6599))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__6597_6599,G__6598_6600) : re_frame.core.reg_sub.call(null,G__6597_6599,G__6598_6600));
var G__6601_6603 = cljs.core.cst$kw$route_DASH_map_SLASH_location_DASH_search;
var G__6602_6604 = ((function (G__6601_6603){
return (function (db,_){
return cljs.core.cst$kw$location_SLASH_search.cljs$core$IFn$_invoke$arity$1(db);
});})(G__6601_6603))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__6601_6603,G__6602_6604) : re_frame.core.reg_sub.call(null,G__6601_6603,G__6602_6604));
var G__6605_6607 = cljs.core.cst$kw$html_DASH_title;
var G__6606_6608 = ((function (G__6605_6607){
return (function (title){
return document.title = ["\u0420\u041C\u0418\u0421",(cljs.core.truth_(title)?[" - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''):null)].join('');
});})(G__6605_6607))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6605_6607,G__6606_6608) : re_frame.core.reg_fx.call(null,G__6605_6607,G__6606_6608));
zen_frame.routing.contexts_diff = (function zen_frame$routing$contexts_diff(route,old_contexts,new_contexts,params,old_params){
var to_dispose = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6609){
var vec__6610 = p__6609;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6610,(0),null);
var o_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6610,(1),null);
var n_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_contexts,k);
var op = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(o_params,cljs.core.cst$kw$_DOT_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params], 0));
var np = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(n_params,cljs.core.cst$kw$_DOT_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(np,op)){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$deinit,o_params], null));
}
}),cljs.core.PersistentVector.EMPTY,old_contexts);
var to_dispatch = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (to_dispose){
return (function (acc,p__6613){
var vec__6614 = p__6613;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6614,(0),null);
var n_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6614,(1),null);
var o_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_contexts,k);
var op = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(o_params,cljs.core.cst$kw$_DOT_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params], 0));
var np = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(n_params,cljs.core.cst$kw$_DOT_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params], 0));
if((((op == null)) || ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(np,op)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$init,n_params], null));
} else {
return acc;

}
});})(to_dispose))
,to_dispose,new_contexts);
return to_dispatch;
});
zen_frame.routing.parse_params = (function zen_frame$routing$parse_params(s){
if(clojure.string.blank_QMARK_(s)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){
var vec__6617 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(pair,/=/,(2));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6617,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6617,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),decodeURIComponent(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(s,/^\?/,""),"&"));
}
});
zen_frame.routing.dispatch_context = (function zen_frame$routing$dispatch_context(_){
var query = window.location.search;
var G__6620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_changed,zen_frame.routing.parse_params(query)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__6620) : re_frame.core.dispatch.call(null,G__6620));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$search_DASH_changed,(function (p__6621,p__6622){
var map__6623 = p__6621;
var map__6623__$1 = (((((!((map__6623 == null))))?(((((map__6623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6623):map__6623);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6623__$1,cljs.core.cst$kw$db);
var vec__6624 = p__6622;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6624,(0),null);
var search = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6624,(1),null);
var old = cljs.core.cst$kw$location_SLASH_search.cljs$core$IFn$_invoke$arity$1(db);
var ctx_rs = cljs.core.cst$kw$context_SLASH_routes.cljs$core$IFn$_invoke$arity$1(db);
var prev_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx_rs,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(old));
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,search)))){
if(cljs.core.truth_(prev_h)){
new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_h,cljs.core.cst$kw$deinit,old], null),cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$navigation)], null);
} else {
}

var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx_rs,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(search));
if(cljs.core.truth_(temp__5718__auto__)){
var handler = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler,cljs.core.cst$kw$init,search], null),cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$location_SLASH_search,search)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$location_SLASH_search,search)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$location_SLASH_search,search)], null);
}
}));
zen_frame.routing.parse_fragment = (function zen_frame$routing$parse_fragment(fragment){
var vec__6628 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(fragment,/^#/,""),/\?/);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6628,(0),null);
var params_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6628,(1),null);
var params = ((clojure.string.blank_QMARK_(params_str))?cljs.core.PersistentArrayMap.EMPTY:zen_frame.window_location.parse_querystring((function (){var or__4131__auto__ = params_str;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})()));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$query_DASH_string,params_str,cljs.core.cst$kw$params,params], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fragment_DASH_changed,(function (p__6631,p__6632){
var map__6633 = p__6631;
var map__6633__$1 = (((((!((map__6633 == null))))?(((((map__6633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6633):map__6633);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6633__$1,cljs.core.cst$kw$db);
var vec__6634 = p__6632;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6634,(0),null);
var fragment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6634,(1),null);
var map__6638 = zen_frame.routing.parse_fragment(fragment);
var map__6638__$1 = (((((!((map__6638 == null))))?(((((map__6638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6638):map__6638);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6638__$1,cljs.core.cst$kw$path);
var q_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6638__$1,cljs.core.cst$kw$params);
var qs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6638__$1,cljs.core.cst$kw$query_DASH_string);
var temp__5718__auto__ = route_map.core.match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_DOT_,path], null),cljs.core.cst$kw$route_DASH_map_SLASH_routes.cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_(temp__5718__auto__)){
var route = temp__5718__auto__;
var params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(route),cljs.core.cst$kw$params,q_params);
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,cljs.core.cst$kw$search,cljs.core.cst$kw$location_SLASH_search.cljs$core$IFn$_invoke$arity$1(db));
var route_match = cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(route);
var route__$1 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$match,route_match,cljs.core.cst$kw$params,params__$1,cljs.core.cst$kw$parents,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(route)], null);
var contexts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (params,params__$1,route_match,route__$1,route,temp__5718__auto__,map__6638,map__6638__$1,path,q_params,qs,map__6633,map__6633__$1,db,vec__6634,k,fragment){
return (function (acc,p__6640){
var map__6641 = p__6640;
var map__6641__$1 = (((((!((map__6641 == null))))?(((((map__6641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6641):map__6641);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6641__$1,cljs.core.cst$kw$context);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6641__$1,cljs.core.cst$kw$_DOT_);
if(cljs.core.truth_(ctx)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,ctx,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params__$1,cljs.core.cst$kw$$$,r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_DOT_,route_match], 0)));
} else {
return acc;
}
});})(params,params__$1,route_match,route__$1,route,temp__5718__auto__,map__6638,map__6638__$1,path,q_params,qs,map__6633,map__6633__$1,db,vec__6634,k,fragment))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$parents.cljs$core$IFn$_invoke$arity$1(route__$1));
var current_page = cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(route__$1);
var old_page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$match], null));
var old_params = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,cljs.core.cst$kw$params], null));
var page_ctx_events = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_page,old_page))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_params,params__$1))?cljs.core.PersistentVector.EMPTY:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(old_params,cljs.core.cst$kw$params),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params__$1,cljs.core.cst$kw$params)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$params,params__$1,old_params], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$deinit,old_params], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$init,params__$1], null)], null)
)):(function (){var G__6643 = cljs.core.PersistentVector.EMPTY;
var G__6643__$1 = (cljs.core.truth_(old_page)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__6643,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_page,cljs.core.cst$kw$deinit,old_params], null)):G__6643);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__6643__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_page,cljs.core.cst$kw$init,params__$1], null));

})()
);
var old_contexts = cljs.core.cst$kw$route_SLASH_context.cljs$core$IFn$_invoke$arity$1(db);
var context_evs = zen_frame.routing.contexts_diff(cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(route__$1),old_contexts,contexts,params__$1,old_params);
var evs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(page_ctx_events,context_evs);
var db__$1 = (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_page,current_page))))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,old_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$form], 0)):db);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db__$1,cljs.core.cst$kw$route_SLASH_history,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.cst$kw$route_SLASH_history.cljs$core$IFn$_invoke$arity$1(db__$1)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$route,cljs.core.cst$kw$match.cljs$core$IFn$_invoke$arity$1(route__$1),cljs.core.cst$kw$uri,fragment], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fragment,fragment,cljs.core.cst$kw$fragment_DASH_params,params__$1,cljs.core.cst$kw$fragment_DASH_path,path,cljs.core.cst$kw$fragment_DASH_query_DASH_string,qs,cljs.core.cst$kw$route_SLASH_context,contexts,cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,route__$1], 0)),cljs.core.cst$kw$html_DASH_title,null,cljs.core.cst$kw$dispatch_DASH_n,evs], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$fragment,fragment,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,null,cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,null,cljs.core.cst$kw$route_DASH_map_SLASH_error,cljs.core.cst$kw$not_DASH_found], 0))], null);
}
}));
var G__6644_6646 = cljs.core.cst$kw$pop_DASH_route;
var G__6645_6647 = ((function (G__6644_6646){
return (function (db){
return cljs.core.peek(cljs.core.cst$kw$route_DASH_stack.cljs$core$IFn$_invoke$arity$1(db));
});})(G__6644_6646))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__6644_6646,G__6645_6647) : re_frame.core.reg_sub.call(null,G__6644_6646,G__6645_6647));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$clear_DASH_route_DASH_stack,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$route_DASH_stack);
}));
zen_frame.routing.history_fx = (function zen_frame$routing$history_fx(_){
(window["onhashchange"] = zen_frame.routing.dispatch_routes);

return zen_frame.routing.dispatch_routes(null);
});
var G__6648_6650 = cljs.core.cst$kw$history;
var G__6649_6651 = zen_frame.routing.history_fx;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6648_6650,G__6649_6651) : re_frame.core.reg_fx.call(null,G__6648_6650,G__6649_6651));
zen_frame.routing.search_history_fx = (function zen_frame$routing$search_history_fx(_){
(window["onpopstate"] = zen_frame.routing.dispatch_context);

return zen_frame.routing.dispatch_context(null);
});
var G__6652_6654 = cljs.core.cst$kw$search_DASH_history;
var G__6653_6655 = zen_frame.routing.search_history_fx;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6652_6654,G__6653_6655) : re_frame.core.reg_fx.call(null,G__6652_6654,G__6653_6655));
zen_frame.routing.start_fx = (function zen_frame$routing$start_fx(_){
zen_frame.routing.search_history_fx(null);

return zen_frame.routing.history_fx(null);
});
var G__6656_6658 = cljs.core.cst$kw$route_DASH_map_SLASH_start;
var G__6657_6659 = zen_frame.routing.start_fx;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6656_6658,G__6657_6659) : re_frame.core.reg_fx.call(null,G__6656_6658,G__6657_6659));
zen_frame.routing.redirect = (function zen_frame$routing$redirect(href){
return (window.location["hash"] = href);
});
var G__6660_6662 = cljs.core.cst$kw$route_DASH_map_SLASH_redirect;
var G__6661_6663 = zen_frame.routing.redirect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6660_6662,G__6661_6663) : re_frame.core.reg_fx.call(null,G__6660_6662,G__6661_6663));
zen_frame.routing.to_query_params = (function zen_frame$routing$to_query_params(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6664){
var vec__6665 = p__6664;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6665,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6665,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),params));
});
zen_frame.routing.to_hash = (function zen_frame$routing$to_hash(opts){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(opts)),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zen_frame.routing.to_query_params(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(opts)))].join('');
});
zen_frame.routing.make_fragment = (function zen_frame$routing$make_fragment(params){
var opts = zen_frame.routing.parse_fragment(window.location.hash);
return zen_frame.routing.to_hash(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$params,params));
});
var G__6668_6670 = cljs.core.cst$kw$route_DASH_map_SLASH_set_DASH_params;
var G__6669_6671 = ((function (G__6668_6670){
return (function (params){
var opts = zen_frame.routing.parse_fragment(window.location.hash);
var value = zen_frame.routing.to_hash(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$params,params));
return (window.location["hash"] = value);
});})(G__6668_6670))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__6668_6670,G__6669_6671) : re_frame.core.reg_fx.call(null,G__6668_6670,G__6669_6671));
