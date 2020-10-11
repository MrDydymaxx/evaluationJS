'use strict';

/**
 * constructor
 * {number} xAxis
 * {number} yAxis
 */

var GridGenerator = function constructor(xAxis,yAxis) {
 this.xAxis = xAxis;
 this.yAxis = yAxis;
}

GridGenerator.prototype.generate = function () {
	document.body.innerHTML = '';
	var table = document.createElement('table');
	for (var i = 0; i < this.xAxis; i++) {
		var tr = document.createElement('tr');
		table.appendChild(tr);
		for (var j = 0; j < this.yAxis; j++) {
			var td = document.createElement('td');
			td.width='25px';
			td.height='25px';
			td.style.border='1px solid black';
			td.style.backgroundColor = this.color();
			tr.appendChild(td);
		}
	}
	document.body.appendChild(table);
}

GridGenerator.prototype.color = function () {
	var hexaTab = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F'];
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += hexaTab[Math.floor(Math.random()*16)];
	}

	return color;
}
var grid = new GridGenerator(10,10);
setInterval(function(){
	grid.generate();
}, Math.floor((Math.random()*1000)+1001));