'use strict';

var MyPhoneNumber = function () {
	var form = document.createElement('form');
	document.body.appendChild(form);
	for (var i = 0; i < 2; i++) {
		var input = document.createElement('input');
		switch (i) {
			case 0:
			input.type ='text';
			input.id ='number';
			break;
			case 1:
			input.type ='button';
			input.id='send';
			input.value ='Envoyer';
		}
		form.appendChild(input);
		var br = document.createElement('br');
		form.appendChild(br);
	}
}
var phone = new MyPhoneNumber();