'use strict'
const assert = require('assert')
const diff = require('diff')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

function scanAndReturnResult(scanner, fixture, expectation) {
	if (typeof scanner !== 'function') {
		throw Error('Scanner is not a function')
	}

	if (typeof fixture !== 'string') {
		throw Error('Fixture must be an (HTML) string')
	}

	if (typeof expectation === 'object') {
		try {
			JSON.stringify(expectation)
		} catch (error) {
			throw Error('Expectation is not a serialisable object')
		}
	} else {
		throw Error('Expectation is not an object')
	}

	const dom = new JSDOM(fixture)
	const result = scanner(dom.window, dom.window.document)

	if (result === undefined) {
		throw Error('Scanner did not return anything')
	}

	return result
}

function scanAndReturnPatch(scanner, fixture, expectation) {
	const result = scanAndReturnResult(scanner, fixture, expectation)

	try {
		assert.deepStrictEqual(result, expectation)
	} catch (error) {
		const patch = diff
			.createPatch(
				'',
				JSON.stringify(expectation, null, 2),
				JSON.stringify(result, null, 2),
				'expectation',
				'result')
			.split('\n')
			.slice(2, -2)
			.join('\n')
			.replace(/\t/g, '')
		return {
			'matches': false,
			'patch': patch
		}
	}

	return { 'matches': true }
}

module.exports = {
	'scanAndReturnResult': scanAndReturnResult,
	'scanAndReturnPatch': scanAndReturnPatch
}
