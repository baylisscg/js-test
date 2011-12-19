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
	
	Datasets.all.each do |x| 
		puts x
	end

#	Datasets.create(:name=>"Test 2",:description=>"Another Test dataset")
	puts Datasets.datasets.include_docs
	puts Datasets.view(:datasets,:include_docs=>false).to_json

end

require 'rspec/core/rake_task'

RSpec::Core::RakeTask.new do |task|
  task.rspec_opts = ["-c", "-f progress", "-r ./spec/spec_helper.rb"]
  task.pattern    = 'spec/**/*_spec.rb'
end
