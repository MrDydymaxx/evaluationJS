'use strict';


var Bar = function constructor(sum,nbr) {
 this.sum = sum;
 this.nbr = nbr;
}

Bar.prototype.drawBar = function () {
	var progress = document.createElement('progress');
	progress.max = this.sum;
	progress.value = this.nbr;
	progress.style.width = '100%';
	document.body.appendChild(progress);
}

var bar = new Bar(100,79);
bar.drawBar();