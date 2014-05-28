


module.exports.checkRow = function(puzzle, row, comparedNumber){
	// get the first nine characters from puzzle...
	// put those into a array[]
	// iterate thru row and compare to comparedNumber and return result
	
	var result = false;
	var row1 = puzzle.substr(0, 9);

	row1 = row1.split('');
	console.log("+%j+", row1);
	row1.forEach(function(number){
		number = parseInt(number);
		console.log(number);
		if (number === comparedNumber){
			result = true;
		}
	});
	return result;
};