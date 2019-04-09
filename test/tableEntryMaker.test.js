'use strict'
const tap = require('tap')
const tableEntryMaker = require('../lib/tableEntryMaker')

tap.equal(
	tableEntryMaker('Kate'),
	'<tr><td>Kate</td><td>OK</td></tr>',
	'generates an html table row for a passing test')

tap.equal(
	tableEntryMaker('Bob', 'patch'),
	'<tr><td>Bob</td><td><pre><code>patch</code></pre></td></tr>',
	'generates an html table row for a failing with one-line patch')

tap.equal(
	tableEntryMaker('Bob', `patchLine1
patchLine2`),
	`<tr><td>Bob</td><td><pre><code>patchLine1
patchLine2</code></pre></td></tr>`,
	'generates an html table row for a failing with multi-line patch')
