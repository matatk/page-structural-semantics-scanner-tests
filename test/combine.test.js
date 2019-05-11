'use strict'
const path = require('path')
const tap = require('tap')
const combine = require('../lib/combine')

const baseDir = path.join(__dirname, 'simple')
const validFixturesDir = path.join(baseDir, 'fixtures')
const validExpectationsDir = path.join(baseDir, 'expectations')

const expectedHtml = '<div data-test-id="simple-1"><p>Simple HTML fixture 1</p></div>\n<div data-test-id="simple-2"><p>Simple HTML fixture 2</p></div>'

tap.equal(
	combine(validFixturesDir, validExpectationsDir).html,
	expectedHtml,
	'combines the test fixtures')

const expectedJson = {
	'simple-1': {
		'meta': {
			'name': 'Simple 1'
		},
		'expected': {
			'expectation': 1
		}
	},
	'simple-2': {
		'meta': {
			'name': 'Simple 2'
		},
		'expected': {
			'expectation': 2
		}
	}
}

tap.strictSame(
	combine(validFixturesDir, validExpectationsDir).json,
	expectedJson,
	'combines the test expectations')
