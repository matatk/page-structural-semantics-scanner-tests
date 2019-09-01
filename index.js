'use strict'
const path = require('path')

const fixturesDir = path.join(__dirname, 'fixtures')
const expectationsDir = path.join(__dirname, 'expectations')

module.exports = {
	'getFullPageTests': function() {
		return require('./lib/getFullPageTests')(fixturesDir, expectationsDir)
	},
	'getFullPageTestsInline': function() {
		return require('./lib/getFullPageTestsInline')(fixturesDir, expectationsDir)
	}
}
