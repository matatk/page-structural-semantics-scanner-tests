'use strict'
const tap = require('tap')
const scan = require('../lib/scan')

const invalidScanner = 42
const invalidFixture = 42
const invalidExpectation = 'not an object'

const validScanner = function(win, doc) {
	// This is used to check the scanner function is passed window and body
	return {
		'window-has-location': !!win.location,
		'document-has-body': !!doc.body
	}
}

const validFixture = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	Hello :-)
</body>
</html>`

const validExpectation = {
	'window-has-location': true,
	'document-has-body': true
}

tap.throws(function() {
	scan(invalidScanner, validFixture, validExpectation)
}, 'scanner is required to be a function')

tap.throws(function() {
	scan(validScanner, invalidFixture, validExpectation)
}, 'fixture is required to be valid HTML')

tap.throws(function() {
	scan(validScanner, validFixture, invalidExpectation)
}, 'expectation is required to be an object')

tap.throws(function() {
	scan(() => {}, validFixture, validExpectation)
}, 'scanner function must return something')

tap.doesNotThrow(function() {
	scan(validScanner, validFixture, validExpectation)
}, 'parameters are all provided correctly')

tap.test('scanner is passed a window and a document', t => {
	const result = scan(validScanner, validFixture, validExpectation)
	t.strictSame(
		result,
		validExpectation,
		'window has a location and document has a body')
	t.end()
})

const fixtureA = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	<p>Hello :-)</p>
</body>
</html>`

const fixtureB = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	<main>
		<p>Hello :-)</p>
	</main>
</body>
</html>`

function scanner(win, doc) {
	return {
		'containsMain': doc.getElementsByTagName('main').length > 0
	}
}

tap.test('scanning a fixture without a <main>', t => {
	const result1 = scan(scanner, fixtureA, { containsMain: false })
	t.strictSame(
		result1,
		{ containsMain: false },
		'finds there is no <main>')

	const result2 = scan(scanner, fixtureA, { containsMain: true })
	t.strictSame(
		result2,
		{ containsMain: false },
		'still finds there is no <main>')

	t.end()
})

tap.test('scanning a fixture with a <main>', t => {
	const result1 = scan(scanner, fixtureB, { containsMain: true })
	t.strictSame(
		result1,
		{ containsMain: true },
		'finds that there is a <main>')

	const result2 = scan(scanner, fixtureB, { containsMain: false })
	t.strictSame(
		result2,
		{ containsMain: true },
		'still finds there is a <main>')

	t.end()
})
