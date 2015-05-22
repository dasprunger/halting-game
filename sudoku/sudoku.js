function getCanvas() {
    return $("#middleCanvas")[0].getContext("2d");
}
 
function getPuzzle () {
    
    drawNumber(0, 0, 1);
    drawNumber(1, 2, 2);
    drawNumber(2, 1, 9);
    drawNumber(2, 3, 4);
    drawNumber(6, 0, 8);
    drawNumber(8, 1, 5);
    drawNumber(7, 2, 9);
    drawNumber(8, 3, 6);
    drawNumber(0, 5, 8);
    drawNumber(0, 7, 6);
    drawNumber(1, 6, 5);
    drawNumber(2, 8, 7);
    drawNumber(3, 0, 3);
    drawNumber(3, 4, 8);
    drawNumber(3, 6, 2);
    drawNumber(4, 1, 1);
    drawNumber(4, 3, 5);
    drawNumber(4, 5, 6);
    drawNumber(4, 7, 9);
    drawNumber(5, 2, 7);
    drawNumber(5, 4, 2);
    drawNumber(5, 8, 4);
    drawNumber(6, 5, 2);
    drawNumber(6, 7, 1);
    drawNumber(7, 6, 3);
    drawNumber(8, 1, 5);
    drawNumber(8, 8, 2);
    
}

function drawNumber (rowNumber, columnNumber, numberDraw){
    var canvas = getCanvas();
    canvas.beginPath();
    canvas.fillStyle = 'black';
    canvas.fillText(numberDraw, 25+50*columnNumber, 25+50*rowNumber);
}


function cleanSquare(rowNum, colNum) {
    var canvas = getCanvas();

    canvas.beginPath();
    canvas.rect(50*colNum + 5, 50*rowNum + 5, 42, 42);
    canvas.fillStyle = 'white';
    canvas.fill();
}



var drawMessage = function() {
    var ctx = $("#middleCanvas")[0].getContext("2d");

    // write a message
    ctx.font = "12pt helvetica";


    // draw a tic-tac-toe board

    
    ctx.moveTo(50, 0);
    ctx.lineTo(50, 450);

    ctx.moveTo(0, 50);
    ctx.lineTo(450, 50);
    
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 450);
    
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 450);
    
    ctx.moveTo(0, 200);
    ctx.lineTo(450, 200);
    
    ctx.moveTo(350, 0);
    ctx.lineTo(350, 450);
    
    ctx.moveTo(0, 350);
    ctx.lineTo(450, 350);
    
    ctx.moveTo(400, 0);
    ctx.lineTo(400, 450);
    
    ctx.moveTo(0, 400);
    ctx.lineTo(450, 400);
    
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 450);
    
    ctx.moveTo(0, 250);
    ctx.lineTo(450, 250);
    
    ctx.moveTo(0, 100);
    ctx.lineTo(450, 100);
    ctx.stroke();
    ctx.beginPath();
    
    ctx.moveTo(0, 0);
    ctx.lineTo(450, 0);
    
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 450);
    
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 450);
    
    ctx.moveTo(0, 300);
    ctx.lineTo(450, 300);
    
    ctx.moveTo(450, 0);
    ctx.lineTo(450, 450);
    
    ctx.moveTo(0, 450);
    ctx.lineTo(450, 450);
    
    ctx.moveTo(0, 150);
    ctx.lineTo(450, 150);
    
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 450);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth=1;    
    
    
    ctx.stroke();
};

var puzzle1Start = [[1, 0, 0, 0, 0, 8, 0, 6, 0],
[0, 0, 2, 0, 0, 0, 5, 0, 0],
[0, 9, 0, 4, 0, 0, 0, 0, 7],
[3, 0, 0, 0, 8, 0, 2, 0, 0],
[0, 1, 0, 5, 0, 6, 0, 9, 0],
[0, 0, 7, 0, 2, 0, 0, 0, 4],
[8, 0, 0, 0, 0, 2, 0, 1, 0],
[0, 0, 9, 0, 0, 0, 3, 0, 0],
[0, 5, 0, 6, 0, 0, 0, 0, 2],
];

