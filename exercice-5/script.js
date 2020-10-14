
var MyForm = function() {
	var form = document.createElement('form');
	document.body.appendChild(form);
	for (var i = 0; i < 5; i++) {
		var input = document.createElement('input');
		switch (i) {
			case 0:
			input.type ='text';
			input.id ='name';
			break;
			case 1:
			input.type ='text';
			input.id ='lastName';
			break;
			case 2:
			input.type ='email';
			input.id ='email';
			break;
			case 3:
			input.type ='password';
			input.id ='password';
			break;
			case 4:
			input.type ='button';
			input.id='send';
			input.value ='Envoyer';
			input.addEventListener('click',function(){
				alert(checkForm());
			});
		}
		form.appendChild(input);
		var br = document.createElement('br');
		form.appendChild(br);
	}
}
function checkForm() {
	const regexName = new RegExp('[^0-9\\.\\,\\"\\?\\!\\;\\:\\#\\$\\%\\&\\(\\)\\*\\+\\-\\/\\<\\>\\=\\@\\[\\]\\\\^\\_\\{\\}\\|\\~]+');
	const regexMail = new RegExp('\\b[\\w\\.-]+@[\\w\\.-]+\\.\\w{2,4}\\b','gi');
	const regexPass = new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$','gm');
	var error;
	var input = document.getElementById('name').value;
	if (!regexName.test(input)) {
		error = "Name not valid!";
		return error;
	}
	input = document.getElementById('lastName').value;
	if (!regexName.test(input)) {
		error = "Last name not valid!";
		return error;
	}
	input = document.getElementById('email').value;
	if (!regexMail.test(input)) {
		error = "Mail not valid!";
		return error;
	}
	input = document.getElementById('password').value;
	if (!regexPass.test(input)) {
		error = "Password not valid! \nPlease make sur to use at least :\nOne uppercase character\nOne lowercase character\nOne number\n8 character long";
		return error;
	}
	if(error == undefined) {
		error = 'All informations are valid!';
		return error;
	}

};

var formulaire = new MyForm();