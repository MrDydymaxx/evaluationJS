'use strict';

/**
 * @constructor
 * void function
 */

var MyPhoneNumber = function constructor() {
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
			input.addEventListener('click',function(){
				alert(checkPhoneNumber());
			});
		}
		form.appendChild(input);
		var br = document.createElement('br');
		form.appendChild(br);
	}
}

/**
 * @checkPhoneNumber
 * @return {String} error - returns an error
 * @return {String} - tells if the number is valid
 */

function checkPhoneNumber() {
	const regexPhone = new RegExp("(\\(\\+33\\)|0|\\+33|0033)[1-9]([0-9]{8}|([0-9\\- ]){12})",'g');
	var error;
	var input = document.getElementById('number').value;
	if (!regexPhone.test(input)) {
		error = "Number not valid!";
		return error;
	}
	var checkNumberType = input.substring(0,2);
	if (checkNumberType == '01' || checkNumberType == '06' || checkNumberType == '07') {
		return 'This phone number is a 06, 07 or 01 : true';
	}
	return 'This is a valid phone number!'

}
var phone = new MyPhoneNumber();