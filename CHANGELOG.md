# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.8.0](https://github.com/matatk/page-structural-semantics-scanner-tests/compare/0.7.0...0.8.0) (2022-03-27)


### Features

* Add "role" attribute token list tests ([#36](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/36)) ([a66ea9f](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/a66ea9f97aa7f6ee5aef8db51ecf8df8a8fbb931)), closes [matatk/landmarks#464](https://github.com/matatk/landmarks/issues/464)


### Chores

* Bumps ([#37](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/37)) ([21cd023](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/21cd023701558685e0498367d8965bada86ec454))

## [0.7.0](https://github.com/matatk/page-structural-semantics-scanner-tests/compare/0.6.0...0.7.0) (2021-08-01)


### Features

* Ignore dotfiles and non-HTML files ([#33](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/33)) ([b169396](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/b16939648a7e2a04252d1755dd847f41962d5f75))

## [0.6.0](https://github.com/matatk/page-structural-semantics-scanner-tests/compare/0.5.0...0.6.0) (2021-07-11)


### Features

* Support custom fixture and expectation directories ([#30](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/30)) ([9bb8c90](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/9bb8c909e5579e98f65f20ae8503540b71e24dfb))


### Chores

* Bump dependencies ([#31](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/31)) ([b4a9a8c](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/b4a9a8c5bfae2c5a93438b897ca252e14600d8ef))


### Continuous integrations

* Delete Travis config ([c11e66f](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/c11e66fceb136b5f0fd9d6e03c697306cb763cba))
* Move to GitHub Actions ([ef15aff](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/ef15affc1faca1312844fea0988e8f2ff47261b7))
* Run tests only instead of a full build ([f1e8c5d](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/f1e8c5dce789667e7c384bf68e52281be56ca9c0))

## [0.5.0](https://github.com/matatk/page-structural-semantics-scanner-tests/compare/0.4.0...0.5.0) (2020-04-24)


### Features

* Add tests to ignore aria-hidden and inert landmarks ([#25](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/25)) ([e31447f](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/e31447f97f3044779fd80d4511411547acb355bb)), closes [#20](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/20)


### Documentation

* **CHANGELOG:** Fix corrupted output ([#28](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/28)) ([e319770](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/e319770513e95ffd1f1a658c9de704ab56f5ee9a)), closes [#23](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/23)
* **README:** Add note about hiding landmarks ([#26](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/26)) ([59dd0b8](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/59dd0b8790f2635f095a535e1d7714e5137f7acc))
* **README:** Enhance note about hiding landmarks ([#27](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/27)) ([94e3561](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/94e35613eae4d2669184038c8e717fbb8358f7c0))


### Builds

* Switch to standard-version; Bump dependencies ([#24](https://github.com/matatk/page-structural-semantics-scanner-tests/issues/24)) ([bbe1f57](https://github.com/matatk/page-structural-semantics-scanner-tests/commit/bbe1f573f34162469b8c18c7b5ad6e470fbc48f5))

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
