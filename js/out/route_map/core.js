// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('route_map.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
route_map.core.pathify = (function route_map$core$pathify(path){
return cljs.core.filterv((function (p1__6499_SHARP_){
return (!(clojure.string.blank_QMARK_(p1__6499_SHARP_)));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
});
route_map.core.is_glob_QMARK_ = (function route_map$core$is_glob_QMARK_(k){
return clojure.string.ends_with_QMARK_(cljs.core.name(k),"*");
});
route_map.core.get_param = (function route_map$core$get_param(node){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__6500){
var vec__6501 = p__6500;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6501,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6501,(1),null);
return cljs.core.vector_QMARK_(k);
}),node));
});
route_map.core.fn_param_QMARK_ = (function route_map$core$fn_param_QMARK_(k){
var and__4120__auto__ = cljs.core.vector_QMARK_(k);
if(and__4120__auto__){
var f = cljs.core.first(k);
return (((!((f instanceof cljs.core.Keyword)))) && (cljs.core.fn_QMARK_(f)));
} else {
return and__4120__auto__;
}
});
route_map.core.match_fn_params = (function route_map$core$match_fn_params(node,x){
if(cljs.core.map_QMARK_(node)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6504){
var vec__6505 = p__6504;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6505,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6505,(1),null);
var temp__5718__auto__ = (function (){var fexpr__6508 = cljs.core.first(k);
return (fexpr__6508.cljs$core$IFn$_invoke$arity$1 ? fexpr__6508.cljs$core$IFn$_invoke$arity$1(x) : fexpr__6508.call(null,x));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var params = temp__5718__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,v], null));
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__6509){
var vec__6510 = p__6509;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6510,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6510,(1),null);
return route_map.core.fn_param_QMARK_(k);
}),node)));
} else {
return null;
}
});
route_map.core._match = (function route_map$core$_match(acc,node,p__6513,params,parents,wgt){
var vec__6514 = p__6513;
var seq__6515 = cljs.core.seq(vec__6514);
var first__6516 = cljs.core.first(seq__6515);
var seq__6515__$1 = cljs.core.next(seq__6515);
var x = first__6516;
var rpth = seq__6515__$1;
var pth = vec__6514;
if(cljs.core.empty_QMARK_(pth)){
if(cljs.core.truth_(node)){
if(((cljs.core.map_QMARK_(node)) && (cljs.core.contains_QMARK_(node,cljs.core.cst$kw$_DOT_)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$parents,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$params,params)),cljs.core.cst$kw$match,cljs.core.cst$kw$_DOT_.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$w,wgt,cljs.core.cst$kw$params,params], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$parents,parents,cljs.core.cst$kw$match,node,cljs.core.cst$kw$w,wgt,cljs.core.cst$kw$params,params], null));
}
} else {
return acc;
}
} else {
var node__$1 = ((cljs.core.var_QMARK_(node))?cljs.core.deref(node):node);
var pnode = (function (){var and__4120__auto__ = cljs.core.map_QMARK_(node__$1);
if(and__4120__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,cljs.core.cst$kw$params,params);
} else {
return and__4120__auto__;
}
})();
var acc__$1 = (function (){var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node__$1,x);
if(cljs.core.truth_(temp__5718__auto__)){
var branch = temp__5718__auto__;
var G__6517 = acc;
var G__6518 = branch;
var G__6519 = rpth;
var G__6520 = params;
var G__6521 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6522 = (wgt + (10));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6517,G__6518,G__6519,G__6520,G__6521,G__6522) : route_map.core._match.call(null,G__6517,G__6518,G__6519,G__6520,G__6521,G__6522));
} else {
return acc;
}
})();
var acc__$2 = (function (){var temp__5718__auto__ = route_map.core.match_fn_params(node__$1,x);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__6523 = temp__5718__auto__;
var fparams = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6523,(0),null);
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6523,(1),null);
var G__6526 = acc__$1;
var G__6527 = branch;
var G__6528 = rpth;
var G__6529 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,fparams], 0));
var G__6530 = parents;
var G__6531 = (wgt + (10));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6526,G__6527,G__6528,G__6529,G__6530,G__6531) : route_map.core._match.call(null,G__6526,G__6527,G__6528,G__6529,G__6530,G__6531));
} else {
return acc__$1;
}
})();
var acc__$3 = (function (){var temp__5718__auto__ = (function (){var and__4120__auto__ = (!((x instanceof cljs.core.Keyword)));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.map_QMARK_(node__$1);
if(and__4120__auto____$1){
return route_map.core.get_param(node__$1);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var vec__6532 = temp__5718__auto__;
var vec__6535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6532,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6535,(0),null);
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6532,(1),null);
if(route_map.core.is_glob_QMARK_(k)){
if((cljs.core.last(pth) instanceof cljs.core.Keyword)){
var G__6538 = acc__$2;
var G__6539 = branch;
var G__6540 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(pth)], null);
var G__6541 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(pth)));
var G__6542 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6543 = (wgt + (1));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6538,G__6539,G__6540,G__6541,G__6542,G__6543) : route_map.core._match.call(null,G__6538,G__6539,G__6540,G__6541,G__6542,G__6543));
} else {
var G__6544 = acc__$2;
var G__6545 = branch;
var G__6546 = cljs.core.PersistentVector.EMPTY;
var G__6547 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,pth));
var G__6548 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6549 = (wgt + (1));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6544,G__6545,G__6546,G__6547,G__6548,G__6549) : route_map.core._match.call(null,G__6544,G__6545,G__6546,G__6547,G__6548,G__6549));
}
} else {
var G__6550 = acc__$2;
var G__6551 = branch;
var G__6552 = rpth;
var G__6553 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,x);
var G__6554 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__6555 = (wgt + (2));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__6550,G__6551,G__6552,G__6553,G__6554,G__6555) : route_map.core._match.call(null,G__6550,G__6551,G__6552,G__6553,G__6554,G__6555));
}
} else {
return acc__$2;
}
})();
return acc__$3;
}
});
/**
 * path [:get "/your/path"] or just "/your/path"
 * return multiple matches
 */
