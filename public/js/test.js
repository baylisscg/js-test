/**
 * Define a module that relies on JQuery
 */
define("main",['jquery'],
	    function($) {
		$(function() {
		     $('.content').append('<p>Alpha is Go!</p>');
		 });
	    });

/*
 *  We need dust-full here as we're compiling tempates on the fly.
 */
define("template",["jquery","dust-full-0.3.0","text!template/test.js"],
       function($,t,template){
	   // t has no value as dust loads as a global

	   // Compile and cache the template
	   dust.loadSource(dust.compile( template, "test"));

	   // Render the template
	   dust.render("test",
		       {name:"Test"}, // Pass a value			  
		       function(err, out) {
			   // Append the error and outputs to the body using jQuery
			   $(function() {
				 $('.content').append(err);
				 $('.content').append(out);
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
    }, ['main','template']);

