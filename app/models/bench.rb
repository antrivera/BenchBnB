# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :text             not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  seating     :integer
#

class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    ne = bounds[:northEast]
    sw = bounds[:southWest]

    benches_in_bounds = self.where("lat < ?", ne[:lat])
      .where("lat > ?", sw[:lat])
      .where("lng < ?", ne[:lng])
      .where("lng > ?", sw[:lng])
  end
end
