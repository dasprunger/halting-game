//Some functions from github.com/dasprunger/halting-game

/*
//The following code was referenced from 
//https://www.youtube.com/watch?v=c_ohDPWmsM0
var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}*/


function getCanvas() {
	return $("#myCanvas")[0].getContext("2d");
}


// draws lines on 3x3 board
function drawEasyBoard() {

	var canvas = getCanvas();
	cleanCanvas();
	// draw vertical lines
	canvas.moveTo(10, 10);
	canvas.lineTo(10, 290);

	canvas.moveTo(80, 10);
	canvas.lineTo(80, 290);

	canvas.moveTo(150, 10);
	canvas.lineTo(150, 290);

	canvas.moveTo(220, 10);
	canvas.lineTo(220, 290);

	canvas.moveTo(290, 10);
	canvas.lineTo(290, 290);

	// draw horizontal lines
	canvas.moveTo(10, 10);
	canvas.lineTo(290, 10);

	canvas.moveTo(10, 80);
	canvas.lineTo(290, 80);

	canvas.moveTo(10, 150);
	canvas.lineTo(290, 150);

	canvas.moveTo(10, 220);
	canvas.lineTo(290, 220);

	canvas.moveTo(10, 290);
	canvas.lineTo(290, 290);
	canvas.stroke();

	memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
	memory_array.memory_tile_shuffle();
	memory_values = [];
	memory_tile_ids = [];
	tiles_flipped = 0;

	output = '';
   
	$("#myCanvas").off('click');
	$("#myCanvas").click(mouseClickFunctionEasy);
}

Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

//draws lines on 5x5 board
function drawMediumBoard(){
	var canvas = getCanvas();
	cleanCanvas();
	// draw lines
	canvas.moveTo(50, 0);
	canvas.lineTo(50, 300);

	canvas.moveTo(100, 0);
	canvas.lineTo(100, 300);

	canvas.moveTo(150, 0);
	canvas.lineTo(150, 300);

	canvas.moveTo(200, 0);
	canvas.lineTo(200, 300);

	canvas.moveTo(250, 0);
	canvas.lineTo(250, 300);

	canvas.moveTo(0, 50);
	canvas.lineTo(300, 50);

	canvas.moveTo(0, 100);
	canvas.lineTo(300, 100);

	canvas.moveTo(0, 150);
	canvas.lineTo(300, 150);

	canvas.moveTo(0, 200);
	canvas.lineTo(300, 200);

	canvas.moveTo(0, 250);
	canvas.lineTo(300, 250);
	canvas.stroke();

	memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H',
	'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P','Q','Q', 'R',
	 'R', 'S','S']
	memory_array.memory_tile_shuffle();
	memory_values = [];
	memory_tile_ids = [];
	tiles_flipped = 0;

	output = '';
    $("#myCanvas").off('click');
	$("#myCanvas").click(mouseClickFunctionMedium);
}

//function to draw 8x8 board
function drawDifficultBoard(){
	var canvas = getCanvas();
	cleanCanvas();
// draw vertical lines
	canvas.moveTo(10, 10);
	canvas.lineTo(10, 290);

	canvas.moveTo(45, 10);
	canvas.lineTo(45, 290);

	canvas.moveTo(80, 10);
	canvas.lineTo(80, 290);

	canvas.moveTo(115, 10);
	canvas.lineTo(115, 290);

	canvas.moveTo(150, 10);
	canvas.lineTo(150, 290);

	canvas.moveTo(185, 10);
	canvas.lineTo(185, 290);

	canvas.moveTo(220, 10);
	canvas.lineTo(220, 290);

	canvas.moveTo(255, 10);
	canvas.lineTo(255, 290);

	canvas.moveTo(290, 10);
	canvas.lineTo(290, 290);

  //draw horizontal lines
	canvas.moveTo(10, 10);
	canvas.lineTo(290, 10);

	canvas.moveTo(10, 45);
	canvas.lineTo(290, 45);

	canvas.moveTo(10, 80);
	canvas.lineTo(290, 80);

	canvas.moveTo(10, 115);
	canvas.lineTo(290, 115);

	canvas.moveTo(10, 150);
	canvas.lineTo(290, 150);

	canvas.moveTo(10, 185);
	canvas.lineTo(290, 185);

	canvas.moveTo(10, 220);
	canvas.lineTo(290, 220);

	canvas.moveTo(10, 255);
	canvas.lineTo(290, 255);

	canvas.moveTo(10, 290);
	canvas.lineTo(290, 290);
	canvas.stroke();

	memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H',
	'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'P', 'P','Q','Q', 'R',
	 'R', 'S','S', 'T', 'T', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'X', 'Y', 'Y', 'Z', 'Z', '1', '1',
	 '2', '2', '3', '3', '4', '4', ':)', ':)',':(', ':(', ':p', ':P', ':D', ':D']
	memory_array.memory_tile_shuffle();
	memory_values = [];
	memory_tile_ids = [];
	tiles_flipped = 0;

	output = '';
   	$("#myCanvas").off('click');
	$("#myCanvas").click(mouseClickFunctionDifficult);
}

 

