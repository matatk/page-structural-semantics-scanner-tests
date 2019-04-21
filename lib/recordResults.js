'use strict'
module.exports = function(meta, result, existingResults) {
	existingResults.push({
		'meta': meta,
		'result': result
	})
}
