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

function upLeft() {
    var rowInitial = $(this).attr("row")
    var columnInitial = $(this).attr("column")
    var rowFinal = rowInitial - 1;
    var columnFinal = columnInitial - 1;
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

function upRight(rowInitial, columnInitial) {
    var rowFinal = rowInitial - 1;
    var columnFinal = columnInitial + 1;
    $(this).removeClass("red").removeClass("black");
    //adds red or black chip to final position
    var destination = `[row=${rowFinal}][column=${columnFinal}]`
    if (turn % 2 === 0) {
        $(destination).addClass("red");
    } else {
        $(destination).addClass("black");
    }
}

function downLeft(rowInitial, columnInitial) {
    var rowFinal = rowInitial + 1;
    var columnFinal = columnInitial - 1;
    $(this).removeClass("red").removeClass("black");
    //adds red or black chip to final position
    var destination = `[row=${rowFinal}][column=${columnFinal}]`
    if (turn % 2 === 0) {
        $(destination).addClass("red");
    } else {
        $(destination).addClass("black");
    }
}

function downRight(rowInitial, columnInitial) {
    var rowFinal = rowInitial + 1;
    var columnFinal = columnInitial - 1;
    $(this).removeClass("red").removeClass("black");
    //adds red or black chip to final position
    var destination = `[row=${rowFinal}][column=${columnFinal}]`
    if (turn % 2 === 0) {
        $(destination).addClass("red");
    } else {
        $(destination).addClass("black");
    }
}

function jumpUpLeft(posX, posY) {
    var user;
    var enemy;

    if (gamePiecePos.hasClass("red")) {
        return;
    } else if (gamePiecePos.hasClass("black")) {
        return;
    }
    if (user.hasClass("red")) {
        enemy.removeClass("black");
        gamePiecePos[posX - 2][posY - 2];
    } else return;
    if (user.hasClass("black")) {
        enemy.removeClass("red");
        gamePiecePos[posX - 2][posY - 2];
    } else return;
}

function jumpUpRight(posX, posY) {
    var user;
    var enemy;

    if (gamePiecePos.hasClass("red")) {
        return;
    } else if (gamePiecePos.hasClass("black")) {
        return;
    }
    if (user.hasClass("red")) {
        enemy.removeClass("black");
        gamePiecePos[posX - 2][posY + 2];
    } else return;
    if (user.hasClass("black")) {
        enemy.removeClass("red");
        gamePiecePos[posX - 2][posY + 2];
    } else return;
}

function jumpDownLeft(posX, posY) {
    var user;
    var enemy;

    if (gamePiecePos.hasClass("red")) {
        return;
    } else if (gamePiecePos.hasClass("black")) {
        return;
    }
    if (user.hasClass("red")) {
        enemy.removeClass("black");
        gamePiecePos[posX + 2][posY - 2];
    } else return;
    if (user.hasClass("black")) {
        enemy.removeClass("red");
        gamePiecePos[posX + 2][posY - 2];
    } else return;
}

function jumpDownRight(posX, posY) {
    var user;
    var enemy;

    if (gamePiecePos.hasClass("red")) {
        return;
    } else if (gamePiecePos.hasClass("black")) {
        return;

    }
    if (user.hasClass("red")) {
        enemy.removeClass("black");
        gamePiecePos[posX + 2][posY + 2];
    } else return;
    if (user.hasClass("black")) {
        enemy.removeClass("red");
        gamePiecePos[posX + 2][posY + 2];
    } else return;

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

