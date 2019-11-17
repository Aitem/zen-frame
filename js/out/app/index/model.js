// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.index.model');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
app.index.model.index_page = cljs.core.cst$kw$app$index$model_SLASH_index;
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(app.index.model.index_page,(function (p__6694,p__6695){
var map__6696 = p__6694;
var map__6696__$1 = (((((!((map__6696 == null))))?(((((map__6696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6696):map__6696);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6696__$1,cljs.core.cst$kw$db);
var vec__6697 = p__6695;
var pid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6697,(0),null);
var phase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6697,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6697,(2),null);
return cljs.core.PersistentArrayMap.EMPTY;
}));
