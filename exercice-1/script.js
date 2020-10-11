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
		var table = document.createElement('table');
		for (var i = 0; i < this.xAxis; i++) {
			var tr = document.createElement('tr');
			table.appendChild(tr);
			for (var j = 0; j < this.yAxis; j++) {
				var td = document.createElement('td');
				td.width='25px';
				td.height='25px';
				td.style.border='1px solid black';
				tr.appendChild(td);
		}
	}
	document.body.appendChild(table);
}
var grid = new GridGenerator(10,10);
grid.generate();