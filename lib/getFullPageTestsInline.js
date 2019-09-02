'use strict'
const coreFullPageTests = require('./_coreFullPageTests')

module.exports = function(fixturesDir, expectationsDir) {
	return coreFullPageTests(fixturesDir, expectationsDir, true)
}
