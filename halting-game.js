// This function loads the canvas context for the element with id
// "middleCanvas".
function getCanvas() {
	return $("#middleCanvas")[0].getContext("2d");
}

// This function draws an X on the canvas at the given row and column number.
// Row number 0 is the top row, 1 is the middle row, and 2 is the bottom row.
// Column 0 is the leftmost column, 1 is the middle, and 3 is the rightmost.
function drawX(rowNum, colNum) {
	var canvas = getCanvas();
	canvas.beginPath();

	// The top-left to bottom-right line.
	canvas.moveTo(100*colNum + 20, 100*rowNum + 20);
	canvas.lineTo(100*colNum + 80, 100*rowNum + 80);

	// The bottom-left to top-right line.
	canvas.moveTo(100*colNum + 20, 100*rowNum + 80);
	canvas.lineTo(100*colNum + 80, 100*rowNum + 20);
	canvas.stroke();
}

// This function draws an O on the canvas at the given row and column number.
// Row number 0 is the top row, 1 is the middle row, and 2 is the bottom row.
// Column 0 is the leftmost column, 1 is the middle, and 3 is the rightmost.
function drawO(rowNum, colNum) {
	var canvas = getCanvas();

	// Draw the circle
	canvas.beginPath();
	canvas.arc(100*colNum + 50, 100*rowNum + 50, 40, 0, 2*Math.PI, false); // arc(centerX, centerY, radius, startAngle, endAngle, ccw?)
	canvas.stroke();
}

// This function cleans the square at the given row and column number.
// Row number 0 is the top row, 1 is the middle row, and 2 is the bottom row.
// Column 0 is the leftmost column, 1 is the middle, and 3 is the rightmost.
function cleanSquare(rowNum, colNum) {
	var canvas = getCanvas();

	canvas.beginPath();
	canvas.rect(100*colNum + 5, 100*rowNum + 5, 90, 90);
	canvas.fillStyle = 'white';
	canvas.fill();
}

// This function draws the normal tic-tac-toe board.
function drawBoard() {
	var canvas = getCanvas();

	// draw a tic-tac-toe board
	canvas.moveTo(100, 0);
	canvas.lineTo(100, 300);

	canvas.moveTo(200, 0);
	canvas.lineTo(200, 300);

	canvas.moveTo(0, 100);
	canvas.lineTo(300, 100);

	canvas.moveTo(0, 200);
	canvas.lineTo(300, 200);
	canvas.stroke();
}

// The currentPosition variable stores the contents of the current game grid.
// The first three entries are the first row, left to right. The next three
// entries are the second row, and the last three are for the last row. A "b"
// means the square is blank. A "x" means the square has an X in it. A "o" means
// the square has an "O" in it.
currentPosition = ["b", "b", "b", "b", "b", "b", "b", "b", "b"];

// This function tells whether a player can move in the given square. (A player
// can move in a square if the entry in that row and column is "b".)
function canMoveHere(rowNum, colNum) {
	if (currentPosition[rowNum*3 + colNum] == "b") {
		return true;
	}
	else {
		return false;
	}
}

// This function attempts to put the given mark ("x" or "o") at the given
// row and column number. If it was successful, it returns true. Otherwise, it
// returns false.
function putMarkHere(mark, rowNum, colNum) {
	if (canMoveHere(rowNum, colNum)) {
		currentPosition[rowNum*3 + colNum] = mark;
		return true;
	}
	else {
		return false;
	}
}

// This function tells whether it's the X player's turn or not. It returns
// "true" if it is X's turn, and false if it's O's turn.
function isXsTurn() {
	// At the start, we haven't found any x's or o's
	var numOfXs = 0;
	var numOfOs = 0;

	// This loop will step over every entry in the currentPosition string.
	for (var index = 0; index < currentPosition.length; index++) {
		// If this entry is an 'x', add one more to the number of x's discovered
		if (currentPosition[index] == "x") {
			numOfXs = numOfXs + 1;
		}
		// If it's an 'o', add one to the number of o's.
		if (currentPosition[index] == "o") {
			numOfOs = numOfOs + 1;
		}
	}

	// If there are the same number of x's and o's, it's the X player's turn.
	if (numOfOs == numOfXs) {
		return true;
	}
	// Otherwise, it's the O player's turn.
	else {
		return false;
	}
	// (Side note: there's a more compact way to write the last few lines, but
	// we won't worry about that.)
}

