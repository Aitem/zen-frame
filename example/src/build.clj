(ns build
  (:require [cljs.build.api :as api]))

(def source-dir "src")

(def compiler-config
  {:output-to     "build/js/app.js"
   :source-map    "build/js/app.js.map"
   :output-dir    "build/js/out"
   :optimizations :advanced
   :main 'app.prod
   :externs []})

(defn -main []
  (api/build source-dir compiler-config))
