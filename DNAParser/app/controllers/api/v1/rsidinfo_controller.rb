class Api::V1::RsidinfoController < ApplicationController

  def index
    @rsidinfo = Rsidinfo.all
    render json: @rsidinfo
  end

end
