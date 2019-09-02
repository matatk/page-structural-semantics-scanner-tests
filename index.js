'use strict'
const path = require('path')

const getFullPageTests = require('./lib/getFullPageTests')
const getFullPageTestsInline = require('./lib/getFullPageTestsInline')

const fixturesDir = path.join(__dirname, 'fixtures')
const expectationsDir = path.join(__dirname, 'expectations')

module.exports = {
	'getFullPageTests': function() {
		return getFullPageTests(fixturesDir, expectationsDir)
	},
	'getFullPageTestsInline': function() {
		return getFullPageTestsInline(fixturesDir, expectationsDir)
	}
}
