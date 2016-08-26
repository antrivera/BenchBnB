# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

bench1 = Bench.create(description: "Great location.", lat: 37.783154, lng: -122.460518)
bench2 = Bench.create(description: "The best for people watching.", lat: 37.791705, lng: -122.398528)
bench3 = Bench.create(description: "Perfect for naps.", lat: 37.764322, lng: -122.414994)
bench4 = Bench.create(description: "Very uncomfortable.", lat: 37.805077, lng: -122.417873)
