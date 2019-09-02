Page Structural Semantics Scanner Tests
=======================================

[![Build Status](https://travis-ci.com/matatk/page-structural-semantics-scanner-tests.svg?branch=master)](https://travis-ci.com/matatk/page-structural-semantics-scanner-tests)

This is a test suite for tools that scan for semantic structural information on web pages, such as landmarks \[with headings and articles in the works\]. Such information is often used to afford or improve the accessibility of pages, allowing people using screen-readers and alternative browsers to navigate and understand the content.

This repo provides just the test suite (HTML and JSON files) and minimal JavaScript code to make it easy to iterate over the tests. You can find a test runner and benchmarking tools in [FIXME](FIXME).

The following topics are covered below:

 * [Test suite info](#test-suite-info)
 * [Support for landmarks](#support-for-landmarks)
 * [Development](#development)

Test suite info
---------------

The following main components are provided.

 * **Fixtures** are HTML files. [Example fixture](https://github.com/matatk/page-structural-semantics-scanner-tests/blob/master/fixtures/aria-labelledby-multiple-idrefs.html)
 * **Expectations** are JSON objects that contain the correct set of landmarks for a given fixture. [Example expectation](https://github.com/matatk/page-structural-semantics-scanner-tests/blob/master/expectations/aria-labelledby-multiple-idrefs.json)

### Loading the fixture and expectation files

The fixtures and expectations are provided in two formats:

 * Individual fixtures and expectations can be found in the "fixtures/" and "expectations/" directories. These files are useful when running the tests from Node.
 * A combined fixture file, containing all but two of the tests, can be found alongside a combined expectation file, in the "combined/" directory. These may be useful if your test runner runs inside a browser. The HTML file contains only the fixtures, in a series of `<div>` elements; it is not a fully-formed HTML document.

  The reason why the combined files don't contain all of the test fixtures is that two ("application-alone-on-body-is-ignored" and "landmark-role-on-body") require an ARIA `role` attribute to be set on the `<body>` element.

### Convenience code to iterate over the tests

```javascript
// script/example.js
```

Gives you something like

```json
{
  . . .
  "main-alone-is-recognised": {
    "meta": {
      "name": "Main element is recognised"
    },
    "fixture": "/Users/matatk/projects/page-structural-semantics-scanner-tests/fixtures/main-alone-is-recognised.html",
    "expected": [
      {
        "type": "landmark",
        "role": "main",
        "roleDescription": null,
        "label": null,
        "selector": "body > main"
      }
    ]
  },
  . . .
}
```

 * Top-level keys are test IDs.
 * Each test object contains:
   - metadata
   - the fixture (either the path to the HTML file, or the contents of that file inline)
   - the expectation (JSON)

Two functions are provided by this module, allowing you to control whether you want the file paths for the HTML, or to have their contents inline:

 * `getFullPageTests()`
 * `getFullPageTestsInline()`

Support for landmarks
---------------------

All of the core [WAI-ARIA landmark roles](https://www.w3.org/TR/wai-aria-1.1/#landmark_roles), both as supplied via the `role` attribute and as [implicit landmarks via HTML 5 elements](https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings) are supported, with some caveats, as described below.

 * banner<sup>1</sup>
 * complementary
 * contentinfo<sup>1</sup>
 * form<sup>2, 3, 4</sup>
 * main
 * navigation
 * region<sup>2, 3, 5</sup>
 * search

### Caveats

1.  Both [`<header>` (`banner`)](https://www.w3.org/TR/html-aam-1.0/#details-id-45) and [`<footer>` (`contentinfo`)](https://www.w3.org/TR/html-aam-1.0/#details-id-39) elements are not considered landmarks unless they are the page-wide header/footer elements, as per the HTML Accessibility API Mappings.

2.  Elements with a [`form` role](https://www.w3.org/TR/wai-aria-1.1/#form) or a [`region` role](https://www.w3.org/TR/wai-aria-1.1/#region) are intended to be labelled. Ideally, this should be done with a visual label and an `aria-labelledby` attribute, so that all users can perceive the label. However, if a label is only provided by the non-visual `aria-label` attribute, it should be recognised by assistive technologies.

3. The HTML Accessibility API Mappings document is clear that both [unlabelled `<form>`](https://www.w3.org/TR/html-aam-1.0/#details-id-42) and [unlabelled `<section>` (`region`)](https://www.w3.org/TR/html-aam-1.0/#details-id-118) elements are *not* to be counted as landmark regions.

4. A `form` role that is explicitly specified via [`<div role="form">`](https://www.w3.org/TR/core-aam-1.1/#role-map-form) (lacking a label of any kind) *is* counted as a valid landmark. This is because the request for a label with the [`form` role](https://www.w3.org/TR/wai-aria-1.1/#form) is a "should" (optional).

5. A `region` role explicitly specified via [`<div role="region">`](https://www.w3.org/TR/core-aam-1.1/#role-map-region-nameless) (lacking a label of any kind) *is not* counted as a landmark. This is because the request for a label with the [`region` role](https://www.w3.org/TR/wai-aria-1.1/#region) is a "must" (required).

### Labelling landmarks

As per the [accessible name calculation algorithm](https://www.w3.org/TR/accname-aam-1.1/#mapping_additional_nd_te) used by browsers, the `aria-labelledby` attribute takes precedence over `aria-label`.

If an `aria-labelledby` attribute references multiple elements, all of those elements' text content will be joined to form the label for the landmark. However, it's not recommended that you label landmark regions with more than one element (usually referring to a single HTML heading element is sufficient). Using more than one labelling element could be a sign that your landmark structure is too complicated. [Referencing multiple labelling elements is more suited for labelling `<input>` elements with information from multiple sources.](https://www.w3.org/WAI/GL/wiki/Using_aria-labelledby_to_concatenate_a_label_from_several_text_nodes#Example_1:_A_time-out_input_field_with_concatenated_label)

### Landmark role descriptions

It is possible to use the [`aria-roledescription`](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription) attribute to provide a custom label to be used for the *type* of landmark. This allows you to, for example, provide more application-specific and thus user-friendly names for the roles.

This can be very helpful in some cases, but don't be tempted to over-use this technique; swapping conventional role names for custom ones can decrease usability. The examples and guidelines given in the ARIA specification, linked above, are most helpful.

You do not need to use this attribute in an attempt to localise your site if you're using standard landmark roles: user agents (browsers, browser extensions and assistive technologies) should already support this.

### Digital publishing ARIA landmarks

The following additional landmark roles defined in the [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/) are also supported.

 * `doc-acknowledgments`
 * `doc-afterword`
 * `doc-appendix`
 * `doc-bibliography`
 * `doc-chapter`
 * `doc-conclusion`
 * `doc-credits`
 * `doc-endnotes`
 * `doc-epilogue`
 * `doc-errata`
 * `doc-foreword`
 * `doc-glossary`
 * `doc-index` (is a landmark via `navigation`)
 * `doc-introduction`
 * `doc-pagelist` (is a landmark via `navigation`)
 * `doc-part`
 * `doc-preface`
 * `doc-prologue`
 * `doc-toc` (is a landmark via `navigation`)

Development
-----------

Development is test-driven; use `npm test` to run the tests on the suite itself.
