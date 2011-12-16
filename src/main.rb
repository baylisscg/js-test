#
#
#

require 'sinatra/base'
require 'haml'
require 'json'

class MyApp < Sinatra::Base

  set :root, Dir.getwd
	set :haml, { :format => :html5 }


	helpers do
		def content_for(key, &block)
			@content ||= {}
			puts key
			puts block
			@content[key] = capture_haml(&block)
		end
		def content(key)
			@content && @content[key]
		end
	end

  def initialize()
    super
	  config = File.open(File.join(Dir.getwd,"test.json")) do |f| JSON.load(f) end
	  @datasets = {}
	  config['datasets'].each do |x| @datasets[x['name']]=x end
  end

  get '/' do
    haml( :'index.html', :layout=>"layout.html".to_sym )
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
	  result = []
	  @datasets.each { |key,dataset| result << {:name=>dataset['name'],:description=>dataset['description']} }
    JSON.generate(result)
  end



  get '/dataset/:name', :provides=>"json" do
    content_type :json
    JSON.generate(@datasets.keys)
  end

end
