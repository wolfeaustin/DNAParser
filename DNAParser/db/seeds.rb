# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Rsidinfo.delete_all
Parsedid.delete_all
Article.delete_all


Rsidinfo.create(name: 'rs7216389', description: 'Childhood Asthma', details: 'rs7216389, a SNP in the ORMDL3 gene on chromosome 17q21, was associated with susceptibility to childhood asthma
  in a study of ~1,000 British patients. The variation appears to be linked to altered levels of the ORMDL3 mRNA, which was shown in a cohort study of ~5,000 British and German patients to be correlated to childhood asthma.
A large study of Scottish asthma patients replicated these results, finding that a single copy of the T allele conferred an odds ratio of 1.50 (CI: 1.24-1.81) and 2 copies conferred an odds ratio of 2.11 (CI: 1.71-2.61), respectively.',
  geno1var:'TT', geno1mag:2, geno1sum:'1.5x increased risk for Childhood Asthma.',
  geno2var:'CT', geno2mag:1.8, geno2sum:'Normal risk for Childhood Asthma.',
  geno3var:'CC', geno3mag:2, geno3sum:'0.69x lower risk of Childhood Asthma.')

  Article.create(rsid: 'rs7216389', description: 'Genetic variants contribute to the risk of childhood asthma', url: 'https://www.ncbi.nlm.nih.gov/pubmed/17611496?dopt=Abstract')
  Article.create(rsid: 'rs7216389', description: 'asthma that is poorly controlled by current medications', url: 'https://www.ncbi.nlm.nih.gov/pubmed/18395550?dopt=Abstract')



Rsidinfo.create(name: 'rs1061170', description: 'Macular Degeneration', details: 'Age related macular degeneration (ARMD) is the leading cause of blindness for people over 50.
This SNP has been associated primarily with age related macular degeneration, and to a lesser extent, with longevity. ',
  geno1var:'CC', geno1mag:3.2, geno1sum:'5.9x risk for AMD; higher mortality among nonagenarians',
  geno2var:'CT', geno2mag:2.5, geno2sum:'2.5x risk for AMD; higher mortality among nonagenarians',
  geno3var:'TT', geno3mag:1.6, geno3sum:'lower risk for AMD, generally longer sight-life than (C) allele carriers')

  Article.create(rsid: 'rs1061170', description: 'Age related macular degeneration', url: 'https://www.snpedia.com/index.php/Age_related_macular_degeneration')
  Article.create(rsid: 'rs1061170', description: 'Polymorphism and risk of age-related macular degeneration', url: 'https://www.ncbi.nlm.nih.gov/pubmed/16849663?dopt=Abstract')


Rsidinfo.create(name: 'rs12608932', description: 'Lou Gehrig’s disease', details: 'Genome-wide association studies (GWAS) have repeatedly detected a significant but modest association between
rs12608932(C) and risk for amyotrophic lateral sclerosis (ALS), with an odds ratio <1.30, but the SNP appears to convey a larger effect on survival in those who actually have ALS. Mean survival
in rs12608932(C;C) ALS patients is 6 to 12 months shorter compared those carrying one or two (A) alleles.',
  geno3var:'AA', geno3mag:0, geno3sum:'lowest ALS risk among rs12608932 genotypes',
  geno2var:'AC', geno2mag:1.5, geno2sum:'Slight (1.5x) increase in ALS risk',
  geno1var:'CC', geno1mag:2, geno1sum:'Small increase in ALS risk; better lithium response in ALS patients')

  Article.create(rsid: 'rs12608932', description: 'ALS clinical trials', url: 'https://www.ncbi.nlm.nih.gov/pubmed/28978660')
  Article.create(rsid: 'rs12608932', description: 'Genome-wide association study', url: 'https://www.ncbi.nlm.nih.gov/pubmed/19734901?dopt=Abstract')


Rsidinfo.create(name: 'rs7192', description: 'Peanut Allergy', details: 'A study of several thousand children and their parents, most with food allergies, concluded that two SNPs,
  rs7192 and rs9275596, are associated with increased susceptibility to developing a peanut allergy in populations of European ancestry. The odds ratio reported for rs7192(T) were 1.7 (p=10e-8).',
  geno3var:'GG', geno3mag:0, geno3sum:'common/normal',
  geno2var:'GT', geno2mag:1.7, geno2sum:'1.7x increased risk for developing a peanut allergy',
  geno1var:'TT', geno1mag:3, geno1sum:'3x higher risk for developing a peanut allergy')

