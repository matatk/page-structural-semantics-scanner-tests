'use strict'
const tap = require('tap')
const recordResults = require('../lib/recordResults')

const fakeMeta = {
	'name': 'My Test',
	'id': 'my-test'
}

const fakePositiveResult = {
	'matches': true
}

const testOnePositiveResultLogged = []

const expectedOnePositive = [
	{
		'meta': {
			'name': 'My Test',
			'id': 'my-test'
		},
		'result': {
			'matches': true
		}
	}
]

recordResults(fakeMeta, fakePositiveResult, testOnePositiveResultLogged)

tap.strictSame(
	testOnePositiveResultLogged,
	expectedOnePositive,
	'collates results')
