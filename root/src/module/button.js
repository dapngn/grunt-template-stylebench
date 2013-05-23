define(function(){
	
	function method (x) {
		return x + x;
	}

	return{
		someValue: 'foobar',
		myMethod: method,
	}

});
