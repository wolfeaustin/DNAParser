class CreateRsidinfos < ActiveRecord::Migration[5.2]
  def change
    create_table :rsidinfos do |t|
      t.string :name
      t.string :description
      t.string :details
      t.string :geno1var
      t.integer :geno1mag
      t.string :geno1sum
      t.string :geno2var
      t.integer :geno2mag
      t.string :geno2sum
      t.string :geno3var
      t.integer :geno3mag
      t.string :geno3sum

      t.timestamps
    end
  end
end
