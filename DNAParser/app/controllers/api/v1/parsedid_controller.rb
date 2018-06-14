class Api::V1::ParsedidController < ApplicationController

  def index
    @parsedids = Parsedid.all
    render json: @parsedids
  end

  def create
    #make sure there are no other parsedId's in the DB
    Parsedid.delete_all
    ids = Rsidinfo.all.map{|r| r.name}
    params['_json'].split("\r\n").each do |line|
      if ids.any?{|e| line.include?("#{e}\t")}
        data = line.split(' ')
        Parsedid.create(rsid: data[0], chromosome: data[1].to_i, position: data[2].to_i, genotype: data[3..4].join)
      end
    end
    render json: {:finished => true}
  end

end
