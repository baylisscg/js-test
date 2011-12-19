#
#
#

require 'rubygems'
require 'bundler/setup'

$:.unshift File.join(Dir.getwd,"src")

use Rack::Static, :urls => ['/css', '/js'], :root => 'public'

require './src/main'
run MyApp
