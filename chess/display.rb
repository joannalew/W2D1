require_relative 'board.rb'
require_relative 'cursor.rb'
require 'colorize'

class Display 
  def initialize
    @cursor = Cursor.new([0,0])
  end
end 