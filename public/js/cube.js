/*
 *
 */

define("datasets",['jquery'],
       function($){
       	   $(function() {
		 // Load datasets as JSON
		 $.getJSON("/datasets",
			   // Execute on success
			   function(data){
			       $('#datasets').append("Got "+data);
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