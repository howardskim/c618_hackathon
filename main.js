$(document).ready(doThisWhenReady);
var boardGameArray = [
    ["", "B", "", "B", "", "B", "", "B", ],
    ["B", "", "B", "", "B", "", "B", "", ],
    ["", "B", "", "B", "", "B", "", "B", ],
    ["", "", "", "", "", "", "", "", ],
    ["", "", "", "", "", "", "", "", ],
    ["R", "", "R", "", "R", "", "R", "", ],
    ["", "R", "", "R", "", "R", "", "R", ],
    ["R", "", "R", "", "R", "", "R", "", ],
]
var plantLives = 12;
var zombieLives = 12;
var turn = 0;
var rowInitial;
var columnInitial;
var left=null;
var right =null;
var lastCellInitiated = null;
var highLightCounter = 0;

function doThisWhenReady() {
    buildGameBoard(boardGameArray);
    applyClickHandlers();
    $("button").click(reset);
}


function applyClickHandlers() {
    $('.zombie, .plant').on('click', highLight);
    // $('.highlight').on('click', movement);
}

function highLight() {
   

    //whatever i 
    lastCellInitiated = this;
    console.log(`turn: ${turn} classes: `+$(this).attr('class'));
    if(turn % 2 === 0 && $(this).hasClass('zombie')){
        return;
    }

    if(turn % 2 === 1 && $(this).hasClass('plant')) {
        console.log(turn);
        return;
    }

    $('.highlight').removeClass('highlight');
    rowInitial = $(this).attr("row")
    columnInitial = $(this).attr("column")
    if (turn % 2 === 0 && $(this).hasClass("plant")) {
        // debugger;
        // upLeft(rowInitial, columnInitial);
       left= upLeft(event)
        right=upRight(event);
        //highLightCounter is 
        if(highLightCounter===0){
        $('.highlight').on('click', movement);
        highLightCounter++
        }
    } else if (turn % 2 === 1 && $(this).hasClass("zombie")) {
        // debugger;
        left=downLeft(event);
        right=downRight(event);
        if(highLightCounter === 0) {
            $('.highlight').on('click', movement);
            highLightCounter++;
        }
    }

}

function movement(event) {
    highLightCounter = 0;
    $(lastCellInitiated).removeClass('plant').removeClass('zombie').off('click');
    $('.highlight').removeClass('highlight');
    $(".column").off('click', movement);
    console.log("test movement");
    if (turn % 2 === 0 ) {
        var element = $(event.target).closest("div").addClass("plant");
        //element.on('click', highLight);
        console.log("ya");
    } else if (turn % 2 === 1) {
        var element = $(event.target).closest("div").addClass("zombie")//.on('click', highLight);
        console.log("hello");
    }
    turn++;
    console.log(turn);
    $('.highlight').removeClass('highlight');
    $(left).off("click");
    $(right).off("click");
    //element.off('click');
    element.on('click',highLight)
    left=null;
    right=null;
}

function upLeft(event) {
    rowInitial = $(event.target).closest('div').attr('row');
    columnInitial = $(event.target).closest('div').attr("column")
    var rowFinal = rowInitial - 1;
    var columnFinal = columnInitial - 1;
    //removes red or black chip from initial position
    // $(this).removeClass("red").removeClass("black");
    //adds red or black chip to final position  
    var destinationDiv = `[row=${rowFinal}][column=${columnFinal}]`
    if ($(destinationDiv).hasClass("zombie")) {
        // jumpUpLeft(rowInitial, columnInitial)
    } else if ($(destinationDiv).hasClass("plant")) {
        return destinationDiv;
    } else {
        $(destinationDiv).addClass("highlight");
        return destinationDiv;
    }
}

function upRight(event) {
    rowInitial = $(event.target).closest('div').attr('row');
    columnInitial = $(event.target).closest('div').attr("column")
    var rowFinal = rowInitial - 1;
    var columnFinal = +columnInitial + 1;

    // $(this).removeClass("red").removeClass("black");
    //adds red or black chip to final position
    var destinationDiv = `[row=${rowFinal}][column=${columnFinal}]`

    if ($(destinationDiv).hasClass("zombie")) {
        // jumpUpRight(rowInitial, columnInitial)
    } else if ($(destinationDiv).hasClass("plant")) {
        return destinationDiv;
    } else {
        $(destinationDiv).addClass("highlight");
        return destinationDiv;
    }
}

