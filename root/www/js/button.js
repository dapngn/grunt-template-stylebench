define(function(){

	function rollCall() {
		var buttons = document.getElementsByClassName('button');
		for(var i = 0; i < buttons.length; i++)
		{
			console.log(buttons[i].innerText || buttons[i].value);
		}
	}
		
	function print(msg) {
		alert('button: ' + msg)
	}

	return{
		print: print,
		rollCall: rollCall 
	}

});
