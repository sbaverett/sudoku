'use strict';

var _ = require('lodash');

var defineColumn = module.exports.defineColumn = function(column) {
  return _.range(column, 81, 9);
};

var defineRow = module.exports.defineRow = function(row) {
  return _.range(row * 9, (row + 1) * 9);
};

var defineBox = module.exports.defineBox = function(box) {
  var subRange = function(row, col) {
    return _.range(row * 9 + col, row * 9 + col + 3);
  };
  var row = Math.floor(box / 3) * 3;
  var col = box % 3 * 3;
  return []
    .concat(subRange(row + 0, col))
    .concat(subRange(row + 1, col))
    .concat(subRange(row + 2, col));
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
