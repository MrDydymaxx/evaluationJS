'use strict';

/**
 * @constructor
 * void function
 */

var MyMorpionXO = function constructor() {
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
				checkWin();
			});
			tr.appendChild(td);
		}
	}
}

/**
 * @checkWin
 * @return player1score - adds one to the current player score
 * @return player1score - adds one to the current player score
 */

function checkWin() {
	console.log('ok');
	var winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	var player1 = [], player2 = [];
	var player1win = 0, player2win = 0;
	for (var i = 0; i < 9; i++) {
		var element = document.getElementById(i);
		if(element.getAttribute('value') == 1) {
			player1.push(i);
		}
		if (element.getAttribute('value') == 2) {
			player2.push(i);
		}
		for (var j = 0; j < winConditions.length; j++) {
			for (var k = 0; k < winConditions[j].length; k++) {
				for (var l = 0; l < player1.length; l++) {
					if(winConditions[j][k] == player1[l]) {
						player1win++;
						if (player1win == 3) {
							alert("player 1 win");
							return this.player1score++;
						}
					}
				}
				for (var l = 0; l < player2.length; l++) {
					if(winConditions[j][k] == player2[l]) {
						player2win++;
						if (player2win == 3) {
							alert("player 2 win");
							return this.player2score++;
						}
					}
				}
			}
			player1win = 0;
			player2win = 0;
		}
	}
}
var tictactoe = new MyMorpionXO();