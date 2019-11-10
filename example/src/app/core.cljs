(ns ^:figwheel-hooks app.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [zen-frame.core :as zf]
            [app.layout :as layout]))


(rf/reg-event-fx
 ::initialize
 (fn [{db :db} _ ]
   {:db (assoc db :come-app-config {:foo "bar"})}))

(defn not-found-page []
  [:div.not-found
   [:h3 "Page not found"]])

(defn mount-root []
  (rf/dispatchn-sync [::initialize])
  (rf/dispatchn-sync [::zf/initialize route])
  (reagent/render
   [zf/current-page not-found-page]
   (.getElementById js/document "app")))

(defn ^:after-load re-render [] (mount-root))
