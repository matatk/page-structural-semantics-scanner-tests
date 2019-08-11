'use strict'
module.exports = function(result, expectation) {
	const resultString = JSON.stringify(result, null, 2)
	const expectationString = JSON.stringify(expectation, null, 2)
	const matches = resultString === expectationString
	const outcome = { 'matches': matches }
	if (!matches) {
		outcome.patch = ''
	}
	return outcome
}
