$relevantIDs = ['rs1815739','rs53576','rs53576','rs333','rs1800497','rs1805007', 'rs1799971']
$relevantIDsHash = {rs1815739: 'muscle perfomance', rs53576: 'lack of empathy', rs6152: 'increase baldness',
  rs333: 'HIV resistance', rs1800497: 'lower dopamine', rs1805007: 'red hair', rs1799971: 'alcohol cravings'}

idealReturnHash = {
  id: 'rs1800497',
  genotype: 'GG',
  info: {
    description: 'muscle perfomance',
    details: '...extensive summary of gene',
    genotypeInfo: [
      { type: 'CC',
        magnitude: 2.2,
        summary: 'summary of what this means'},
      { type: 'CT',
        magnitude: 2.1,
        summary: 'summary of what this means'}
    ]
  }
}

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
      # puts "#{data[0]} #{$relevantIDsHash[:data[0]]}"
      puts "#{data[0]}\t#{data[1]}\t#{data[2]}\t\t#{data[3]}"
    end
  end
  t2 = Time.now
  puts "\nTime to Process: #{t2 - t1}" # in seconds
end

parse_actual
