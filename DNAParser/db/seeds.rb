# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Rsidinfo.delete_all
Parsedid.delete_all
$relevantIDs = ['rs1815739','rs53576','rs53576','rs333','rs1800497','rs1805007', 'rs1799971']


Rsidinfo.create(name: 'rs1800497', description: 'red hair')
Rsidinfo.create(name: 'rs1815739', description: 'something else')
ids = Rsidinfo.all.map{|r| r.name}

File.open('austin_dna_sample.txt').each do |line|
  if ids.any?{|e| line.start_with?(e)}
    data = line.split(' ')
    # puts "#{data[0]} #{$relevantIDsHash[:data[0]]}"
    # puts "#{data[0]}\t#{data[1]}\t#{data[2]}\t\t#{data[3]}"
    Parsedid.create(rsid: data[0], chromosome: data[1].to_i, position: data[2].to_i, genotype: data[3])
  end
end
# File.open('austin_dna_sample.txt').each do |line|
#   if $relevantIDs.any?{|e| line.start_with?(e)}
#     data = line.split(' ')
#     # puts "#{data[0]} #{$relevantIDsHash[:data[0]]}"
#     # puts "#{data[0]}\t#{data[1]}\t#{data[2]}\t\t#{data[3]}"
#     Parsedid.create(rsid: data[0], chromosome: data[1].to_i, position: data[2].to_i, genotype: data[3])
#   end
# end
