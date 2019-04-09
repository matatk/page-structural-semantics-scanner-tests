'use strict'
const tap = require('tap')
const scan = require('../lib/scan').scanAndReturnPatch

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
	t.ok(result.matches, 'window has a location and document has a body')
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

const expectedPatch = `--- expectation
+++ result
@@ -1,3 +1,3 @@
 {
-  "containsMain": true
+  "containsMain": false
 }`

tap.test('scanning a fixture without a <main>', t => {
	const result1 = scan(scanner, fixtureA, { containsMain: false })
	t.ok(result1.matches, 'finds there is no <main>')
	const result2 = scan(scanner, fixtureA, { containsMain: true })
	t.notOk(result2.matches, 'does not find that there is a <main>')
	t.equal(result2.patch, expectedPatch, 'creates a patch')
	t.end()
})

tap.test('scanning a fixture with a <main>', t => {
	const result1 = scan(scanner, fixtureB, { containsMain: true })
	t.ok(result1.matches, 'finds that there is a <main>')
	const result2 = scan(scanner, fixtureB, { containsMain: false })
	t.notOk(result2.matches, 'does not find that there is no <main>')
	t.end()
})
