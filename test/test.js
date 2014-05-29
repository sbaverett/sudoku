var expect = require('chai').expect;
var _ = require('..');
		// var row1 = [1, 5, 8, ' ', 2, ' ', 6, ' ', 2];
		// var checkRow = function(puzzle, row, comparedNumber){
		// 	if (forEach.row === comparedNumber);
		// 	return true;
		// };

var puzzle = '158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413';
puzzle = puzzle.split('');

describe('checkRow()', function() {

	//row0

	it('should check row0 for number 1', function() {
		expect(_.checkRow(puzzle, 0, 1)).to.eql(true);
	});

	it('should check row0 for number 2', function() {
		expect(_.checkRow(puzzle, 0, 2)).to.eql(true);
	});
	it('should check row0 for number 3', function() {
		expect(_.checkRow(puzzle, 0, 3)).to.eql(false);
	});
	it('should check row0 for number 4', function() {
		expect(_.checkRow(puzzle, 0, 4)).to.eql(false);
	});

	//row1

	it('should check row1 for number 1', function() {
		expect(_.checkRow(puzzle, 1, 1)).to.eql(false);
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

});


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

describe('checkBox()', function() {

	//box0

  it.only('should check box0 for number 1', function() {
    expect(_.checkBox(puzzle, 0, 1)).to.eql(true);
  });

  it('should check box0 for number 2', function() {
    expect(_.checkBox(puzzle, 0, 2)).to.eql(true);
  });

  it('should check box0 for number 3', function() {
    expect(_.checkBox(puzzle, 0, 3)).to.eql(true);
  });

  it('should check box0 for number 4', function() {
    expect(_.checkBox(puzzle, 0, 4)).to.eql(false);
  });

  //box1
  it('should check box1 for number 1', function() {
    expect(_.checkBox(puzzle, 1, 1)).to.eql(false);
  });

  it('should check box1 for number 2', function() {
    expect(_.checkBox(puzzle, 1, 2)).to.eql(true);
  });

  it('should check box1 for number 3', function() {
    expect(_.checkBox(puzzle, 1, 3)).to.eql(false);
  });

  it('should check box1 for number 4', function() {
    expect(_.checkBox(puzzle, 1, 4)).to.eql(false);
  });
});

describe("defineBox()", function() {
  it('should define values in box0 correctly', function() {
    expect(_.defineBox(0)).to.eql([0, 1, 2, 9, 10, 11, 18, 19, 20]);
  });
  it('should define values in box5 correctly', function() {
    expect(_.defineBox(5)).to.eql([33, 34, 35, 42, 43, 44, 51, 52, 53]);
  });
  it('should define values in box8 correctly', function() {
    expect(_.defineBox(8)).to.eql([60, 61, 62, 69, 70, 71, 78, 79, 80]);
  });
});

// describe('checkColumn()', function() {

// 	//column1

// 	it('should check column1 for number 1', function() {
// 		expect(_.checkColumn(puzzle, 2, 1)).to.eql(false);
// 	});

// 	it('should check row2 for number 1', function() {
// 		expect(_.checkColumn(puzzle, 2, 1)).to.eql(false);
// 	});

// 	it('should check row2 for number 1', function() {
// 		expect(_.checkColumn(puzzle, 2, 1)).to.eql(false);
// 	});

// 	it('should check row2 for number 1', function() {
// 		expect(_.checkColumn(puzzle, 2, 1)).to.eql(false);
// 	});
// });









