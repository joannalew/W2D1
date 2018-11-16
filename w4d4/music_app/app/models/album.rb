class Album < ApplicationRecord
  validates :title, presence: true

  belongs_to :band,
    primary_key: :id,
    foreign_key: :band_id,
    class_name: :Band

  
end