var puzzle1Solution = [[1, 7, 3, 2, 5, 8, 4, 6, 9],
[6, 4, 2, 1, 9, 7, 5, 3, 8],
[5, 9, 8, 4, 6, 3, 1, 2, 7],
[3, 6, 5, 9, 8, 4, 2, 7, 1],
[2, 1, 4, 5, 7, 6, 8, 9, 3], 
[9, 8, 7, 3, 2, 1, 6, 5, 4],
[8, 3, 6, 7, 4, 2, 9, 1, 5],
[7, 2, 9, 8, 1, 5, 3, 4, 6],
[4, 5, 1, 6, 3, 9, 7, 8, 2],
];

var puzzle2Start = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 2, 5, 9, 0, 4, 7, 8, 0],
[3, 7, 9, 0, 8, 0, 0, 0, 0],
[0, 0, 0, 6, 0, 0, 0, 0, 3],
[0, 0, 3, 0, 0, 1, 0, 0, 9],
[0, 0, 0, 0, 2, 5, 0, 0, 0],
[0, 0, 8, 0, 4, 0, 0, 6, 7],
[0, 1, 4, 8, 0, 0, 0, 0, 0],
[0, 3, 6, 0, 0, 2, 4, 0, 0]];

var puzzle2Solution = [[4, 8, 1, 2, 5, 7, 9, 3, 6],
[6, 2, 5, 9, 3, 4, 7, 8, 1],
[3, 7, 9, 1, 8, 6, 2, 4, 5],
[1, 4, 2, 6, 9, 8, 5, 7, 3],
[8, 5, 3, 4, 7, 1, 6, 2, 9],
[9, 6, 7, 3, 2, 5, 8, 1, 4],
[2, 9, 8, 5, 4, 3, 1, 6, 7],
[7, 1, 4, 8, 6, 9, 3, 5, 2],
[5, 3, 6, 7, 1, 2, 4, 9, 8],
];

var puzzle3start = [[5, 3, 0, 0, 7, 0, 0, 0, 0],
[6, 0, 0, 1, 9, 5, 0, 0, 0],
[0, 9, 8, 0, 0, 0, 0, 6, 0],
[8, 0, 0, 0, 6, 0, 0, 0, 3],
[4, 0, 0, 8, 0, 3, 0, 0, 1],
[7, 0, 0, 0, 2, 0, 0, 0, 6],
[0, 6, 0, 0, 0, 0, 2, 8, 0],
[0, 0, 0, 4, 1, 9, 6, 3, 5],
[0, 0, 0, 0, 8, 0, 0, 7, 9],
];

var puzzle3solution =[[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9],
];



function drawPuzzle(puzzle) {
for(var i=0; i<puzzle.length; i++){
var row = puzzle[i];
for(var j=0; j<row.length; j++){
if(row[j]!=0){
drawNumber(i,j,row[j]);
}}}}

var mousePos = function(ev) {
    var bound = $("#middleCanvas")[0].getBoundingClientRect();
    return [ev.clientX - bound.left, ev.clientY - bound.top];
}

$(document).ready(function() {
    drawMessage();
    var Options = [puzzle1Start, puzzle2Start, puzzle3start];
    var Solutions = [puzzle1Solution, puzzle2Solution, puzzle3solution];
    var puzzleNumber = Math.floor(Math.random() * Options.length);
    
    drawPuzzle(Options[puzzleNumber]);
    solution = Solutions[puzzleNumber];
 
    $("#middleCanvas").click(function(ev){
        var response = prompt("Type in a Number from Zero to Nine");
        var coordinates = mousePos(ev);
        var x = coordinates[0];
        var y = coordinates[1];
        var columnNumber = Math.floor(x/50);
        var rowNumber = Math.floor(y/50);
        if (response==null) {
            cleanSquare (rowNumber, columnNumber);
        }
        else {
        if (solution[rowNumber][columnNumber] == + response){
            drawNumber(rowNumber, columnNumber, response);
        }
        }
        
    });
});