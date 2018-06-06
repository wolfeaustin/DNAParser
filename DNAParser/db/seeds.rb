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


Rsidinfo.create(name: 'rs1805007', description: 'Red Hair', details: 'rs1805007, known as Arg151Cys or R151C, one of several SNPs in the MC1R gene associated with red hair color
  (redheads), and in redheaded females, linked to being more responsive to the anesthetics pentazocine, nalbuphine, and butorphanol, often used by dentists')

Rsidinfo.create(name: 'rs1815739', description: 'Muscle Performance', details: 'This SNP, in the ACTN3 gene, encodes a premature stop codon in a muscle protein called alpha-actinin-3.
  The polymorphism alters position 577 of the alpha-actinin-3 protein. In publications the (C;C) genotype is often called RR, whereas the (T;T) genotype is often called XX.')

Rsidinfo.create(name: 'rs7903146', description: 'Type-2 Diabetes', details: 'This SNP in TCF7L2 influences the risk of Type-2 diabetes (T2D). This SNP is also known as IVS3C>T.
rs7903146(C;T) rs7903146(T;T) strongly predicted future type-2 diabetes. Considered in context with rs7903146 rs12255372 rs10885406.
Note: this is one of two SNPs within the TCF7L2 gene that have been reported to be associated with type-2 diabetes, the other being rs4506565.
They have approximately equal power to estimate risk for type-2 diabetes, and the results from one correlate 92% of the time with the other.')

Rsidinfo.create(name: 'rs1799971', description: 'Alcoholism', details: 'The rs1799971(G) allele in exon 1 of the mu opioid receptor OPRM1 gene causes
the normal amino acid at residue 40, asparagine (Asn), to be replaced by aspartic acid (Asp). In the literature this SNP is also known as A118G, N40D, or Asn40Asp.
Carriers of at least one rs1799971(G) allele appear to have stronger cravings for alcohol than carriers of two rs1799971(A) alleles, and are thus hypothesized to
be more at higher risk for alcoholism.')

Rsidinfo.create(name: 'rs12913832', description: 'Blue Eye Color', details: 'rs12913832 is a SNP near the OCA2 gene that may be functionally linked
  to blue or brown eye color, due to a lowering of promoter activity of the OCA2 gene. Blue eye color is associated with the rs12913832(G;G) genotype')

Rsidinfo.create(name: 'rs4988235', description: 'Lactose Intolerance', details:'Also known as "C/T(-13910)", and located in the MCM6 gene but with
influence on the lactase LCT gene, rs4988235 is one of two SNPs that is associated with the primary haplotype associated with hypolactasia,
more commonly known as lactose intolerance in European Caucasian populations. ')

Rsidinfo.create(name: 'rs1333049', description: 'Coronary Heart Disease', details: 'rs1333049 has been reported in a large study to be associated with heart disease, in particular, coronary artery disease.
The risk allele (oriented to the dbSNP entry) is most likely (C); the odds ratio associated with heterozygotes is 1.47 (CI 1.27-1.70), and for homozygotes, 1.9 (CI 1.61-2.24).')

Rsidinfo.create(name: 'rs601338', description: 'Norovirus', details: 'rs601338 is found on chromosome 19 in the alpha(1,2)-fucosyltransferase FUT2 gene. The wild-type rs601338(G)
encodes the "secretor" (Se) allele, while rs601338(A) encodes the "non-secretor" (se) allele.
A study of 115 Swedish adults concluded that rs601338(A;A) homozygotes have genetic immunity to infection by the Norwalk norovirus, a major (and contagious)
cause of acute gastroenteritis worldwide among adults. [PMID 12692541] [PMID 16306606OA-icon.png] This illness is also known as "cruise ship gastroenteritis."')

Rsidinfo.create(name: 'i3003626', description: 'HIV Resistance', details: 'II +/+: Not resistant to HIV infection; shows average time of progression to AIDS after infection.
DI Delta32/+: Not resistant to HIV infection but may have slower progression to AIDS after infection.
DD Delta32/Delta32: Resistant to infection by the most common strain of HIV people usually encounter, though protection is not complete.')
Rsidinfo.create(name: 'rs1801282', description: 'Metabolism', details: 'rs1801282, also known as Pro12Ala, is a common SNP in the peroxisome proliferator-activated receptor PPARG gene. The more common (C) allele (in dbSNP orientation) encodes the `Pro` amino acid at this SNP position.
rs1801282 has been reported to be associated with metabolic syndrome, but other studies have not been able to replicate any strong or significant effect.')
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
