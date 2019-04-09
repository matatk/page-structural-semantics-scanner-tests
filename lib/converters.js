'use strict'
// Converting to Landmarks format

function convertLandmarksCore(landmarksFormatData, testSuiteFormatData, depth) {
	for (const landmark of testSuiteFormatData) {
		landmarksFormatData.push({
			'depth': depth,
			'role': landmark.role,
			'label': landmark.label,
			'selector': landmark.selector
		})
		if (landmark.contains) {
			convertLandmarksCore(landmarksFormatData, landmark.contains, depth + 1)
		}
	}
}

function convertExpectationToLandmarksFormat(testSuiteFormatData) {
	const landmarksFormatData = []
	convertLandmarksCore(landmarksFormatData, testSuiteFormatData, 0)
	return landmarksFormatData
}


// Converting to a11y-outline format

let hrefCounter = 0

function convertA11yOutlineCore(data) {
	for (const record of data) {
		record.children = record.hasOwnProperty('contains')
			? record.contains
			: []
		delete record.contains

		record.label = record.label !== null
			? record.label + ' ' + record.role
			: record.role

		delete record.role
		delete record.type
		delete record.selector

		record.element = {}

		record.href = '#' + hrefCounter
		hrefCounter += 1

		if (record.children) {
			convertA11yOutlineCore(record.children)
		}
	}
}

function convertExpectationToA11yOutlineFormat(testSuiteFormatData) {
	convertA11yOutlineCore(testSuiteFormatData)
	return testSuiteFormatData
}


module.exports = {
	'landmarks': convertExpectationToLandmarksFormat,
	'a11yOutline': convertExpectationToA11yOutlineFormat
}
