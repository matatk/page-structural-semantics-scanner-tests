'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function(fixturesDir, expectationsDir, inline, run) {
	const files = fs.readdirSync(fixturesDir)

	for (const htmlFile of files) {
		const baseName = path.basename(htmlFile)
		if (!baseName.endsWith('.html') || baseName.startsWith('.')) continue

		const baseNameNoExt = baseName.slice(0, -5)
		const data = require(
			path.join(expectationsDir, baseNameNoExt + '.json'))
		const html = inline
			? fs.readFileSync(path.join(fixturesDir, htmlFile), 'utf-8')
			: path.join(fixturesDir, htmlFile)

		run(baseNameNoExt, data.meta, html, data.expected)
	}
}
