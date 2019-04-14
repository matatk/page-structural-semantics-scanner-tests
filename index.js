'use strict'
const path = require('path')
const tap = require('tap')
const runner = require('./lib/runner')
const converters = require('./lib/converters')
const iterator = require('./lib/iterator')

const fixtures = path.join(__dirname, 'fixtures')
const expectations = path.join(__dirname, 'expectations')

function makeRunner(converter) {
	return function(scanner) {
		runner(tap, fixtures, expectations, converter, scanner)
	}
}

module.exports = {
	'runner': function(converter, scanner) {
		runner(tap, fixtures, expectations, converter, scanner)
	},
	'runners': {
		'landmarks': makeRunner(converters.landmarks),
		'a11yOutline': makeRunner(converters.a11yOutline)
	},
	'converters': converters,
	'iterator': iterator
}