route_map.core.match = (function route_map$core$match(path,routes){
var path__$1 = ((cljs.core.vector_QMARK_(path))?(function (){var vec__6556 = path;
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6556,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6556,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(route_map.core.pathify(url),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(meth))));
})():route_map.core.pathify(path));
var result = route_map.core._match(cljs.core.PersistentVector.EMPTY,routes,path__$1,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,(0));
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$w,result)));
});
route_map.core.wrap_route_map = (function route_map$core$wrap_route_map(h,routes){

return (function (p__6559){
var map__6560 = p__6559;
var map__6560__$1 = (((((!((map__6560 == null))))?(((((map__6560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6560):map__6560);
var req = map__6560__$1;
var meth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6560__$1,cljs.core.cst$kw$request_DASH_method);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6560__$1,cljs.core.cst$kw$uri);
var temp__5718__auto__ = route_map.core.match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth,uri], null),routes);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__6562 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$route_DASH_match,match);
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__6562) : h.call(null,G__6562));
} else {
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(req) : h.call(null,req));
}
});
});
route_map.core.first_not_nil = (function route_map$core$first_not_nil(coll){
var not_nils = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6563_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,p1__6563_SHARP_);
}),coll);
var all_nils = (not_nils == null);
if(all_nils){
return null;
} else {
return cljs.core.first(not_nils);
}
});
route_map.core.get_static_paths = (function route_map$core$get_static_paths(routes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6564_SHARP_){
return cljs.core.first(p1__6564_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6565_SHARP_){
var vec__6566 = p1__6565_SHARP_;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6566,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6566,(1),null);
return typeof k === 'string';
}),routes));
});
route_map.core.get_ways = (function route_map$core$get_ways(routes){
var params = cljs.core.first(route_map.core.get_param(routes));
var static_paths = route_map.core.get_static_paths(routes);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (params,static_paths){
return (function (p1__6569_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,p1__6569_SHARP_);
});})(params,static_paths))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(params,static_paths));
});
route_map.core.find_url = (function route_map$core$find_url(routes,name,auto_name,params,path){
var path_found = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$kw$$name.cljs$core$IFn$_invoke$arity$1(routes))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(auto_name))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(params))))));
if(path_found){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",path)){
return "/";
} else {
return path;
}
} else {
return route_map.core.first_not_nil(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (path_found){
return (function (p1__6570_SHARP_){
var vec__6571 = ((typeof p1__6570_SHARP_ === 'string')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6570_SHARP_,params,cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,p1__6570_SHARP_),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",auto_name))?p1__6570_SHARP_:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(auto_name),"-",p1__6570_SHARP_].join(''))], null):(((p1__6570_SHARP_ instanceof cljs.core.Keyword))?((cljs.core.map_QMARK_(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,p1__6570_SHARP_),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params,p1__6570_SHARP_),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,p1__6570_SHARP_))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6570_SHARP_], null)):null),auto_name], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(params),cljs.core.rest(params),cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6570_SHARP_], null)),auto_name], null)):null));
var next_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6571,(0),null);
var next_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6571,(1),null);
var next_routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6571,(2),null);
var next_auto_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6571,(3),null);
var G__6574 = ((cljs.core.var_QMARK_(next_routes))?cljs.core.deref(next_routes):next_routes);
var G__6575 = name;
var G__6576 = next_auto_name;
var G__6577 = next_params;
var G__6578 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_path)].join('');
return (route_map.core.find_url.cljs$core$IFn$_invoke$arity$5 ? route_map.core.find_url.cljs$core$IFn$_invoke$arity$5(G__6574,G__6575,G__6576,G__6577,G__6578) : route_map.core.find_url.call(null,G__6574,G__6575,G__6576,G__6577,G__6578));
});})(path_found))
,route_map.core.get_ways(routes)));
}
});
route_map.core.url = (function route_map$core$url(var_args){
var G__6580 = arguments.length;
switch (G__6580) {
case 2:
return route_map.core.url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return route_map.core.url.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

route_map.core.url.cljs$core$IFn$_invoke$arity$2 = (function (routes,name){
return route_map.core.url.cljs$core$IFn$_invoke$arity$3(routes,name,cljs.core.PersistentVector.EMPTY);
});

route_map.core.url.cljs$core$IFn$_invoke$arity$3 = (function (routes,name,params){
return route_map.core.find_url(routes,name,"",params,"");
});

route_map.core.url.cljs$lang$maxFixedArity = 3;

