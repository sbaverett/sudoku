
module.exports.checkRow = function(puzzle, row, comparedNumber){
	// get the first nine characters from puzzle...
	// put those into a array[]
	// iterate thru row and compare to comparedNumber and return result
var result = false;


var n = (row*9);
row = puzzle.substr(n, 9);

 console.log(n);

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


};
