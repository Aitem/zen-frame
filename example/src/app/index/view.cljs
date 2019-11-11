(ns app.index.view
  (:require [zen-frame.pages :as pages]
            [app.index.model :as model]))

(pages/reg-page
 model/index-page
 (fn [params]
   [:div#user-modified.container
    [:h1 "Index page"]]))
