class Api::V1::ArticleController < ApplicationController
  def index
    @articles = Article.all
    render json: @articles
  end

  def create
    @article = Article.create(rsid: params['rsid'], description: params['description'], url: params['url'])
  end

end
