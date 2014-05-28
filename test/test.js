var expect = require('chai').expect;
var _ = require('..');
		// var row1 = [1, 5, 8, ' ', 2, ' ', 6, ' ', 2];
		// var checkRow = function(puzzle, row, comparedNumber){
		// 	if (forEach.row === comparedNumber);
		// 	return true;
		// };


describe('checkRow1()', function() {

	var puzzle = '158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413';
	
	//row1

	it('should check row1 for number 1', function() {
		expect(_.checkRow(puzzle, 1, 1)).to.eql(true);
	});

	it('should check row1 for number 2', function() {
		expect(_.checkRow(puzzle, 1, 2)).to.eql(true);
	});
	it('should check row1 for number 3', function() {
		expect(_.checkRow(puzzle, 1, 3)).to.eql(false);
	});
	it('should check row1 for number 4', function() {
		expect(_.checkRow(puzzle, 1, 4)).to.eql(false);
	});
	
	//row2

	it('should check row2 for number 1', function() {
		expect(_.checkRow(puzzle, 2, 1)).to.eql(false);
	});

	it('should check row2 for number 2', function() {
		expect(_.checkRow(puzzle, 2, 2)).to.eql(true);
	});
	it('should check row2 for number 3', function() {
		expect(_.checkRow(puzzle, 2, 3)).to.eql(false);
	});
	it('should check row2 for number 4', function() {
		expect(_.checkRow(puzzle, 2, 4)).to.eql(false);
	});

});