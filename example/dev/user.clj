(ns user
  (:require [figwheel.main.api :as repl]))

(def figwheel-options
  {:id "app"
   :options {:main 'app.dev
             :output-to "resources/public/js/app.js"
             :output-dir "resources/public/js/out"}
   :config {:watch-dirs ["src"]
            :mode :serve
            :ring-server-options {:port 3450}}})


(defn start []
  (repl/start figwheel-options))

(defn stop []
  (repl/stop "app"))

(defonce state
  (future (start)))

(comment
  (start)
  (stop)

  (repl/cljs-repl "app"))
