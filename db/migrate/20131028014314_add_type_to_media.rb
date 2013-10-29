class AddTypeToMedia < ActiveRecord::Migration
  def change
    add_column :media_objects, :type, :string
  end
end
