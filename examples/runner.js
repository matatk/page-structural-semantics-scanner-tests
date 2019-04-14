'use strict'
const pssst = require('page-structural-semantics-scanner-tests')
const runner = pssst.runner

const converter = function(expectation) {
	return expectation  // pass-through
}

const scanner = function(window, document) {
	return []  // don't find any landmarks - this will pass some tests
}

runner(converter, scanner)
