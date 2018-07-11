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

function buildGameBoard() {
    var j = 0;
    // this is the comment
    //another comment
    var boardGameArray =                            
     [

      ["", "", "", "", "", "", "", "" ],
      ["", "", "", "", "", "", "", "" ],
      ["", "", "", "", "", "", "", "" ],
      ["", "", "", "", "", "", "", "" ],  
      ["", "", "", "", "", "", "", "" ],  
      ["", "", "", "", "", "", "", "" ],  
      ["", "", "", "", "", "", "", "" ],  
      ["", "", "", "", "", "", "", "" ],  

    ];

    var gameBoard = $('#game-board');
    for (var i = 0; i < boardSize.rows; i++) {
        var row = $('<div>', {
            class: 'row'
        });
        for (var k = 0; k < boardSize.squares; k++) {
            var column = $('<div>', {
                class: 'square'
            })
            if (k % 2 === 0 && j === 0) {
                column.addClass('light')
            } else if (k % 2 !== 0 && j === 0) {
                column.addClass('dark')
            };

            if (k % 2 === 0 && j === 1) {
                column.addClass('dark')
            } else if (k % 2 !== 0 && j === 1) {
                column.addClass('light')
            };

            row.append(column);

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
