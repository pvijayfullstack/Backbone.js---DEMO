BackboneDemo::Application.routes.draw do

  resources :comments

  root :to => "comments#index"
end
