#
#
#

require 'rubygems'
require 'bundler/setup'
require 'rake'

$:.unshift File.join(Dir.getwd,"src")

task :setup do
  require 'datasets'
  puts "OK"
  puts Datasets.respond_to?(:datasets)
  puts Datasets.create(:name=>"Test",:description=>"A Test dataset")
  puts Datasets.create(:name=>"Test 2",:description=>"Another Test dataset")
  Datasets.datasets.all.each {|x| puts x }
end

require 'rspec/core/rake_task'

RSpec::Core::RakeTask.new do |task|
  task.rspec_opts = ["-c", "-f progress", "-r ./spec/spec_helper.rb"]
  task.pattern    = 'spec/**/*_spec.rb'
end
