#
#
#

require 'couchrest_model'

class Datasets < CouchRest::Model::Base
  
  use_database "datasets"

  property :name, String
  property :description, String
  
  view_by :name 

  design do
    view(:datasets, :include_docs=>false, :map => "function(doc){\n  emit(doc._id,\n    { name:doc.name, description:doc.description }\n  );\n}")
  end
	
	def to_s
		sprintf("name: %s\nDescription: %s",self.name,self.description)
	end

end

