class Photo < MediaObject
   has_attached_file :image, 
     :styles => { :medium => "300x300>", :thumb => "100x100>" },
     :default_url => "/images/:style/missing.png"

   def url
     self.source == "local" ? self.image.url(:thumb) : self[:url]
   end
end
