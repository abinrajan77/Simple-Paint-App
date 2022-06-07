var canvas = document.getElementById("myCanvas");

var cxt = canvas.getContext("2d");

var canvasoriginal = document.getElementById("myCanvasOriginal");

var cxtoriginal = canvasoriginal.getContext("2d");

var clrButton = document.getElementById("clr");

var red = Math.floor(Math.random() * 255);
var green = Math.floor(Math.random() * 255);
var blue = Math.floor(Math.random() * 255);


var x = 0;
var y = 0;

var downclick = false;

var mouseDownCallBack = function (event) {
	x = event.offsetX;
	y = event.offsetY;

	downclick = true;
}

var mouseMove = function (event) {
	var movingX = event.offsetX;
	var movingY = event.offsetY;

	if (downclick === true) {
		drawTriangle(x, y, movingX, movingY);
	}
}

var mouseUp = function (event) {
	downclick = false;
	update();

	red = Math.floor(Math.random() * 255);
	green = Math.floor(Math.random() * 255);
	blue = Math.floor(Math.random() * 255);

}

var clearpaint = function () {
	cxtoriginal.clearRect(0, 0, canvas.width, canvas.height);
}


var drawTriangle = function (x, y, movingX, movingY) {
	cxt.clearRect(0, 0, canvas.width, canvas.height);

	var distance = calculateLineDistance(x, y, movingX, movingY);

	cxt.beginPath();
	cxt.moveTo(x, y);
	cxt.lineTo(x + distance / 2, y + distance);
	cxt.lineTo(x - distance / 2, y + distance);
	cxt.fillStyle = "rgb(" + red + "," + green + "," + blue + " )";
	cxt.fill();
	cxt.closePath();
	cxt.stroke();
}

function calculateLineDistance(x1, y1, x2, y2) {
	return Math.round(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
}

var update = function () {
	cxtoriginal.drawImage(canvas, 0, 0);
	cxt.clearRect(0, 0, canvas.width, canvas.height);
}




canvas.addEventListener('mousedown', mouseDownCallBack);

canvas.addEventListener('mousemove', mouseMove);

canvas.addEventListener('mouseup', mouseUp);

clrButton.addEventListener('click', clearpaint);