Article.create(rsid: 'rs7192', description: 'Genome-wide association study', url: 'https://www.ncbi.nlm.nih.gov/pubmed/25710614?dopt=Abstract')



Rsidinfo.create(name: 'rs1160312', description: 'Baldness', details: 'Male pattern baldness, sometimes abbreviated MPB and referred to clinically as androgenetic alopecia, is
  thought to affect up to 80% of all males by the age of 80. It is clearly a genetic trait (i.e. it`s inherited), and depends on levels of the hormone androgen and the Androgen Receptor
  (AR) gene on the X chromosome, but the actual cause remains unknown. Males inherit their X chromosome from their mothers, so AR`s contribution to male pattern baldness is inherited maternally.',
  geno1var:'AA', geno1mag:2, geno1sum:'1.6x increased risk of Male Pattern Baldness.',
  geno2var:'AG', geno2mag:2, geno2sum:'1.6x increased risk of Male Pattern Baldness.',
  geno3var:'GG', geno3mag:2, geno3sum:'Reduced risk of Baldness.')

Article.create(rsid: 'rs1160312', description: 'Taiwanese study', url: 'https://www.ncbi.nlm.nih.gov/pubmed/24386074?dopt=Abstract')

Rsidinfo.create(name: 'rs4680', description: 'Warrior vs. Worrier', details: 'rs4680(A) = Worrier. Met, more exploratory, lower COMT enzymatic activity, therefore higher dopamine
levels; lower pain threshold, enhanced vulnerability to stress, yet also more efficient at processing information under most conditions
rs4680(G) = Warrior. Val, less exploratory, higher COMT enzymatic activity, therefore lower dopamine levels; higher pain threshold, better stress resiliency,
albeit with a modest reduction in executive cognition performance under most conditions',
  geno1var:'AA', geno1mag:2.5, geno1sum:'(worrier) advantage in memory and attention tasks',
  geno2var:'AG', geno2mag:2, geno2sum:'Intermediate dopamine levels, other effects',
  geno3var:'GG', geno3mag:2.5, geno3sum:'(warrior) multiple associations, see details')

Article.create(rsid: 'rs4680', description: 'Warrior vs. Worrier Summary', url: 'https://www.ncbi.nlm.nih.gov/pubmed/17008817?dopt=Abstract')
Article.create(rsid: 'rs4680', description: 'Cannabis psychosis study', url: 'https://www.ncbi.nlm.nih.gov/pubmed/15866551?dopt=Abstract')


Rsidinfo.create(name: 'rs17822931', description: 'Earwax', details: 'This SNP determines wet vs dry earwax as well as sweat production, and it is also associated with lipid secretion.
   It is commonly (T;T) for East Asians and (C;C) for Europeans and Africans. A study of deodorant usage in a large (17,000+) population showed that rs17822931(T;T) individuals
   were at least 5-fold less likely to use deodorant, consistent with them being "genotypically nonodorous',
  geno1var:'CC', geno1mag:2, geno1sum:'Wet earwax. Normal body odour. Normal colostrum.',
  geno2var:'CT', geno2mag:2, geno2sum:'Wet earwax. Slightly better body odour.',
  geno3var:'TT', geno3mag:2.5, geno3sum:'Dry earwax. No body odour. Likely Asian ancestry. Reduced colostrum.')

Rsidinfo.create(name: 'rs1426654', description: 'Skin Pigmentation', details: 'It appears as if this SNP is a relatively new one in human evolution; one estimate [PMID 17182896]
  is that the rs1426654(A) allele, in other words, light skin pigmentation, spread through the European population around 6,000 - 12,000 years ago. Prior to that,
  "European ancestors" were most likely relatively brown-skinned.',
  geno1var:'AA', geno1mag:2.7, geno1sum:'probably light-skinned, European ancestry',
  geno2var:'AG', geno2mag:2.5, geno2sum:'mixed European + (African or Asian) ancestry possible',
  geno3var:'GG', geno3mag:2.6, geno3sum:'	probably darker-skinned, Asian or African ancestry')

Rsidinfo.create(name: 'rs9939609', description: 'Fat Gene', details: 'rs9939609 is a SNP in the fat mass and obesity associated FTO gene, aka the "Fat Gene"
  The increases in body mass index associated with rs9939609(A) carriers appears to begin at a young age and are maintained throughout adulthood, according to a study of 5,600+ Utah families.',
  geno1var:'AA', geno1mag:3, geno1sum:'obesity risk and 1.6x risk for T2D',
  geno2var:'AT', geno2mag:2.4, geno2sum:'1.3x risk for T2D; obesity risk',
  geno3var:'TT', geno3mag:1.5, geno3sum:'	lower risk of obesity and Type-2 diabetes')

Rsidinfo.create(name: 'rs1805007', description: 'Red Hair', details: 'rs1805007, known as Arg151Cys or R151C, one of several SNPs in the MC1R gene associated with red hair color
  (redheads), and in redheaded females, linked to being more responsive to the anesthetics pentazocine, nalbuphine, and butorphanol, often used by dentists',
  geno3var:'CC', geno3mag:0, geno3sum:'normal risk',
  geno2var:'CT', geno2mag:2.7, geno2sum:'Carrier of a red hair associated variant; higher risk of melanoma',
  geno1var:'TT', geno1mag:3.2, geno1sum:'13-20x higher likelihood of red hair; increased risk of melanoma')

Rsidinfo.create(name: 'rs1815739', description: 'Muscle Performance', details: 'This SNP, in the ACTN3 gene, encodes a premature stop codon in a muscle protein called alpha-actinin-3.
  The polymorphism alters position 577 of the alpha-actinin-3 protein. In publications the (C;C) genotype is often called RR, whereas the (T;T) genotype is often called XX.',
  geno3var:'CC', geno3mag:'2.2', geno3sum:'Better performing muscles. Likely sprinter.',
  geno2var:'CT', geno2mag:'2.1', geno2sum:'Mix of muscle types. Likely sprinter.',
  geno1var:'TT', geno1mag:'2.2', geno1sum:'	Impaired muscle performance. Likely endurance athlete.')

Rsidinfo.create(name: 'rs7903146', description: 'Type-2 Diabetes', details: 'This SNP in TCF7L2 influences the risk of Type-2 diabetes (T2D). This SNP is also known as IVS3C>T.
rs7903146(C;T) rs7903146(T;T) strongly predicted future type-2 diabetes. Considered in context with rs7903146 rs12255372 rs10885406.
Note: this is one of two SNPs within the TCF7L2 gene that have been reported to be associated with type-2 diabetes, the other being rs4506565.
They have approximately equal power to estimate risk for type-2 diabetes, and the results from one correlate 92% of the time with the other.',
geno3var:'CC', geno3mag:2, geno3sum:'Normal (lower) risk of Type 2 Diabetes and Gestational Diabetes.',
geno2var:'CT', geno2mag:2.1, geno2sum:'1.4x increased risk for diabetes (and perhaps colon cancer).',
geno1var:'TT', geno1mag:3.5, geno1sum:'2x increased risk for Type-2 diabetes')

Rsidinfo.create(name: 'rs1799971', description: 'Alcoholism', details: 'The rs1799971(G) allele in exon 1 of the mu opioid receptor OPRM1 gene causes
the normal amino acid at residue 40, asparagine (Asn), to be replaced by aspartic acid (Asp). In the literature this SNP is also known as A118G, N40D, or Asn40Asp.
Carriers of at least one rs1799971(G) allele appear to have stronger cravings for alcohol than carriers of two rs1799971(A) alleles, and are thus hypothesized to
be more at higher risk for alcoholism.',
geno3var:'AA', geno3mag:0, geno3sum:'normal',
geno2var:'AG', geno2mag:2.5, geno2sum:'stronger cravings for alcohol. naltrexone treatment 2x more successful',
geno1var:'GG', geno1mag:2.6, geno1sum:'strong cravings for alcohol')

Article.create(rsid: 'rs1799971', description: 'Cue-induced craving for alcohol study', url: 'https://www.ncbi.nlm.nih.gov/pubmed/17207095?dopt=Abstract')

Rsidinfo.create(name: 'rs12913832', description: 'Blue Eye Color', details: 'rs12913832 is a SNP near the OCA2 gene that may be functionally linked
  to blue or brown eye color, due to a lowering of promoter activity of the OCA2 gene. Blue eye color is associated with the rs12913832(G;G) genotype',
  geno3var:'AA', geno3mag:0, geno3sum:'brown eye color, 80% of the time',
  geno2var:'AG', geno2mag:0, geno2sum:'brown eye color',
  geno1var:'GG', geno1mag:2.5, geno1sum:'blue eye color, 99% of the time')

Article.create(rsid: 'rs12913832', description: 'Perfectly associated founder mutation', url: 'https://www.ncbi.nlm.nih.gov/pubmed/18172690?dopt=Abstract')


Rsidinfo.create(name: 'rs4988235', description: 'Lactose Intolerance', details:'Also known as "C/T(-13910)", and located in the MCM6 gene but with
influence on the lactase LCT gene, rs4988235 is one of two SNPs that is associated with the primary haplotype associated with hypolactasia,
more commonly known as lactose intolerance in European Caucasian populations. ',
geno1var:'CC', geno1mag:2.5, geno1sum:'likely to be lactose intolerant as an adult',
geno2var:'CT', geno2mag:1.1, geno2sum:'likely to be able to digest milk as an adult',
geno3var:'TT', geno3mag:1.1, geno3sum:'can digest milk')

Article.create(rsid: 'rs4988235', description: 'Hypolactasia study', url: 'https://www.ncbi.nlm.nih.gov/pubmed/11788828?dopt=Abstract')

Rsidinfo.create(name: 'rs1333049', description: 'Coronary Heart Disease', details: 'rs1333049 has been reported in a large study to be associated with heart disease, in particular, coronary artery disease.
The risk allele (oriented to the dbSNP entry) is most likely (C); the odds ratio associated with heterozygotes is 1.47 (CI 1.27-1.70), and for homozygotes, 1.9 (CI 1.61-2.24).',
geno1var:'CC', geno1mag:4, geno1sum:'1.9x increased risk for coronary artery disease',
geno2var:'CG', geno2mag:3, geno2sum:'1.5x increased risk for CAD',
geno3var:'GG', geno3mag:0, geno3sum:'normal')

Rsidinfo.create(name: 'rs601338', description: 'Norovirus', details: 'rs601338 is found on chromosome 19 in the alpha(1,2)-fucosyltransferase FUT2 gene. The wild-type rs601338(G)
encodes the "secretor" (Se) allele, while rs601338(A) encodes the "non-secretor" (se) allele.
A study of 115 Swedish adults concluded that rs601338(A;A) homozygotes have genetic immunity to infection by the Norwalk norovirus, a major (and contagious)
cause of acute gastroenteritis worldwide among adults. [PMID 12692541] [PMID 16306606OA-icon.png] This illness is also known as "cruise ship gastroenteritis."',
geno1var:'AA', geno1mag:2.5, geno1sum:'resistance to Norovirus infection',
geno2var:'AG', geno2mag:0.1, geno2sum:'susceptible to Norovirus infections',
geno3var:'GG', geno3mag:0.1, geno3sum:'susceptible to Norovirus infections')

Rsidinfo.create(name: 'i3003626', description: 'HIV Resistance', details: 'II +/+: Not resistant to HIV infection; shows average time of progression to AIDS after infection.
DI Delta32/+: Not resistant to HIV infection but may have slower progression to AIDS after infection.
DD Delta32/Delta32: Resistant to infection by the most common strain of HIV people usually encounter, though protection is not complete.',
geno1var:'DD', geno1mag:5, geno1sum:'Resistant to infection by the most common strain of HIV',
geno2var:'DI', geno2mag:2, geno2sum:'Not HIV resistant; slower progression to AIDS after infection.',
geno3var:'II', geno3mag:0, geno3sum:'Not HIV resistant; average time of progression to AIDS after infection.')

Rsidinfo.create(name: 'rs1801282', description: 'Metabolism', details: 'rs1801282, also known as Pro12Ala, is a common SNP in the peroxisome proliferator-activated receptor PPARG gene. The more common (C) allele (in dbSNP orientation) encodes the `Pro` amino acid at this SNP position.
rs1801282 has been reported to be associated with metabolic syndrome, but other studies have not been able to replicate any strong or significant effect.',
geno3var: 'CC', geno3mag: 0.1, geno3sum: 'normal fat metabolism; common in clinvar',
geno2var: 'CG', geno2mag: 3, geno2sum:'Unconfirmed higher risk of cardiovascular disease with high fat diet',
geno1var: 'GG', geno1mag: 3, geno1sum:'Unconfirmed higher risk of cardiovascular disease with high fat diet')
