
module.exports.checkRow = function(puzzle, row, comparedNumber){
	// get the first nine characters from puzzle...
	// put those into a array[]
	// iterate thru row and compare to comparedNumber and return result
var result = false;


var x = (row*9);
row = puzzle.substr(x, 9);

	row = row.split('');
	//console.log("+%j+", row1);
	row.forEach(function(number) {
		number = parseInt(number);
	//	console.log(number);
		if (number === comparedNumber) {
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

var xString = puzzle.substr(x, 3);
var yString = puzzle.substr(y, 3);
var zString = puzzle.substr(z, 3);

boxContents = xString+yString+zString;

//console.log(boxContents);

boxContents = boxContents.split('');
//console.log("+%j+", boxContents1);
boxContents.forEach(function(number) {
  number = parseInt(number);
//  console.log(number);
  if (number === comparedNumber) {
    result = true;
  }
});
return result;

};
