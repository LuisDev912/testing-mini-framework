# Testing Mini Framework

A small experimental testing framework built from scratch in Node.js, designed to understand how testing tools work internally.

This project is **not intended to replace existing frameworks** like Jest, `Vitest` or `node:test`.  
Its purpose is educational: to explore test runners, assertions, async handling and reporting at a low level.

---

## Motivation

Modern testing frameworks abstract many internal details.  
While that is great for productivity, it can hide how core concepts actually work.

The goal of this project is to:
- understand how tests are registered and executed
- design a simple and readable testing API
- handle synchronous and asynchronous tests
- generate clear and meaningful test output

In short: **learning testing by building one**.

---

## Non-goals

To keep the scope focused, this project intentionally does **not** include:
- browser support
- coverage reports
- mocking or spying utilities
- parallel execution
- configuration files

Simplicity and clarity are prioritised over feature completeness.

---

## Project Structure

```
testing-mini-framework/
├─ src/
│ ├─ core/
│ │ ├─ runner.js # Collects and executes registered tests
│ │ └─ test.js # Defines and registers test cases
│ ├─ expect/
│ │ ├─ expect.js # Public expect() API
│ │ └─ matchers.js # Assertion matchers (toBe, toEqual, etc.)
│ └─ index.js # Public framework entry point
├─ tests/
│ └─ example.test.js # Example usage of the framework
├─ template.js # Reference implementation using node:test and node:assert
├─ LICENSE
└─ README.md
```


---

## Basic Usage

```js
import { test, expect } from '../src/index.js';

test('adds numbers correctly', () => {
    expect(2 + 2).toBe(4);
});
```

Tests are registered first and executed later by the runner, following a similar mental model to popular testing tools.

---

## Design Decisions

### Functional-first approach

The core of the framework is built using **functions and closures**, instead of heavy class-based architecture.

Reasons:
- JavaScript is naturally function-oriented
- explicit state is easier to reason about
- simpler to extend and test
- Classes may be introduced later only when they model a clear domain concept (e.g. test results or reporters).

---

## Reference template

The `template.js` file uses `node:test` and `node:assert` as a reference point.
It is not part of the framework, but helps compare API design and behaviour.

---

## What I learned

- how testing frameworks register tests before execution
- how errors are captured and reported
- how async tests affect execution flow
- how API design impacts developer experience

---

## Future Improvements

[] async test support
[x] grouped tests
[x] better console reporting
[x] simple CLI runner

---

## License

This project is licensed under the MIT License.