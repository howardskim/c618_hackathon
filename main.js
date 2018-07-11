function jumpUpLeft(gamePiecePos, posX, posY){
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

function jumpUpRight(gamePiecePos, posX, posY){
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

function jumpDownLeft(gamePiecePos, posX, posY){
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

function jumpDownRight(gamePiecePos, posX, posY){
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