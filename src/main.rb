#
#
#

require 'sinatra/base'
require 'haml'

class MyApp < Sinatra::Base

  set :root, "/Users/baylissc/Projects/test/code/"

  get '/' do
    haml :'index.html'
  end

end
