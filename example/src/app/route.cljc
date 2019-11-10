(ns src.app.route)

(def routes
  {:.                  :app.index.model/index-page
   :html-title         "My app"
   :breadcrumb         "Home"
   :layout             :landing

   "login"             {:. :app.login.model/login-page
                        :layout :login-layout}})
