/*
 *
 */

define("renderer",
       ["jquery","RequestAnimationFrame"],
       function($,raf){ 
	         var camera, scene, renderer, geometry, material, mesh;
	         
	         init();
	         animate();

	         function init() {

               scene = new THREE.Scene();

               camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
               camera.position.z = 1000;
               scene.add( camera );

               geometry = new THREE.CubeGeometry( 200, 200, 200 );
               material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

               mesh = new THREE.Mesh( geometry, material );
               scene.add( mesh );

               renderer = new THREE.CanvasRenderer();
               renderer.setSize( window.innerWidth, window.innerHeight );

               $("#cube").html( renderer.domElement );

	         }

	         function animate() {

               // Include examples/js/RequestAnimationFrame.js for cross-browser compatibility.
               requestAnimationFrame( animate );
               render();

	         }

	         function render() {

               mesh.rotation.x += 0.01;
               mesh.rotation.y += 0.02;

               renderer.render( scene, camera );

	         }
       });

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