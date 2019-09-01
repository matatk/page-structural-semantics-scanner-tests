'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function(fixturesDir, expectationsDir) {
	const files = fs.readdirSync(fixturesDir)
	const outFixtures = []
	const outExpectations = {}

	function addTest(id, meta, fixture, expectation) {
		if (id === 'application-alone-on-body-is-ignored') return
		if (id === 'landmark-role-on-body') return
		const body = fixture.match(/<body>(.+?)<\/body>/s)[1]
		outFixtures.push(`<div data-test-id="${id}">` + body + '</div>')
		outExpectations[id] = { 'meta': meta, 'expected': expectation }
	}

	for (const htmlFile of files) {
		const baseName = htmlFile.substring(0, htmlFile.length - 5)
		const data = require(path.join(expectationsDir, baseName + '.json'))
		const html = fs.readFileSync(path.join(fixturesDir, htmlFile), 'utf-8')

		addTest(baseName, data.meta, html, data.expected)
	}

	return {
		'html': outFixtures.join('\n'),
		'json': outExpectations
	}
}
