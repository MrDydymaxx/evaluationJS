"use strict";

var win = [2,3,4,5,5];
var titles = ['Torpilleur','Contre-torpilleur','Croiseur','Porte-avion','Cuirasse'];
var MySeaBattle = function() {
	this.world = [[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
}

MySeaBattle.prototype.generate = function() {
	document.body.innerHTML = '';
	var table = document.createElement('table');
	for (var i = 0; i < this.world.length; i++) {
		var tr = document.createElement('tr');
		table.appendChild(tr);
		for (var j = 0; j < this.world[i].length; j++) {
			var td = document.createElement('td');
			td.width='35px';
			td.height='35px';
			td.style.border='1px solid black';
			switch(this.world[i][j]) {
				case 0:
				td.classList.add('empty');
				break;
				case 1:
				td.classList.add('Torpilleur');
				break;
				case 2:
				td.classList.add('Contre-torpilleur');
				break;
				case 3:
				td.classList.add('Croiseur');
				break;
				case 4:
				td.classList.add('Porte-avion');
				break;
				case 5:
				td.classList.add('Cuirasse');
				break;
			}
			td.classList.add('c'+this.world[i][j]);
			td.addEventListener('click',function(event) {
				var value;
				if (event.target.classList.contains('c0')) {
					event.target.style.background = 'lightblue';
					event.target.classList.remove('c0');
					return 0;
				}
				if (event.target.classList.contains('c1')) {
					event.target.style.background = 'red';
					event.target.classList.remove('c1');
				}
				if (event.target.classList.contains('c2')) {
					event.target.style.background = 'red';
					event.target.classList.remove('c2');
				}
				if (event.target.classList.contains('c3')) {
					event.target.style.background = 'red';
					event.target.classList.remove('c3');
				}
				if (event.target.classList.contains('c4')) {
					event.target.style.background = 'red';
					event.target.classList.remove('c4');
				}
				if (event.target.classList.contains('c5')) {
					event.target.style.background = 'red';
					event.target.classList.remove('c5');
				}
				value = event.target.classList[0];
				checkWin(value);
			});
			tr.appendChild(td);
		}
	}
	document.body.appendChild(table);
	for (var i = 0; i < titles.length; i++) {
		var span = document.createElement('span');
		span.id = titles[i];
		span.style.margin = '5px';
		var text = document.createTextNode(titles[i]);
		span.appendChild(text);
		document.body.appendChild(span);	
	}

}
function checkWin(value) {
	switch(value) {
		case 'Torpilleur':
		win[0]--;
		break;
		case 'Contre-torpilleur':
		win[1]--;
		break;
		case 'Croiseur':
		win[2]--;
		break;
		case 'Porte-avion':
		win[3]--;
		break;
		case 'Cuirasse':
		win[4]--;
		break;
	}
	for (var i = 0; i < win.length; i++) {
		if (win[i] == 0) {
			alert(titles[i] + ' destroyed!');
			document.getElementById(value).style.textDecoration = 'line-through';
			win[i]=-1;
		}
	}
}
var battle = new MySeaBattle();
battle.generate();