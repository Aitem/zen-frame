// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__6123){
var vec__6124 = p__6123;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6124,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6124,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__6127 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6127,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6127,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6127,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__6131 = arguments.length;
switch (G__6131) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__6133_6157 = clojure.data.equality_partition;
var G__6134_6158 = "null";
var G__6135_6159 = ((function (G__6133_6157,G__6134_6158){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6133_6157,G__6134_6158))
;
goog.object.set(G__6133_6157,G__6134_6158,G__6135_6159);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__6136_6160 = clojure.data.equality_partition;
var G__6137_6161 = "string";
var G__6138_6162 = ((function (G__6136_6160,G__6137_6161){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6136_6160,G__6137_6161))
;
goog.object.set(G__6136_6160,G__6137_6161,G__6138_6162);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__6139_6163 = clojure.data.equality_partition;
var G__6140_6164 = "number";
var G__6141_6165 = ((function (G__6139_6163,G__6140_6164){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6139_6163,G__6140_6164))
;
goog.object.set(G__6139_6163,G__6140_6164,G__6141_6165);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__6142_6166 = clojure.data.equality_partition;
var G__6143_6167 = "array";
var G__6144_6168 = ((function (G__6142_6166,G__6143_6167){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__6142_6166,G__6143_6167))
;
goog.object.set(G__6142_6166,G__6143_6167,G__6144_6168);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__6145_6169 = clojure.data.equality_partition;
var G__6146_6170 = "function";
var G__6147_6171 = ((function (G__6145_6169,G__6146_6170){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6145_6169,G__6146_6170))
;
goog.object.set(G__6145_6169,G__6146_6170,G__6147_6171);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__6148_6172 = clojure.data.equality_partition;
var G__6149_6173 = "boolean";
var G__6150_6174 = ((function (G__6148_6172,G__6149_6173){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__6148_6172,G__6149_6173))
;
goog.object.set(G__6148_6172,G__6149_6173,G__6150_6174);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__6151_6175 = clojure.data.equality_partition;
var G__6152_6176 = "_";
var G__6153_6177 = ((function (G__6151_6175,G__6152_6176){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__6151_6175,G__6152_6176))
;
goog.object.set(G__6151_6175,G__6152_6176,G__6153_6177);
goog.object.set(clojure.data.Diff,"null",true);

var G__6178_6202 = clojure.data.diff_similar;
var G__6179_6203 = "null";
var G__6180_6204 = ((function (G__6178_6202,G__6179_6203){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6178_6202,G__6179_6203))
;
goog.object.set(G__6178_6202,G__6179_6203,G__6180_6204);

goog.object.set(clojure.data.Diff,"string",true);

var G__6181_6205 = clojure.data.diff_similar;
var G__6182_6206 = "string";
var G__6183_6207 = ((function (G__6181_6205,G__6182_6206){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6181_6205,G__6182_6206))
;
goog.object.set(G__6181_6205,G__6182_6206,G__6183_6207);

goog.object.set(clojure.data.Diff,"number",true);

var G__6184_6208 = clojure.data.diff_similar;
var G__6185_6209 = "number";
var G__6186_6210 = ((function (G__6184_6208,G__6185_6209){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6184_6208,G__6185_6209))
;
goog.object.set(G__6184_6208,G__6185_6209,G__6186_6210);

goog.object.set(clojure.data.Diff,"array",true);

var G__6187_6211 = clojure.data.diff_similar;
var G__6188_6212 = "array";
var G__6189_6213 = ((function (G__6187_6211,G__6188_6212){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__6187_6211,G__6188_6212))
;
goog.object.set(G__6187_6211,G__6188_6212,G__6189_6213);

goog.object.set(clojure.data.Diff,"function",true);

var G__6190_6214 = clojure.data.diff_similar;
var G__6191_6215 = "function";
var G__6192_6216 = ((function (G__6190_6214,G__6191_6215){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6190_6214,G__6191_6215))
;
goog.object.set(G__6190_6214,G__6191_6215,G__6192_6216);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__6193_6217 = clojure.data.diff_similar;
var G__6194_6218 = "boolean";
var G__6195_6219 = ((function (G__6193_6217,G__6194_6218){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__6193_6217,G__6194_6218))
;
goog.object.set(G__6193_6217,G__6194_6218,G__6195_6219);

goog.object.set(clojure.data.Diff,"_",true);

var G__6196_6220 = clojure.data.diff_similar;
var G__6197_6221 = "_";
var G__6198_6222 = ((function (G__6196_6220,G__6197_6221){
return (function (a,b){
var fexpr__6200 = (function (){var G__6201 = clojure.data.equality_partition(a);
var G__6201__$1 = (((G__6201 instanceof cljs.core.Keyword))?G__6201.fqn:null);
switch (G__6201__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6201__$1)].join('')));

}
})();
return (fexpr__6200.cljs$core$IFn$_invoke$arity$2 ? fexpr__6200.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__6200.call(null,a,b));
});})(G__6196_6220,G__6197_6221))
;
goog.object.set(G__6196_6220,G__6197_6221,G__6198_6222);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
