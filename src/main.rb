#
#
#

require 'sinatra/base'
require 'sinatra/content_for'
require 'sinatra/namespace'
require 'sinatra/reloader'

require 'haml'
require 'json'

require 'datasets'

class MyApp < Sinatra::Base
  
  register Sinatra::Namespace

  set :root, Dir.getwd
  set :layout, true

  def initialize()
    super
  end

  get '/' do
    @title = "AURIN"
    @loader = "/js/test_loader.js"
    haml :'index.html', :layout=>:"layout.html"
  end

  get '/cube' do
    @title = "Space-Time Cube"
    @loader = "/js/cube_loader.js"
    haml :'cube.html', :layout=>:"layout.html"
  end

  post '/dataset' do
    request.body.rewind # in case someone already read it
    data = JSON.parse request.body.read
    name = data['name']
    @datasets[name] = data['data']
  end

  get '/datasets', :provides=>"json" do
    # Add a dataset
    content_type :json
	  Datasets.view(:datasets,:include_docs=>false)['rows'].map { |x| x['value'] }.to_json
  end

  get '/dataset/:name', :provides=>"json" do
    content_type :json
    JSON.generate(@datasets.keys)
  end

  helpers do
    def partial(page, options={})
    haml page.to_sym, options.merge!(:layout => false)
    end
    include Sinatra::ContentFor
  end

  configure :development do
    register Sinatra::Reloader
  end

end
