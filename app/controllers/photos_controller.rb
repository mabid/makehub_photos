class PhotosController < ApplicationController

  def create
    if(params[:file])
      params[:photo][:image] = params[:file]  
    end
    @photo = Photo.create(photo_params)
    respond_to do |format|
      format.js{}
      format.json {render json: {url: @photo.url } }
    end
  end

  def photo_params
    params.require(:photo).permit(:image, :source, :step_id, :url)
  end

end
