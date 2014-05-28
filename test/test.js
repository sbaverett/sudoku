var expect = require('chai').expect;

		// var row1 = [1, 5, 8, ' ', 2, ' ', 6, ' ', 2];
		// var checkRow = function(puzzle, row, comparedNumber){
		// 	if (forEach.row === comparedNumber);
		// 	return true;
		// };


describe('checkRow1()', function() {

	var puzzle = '158 2 6 2 8 9 3 7 8 2 6 74 4 6 7 19 5 4 9 3 2 2 5 8 7 9 413';
	
	it('should check row1 for number 1', function() {
		expect(checkRow(puzzle, 1, 1).to.eql(true));
	});

	it('should check row1 for number 2', function() {
		expect(checkRow(puzzle, 1, 2).to.eql(true));
	});
	it('should check row1 for number 3', function() {
		expect(checkRow(puzzle, 1, 3).to.eql(false));
	});
	it('should check row1 for number 4', function() {
		expect(checkRow(puzzle, 1, 4).to.eql(false));
	});
});