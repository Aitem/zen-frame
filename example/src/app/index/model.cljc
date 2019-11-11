(ns app.index.model
  (:require [re-frame.core :as rf]))

(def index-page  ::index)

(rf/reg-event-fx
 index-page
 (fn [{db :db} [pid phase params]]
   {}))
