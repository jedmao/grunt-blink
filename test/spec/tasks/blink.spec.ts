import sinonChai = require('../../sinon-chai');
var expect = sinonChai.expect;
var grunt = require('grunt');


// ReSharper disable WrongExpressionStatement
describe('blink task', () => {

	it('compiles expected css output', () => {
		['foo', 'bar'].forEach(base => {
			var filename = base + '.css';
			var actual = grunt.file.read('tmp/' + filename);
			var expected = grunt.file.read('test/expected/' + filename);
			expect(actual).to.eq(expected);
		});
	});

});
