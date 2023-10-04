Rails.application.routes.draw do
 get '/', to: 'treasurehunt#index'

 root to: 'treasurehunt#index'
end
