Page Structural Semantics Scanner Tests
=======================================

[![Build Status](https://travis-ci.com/matatk/page-structural-semantics-scanner-tests.svg?branch=master)](https://travis-ci.com/matatk/page-structural-semantics-scanner-tests)

This is a test and benchmarking suite that can be used to check tools that scan for semantic structural information on web pages, such as landmarks \[with headings and articles in the works\]. Such information is often used to afford or improve the accessibility of pages, allowing people using screen-readers and alternative browsers to navigate and understand the content.

You can use this tool as:

-   [A test suite for code that checks for landmarks](#use-as-a-test-suite)
-   [A performance checker for the code](#use-as-a-benchmarking-tool)
-   [A place to find results of tests carried out on tools that scan for landmarks](#use-as-a-comparison-between-accessible-structural-semantics-scanners)

You may find the following information helpful:

-   [Support for landmarks](#support-for-landmarks)
-   [Development](#development)

Use as a test suite
-------------------

There are three main components that come together in order to test structure-scanning code:

-   **Fixtures** are HTML files. [Example fixture](https://github.com/matatk/page-structural-semantics-scanner-tests/blob/master/fixtures/aria-labelledby-multiple-idrefs.html)
-   **Expectations** are JSON objects that contain the correct set of landmarks for a given fixture. [Example expectation](https://github.com/matatk/page-structural-semantics-scanner-tests/blob/master/expectations/aria-labelledby-multiple-idrefs.json)
-   A **scanner** function is the code under test. It runs on the DOM created from the fixture and returns the found landmarks. Its signature is `scanner(window, document): object`.

The tool you're testing probably doesn't report results in the same format that the expectations use, so there's also the concept of a **converter** function that takes the expectation object and transforms it into the tool's format. Its signature is `covnerter(expectation: object): object`. Some [converters for known tools](https://github.com/matatk/page-structural-semantics-scanner-tests/blob/master/lib/converters.js) are provided.

You also need a test environment in which to check whether the scanner returns the expected results. This package can be used in three different ways, depending on if you're looking for an out-of-the-box solution, or already have your own test environment:

-   [Out-of-the-box test suite](#out-of-the-box-test-suite)
-   [Iterating over the tests in your own test environment](#iterating-over-the-tests-in-your-own-test-environment)
-   [Loading the fixture and expectation files directly](#loading-the-fixture-and-expectation-files-directly)

### Out-of-the-box test suite

If you don't already have a test environment for your project, you can use the `runner(converter, scanner)` function. You pass in:

-   a `converter(expectation: object): object` function, and
-   the tool's `scanner(window, document): object` function

and the runner does the rest:

-   uses the converter on each expectation,
-   runs the scanner against each fixture, and
-   reports if the results didn't match the expectation (using [node-tap](https://github.com/tapjs/node-tap)).

```javascript
// This file is examples/runner.js
'use strict'
const pssst = require('page-structural-semantics-scanner-tests')
const runner = pssst.runner

const converter = function(expectation) {
	return expectation  // pass-through
}

const scanner = function(window, document) {
	return []  // don't find any landmarks - this will pass some tests
}

runner(converter, scanner)
```

**Note on global variables:** The tests are run on Node, using a DOM created by [jsdom](https://github.com/jsdom/jsdom). This means that `window` and `document` are not global variables. If your code requires them to be global, you'll need to use the following iterator method instead, for now. An option to run the out-of-the-box suite in a browser is being researched.

**Predefined runners for known tools:** For known tools, such as the [Landmarks browser extension](http://matatk.agrip.org.uk/landmarks/), a converter and custom runner function are exported. Consult [the Landmarks extension's test code](https://github.com/matatk/landmarks/blob/master/test/test-landmarks.js) for an example.

#### Runner options \[TBC\]

The following are being considered as options that could be passed to `runner()` in an optional third argument that is an options object.

-   `generateResults`: set to "true" to generate a JSON file summarising the results of each test. This could be used to create an HTML file giving the results of tests for one or more scanner tools.
-   The following keys would control the environment in which the tests are run.
    -   `browsers`: "firefox", "chrome", ...
    -   `jsdom`: set to "true" to run in jsdom on Node (**default**).

### Iterating over the tests in your own test environment

If you already have a preferred test environment, you could use the exported `iterator()` function to run your test code for each fixture-expectation pair. The HTML file is loaded into a string and the expectation into an object.

```javascript
// This file is examples/iterator.js
'use strict'
const pssst = require('page-structural-semantics-scanner-tests')
const iterator = pssst.iterator

iterator(function(testName, fixture, expectation) {
	console.log('========= ' + testName + ' =========')
	console.log('Fixture:')
	console.log(fixture)
	console.log('Expectation:')
	console.log(JSON.stringify(expectation, null, 2))
	console.log()
})
```

### Loading the fixture and expectation files directly

You could also read the various fixture and expectation files directly, and not use any of the above code.

Use as a benchmarking tool
--------------------------

FIXME

Use as a comparison between accessible structural semantics scanners
--------------------------------------------------------------------

FIXME

Support for landmarks
---------------------

All of the core [WAI-ARIA landmark roles](https://www.w3.org/TR/wai-aria-1.1/#landmark_roles), both as supplied via the `role` attribute and as [implicit landmarks via HTML 5 elements](https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings) are supported, with some caveats, as described below.

-   banner<sup>1</sup>
-   complementary
-   contentinfo<sup>1</sup>
-   form<sup>2</sup>
-   main
-   navigation
-   region<sup>2</sup>
-   search

### Caveats

1.  Both `<header>` (`banner`) and `<footer>` (`contentinfo`) elements are not considered landmarks unless they are the page-wide header/footer elements. (As per the [HTML element role mappings](https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings).)

2.  [`form`](https://www.w3.org/TR/wai-aria-1.1/#form) and [`region`](https://www.w3.org/TR/wai-aria-1.1/#region) landmarks are intended to be labelled. Ideally, this should be done with a visual label and an `aria-labelledby` attribute, so that all users can perceive the label. However, if a label is only provided by the non-visual `aria-label` attribute, this extension will recognise it.

    The HTML Accessibility API Mapping is clear that both [unlabelled `<form>`](https://www.w3.org/TR/html-aam-1.0/#details-id-42) and [unlabelled `<section>` (`region`)](https://www.w3.org/TR/html-aam-1.0/#details-id-119) elements are *not* to be counted as landmark regions. This extension discounts *any* unlabelled element with a role of `form` or `region` too, which is in line with most assistive technologies, and is intended to reduce noise in landmark navigation.

### Labelling landmarks

If a landmark label is present (via the `aria-labelledby` or `aria-label` attributes), it'll be shown in the pop-up. As per the [accessible name calculation algorithm](https://www.w3.org/TR/accname-aam-1.1/#mapping_additional_nd_te) used by browsers, the `aria-labelledby` attribute takes precedence over `aria-label`.

If an `aria-labelledby` attribute references multiple elements, all of those elements' text content will be joined to form the label for the landmark. However, it's not recommended that you label landmark regions with more than one element (usually referring to a single HTML heading element is sufficient). Using more than one labelling element could be a sign that your landmark structure is too complicated. [Referencing multiple labelling elements is more suited for labelling `<input>` elements with information from multiple sources.](https://www.w3.org/WAI/GL/wiki/Using_aria-labelledby_to_concatenate_a_label_from_several_text_nodes#Example_1:_A_time-out_input_field_with_concatenated_label)

### Digital publishing ARIA landmarks

The following additional landmark roles defined in the [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/) are also supported.

-   `doc-acknowledgements`
-   `doc-afterword`
-   `doc-appendix`
-   `doc-bibliography`
-   `doc-chapter`
-   `doc-conclusion`
-   `doc-credits`
-   `doc-endnotes`
-   `doc-epilogue`
-   `doc-errata`
-   `doc-foreword`
-   `doc-glossary`
-   `doc-index` (is a landmark via `navigation`)
-   `doc-introduction`
-   `doc-pagelist` (is a landmark via `navigation`)
-   `doc-part`
-   `doc-preface`
-   `doc-prologue`
-   `doc-toc` (is a landmark via `navigation`)

Development
-----------

Development is test-driven; use `npm test` to run the tests on the suite itself.