function downLeft(event) {
    rowInitial = $(event.target).closest('div').attr('row');
    columnInitial = $(event.target).closest('div').attr("column")
    var rowFinal = +rowInitial + 1;
    var columnFinal = columnInitial - 1;
    $(this).removeClass("red").removeClass("black");
    //adds red or black chip to final position
    var destinationDiv = `[row=${rowFinal}][column=${columnFinal}]`

    if ($(destinationDiv).hasClass("plant")) {
        // jumpDownLeft(rowInitial, columnInitial)
    } else if ($(destinationDiv).hasClass("zombie")) {
        return;
    } else {
        $(destinationDiv).addClass("highlight");
    }
}

function downRight(event) {
    rowInitial = $(event.target).closest('div').attr('row');
    columnInitial = $(event.target).closest('div').attr("column")
    var rowFinal = +rowInitial + 1;
    var columnFinal = +columnInitial + 1;
    $(this).removeClass("red").removeClass("black");
    //adds red or black chip to final position
    var destinationDiv = `[row=${rowFinal}][column=${columnFinal}]`
    if ($(destinationDiv).hasClass("plant")) {
        // jumpDownRight(rowInitial, columnInitial)
    } else if ($(destinationDiv).hasClass("zombie")) {
        return;
    } else {
        $(destinationDiv).addClass("highlight");
    }
}

function jumpUpLeft(rowInitial, columnInitial) {
    var rowFinal = rowInitial - 2;
    var columnFinal = columnInitial - 2;
    //removes red or black chip from initial position
    $(this).removeClass("plant").removeClass("zombie");
    //adds red or black chip to final position  

    var destination = `[row=${rowFinal}][column=${columnFinal}]`
    if (turn % 2 === 0) {
        $(destination).addClass("plant");
    } else {
        $(destination).addClass("zombie");
    }
}

function jumpUpRight(rowInitial, columnInitial) {
    var rowFinal = rowInitial - 2;
    var columnFinal = +columnInitial + 2;
    //removes red or black chip from initial position
    $(this).removeClass("plant").removeClass("zombie");
    //adds red or black chip to final position  

    var destination = `[row=${rowFinal}][column=${columnFinal}]`
    if (turn % 2 === 0) {
        $(destination).addClass("plant");
    } else {
        $(destination).addClass("zombie");
    }

}

function jumpDownLeft(rowInitial, columnInitial) {
    var rowFinal = +rowInitial + 2;
    var columnFinal = columnInitial - 2;
    //removes red or black chip from initial position
    $(this).removeClass("plant").removeClass("zombie");
    //adds red or black chip to final position  

    var destination = `[row=${rowFinal}][column=${columnFinal}]`
    if (turn % 2 === 0) {
        $(destination).addClass("plant");
    } else {
        $(destination).addClass("zombie");
    }
}

function jumpDownRight(rowInitial, columnInitial) {
    var rowFinal = +rowInitial + 2;
    var columnFinal = +columnInitial + 2;
    //removes red or black chip from initial position
    $(this).removeClass("plant").removeClass("zombie");
    //adds red or black chip to final position  

    var destination = `[row=${rowFinal}][column=${columnFinal}]`
    if (turn % 2 === 0) {
        $(destination).addClass("plant");
    } else {
        $(destination).addClass("zombie");
    }
}

function buildGameBoard(array) {
    var alternator = 0;
    var gameBoardAreaDiv = $('.boardGameArea');
    for (var rowIndex = 0; rowIndex < array.length; rowIndex++) {
        var rowDiv = $('<div>', {
            class: 'row',
            attr: {
                'row': rowIndex
            }
        });
        for (var columnIndex = 0; columnIndex < array[rowIndex].length; columnIndex++) {
            var columnDiv = $('<div>', {
                class: 'column',
                attr: {
                    'row': rowIndex,
                    'column': columnIndex
                }
            })
            if (columnIndex % 2 === 0 && alternator === 0) {
                columnDiv.addClass('red')
            } else if (columnIndex % 2 !== 0 && alternator === 0) {
                columnDiv.addClass('black')
            };

            if (columnIndex % 2 === 0 && alternator === 1) {
                columnDiv.addClass('black')
            } else if (columnIndex % 2 !== 0 && alternator === 1) {
                columnDiv.addClass('red')
            };

            if (boardGameArray[rowIndex][columnIndex] === 'B') {
                columnDiv.addClass('zombie')
            } else if (boardGameArray[rowIndex][columnIndex] === 'R') {
                columnDiv.addClass('plant')
            }
            rowDiv.append(columnDiv);
            gameBoardAreaDiv.append(rowDiv);
        }
        alternator = 1 - alternator;
    }

}

function reset(){
    console.log("reset game");
    $(".boardGameArea").empty();
    plantLives = 12;
    zombieLives = 12;
    turn = 0;
    doThisWhenReady();
    left=null;
    right =null;
    lastCellInitiated = null;
    highLightCounter = 0;
}