'use strict'
const tap = require('tap')
const check = require('../lib/check')

const exampleResult = [
	{
		role: 'banner'
	},
	{
		role: 'main'
	},
	{
		role: 'contentinfo'
	}
]

const expectedResultEqual = [
	{
		role: 'banner'
	},
	{
		role: 'main'
	},
	{
		role: 'contentinfo'
	}
]

const expectedResultDiffernt = [
	{
		role: 'banner'
	},
	{
		role: 'navigation'
	},
	{
		role: 'main'
	},
	{
		role: 'contentinfo'
	}
]

tap.equal(
	check(exampleResult, expectedResultEqual),
	true,
	'Returns true when the result matches the expectation')

tap.equal(
	check(exampleResult, expectedResultDiffernt),
	false,
	"Returns false when the result doesn't match the expectation")