// This function tells whether X won or not. It returns true if X has won, and
// false if X has not won.
function didXWin() {
	// We just check all 8 possible winning positions. There are probably better
	// ways of doing this...
	if (currentPosition[0] == "x" && currentPosition[1] == "x" && currentPosition[2] == "x") {
		return true;
	}
	if (currentPosition[3] == "x" && currentPosition[4] == "x" && currentPosition[5] == "x") {
		return true;
	}
	if (currentPosition[6] == "x" && currentPosition[7] == "x" && currentPosition[8] == "x") {
		return true;
	}
	if (currentPosition[0] == "x" && currentPosition[3] == "x" && currentPosition[6] == "x") {
		return true;
	}
	if (currentPosition[1] == "x" && currentPosition[4] == "x" && currentPosition[7] == "x") {
		return true;
	}
	if (currentPosition[2] == "x" && currentPosition[5] == "x" && currentPosition[8] == "x") {
		return true;
	}
	if (currentPosition[0] == "x" && currentPosition[4] == "x" && currentPosition[8] == "x") {
		return true;
	}
	if (currentPosition[2] == "x" && currentPosition[4] == "x" && currentPosition[6] == "x") {
		return true;
	}
	return false;
}

// This function tells whether X won or not. It returns true if X has won, and
// false if X has not won.
function didOWin() {
	// We just check all 8 possible winning positions. There are probably better
	// ways of doing this...
	if (currentPosition[0] == "o" && currentPosition[1] == "o" && currentPosition[2] == "o") {
		return true;
	}
	if (currentPosition[3] == "o" && currentPosition[4] == "o" && currentPosition[5] == "o") {
		return true;
	}
	if (currentPosition[6] == "o" && currentPosition[7] == "o" && currentPosition[8] == "o") {
		return true;
	}
	if (currentPosition[0] == "o" && currentPosition[3] == "o" && currentPosition[6] == "o") {
		return true;
	}
	if (currentPosition[1] == "o" && currentPosition[4] == "o" && currentPosition[7] == "o") {
		return true;
	}
	if (currentPosition[2] == "o" && currentPosition[5] == "o" && currentPosition[8] == "o") {
		return true;
	}
	if (currentPosition[0] == "o" && currentPosition[4] == "o" && currentPosition[8] == "o") {
		return true;
	}
	if (currentPosition[2] == "o" && currentPosition[4] == "o" && currentPosition[6] == "o") {
		return true;
	}
	return false;
}

// This function checks whether the game was drawn. (A game is drawn if there
// are no more blank ("b") positions in the game, and neither X nor O has won.)
function didDraw() {
	// Check to make sure there are no "b" characters.
	for (var index = 0; index < currentPosition.length; index++) {
		// As soon as we've seen a "b" we know it's not drawn yet.
		if (currentPosition[index] == "b") {
			return false;
		}
	}
	// If we get to here, we know all the positions are not blank, so we check
	// whether X or O has won.
	return !didOWin() && !didXWin();
}

// If we get a mouse click, first we have to decide which square it was in.
// Then we try to put the current player's mark in that square.
function mouseClickFunction(ev) {
	// If someone already won, we shouldn't do anything.
	if (didXWin() || didOWin()) {
		return;
	}

	// Use the mouseCoordinate function to figure out where the click was. Then
	// divide by 100 to figure out which row that means (/ is the integer
	// division function.)
	var coordinates = mouseCoordinates(ev);
	var colNum = Math.floor(coordinates[0] / 100);
	var rowNum = Math.floor(coordinates[1] / 100);
	
	// Figure out whose turn it is, and try to put that mark in the square.
	if (isXsTurn()) {
		var success = putMarkHere("x", rowNum, colNum);
		if (success) {
			drawX(rowNum, colNum);
		}
	}
	else {
		var success = putMarkHere("o", rowNum, colNum);
		if (success) {
			drawO(rowNum, colNum);
		}
	}

	// Now that the move has happened, we have to check to see if someone won!
	if (didXWin()) {
		$("#winningMessage").text("X WINS! Reload the page to start a new game.");
	}
	if (didOWin()) {
		$("#winningMessage").text("O WINS! Reload the page to start a new game.");
	}
	if (didDraw()) {
		$("#winningMessage").text("CAT GAME! Reload the page to start a new game.");
	}
}

// This function finds the mouse position on the canvas when the event "ev" was
// triggered. It returns the coordinates as an array, like [xCoord, yCoord].
function mouseCoordinates(ev) {
	var boundary = $("#middleCanvas")[0].getBoundingClientRect();
	return [ev.clientX - boundary.left, ev.clientY - boundary.top];
}


// This function sets up everything after the HTML has finished loading.
$(document).ready(function() {
	// First we draw the board.
	drawBoard();

	// Then we get ready for mouse clicks by telling the page that when the
	// "middleCanvas" element is clicked, it should run the "mouseClickFunction"
	// function we defined earlier.
	$("#middleCanvas").click(mouseClickFunction);

	$("#question").click(function () {
		var response = prompt("What's your favorite color?");
		$("#favoriteColor").text(response);
	})
});