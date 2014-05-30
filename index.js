'use strict';

var defineColumn = module.exports.defineColumn = function(column) {
  var resultingArray = [];
  var counter = 0;
  var number = column;
  var continueDefining = function(number, counter) {
    number = number + 9;
      if (counter < 8) {
        resultingArray.push(number);
        continueDefining(number, counter + 1);
      }
  };
  var startDefining = function(column) {
    resultingArray.push(column);
    continueDefining(column, 0);
  };
  startDefining(column);
  return resultingArray;
};

var defineBox = module.exports.defineBox = function(box) {
	var rows = [];
  var resultingArray = [];

	if (box === 0 || box === 1 || box === 2) {
		rows = [0, 1, 2];
	}
	else if	(box === 3 || box === 4 || box === 5) {
		rows = [3, 4, 5];
	}
	else if (box === 6 || box === 7 || box === 8) {
		rows = [6, 7, 8];
	}

  if (box === 0 || box === 3 || box === 6){
    rows.forEach(function(number){
      number = number * 9;
      resultingArray.push(number);
      number = number + 1;
      resultingArray.push(number);
      number = number + 1;
      resultingArray.push(number);
    });
  }

  else if (box === 1 || box === 4 || box === 7){
    rows.forEach(function(number){
      number = ((number * 9) + 3);
      resultingArray.push(number);
      number = number + 1;
      resultingArray.push(number);
      number = number + 1;
      resultingArray.push(number);
    });
  }

  else if (box === 2 || box === 5 || box === 8){
    rows.forEach(function(number){
      number = ((number * 9) + 6);
      resultingArray.push(number);
      number = number + 1;
      resultingArray.push(number);
      number = number + 1;
      resultingArray.push(number);
    });
  }
  return resultingArray;
};

module.exports.checkBoxCol = function(puzzle, boxColNum, comparedNumber, isBoxOrCol) {
  var result = false;
  var array = [];
  if (isBoxOrCol === 'box'){
    array = defineBox(boxColNum);
  }
  else if (isBoxOrCol === 'column'){
    array = defineColumn(boxColNum);
  }

    var contents = array.map(function(index) {
      return puzzle[index];
    });
    contents.forEach(function(number) {
      number = parseInt(number);
      if (number === comparedNumber){
        result = true;
      }
    });
  return result;
};

module.exports.checkRow = function(puzzle, row, comparedNumber){
  var result = false;

  var x = (row*9);
  row = puzzle.slice(x, (x + 9));
    row.forEach(function(number) {
      number = parseInt(number);
      if (number === comparedNumber){
        result = true;
      }
    });
    return result;
};
