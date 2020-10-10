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

var grid = new GridGenerator(5,7);
console.log(grid.xAxis);
console.log(grid.yAxis);