requirejs.config({
	baseUrl: 'js'	
});

requirejs(['button'],
function(button){

	button.rollCall();
	
	//button.print("loaded");

});
