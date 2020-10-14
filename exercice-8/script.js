"use strict";

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
				td.classList.add('torpilleur');
				break;
				case 2:
				td.classList.add('contre-torpilleur');
				break;
				case 3:
				td.classList.add('croiseur');
				break;
				case 4:
				td.classList.add('porte-avion');
				break;
				case 5:
				td.classList.add('cuirasse');
				break;
			}
			td.classList.add('c'+this.world[i][j]);
			tr.appendChild(td);
		}
	}
	document.body.appendChild(table);
}

var battle = new MySeaBattle();
battle.generate();