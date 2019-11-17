(ns ^:figwheel-hooks app.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [zen-frame.core :as zf]
            [app.index.view]
            [app.route :as route]))

(defn mount-root []
  (rf/dispatch-sync [::zf/initialize route/route])
  (reagent/render
   [zf/current-page]
   (.getElementById js/document "app")))

(defn ^:after-load re-render [] (mount-root))
