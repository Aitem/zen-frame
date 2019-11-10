(ns zen-frame.core-test
  (:require [zen-frame.core :as sut]
            [clojure.test :refer :all]))

(deftest init-test
  (is (= 4 (sut/plus-ab 2 2))))
