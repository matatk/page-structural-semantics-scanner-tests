'use strict'
const jsdom = require('jsdom')
const { JSDOM } = jsdom

module.exports = function(scanner, fixture, expectation) {
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
