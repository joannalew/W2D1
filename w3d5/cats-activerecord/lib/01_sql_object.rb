require_relative 'db_connection'
require 'active_support/inflector'
require 'byebug'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @columns if @columns

    data = DBConnection.execute2("SELECT * FROM #{table_name} LIMIT 0").first
    data.map!(&:to_sym)
    @columns = data
  end

  def self.finalize!
    self.columns.each do |col|
      define_method(col) do
        self.attributes[col]
      end

      define_method("#{col}=") do |value|
        self.attributes[col] = value
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name || self.name.underscore.pluralize
  end

  def self.all
    data = DBConnection.execute("SELECT * FROM #{table_name}")
    return self.parse_all(data)
  end

  def self.parse_all(results)
    res = []
    results.each do |hsh|
      res << self.new(hsh)
    end
    res
  end

  def self.find(id)
    data = DBConnection.execute("SELECT * FROM #{table_name} WHERE id = ?", id)
    return nil if data.empty?
    return self.new(data.first)
  end

  def initialize(params = {})
    params.each do |k, v|
      raise "unknown attribute '#{k.to_sym}'" if !self.class.columns.include?(k.to_sym)
      self.send("#{k}=", v)
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    @attributes.values
  end

  def insert
    # drop 1 to avoid inserting id (the first column)
    columns = self.class.columns.drop(1)
    col_names = columns.map(&:to_s).join(", ")
    question_marks = (["?"] * columns.count).join(", ")

    DBConnection.execute(<<-SQL, *attribute_values.drop(1))
      INSERT INTO
        #{self.class.table_name} (#{col_names})
      VALUES
        (#{question_marks})
    SQL

    self.id = DBConnection.last_insert_row_id
  end

  def update
    query = ''
    attributes.each do |k, v|
      query = query + k.to_s + ' = ' + v.to_s
    end
    data = DBConnection.execute("UPDATE #{self.class.table_name} SET #{query}")
  end

  def save
    # ...
  end
end
