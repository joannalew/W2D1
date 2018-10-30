require_relative 'piece.rb'

class Board
  
  def initialize(grid = Array.new(8) {Array.new(8)})
    @grid = grid 
    @grid.each_with_index do |row,idx|
      row.each_with_index do |cell, idx2|
        if idx ==0 || idx ==1 || idx== 6 || idx == 7
          @grid[idx][idx2] = Piece.new.code 
        end 
      end 
    end 
  end 
  
  def [](pos)
    x,y = pos
    @grid[x][y]
  end 
  
  def []=(pos,value)
    x,y = pos
    @grid[x][y] = value
  end 
  
  def move_piece(start_pos, end_pos)
    is_valid?(start_pos, end_pos)
    self[start_pos], self[end_pos] = self[end_pos], self[start_pos]  
  end 
  
  def is_valid?(start_pos, end_pos)
    if self[start_pos].nil?
      raise "there is no piece there, buddy!"
    elsif end_pos[0] >= 8 ||end_pos[0] < 0 || end_pos[1] >= 8 ||end_pos[1] < 0
       raise "Out of bound, buddy!"
    end
  end 
    
end



