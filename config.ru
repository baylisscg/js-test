#
#
#

require 'rubygems'
require 'bundler/setup'

use Rack::Static, :urls => ['/css', '/js'], :root => 'public'

require './src/main'
run MyApp