class Api::V1::ParsedidController < ApplicationController

  def index
    @parsedids = Parsedid.all
    render json: @parsedids
  end

end
