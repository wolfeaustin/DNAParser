$relevantIDs = ['rs1800497','rs35471880','rs116452738','rs8191620','rs73061170','rs28357678', 'i3001925']
# $relevantIDsHash = {}



def parse
  t1 = Time.now
  puts "processing..."
  puts "RSID  |  Chromosome  |  Position:  |  Genotype"
  File.open('data.txt').each do |line|
    if $relevantIDs.any?{|e| line.start_with?(e)}
      data = line.split(' ')
      puts "#{data[0]}\t#{data[1]}\t#{data[2]}\t\t#{data[3]}"
    end
  end
  t2 = Time.now
  puts t2 - t1 # in seconds
end

def parse_actual
  t1 = Time.now
  puts "\nprocessing..."
  puts "\nRSID  |  Chromosome  |  Position:  |  Genotype\n\n"
  #As we go through the text file, we need to start handling each RSID and Genotype
  #then, send a JSON file to the Front-End with information for each RSID
  File.open('austin_dna_sample.txt').each do |line|
    if $relevantIDs.any?{|e| line.start_with?(e)}
      data = line.split(' ')
      puts "#{data[0]}\t#{data[1]}\t#{data[2]}\t\t#{data[3]}"
    end
  end
  t2 = Time.now
  puts "\nTime to Process: #{t2 - t1}" # in seconds
end

parse_actual
