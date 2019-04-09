'use strict'
const tap = require('tap')
const converters = require('../lib/converters')

const testSuiteFormatExample = {
	'expected': [
		{
			'type': 'landmark',
			'role': 'banner',
			'label': null,
			'selector': 'body > header',
			'contains': [
				{
					'type': 'landmark',
					'role': 'navigation',
					'label': 'World of wombats',
					'selector': 'body > header > nav'
				}
			]
		},
		{
			'type': 'landmark',
			'role': 'main',
			'label': 'Looking after your wombat',
			'selector': 'body > main',
			'contains': [
				{
					'type': 'landmark',
					'role': 'navigation',
					'label': 'Looking after your wombat Topics',
					'selector': 'body > main > nav:nth-child(2)'
				}
			]
		},
		{
			'type': 'landmark',
			'role': 'contentinfo',
			'label': null,
			'selector': 'body > footer'
		}
	]
}

const landmarksFormatExample = {
	'expected': [
		{
			'depth': 0,
			'role': 'banner',
			'label': null,
			'selector': 'body > header'
		},
		{
			'depth': 1,
			'role': 'navigation',
			'label': 'World of wombats',
			'selector': 'body > header > nav'
		},
		{
			'depth': 0,
			'role': 'main',
			'label': 'Looking after your wombat',
			'selector': 'body > main'
		},
		{
			'depth': 1,
			'role': 'navigation',
			'label': 'Looking after your wombat Topics',
			'selector': 'body > main > nav:nth-child(2)'
		},
		{
			'depth': 0,
			'role': 'contentinfo',
			'label': null,
			'selector': 'body > footer'
		}
	]
}

tap.strictSame(
	converters.landmarks(testSuiteFormatExample.expected),
	landmarksFormatExample.expected,
	'test data converted to Landmarks format')


/* a11y-outline: the following is some data extracted from the browser.

[
  {
    'label': 'banner',
    'href': '#0',
    'children': [
      {
        'label': 'World of wombats navigation',
        'href': '#1',
        'children': [],
        'element': {}
      }
    ],
    'element': {}
  },
  {
    'label': 'Looking after your wombat main',
    'href': '#2',
    'children': [
      {
        'label': 'Looking after your wombat Topics navigation',
        'href': '#3',
        'children': [],
        'element': {}
      }
    ],
    'element': {}
  },
  {
    'label': 'contentinfo',
    'href': '#4',
    'children': [],
    'element': {}
  }
] */

const a11yOutlineFormatExample = {
	'expected': [
		{
			'label': 'banner',
			'href': '#0',
			'children': [
				{
					'label': 'World of wombats navigation',
					'href': '#1',
					'children': [],
					'element': {}
				}
			],
			'element': {}
		},
		{
			'label': 'Looking after your wombat main',
			'href': '#2',
			'children': [
				{
					'label': 'Looking after your wombat Topics navigation',
					'href': '#3',
					'children': [],
					'element': {}
				}
			],
			'element': {}
		},
		{
			'label': 'contentinfo',
			'href': '#4',
			'children': [],
			'element': {}
		}
	]
}

tap.strictSame(
	converters.a11yOutline(testSuiteFormatExample.expected),
	a11yOutlineFormatExample.expected,
	'test data converted to a11y-outline format')
