'use strict'
const pssst = require('page-structural-semantics-scanner-tests')
const iterator = pssst.iterator

iterator(function(testName, fixture, expectation) {
	console.log('========= ' + testName + ' =========')
	console.log('Fixture:')
	console.log(fixture)
	console.log('Expectation:')
	console.log(JSON.stringify(expectation, null, 2))
	console.log()
})
