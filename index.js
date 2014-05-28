


module.exports.checkRow = function(puzzle, row, comparedNumber){
	// get the first nine characters from puzzle...
	// put those into a array[]
	// iterate thru row and compare to comparedNumber and return result
	
	var result = false;
	var row1 = puzzle.substr(0, 9);
	var row2 = puzzle.substr(9, 9);
	var row3 = puzzle.substr(18, 9);
	var row4 = puzzle.substr(27, 9);
	var row5 = puzzle.substr(36, 9);
	var row6 = puzzle.substr(45, 9);
	var row7 = puzzle.substr(54, 9);
	var row8 = puzzle.substr(63, 9);
	var row9 = puzzle.substr(72, 9);

	if (row === 1) row = row1;
	if (row === 2) row = row2;
	if (row === 3) row = row3;
	if (row === 4) row = row4;
	if (row === 5) row = row5;
	if (row === 6) row = row6;
	if (row === 7) row = row7;
	if (row === 8) row = row8;
	if (row === 9) row = row9;


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