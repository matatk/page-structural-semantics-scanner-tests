'use strict'
const path = require('path')

const tap = require('tap')
const getFullPageTests = require('../lib/getFullPageTests')

const baseDir = path.join(__dirname, 'simple')
const validFixturesDir = path.join(baseDir, 'fixtures')
const validExpectationsDir = path.join(baseDir, 'expectations')

const expectedTests = {
	'simple-1': {
		'meta': { 'name': 'Simple 1' },
		'fixture': path.join(validFixturesDir, 'simple-1.html'),
		'expected': { 'expectation': 1 }
	},
	'simple-2': {
		'meta': { 'name': 'Simple 2' },
		'fixture': path.join(validFixturesDir, 'simple-2.html'),
		'expected': { 'expectation': 2 }
	}
}

tap.strictSame(
	getFullPageTests(validFixturesDir, validExpectationsDir),
	expectedTests,
	'Full-page tests are returned, with paths to the HTML files')
