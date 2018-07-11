function jumpUpLeft(posX, posY){
    var user;
    var enemy;
 
    if(gamePiecePos.hasClass("red")){
        return;
    }else if(gamePiecePos.hasClass("black")){
        return;
    }
    if(user.hasClass("red")){
        enemy.removeClass("black");
        gamePiecePos[posX - 2][posY - 2];
    }else return;
    if(user.hasClass("black")){
        enemy.removeClass("red");
        gamePiecePos[posX - 2][posY - 2];
    }else return;
}

function jumpUpRight(posX, posY){
    var user;
    var enemy;
 
    if(gamePiecePos.hasClass("red")){
        return;
    }else if(gamePiecePos.hasClass("black")){
        return;
    }
    if(user.hasClass("red")){
        enemy.removeClass("black");
        gamePiecePos[posX - 2][posY + 2];
    }else return;
    if(user.hasClass("black")){
        enemy.removeClass("red");
        gamePiecePos[posX - 2][posY + 2];
    }else return;
}

function jumpDownLeft(posX, posY){
    var user;
    var enemy;
 
    if(gamePiecePos.hasClass("red")){
        return;
    }else if(gamePiecePos.hasClass("black")){
        return;
    }
    if(user.hasClass("red")){
        enemy.removeClass("black");
        gamePiecePos[posX + 2][posY - 2];
    }else return;
    if(user.hasClass("black")){
        enemy.removeClass("red");
        gamePiecePos[posX + 2][posY - 2];
    }else return;
}

function jumpDownRight(posX, posY){
    var user;
    var enemy;
 
    if(gamePiecePos.hasClass("red")){
        return;
    }else if(gamePiecePos.hasClass("black")){
        return;
    }
    if(user.hasClass("red")){
        enemy.removeClass("black");
        gamePiecePos[posX + 2][posY + 2];
    }else return;
    if(user.hasClass("black")){
        enemy.removeClass("red");
        gamePiecePos[posX + 2][posY + 2];
    }else return;
}

function buildGameBoard() {
    var j = 0
    var boardGameArray =                            
     [
      ["", "", "", "", "", "", "", "", ],
      ["", "", "", "", "", "", "", "", ],
      ["", "", "", "", "", "", "", "", ],
      ["", "", "", "", "", "", "", "", ],  
      ["", "", "", "", "", "", "", "", ],  
      ["", "", "", "", "", "", "", "", ],  
      ["", "", "", "", "", "", "", "", ],  
      ["", "", "", "", "", "", "", "", ],  
    ];

    var gameBoard = $('#game-board');
    for (var i = 0; i < boardSize.rows; i++) {
        var row = $('<div>', {
            class: 'row'
        })
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
        }
        $('#game-board').append(row);
        j = -j + 1;

    }
}