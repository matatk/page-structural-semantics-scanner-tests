'use strict'
module.exports = function(result, expectation) {
	const resultString = JSON.stringify(result, null, 2)
	const expectationString = JSON.stringify(expectation, null, 2)
	return resultString === expectationString
}
