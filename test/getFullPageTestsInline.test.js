'use strict'
const path = require('path')

const tap = require('tap')
const getFullPageTests = require('../lib/getFullPageTestsInline')

const baseDir = path.join(__dirname, 'simple')
const validFixturesDir = path.join(baseDir, 'fixtures')
const validExpectationsDir = path.join(baseDir, 'expectations')

const expectedTests = {
	'simple-1': {
		'meta': { 'name': 'Simple 1' },
		'fixture': '<html><body><p>Simple HTML fixture 1</p></body></html>\n',
		'expected': { 'expectation': 1 }
	},
	'simple-2': {
		'meta': { 'name': 'Simple 2' },
		'fixture': '<html><body><p>Simple HTML fixture 2</p></body></html>\n',
		'expected': { 'expectation': 2 }
	}
}

tap.strictSame(
	getFullPageTests(validFixturesDir, validExpectationsDir),
	expectedTests,
	'Full-page tests are returned, with HTML contents inline')
