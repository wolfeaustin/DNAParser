Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :rsidinfo, only: [:index, :show]
      resources :parsedid, only: [:index, :show, :create]
    end
  end
end
