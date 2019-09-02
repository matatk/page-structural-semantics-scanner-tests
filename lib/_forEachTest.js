'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function(fixturesDir, expectationsDir, inline, run) {
	const files = fs.readdirSync(fixturesDir)

	for (const htmlFile of files) {
		const baseName = htmlFile.substring(0, htmlFile.length - 5)
		const data = require(path.join(expectationsDir, baseName + '.json'))
		const html = inline
			? fs.readFileSync(path.join(fixturesDir, htmlFile), 'utf-8')
			: path.join(fixturesDir, htmlFile)

		run(baseName, data.meta, html, data.expected)
	}
}
