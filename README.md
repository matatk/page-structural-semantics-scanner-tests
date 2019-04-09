Page Structural Semantics Scanner Tests
=======================================

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

-   **Fixtures** are HTML files, provided here.
-   **Expectations** contain the correct set of landmarks for a given fixture, also provided here.
-   A **scanner** function is the code under test. It runs on the DOM created from the fixture.

In order to test a tool that finds landmarks on a page, a `runner(converter, scanner)` function is provided. This runs the tool's code on DOMs created from all fixtures and compares the results to the expectations, then reports if they matched. The runner takes two arguments, both of which are functions:

-   `converter(<object>) -> <object>` should convert the format of the expectations in this test suite to the format that the tool being tested outputs.
-   `scanner(window, document) -> object` runs the tool's code on the DOM constructed from the existing HTML fixture and returns the results (i.e. landmarks found).

### Predefined runners for known tools

For known tools, such as the [Landmarks browser extension](http://matatk.agrip.org.uk/landmarks/) a converter, and custom runner function, are already supplied. Consult [the Landmarks extension's test code](https://github.com/matatk/landmarks/blob/master/test/test-landmarks.js) for an example of their use.

The `runners.landmarks(scanner)` function runs the given function `scanner(window, document)` on DOMs created from all test fixtures, with the expectations converted to [Landmarks](http://matatk.agrip.org.uk/landmarks/)' format.

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
