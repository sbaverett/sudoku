
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
// 	var result = false;
// 	if (box === 0 || box === 3 || box === 6)
// 		// we want to multiply the row number by 9 and use at start in splice,
// 		// end splice at start plus 3
// 		//splice the puzzle
// 		//do same thing for next two rows
// 		else-if (box === 1 || box === 4 || box === 7)



// // boxContents = xString+yString+zString;

// //console.log(boxContents);

// //console.log("+%j+", boxContents1);
// boxContents.forEach(function(number) {
//   number = parseInt(number);
// //  console.log(number);
//     result = (number === comparedNumber);
// });
// return result;

};
module.exports.defineBox = function(box) {
	var rows = [];
	if (box === 0 || box === 1 || box === 2) {
		rows = [0, 1, 2]		 
	};
	else if	(box === 3 || box === 4 || box === 5) {
		rows = [3, 4, 5]
	};
	else if (box === 6 || box === 7 || box === 8) {
		rows = [6, 7, 8]
	};

}