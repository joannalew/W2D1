
class Piece 
  attr_reader :code
  def initialize(name = 'pawn', code = "\u2659")
    @name = name
    @code = code
    
  end
  
  def display_piece
    puts @code.encode('utf-8')
  end 
  
end

