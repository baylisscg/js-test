/*
 *
 */

define("datasets",['jquery','text!template/datasets.dust'],
       function($,template){
       	   $(function() {

	             dust.loadSource(dust.compile( template, "datasets"));
               
		           // Load datasets as JSON
		           $.getJSON("/datasets",
			                   // Execute on success
			                   function(data){
	                           // Render the template
	                           dust.render("datasets",
		                                     {'datasets':data}, // Pass a value			  
		                                     function(err, out) {
			                                       // Append the error and outputs to the body using jQuery
			                                       $(function() {
				                                          $('#datasets').append(err);
				                                          $('#datasets').append(out);
			                                       });
		                                     });
                             
                         });
           
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