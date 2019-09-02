'use strict'
const forEachTest = require('./_forEachTest')

module.exports = function(fixturesDir, expectationsDir) {
	const tests = {}

	function addTest(id, meta, fixture, expectation) {
		tests[id] = {
			'meta': meta,
			'fixture': fixture,
			'expected': expectation
		}
	}

	forEachTest(fixturesDir, expectationsDir, true, addTest)
	return tests
}
