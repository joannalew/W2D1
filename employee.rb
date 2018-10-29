class Employee
  attr_reader :salary, :boss
  
  def initialize(name, salary, title, boss = nil)
    @name = name
    @salary = salary 
    @title = title
    @boss = boss
    
    if @boss.is_a?(Manager)
      @boss.employees << self
    end
  end 
  
  def bonus(multiplier)
    @salary * multiplier
  end
end

class Manager < Employee
  attr_reader :employees, :boss
  
  def initialize(name, salary, title, boss = nil, employees = [])
    super(name, salary, title, boss)
    @employees = employees
  end
  
  def bonus(multiplier)
    total = 0
    employees.each do |el|    
      if el.is_a?(Manager)
        total += el.bonus(multiplier)
      end
      
      total += el.salary * multiplier
    end
    return total 
  end
end