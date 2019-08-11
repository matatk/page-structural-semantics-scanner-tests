'use strict'
const iterator = require('./iterator')
const scan = require('./scan')

module.exports = function runner(nodeTap, fixturesDir, expectationsDir, converter, scanner) {
	if (!nodeTap) {
		throw Error('node-tap instance not provided')
	}

	if (typeof converter !== 'function') {
		throw Error('converter not a function')
	}

	if (typeof converter([]) !== 'object') {
		throw Error('converter must return an object')
	}

	if (typeof scanner !== 'function') {
		throw Error('scanner not a function')
	}

	const tests = []

	iterator(fixturesDir, expectationsDir, (meta, fixture, expectation) => {
		const convertedExpectation = converter(expectation)
		const result = scan(scanner, fixture, convertedExpectation)

		tests.push(function() {
			nodeTap.strictSame(result, convertedExpectation, meta.name)
		})
	})

	for (const test of tests) {
		test()
	}
}
