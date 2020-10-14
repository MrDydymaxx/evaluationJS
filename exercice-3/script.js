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
			td.addEventListener('click',function(event) {
				if(!event.target.src) {
					if(player == 1) {
					var imgLink = 'cross.png';
					var value = player;
					player = 2;
				} else {
					var imgLink = 'circle.png';
					var value = player;
					player = 1;
				}
				var td = document.getElementById(event.target.id);
				var img = document.createElement('img');
				img.style.width='100%';
				img.style.height='100%';
				img.src=imgLink;
				td.appendChild(img);
				td.setAttribute('value',value);
				}
			});
			tr.appendChild(td);
		}
	}
}
var tictactoe = new MyMorpionXO();