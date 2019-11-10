(ns zen-frame.core
  (:require [re-frame.core :as rf]))

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

(defn current-page [& [not-found-page]]
  #_(let [route  (rf/subscribe [:route-map/current-route])]
    (fn []
      (let [page (get @app.pages/pages (:match @route))
            params (:params @route)]
        [:h1 ;; layout/layout - layout should become from routes
         (if page
           [page params]
           [not-found-page])]))))
