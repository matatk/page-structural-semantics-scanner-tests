'use strict'
const fs = require('fs')
const path = require('path')
const combine = require('../lib/combine')

const fixturesDir = path.join(__dirname, '..', 'fixtures')
const expectationsDir = path.join(__dirname, '..', 'expectations')

const combinedDir = path.join(__dirname, '..', 'combined')
const allFixturesFile = path.join(combinedDir, 'all-fixtures.html')
const allExpectationsFile = path.join(combinedDir, 'all-expectations.json')

const combined = combine(fixturesDir, expectationsDir)

fs.writeFileSync(allFixturesFile, combined.html, 'utf-8')

fs.writeFileSync(
	allExpectationsFile, JSON.stringify(combined.json, null, 2), 'utf-8')
