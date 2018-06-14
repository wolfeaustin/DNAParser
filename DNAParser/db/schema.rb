# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_13_202409) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "articles", force: :cascade do |t|
    t.string "rsid"
    t.string "description"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "parsedids", force: :cascade do |t|
    t.string "rsid"
    t.integer "chromosome"
    t.integer "position"
    t.string "genotype"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rsidinfos", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "details"
    t.string "geno1var"
    t.integer "geno1mag"
    t.string "geno1sum"
    t.string "geno2var"
    t.integer "geno2mag"
    t.string "geno2sum"
    t.string "geno3var"
    t.integer "geno3mag"
    t.string "geno3sum"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
