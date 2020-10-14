'use strict';

var MyMorpionXO = function() {
	this.player1score = 0;
	this.player2score = 0;
	var player = 1;
	var countID = 0;
	var table = document.createElement('table');
	document.body.appendChild(table);
	for (var i = 1; i <= 3; i++) {
		var tr = document.createElement('tr');
		table.appendChild(tr);
		for (var j = 1; j <= 3; j++) {
			var td = document.createElement('td');
			td.width='250px';
			td.height='250px';
			td.style.border='1px solid black';
			td.id = countID++;
			tr.appendChild(td);
		}
	}
}
var tictactoe = new MyMorpionXO();