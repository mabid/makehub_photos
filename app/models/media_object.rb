class MediaObject < ActiveRecord::Base
  belongs_to :step

  def url
    if self.is_a? Photo
      return photo.url
    end
  end
end
