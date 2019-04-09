'use strict'
const path = require('path')
const iterator = require('../lib/iterator')
const converter = require('../lib/converters').landmarks
const scan = require('../lib/scan').scanAndReturnPatch
const tableEntryMaker = require('../lib/tableEntryMaker')

const fixtures = path.join(__dirname, '..', 'fixtures')
const expectations = path.join(__dirname, '..', 'expectations')

const style = `
table {
  border-collapse: collapse;
}

th, td {
  border: 1px solid gray;
  padding: 0.5em;
}`

console.log(`<html><head><style>${style}</style>
	<body><h1>Landmarks Tests</h1><table>`)
console.log('<tr><th>Fixture</th><th>Result</th></tr>')

iterator(fixtures, expectations, (testName, html, expectation) => {
	const landmarksFormatExpectation = converter(expectation)
	const result = scan(() => 42, html, landmarksFormatExpectation)
	console.log(tableEntryMaker(testName, result.patch))
})

console.log('</table></body></html>')
