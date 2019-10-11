'use strict'
const forEachTest = require('./_forEachTest')

module.exports = function(fixturesDir, expectationsDir) {
	const outFixtures = []
	const outExpectations = {}

	function addTest(id, meta, fixture, expectation) {
		if (id === 'application-alone-on-body-is-ignored') return
		if (id === 'landmark-role-on-body') return
		const body = fixture.match(/<body>(.+?)<\/body>/s)[1]
		outFixtures.push(`<div data-test-id="${id}">` + body + '</div>')
		outExpectations[id] = { 'meta': meta, 'expected': expectation }
	}

	forEachTest(fixturesDir, expectationsDir, true, addTest)

	return {
		'html': outFixtures.join('\n'),
		'json': outExpectations
	}
}
