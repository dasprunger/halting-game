
var drawMessage = function() {
	var ctx = $("#middleCanvas")[0].getContext("2d");

	// write a message
	ctx.font = "12pt helvetica";
	ctx.fillText("(and here)", 0, 20);

	// draw a tic-tac-toe board
	ctx.moveTo(100, 0);
	ctx.lineTo(100, 300);

	ctx.moveTo(200, 0);
	ctx.lineTo(200, 300);

	ctx.moveTo(0, 100);
	ctx.lineTo(300, 100);

	ctx.moveTo(0, 200);
	ctx.lineTo(300, 200);
	ctx.stroke();
};

var mouseEventExample = function(ev) {
	var canv = $("#middleCanvas")[0];
	var ctx = canv.getContext("2d");

	var coord = mousePos(canv, ev);
	ctx.beginPath();
	if (100 <= coord[0] && coord[0] <= 200 && 100 <= coord[1] && coord[1] <= 200) {
		ctx.arc(150, 150, 40, 0, 2*Math.PI, false) // arc(centerXCoord, centerYCoord, radius, startAngle, endAngle, ccw?)
		ctx.lineWidth = 1;
		ctx.stroke();
	}
	else {
		ctx.rect(105, 105, 90, 90);
		ctx.fillStyle = 'white'
		ctx.fill();
	}

};

var mousePos = function(canvas, ev) {
	var bound = canvas.getBoundingClientRect();
	return [ev.clientX - bound.left, ev.clientY - bound.top];
}

$(document).ready(function() {
	drawMessage();
	$("#middleCanvas").mousemove(mouseEventExample);
});