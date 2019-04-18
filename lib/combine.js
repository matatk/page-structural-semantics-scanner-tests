'use strict'
const iterator = require('./iterator')

module.exports = function(fixturesDir, expectationsDir) {
	const outFixtures = []
	const outExpectations = {}
	iterator(fixturesDir, expectationsDir, (meta, fixture, expectation) => {
		if (meta.id === 'application-alone-on-body-is-ignored') return
		if (meta.id === 'landmark-role-on-body') return
		const body = fixture.match(/<body>(.+?)<\/body>/s)[1]
		outFixtures.push(`<div data-test-id="${meta.id}">` + body + '</div>')
		outExpectations[meta.id] = { 'meta': meta, 'expected': expectation }
		delete outExpectations[meta.id].meta.id  // DRY
	})
	return {
		'html': outFixtures.join('\n'),
		'json': outExpectations
	}
}
