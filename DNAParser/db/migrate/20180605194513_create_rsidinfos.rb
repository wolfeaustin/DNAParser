class CreateRsidinfos < ActiveRecord::Migration[5.2]
  def change
    create_table :rsidinfos do |t|
      t.string :name
      t.string :description
      t.string :details

      t.timestamps
    end
  end
end
