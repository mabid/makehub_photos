class AddAttachmentImageToPhotos < ActiveRecord::Migration
  def self.up
    change_table :media_objects do |t|
      t.attachment :image
    end
  end

  def self.down
    drop_attached_file :media_objects, :image
  end
end
