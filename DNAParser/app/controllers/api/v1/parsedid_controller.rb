class Api::V1::ParsedidController < ApplicationController

  def index
    @parsedids = Parsedid.all
    render json: @parsedids
  end

  def create
    byebug
    #figure out what exactly we are getting back

    # data = params["preview"].blob
    data = params["preview"].download
    byebug
    @upload = params

  end

end
