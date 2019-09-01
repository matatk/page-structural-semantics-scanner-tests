'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function(fixturesDir, expectationsDir) {
	const files = fs.readdirSync(fixturesDir)
	const tests = {}

	for (const htmlFile of files) {
		const baseName = htmlFile.substring(0, htmlFile.length - 5)
		const data = require(path.join(expectationsDir, baseName + '.json'))
		const html = fs.readFileSync(path.join(fixturesDir, htmlFile), 'utf-8')

		tests[baseName] = {
			'meta': data.meta,
			'fixture': html,
			'expected': data.expected
		}
	}

	return tests
}
