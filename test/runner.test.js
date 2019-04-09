'use strict'
const path = require('path')
const tap = require('tap')
const runner = require('../lib/runner')

const baseDir = path.join(__dirname, 'simple')
const validFixturesDir = path.join(baseDir, 'fixtures')
const validExpectationsDir = path.join(baseDir, 'expectations')
const validConverter = expectation => expectation  // pass-through

const fakeTapCalls = []
const fakeTap = {
	strictSame: (found, wanted, message, extra) => {
		fakeTapCalls.push([found, wanted, message, extra])
	}
}

tap.throws(function() {
	runner()
}, 'runner needs a node-tap instance')  // TODO check type?

tap.throws(function() {
	runner(fakeTap, validFixturesDir, validExpectationsDir)
}, 'runner needs fixtures and expectations directories')

tap.throws(function() {
	runner(fakeTap, validFixturesDir, validExpectationsDir, () => 42)
}, 'runner needs a converter that returns an object')

tap.doesNotThrow(function() {
	runner(fakeTap, validFixturesDir, validExpectationsDir, validConverter, () => 42)
}, 'runner accepts all needed arguments')

tap.test('runner calls scanner', t => {
	let scanCalls = 0
	const fakeScanner = function(win, doc) {
		scanCalls = scanCalls + 1
		return [win, doc]
	}
	runner(fakeTap, validFixturesDir, validExpectationsDir, validConverter, fakeScanner)
	t.equal(scanCalls, 2, 'expected two calls to sanner')
	t.end()
})

tap.test('runner makes expected calls to tap', t => {
	fakeTapCalls.length = 0
	const expectedCalls = [
		[42, { expectation: 1 }, 'Simple 1', undefined],
		[42, { expectation: 2 }, 'Simple 2', undefined]
	]
	runner(fakeTap, validFixturesDir, validExpectationsDir, validConverter, () => 42)
	t.strictSame(
		fakeTapCalls,
		expectedCalls,
		'calls were as expected')
	t.end()
})
