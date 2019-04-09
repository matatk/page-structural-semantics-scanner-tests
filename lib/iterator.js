'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function iterator(fixturesDir, expectationsDir, run) {
	if (!fs.existsSync(fixturesDir)) {
		throw Error(`Fixtures dir ${fixturesDir} doesn't exist`)
	}

	if (!fs.existsSync(expectationsDir)) {
		throw Error(`Expectations dir ${expectationsDir} doesn't exist`)
	}

	if (typeof run !== 'function') {
		throw Error('Code to run for each test is not a function')
	}

	const files = fs.readdirSync(fixturesDir)

	for (const htmlFile of files) {
		const baseName = htmlFile.substring(0, htmlFile.length - 5)
		const testName = baseName.charAt(0).toUpperCase()
			+ baseName.slice(1).replace(/-/g, ' ')
		const expectation = require(
			path.join(expectationsDir, baseName + '.json')).expected
		const html = fs.readFileSync(path.join(fixturesDir, htmlFile), 'utf-8')
		run(testName, html, expectation)
	}
}
