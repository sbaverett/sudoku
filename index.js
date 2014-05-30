'use strict';

var _ = require('lodash');

var defineColumn = module.exports.defineColumn = function(column) {
  return _.range(column, 81, 9);
};

var defineRow = module.exports.defineRow = function(row) {
  return _.range(row * 9, (row + 1) * 9);
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

var checkHelper = function(puzzle, boxColNum, comparedNumber, defineFn) {
  var result = false;
  var array = defineFn(boxColNum);

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

module.exports.checkBox = function(puzzle, boxColNum, comparedNumber) {
  return checkHelper(puzzle, boxColNum, comparedNumber, defineBox);
};

module.exports.checkColumn = function(puzzle, boxColNum, comparedNumber) {
  return checkHelper(puzzle, boxColNum, comparedNumber, defineColumn);
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

module.exports.solve = function(indexNumber) {
  //check if number is in row, col and box
  //make array 1-9,  
}
