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

var checkHelper = function(puzzle, itemNumber, comparedNumber, defineFn) {
  var result = false;
  var array = defineFn(itemNumber);
  return _.any(array, function(index) {
    var number = parseInt(puzzle[index]);
    return number === comparedNumber;
  });
};

module.exports.checkBox = function(puzzle, box, comparedNumber) {
  return checkHelper(puzzle, box, comparedNumber, defineBox);
};

module.exports.checkColumn = function(puzzle, col, comparedNumber) {
  return checkHelper(puzzle, col, comparedNumber, defineColumn);
};

module.exports.checkRow = function(puzzle, row, comparedNumber){
  return checkHelper(puzzle, row, comparedNumber, defineRow);
};

module.exports.solve = function(indexNumber) {
  //check if number is in row, col and box
  //make array 1-9,  
}
