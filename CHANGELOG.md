# Page Structural Semantics Scanner Tests changelog

## [0.4.0](https://github.com/matatk/page-structural-semantics-scanner-tests/compare/0.3.0...0.4.0) (2019-10-11)

### Features

* Separation of concerns ([#19](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/19)) ([af47029](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/af47029)), closes [#18](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/18)

### BREAKING CHANGES

* Simplify this repo so that it only contains tests - not test runners or converters - and doesn't introduce onerous dependencies.

## [0.3.0](https://github.com/matatk/page-structural-semantics-scanner-tests/compare/0.2.1...0.3.0) (2019-08-25)

### Bug fixes

* Expectation errors: nesting in roles-land and "null" as label ([#14](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/14)) ([e325ca3](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/e325ca3))

### Chores

* Bump dependencies ([#16](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/16)) ([0b3f4b4](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/0b3f4b4))

### Documentation

* **README:** Update with spec compliance and other fixes. ([#17](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/17)) ([7d8baaa](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/7d8baaa)), closes [#6](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/6) [#7](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/7) [#10](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/10) [#15](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/15)

### Features

* Add aria-roledescription tests ([#13](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/13)) ([048d388](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/048d388)), closes [#11](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/11)
* Simplify existing implementation; Start tested foundations… ([#12](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/12)) ([4e53f88](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/4e53f88))

### Tests

* Schema validation of landmark expectations ([f5adf44](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/f5adf44)), closes [#9](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/9)

## [0.2.1](https://github.com/matatk/page-structural-semantics-scanner-tests/compare/0.2.0...0.2.1) (2019-06-03)

### Bug fixes

* Explicit form regions should not be ignored ([#8](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/8)) ([93f3dc1](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/93f3dc1)), closes [#2](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/2)

## [0.2.0](https://github.com/matatk/page-structural-semantics-scanner-tests/compare/0.1.1...0.2.0) (2019-05-11)

### Bug fixes

* **Dependencies:** Explicitly (dev-)require ESLint ([3430ecd](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/3430ecd))
* Use specified (US) spelling "doc-acknowledgments" ([#5](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/5)) ([d9b6f89](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/d9b6f89)), closes [#1](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/1)

### Builds

* Use factored-out package for generating/updating the changelog ([11e9a31](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/11e9a31))

### Continuous integrations

* Use Travis CI ([55df502](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/55df502))

### Documentation

* **Examples:** Code samples; clarify runner() use ([14f1ea7](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/14f1ea7))
* **Examples:** Iterator code sample and clarification; fix export ([6fffd3d](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/6fffd3d))

### Features

* **Metadata:** Include basic metadata for each test ([e89d48a](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/e89d48a))
* Build combined fixtures and expectation files ([#4](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/4)) ([a0b0c8b](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/a0b0c8b))
* Export test iterator function ([681df78](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/681df78))

### Tests

* **Metadata:** Expect the JSON files to provide metadata ([b2763ba](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/b2763ba))

## [0.1.1](https://github.com/matatk/page-structural-semantics-scanner-tests/compare/0.1.0...0.1.1) (2019-04-10)

### Bug fixes

* Ensure dependencies are correctly specified ([1a9e052](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/1a9e052))

## [0.1.0](https://github.com/matatk/page-structural-semantics-scanner-tests/compare/0.0.0...0.1.0) (2019-04-10)

### Features

* Initial test suite, based on the Landmarks extension ([0662921](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/0662921))
