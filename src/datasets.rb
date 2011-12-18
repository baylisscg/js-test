#
#
#

require 'couchrest_model'

class Datasets < CouchRest::Model::Base
  
#  use_database "Datasets"

  property :name, String
  property :description, String
  
  view_by :name 

  design do
    view :datasets,:map => "function(doc){emit(doc._id,{name:doc.name,description:doc.description});}"
  end
  
  
end

