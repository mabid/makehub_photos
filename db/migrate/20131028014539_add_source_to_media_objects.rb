class AddSourceToMediaObjects < ActiveRecord::Migration
  def change
    add_column :media_objects, :source, :string
  end
end
