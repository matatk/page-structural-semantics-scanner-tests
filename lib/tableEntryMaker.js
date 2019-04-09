'use strict'
module.exports = function tableEntryMaker(testName, patch) {
	const resultText = patch
		? `<pre><code>${patch}</code></pre>`
		: 'OK'
	return `<tr><td>${testName}</td><td>${resultText}</td></tr>`
}
