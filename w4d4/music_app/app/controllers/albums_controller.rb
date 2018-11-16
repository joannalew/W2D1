class AlbumsController < ApplicationController
  def new
    render :new
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def create
    @album = Album.new(album_params)
    debugger
    if @album.save
      redirect_to album_url(@album)
		else
			flash.now[:errors] = @album.errors.full_messages
			render :new
		end
  end

  def album_params
    params.require(:album).permit(:title, :year, :band_id, :studio)
  end

end
