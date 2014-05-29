
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

module.exports.checkBox = function(puzzle, box, comparedNumber) {
var result = false;
var x = 0;
var y = 9;
var z = 18;

x = ((box*3) + x);
y = ((box*3) + y);
z = ((box*3) + z);

// var xString = puzzle.substr(x, 3);
// var yString = puzzle.substr(y, 3);
// var zString = puzzle.substr(z, 3);



boxContents = xString+yString+zString;

//console.log(boxContents);

//console.log("+%j+", boxContents1);
boxContents.forEach(function(number) {
  number = parseInt(number);
//  console.log(number);
    result = (number === comparedNumber);
});
return result;

};
