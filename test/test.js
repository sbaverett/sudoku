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

  it('should check box0 for number 1', function() {
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

describe('defineBox()', function() {
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

describe('defineColumn()', function() {
  it('should give index for column 0', function() {
    expect(_.defineColumn(0)).to.eql([0, 9, 18, 27, 36, 45, 54, 63, 72]);
  });
  it('should give index for column 3', function() {
    expect(_.defineColumn(3)).to.eql([3, 12, 21, 30, 39, 48, 57, 66, 75]);
  });
  it('should give index for column 5', function() {
    expect(_.defineColumn(5)).to.eql([5, 14, 23, 32, 41, 50, 59, 68, 77]);
  });
  it('should give index for column 8', function() {
    expect(_.defineColumn(8)).to.eql([8, 17, 26, 35, 44, 53, 62, 71, 80]);
  });
});









