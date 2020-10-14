'use strict';

/**
 * @constructor
 * @param {number} sum - total value of the bar
 * @param {number} nbr - current value of the bar
 */


var Bar = function constructor(sum,nbr) {
 this.sum = sum;
 this.nbr = nbr;
}

/**
 * @drawBar
 * void function
 */

Bar.prototype.drawBar = function () {
	var progress = document.createElement('progress');
	progress.max = this.sum;
	progress.value = this.nbr;
	progress.style.width = '100%';
	document.body.appendChild(progress);
}

var bar = new Bar(100,Math.floor(Math.random()*101));
bar.drawBar();