// function movement(row, column) {
//     if ()

// }

//get the value of row attribute and column attribute, respectively.


function upLeft() {


    var rowInitial = $(this).attr("row")
    var columnInitial = $(this).attr("column")


    var rowFinal = rowInitial - 1;
    var columnFinal = columnInitial - 1;
    //removes red or black chip from initial position
    $(this).removeClass("red").removeClass("black");
    //adds red or black chip to final position
   var destination = `[row=${rowFinal}][column=${columnFinal}]`
   if (turn%2 === 0) {
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
   if (turn%2 === 0) {
    $(destination).addClass("red");
   } else {
     $(destination).addClass("black");  
   }
}

function downLeft(rowInitial, columnInitial) {
    var rowFinal = rowInitial + 1;
    var columnFinal = columnInitial -1;
    $(this).removeClass("red").removeClass("black");
    //adds red or black chip to final position
    var destination = `[row=${rowFinal}][column=${columnFinal}]`
    if (turn%2 === 0) {
     $(destination).addClass("red");
    } else {
      $(destination).addClass("black");  
    }
}

function downRight(rowInitial, columnInitial) {
    var rowFinal = rowInitial + 1;
    var columnFinal = columnInitial -1;
    $(this).removeClass("red").removeClass("black");
    //adds red or black chip to final position
    var destination = `[row=${rowFinal}][column=${columnFinal}]`
    if (turn%2 === 0) {
     $(destination).addClass("red");
    } else {
      $(destination).addClass("black");  
    }
}