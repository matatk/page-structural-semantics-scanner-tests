'use strict'
const tap = require('tap')
const check = require('../lib/check')

const exampleResult = [
	{ role: 'banner' },
	{ role: 'main' },
	{ role: 'contentinfo' }
]

tap.test('When there is a match', t => {
	const expectedResultEqual = [
		{ role: 'banner' },
		{ role: 'main' },
		{ role: 'contentinfo' }
	]

	t.strictSame(
		check(exampleResult, expectedResultEqual),
		{ matches: true },
		'Returns true (and no patch) when the result matches the expectation')

	t.end()
})

tap.test("When there isn't a match", t => {
	const expectedResultDiffernt = [
		{ role: 'banner' },
		{ role: 'navigation' },
		{ role: 'main' },
		{ role: 'contentinfo' }
	]

	const result = check(exampleResult, expectedResultDiffernt)

	t.equal(
		result.matches,
		false,
		"Returns false when the result doesn't match the expectation")

	t.equal(
		result.patch,
		'',
		"Returns a patch when the result doesn't match the expectation")

	t.end()
})
