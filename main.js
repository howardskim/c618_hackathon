
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

function doThisWhenReady() {
    applyClickHandlers();
    buildGameBoard(boardGameArray);

}


function applyClickHandlers() {
    $('.zombie').on('click', );
    $('.plant').on('click' )
    $('.highlight').on('click', )
}

function highLight() {
    var rowInitial = $(this).attr("row")
    var columnInitial = $(this).attr("column")

    if (turn % 2 === 0 && $(this).hasClass("plant")) {
        upLeft(rowInitial, columnInitial);
        upRight(rowInitial, columnInitial);
    } else if (turn % 2 === 1 && $(this).hasClass("zombie")) {
        downLeft(rowInitial, columnInitial);
        downRight(rowInitial, columnInitial);
    }
}

function upLeft() {
    var rowInitial = $(this).attr("row")
    var columnInitial = $(this).attr("column")
    var rowFinal = rowInitial - 1;
    var columnFinal = columnInitial - 1;
    //removes red or black chip from initial position
    // $(this).removeClass("red").removeClass("black");
    //adds red or black chip to final position  

    var destinationDiv = `[row=${rowFinal}][column=${columnFinal}]`

    if ($(destinationDiv).hasClass("zombie")) {
        jumpUpLeft(rowInitial, columnInitial)
    } else if ($(destinationDiv).hasClass("plant")) {
        return;
    } else {
        $(destinationDiv).addClass("highlight");
    }



}

function upRight(rowInitial, columnInitial) {
    var rowFinal = rowInitial - 1;
    var columnFinal = columnInitial + 1;
    // $(this).removeClass("red").removeClass("black");
    //adds red or black chip to final position
    var destinationDiv = `[row=${rowFinal}][column=${columnFinal}]`

    if ($(destinationDiv).hasClass("zombie")) {
        jumpUpRight(rowInitial, columnInitial)
    } else if ($(destinationDiv).hasClass("plant")) {
        return;
    } else {
        $(destinationDiv).addClass("highlight");
    }
}

function downLeft(rowInitial, columnInitial) {
    var rowFinal = rowInitial + 1;
    var columnFinal = columnInitial - 1;
    $(this).removeClass("red").removeClass("black");
    //adds red or black chip to final position
    var destinationDiv = `[row=${rowFinal}][column=${columnFinal}]`

    if ($(destinationDiv).hasClass("plant")) {
        jumpDownLeft(rowInitial, columnInitial)
    } else if ($(destinationDiv).hasClass("zombie")) {
        return;
    } else {
        $(destinationDiv).addClass("highlight");
    }
}

function downRight(rowInitial, columnInitial) {
    var rowFinal = rowInitial + 1;
    var columnFinal = columnInitial + 1;
    $(this).removeClass("red").removeClass("black");
    //adds red or black chip to final position
    var destinationDiv = `[row=${rowFinal}][column=${columnFinal}]`
    if ($(destinationDiv).hasClass("plant")) {
        jumpDownRight(rowInitial, columnInitial)
    } else if ($(destinationDiv).hasClass("zombie")) {
        return;
    } else {
        $(destinationDiv).addClass("highlight");
    }
}

    function jumpUpLeft(row, column) {
        var rowFinal = row - 2;
        var columnFinal = column - 2;
        //removes red or black chip from initial position
        $(this).removeClass("red").removeClass("black");
        //adds red or black chip to final position  
    
        var destination = `[row=${rowFinal}][column=${columnFinal}]`
        if (turn % 2 === 0) {
            $(destination).addClass("red");
        } else {
            $(destination).addClass("black");
        }
    }

    function jumpUpRight(row, column) {
        var rowFinal = row - 2;
        var columnFinal = column + 2;
        //removes red or black chip from initial position
        $(this).removeClass("red").removeClass("black");
        //adds red or black chip to final position  

        var destination = `[row=${rowFinal}][column=${columnFinal}]`
        if (turn % 2 === 0) {
            $(destination).addClass("red");
        } else {
            $(destination).addClass("black");
        }

    }

    function jumpDownLeft(row, column) {
        var rowFinal = row + 2;
        var columnFinal = column - 2;
        //removes red or black chip from initial position
        $(this).removeClass("red").removeClass("black");
        //adds red or black chip to final position  
    
        var destination = `[row=${rowFinal}][column=${columnFinal}]`
        if (turn % 2 === 0) {
            $(destination).addClass("red");
        } else {
            $(destination).addClass("black");
        }
    }

    function jumpDownRight(row, column) {
        var rowFinal = row + 2;
        var columnFinal = column + 2;
        //removes red or black chip from initial position
        $(this).removeClass("red").removeClass("black");
        //adds red or black chip to final position  

        var destination = `[row=${rowFinal}][column=${columnFinal}]`
        if (turn % 2 === 0) {
            $(destination).addClass("red");
        } else {
            $(destination).addClass("black");
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
          
            if (boardGameArray[rowIndex][columnIndex] === 'B'){
                columnDiv.addClass('zombie')
            } else if (boardGameArray[rowIndex][columnIndex] === 'R'){
                columnDiv.addClass('plant')
            }
            rowDiv.append(columnDiv);
            gameBoardAreaDiv.append(rowDiv);
        }
            alternator = 1 - alternator;
    }   

}

