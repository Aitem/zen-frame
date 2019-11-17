(ns zen-frame.core
  (:require [re-frame.core :as rf]
            [zen-frame.routing :as routing]
            [zen-frame.pages :as pages]))

(defn plus-ab [a b]
  (+ a b))
;; ---------------------------
;; Zen Frame space
;; ---------------------------

(rf/reg-event-fx
 ::initialize
 (fn [{db :db} [_ routes]]
   {:db (assoc db :route-map/routes routes)
    :route-map/start {}}))

(defn layout [page]
  [:div.container
   [:h1 "Default layout"]
   page])

(defn current-page [& [not-found-page]]
  (let [route  (rf/subscribe [:route-map/current-route])]
    (fn []
      (let [page (get @pages/pages (:match @route))
            params (:params @route)]
        [layout
         (if page
           [page params]
           [not-found-page])]))))
