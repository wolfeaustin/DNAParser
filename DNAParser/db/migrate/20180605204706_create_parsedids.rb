class CreateParsedids < ActiveRecord::Migration[5.2]
  def change
    create_table :parsedids do |t|
      t.string :rsid
      t.integer :chromosome
      t.integer :position
      t.string :genotype

      t.timestamps
    end
  end
end
