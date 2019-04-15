'use strict'
const path = require('path')

const tap = require('tap')
const iterator = require('../lib/iterator')

const baseDir = path.join(__dirname, 'simple')
const validFixturesDir = path.join(baseDir, 'fixtures')
const validExpectationsDir = path.join(baseDir, 'expectations')

tap.throws(function() {
	iterator()
}, 'iterator requires test fixtures dir')

tap.throws(function() {
	iterator(validFixturesDir)
}, 'iterator requires test expectations dir')

tap.throws(function() {
	iterator(validFixturesDir, validExpectationsDir)
}, 'iterator requires a function to run')

tap.doesNotThrow(function() {
	iterator(validFixturesDir, validExpectationsDir, () => {})
}, 'iterator accepts valid fixtures and expectations dirs and function')

tap.test('iterator gives the code to run the right stuff', t => {
	const expectedCalls = [
		[
			{ 'name': 'Simple 1' },
			'<p>Simple HTML fixture 1</p>\n',
			{ 'expectation': 1 }
		],
		[
			{ 'name': 'Simple 2' },
			'<p>Simple HTML fixture 2</p>\n',
			{ 'expectation': 2 }
		]
	]

	const calls = []

	function runOnEachTest(testName, testFixture, testExpectation) {
		calls.push([testName, testFixture, testExpectation])
	}

	iterator(validFixturesDir, validExpectationsDir, runOnEachTest)

	t.strictSame(
		calls,
		expectedCalls,
		'iterator makes expected calls')

	t.end()
})
