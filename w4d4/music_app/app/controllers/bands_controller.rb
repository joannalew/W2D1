class BandsController < ApplicationController
  def create
    @band = Band.new(band_params)
    if @band.save
      redirect_to band_url(@band)
    else
      flash.now[:errors] = @band.errors.full_messages
      render json: 'welcome to this error message'
    end
  end

  def new
    render :new
  end

  def index
    render :index
  end

  def show
    @band = Band.find(params[:id])
    render :show
  end

  def update
    @band = Band.find(params[:id])
    @band.update_attributes(band_params)
  end

  def destroy
    @band = Band.find(params[:id])
    @band.destroy
    redirect_to new_band_url
  end

  def band_params
    params.require(:band).permit(:name)
  end
end