function cleanCanvas() {
	var canvas = getCanvas();

	canvas.beginPath();
	canvas.rect(0, 0, 300, 300);
	canvas.fillStyle = 'white';
	canvas.fill();

}

function cleanEasySquare(rowNum, colNum){
	var canvas = getCanvas();

	canvas.beginPath();
	canvas.rect(70*colNum+15, 70*rowNum+15, 60, 60);
	canvas.fillStyle = 'white';
	canvas.fill();
}

function cleanMediumSquare(rowNum, colNum){
	var canvas = getCanvas();

	canvas.beginPath();
	canvas.rect(50*colNum + 5, 50*rowNum + 5, 40, 40);
	canvas.fillStyle = 'white';
	canvas.fill();
}

function cleanDifficultSquare(rowNum, colNum){
	var canvas = getCanvas();

	canvas.beginPath();
	canvas.rect(35*colNum + 20, 35*rowNum + 20, 20, 20);
	canvas.fillStyle = 'white';
	canvas.fill();
}

function writeLetter(rowNum, colNum, letter){
	var canvas = getCanvas();
	canvas.fillStyle= 'black';
	canvas.font = '25pt helvetica';
	canvas.fillText(letter, 70*colNum + 35, 70*rowNum + 55);
}

function writeMediumLetter(rowNum, colNum, letter){
	var canvas = getCanvas();
	canvas.fillStyle= 'black';
	canvas.font = '20pt helvetica';
	canvas.fillText(letter, 50*colNum + 15, 50*rowNum + 35);
}

function writeDifficultLetter(rowNum, colNum, letter){
	var canvas = getCanvas();
	canvas.fillStyle= 'black';
	canvas.font = '15pt helvetica';
	canvas.fillText(letter, 35*colNum + 20 , 35*rowNum + 35);
}

// This function finds the mouse position on the canvas when the event "ev" was
// triggered. It returns the coordinates as an array, like [xCoord, yCoord].
function mouseCoordinates(ev) {
	var boundary = $("#myCanvas")[0].getBoundingClientRect();
	return [ev.clientX - boundary.left, ev.clientY - boundary.top];
}

function mouseClickFunctionEasy(ev){
	
		var coordinates = mouseCoordinates(ev);
		var colNum = Math.floor(coordinates[0] / 70);
		var rowNum = Math.floor(coordinates[1] / 70);
		var letter = memory_array[4 * rowNum + colNum];
		
		if(memory_tile_ids.length<=1){
			writeLetter(rowNum, colNum, letter);
			memory_tile_ids.push([rowNum, colNum, letter]);
			if (memory_tile_ids.length==2 && memory_tile_ids[0][2]==memory_tile_ids[1][2]){
				memory_tile_ids=[];
				tiles_flipped += 2;

				if (tiles_flipped==16){
					alert("You won!");
				}
			}

		}else{
			cleanEasySquare(memory_tile_ids[0][0], memory_tile_ids[0][1]);
			cleanEasySquare(memory_tile_ids[1][0], memory_tile_ids[1][1]);
			memory_tile_ids=[];
		}
	}

function mouseClickFunctionMedium(ev){
	
		var coordinates = mouseCoordinates(ev);
		var colNum = Math.floor(coordinates[0] / 50);
		var rowNum = Math.floor(coordinates[1] / 50);
		var letter = memory_array[6 * rowNum + colNum];
		
		if(memory_tile_ids.length<=1){
			writeMediumLetter(rowNum, colNum, letter);
			memory_tile_ids.push([rowNum, colNum, letter]);
			if (memory_tile_ids.length==2 && memory_tile_ids[0][2]==memory_tile_ids[1][2]){
				memory_tile_ids=[];
				tiles_flipped += 2;

				if (tiles_flipped==36){
					alert("You won!");
				}
			}
		}else{
			cleanMediumSquare(memory_tile_ids[0][0], memory_tile_ids[0][1]);
			cleanMediumSquare(memory_tile_ids[1][0], memory_tile_ids[1][1]);
			memory_tile_ids=[];
		}
	}

function mouseClickFunctionDifficult(ev){
	
		var coordinates = mouseCoordinates(ev);
		var colNum = Math.floor(coordinates[0] / 35);
		var rowNum = Math.floor(coordinates[1] / 35);
		var letter = memory_array[8 * rowNum + colNum];
		
		if(memory_tile_ids.length<=1){
			writeDifficultLetter(rowNum, colNum, letter);
			memory_tile_ids.push([rowNum, colNum, letter]);
			if (memory_tile_ids.length==2 && memory_tile_ids[0][2]==memory_tile_ids[1][2]){
				memory_tile_ids=[];
				tiles_flipped += 2;

				if (tiles_flipped==64){
					alert("You won!");
				}
			}
		}else{
			cleanDifficultSquare(memory_tile_ids[0][0], memory_tile_ids[0][1]);
			cleanDifficultSquare(memory_tile_ids[1][0], memory_tile_ids[1][1]);
			memory_tile_ids=[];
		}
	}

$(document).ready(function(){
		
});