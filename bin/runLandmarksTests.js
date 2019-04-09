'use strict'
const path = require('path')
const tap = require('tap')
const runner = require('../lib/runner')
const converter = require('../lib/converters').landmarks
const fixtures = path.join(__dirname, '..', 'fixtures')
const expectations = path.join(__dirname, '..', 'expectations')
runner(tap, fixtures, expectations, converter, () => 42)
