'use strict'
const path = require('path')
const tap = require('tap')
const runner = require('./lib/runner')
const converters = require('./lib/converters')

const fixtures = path.join(__dirname, 'fixtures')
const expectations = path.join(__dirname, 'expectations')

const landmarksRunner = function(scanner) {
	runner(tap, fixtures, expectations, converters.landmarks, scanner)
}

const a11yOutlineRunner = function(scanner) {
	runner(tap, fixtures, expectations, converters.a11yOutline, scanner)
}

module.exports = {
	'runners': {
		'landmarks': landmarksRunner,
		'a11yOutline': a11yOutlineRunner
	},
	'converters': converters
}
