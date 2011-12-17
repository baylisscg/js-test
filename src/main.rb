#
#
#

require 'sinatra/base'
require 'haml'
require 'json'

class MyApp < Sinatra::Base

  set :root, Dir.getwd

  def initialize()
    super
    @datasets = {"Test Datset" => {},
                 "Cubic"=>[],
                 "spiral"=>[]}
  end

  get '/' do
    haml :'index.html'
  end

  get '/cube' do
    haml :'cube.html'
  end

  post '/dataset' do
    request.body.rewind # in case someone already read it
    data = JSON.parse request.body.read
    name = data['name']
    @datasets[name] = data['data']
    ""
  end

  get '/datasets', :provides=>"json" do
    # Add a dataset
    content_type :json
    JSON.generate(@datasets.keys)
  end

  get '/dataset/:name', :provides=>"json" do
    content_type :json
    JSON.generate(@datasets.keys)
  end

  get '/test' do
    @title = "Awsome test page"
    @loader = "/js/test2.js"
    haml :'test.html'
  end

helpers do
  def partial(page, options={})
    haml page.to_sym, options.merge!(:layout => false)
  end
end

end
