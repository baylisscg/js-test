/*
 *
 */

define("datasets",['jquery',"text!/js/template/datasets.dust"],
       function($,dataset_template){
	   dust.loadSource(dust.compile(dataset_template,"datasets"));
       	   $(function() {
		 // Load datasets as JSON
		 $.getJSON("/datasets",
			   // Execute on success
			   function(data){
			       dust.render("datasets",
					   {datasets:data},
					   function(err, out) {
					       console.log(out);
					       console.log(err);
					       $('.sidebar').html(out);
					   });
			   }
			  );
	     });
       });

/**
 * Run the module defining jQuery as being on Google's CDN
 */
require({
        baseUrl: '/js/',
        paths: {
            jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery'
        },
        priority: ['jquery']
    }, ['datasets']);