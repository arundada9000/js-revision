# JavaScript Revision — Learning Journey

> A structured collection of JavaScript examples, exercises, and interactive demos built during my JS revision journey. From variables and data types to async patterns, prototypes, classes, and DOM manipulation.

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-6d28d9?style=flat-square)
![Maintained](https://img.shields.io/badge/Maintained%20By-Arun%20Neupane-6d28d9?style=flat-square)
[![Portfolio](https://img.shields.io/badge/Portfolio-arunneupane.netlify.app-6d28d9?style=flat-square&logo=netlify&logoColor=white)](https://arunneupane.netlify.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-arundada9000-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/arundada9000)

</div>

---

## Author

**Arun Neupane** — Full-Stack Developer, CTO @ Sajilo Digital

- GitHub: [@arundada9000](https://github.com/arundada9000)
- Portfolio: [arunneupane.netlify.app](https://arunneupane.netlify.app)
- Email: arunneupane0000@gmail.com

---

## Structure

```
js-revision/
├── 01-basics/                    # Core JavaScript fundamentals (16 files)
│   ├── 00_variables.js
│   ├── 01_data_types.js
│   ├── 02_strings.js
│   ├── 03_objects.js
│   ├── 04_arrays.js
│   ├── 05_functions.js
│   ├── 06_arrow_functions.js
│   ├── 07_this_keyword.js
│   ├── 08_call_apply_bind.js
│   ├── 09_scope_closures.js
│   ├── 10_loops_iteration.js
│   ├── 11_destructuring_spread.js
│   ├── 12_higher_order_functions.js
│   ├── 13_prototypes.js
│   ├── 14_classes.js
│   ├── 15_error_handling.js
│   └── 16_optional_chaining.js
├── 02-dom/                       # DOM manipulation & events
│   ├── 01_todo_app.html
│   └── 02_event_propagation.html
├── 03-async/                     # Asynchronous JavaScript
│   ├── 01_promises.js
│   ├── 02_async_await.js
│   ├── 03_fetch_api.js
│   ├── 04_intervals.html
│   └── 05_xhr_api.html
├── docs/
│   └── learning-roadmap.md
├── .github/ISSUE_TEMPLATE/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
└── .gitignore
```

---

## Topics Covered

### Basics (01-basics/)
| # | File | Concepts |
|---|------|----------|
| 00 | `variables.js` | `var`, `let`, `const`, hoisting, TDZ, block scoping |
| 01 | `data_types.js` | Primitives, reference types, `typeof`, coercion, truthy/falsy |
| 02 | `strings.js` | Template literals, methods, manipulation |
| 03 | `objects.js` | Object literals, properties, methods, `this`, merging |
| 04 | `arrays.js` | `slice`/`splice`, `concat`, `flat`, `filter`, `map` |
| 05 | `functions.js` | Declarations, expressions, arrow, rest params, closure, IIFE |
| 06 | `arrow_functions.js` | Arrow syntax, lexical `this`, limitations |
| 07 | `this_keyword.js` | `this` in global, method, constructor, arrow, event contexts |
| 08 | `call_apply_bind.js` | Explicit binding, method borrowing, partial application |
| 09 | `scope_closures.js` | Lexical scope, closures, private variables, factory functions |
| 10 | `loops_iteration.js` | `for...of`, `for...in`, `Map`, `forEach` |
| 11 | `destructuring_spread.js` | Object/array destructuring, spread, rest |
| 12 | `higher_order_functions.js` | `map`, `filter`, `reduce`, `some`, `every`, `find`, chaining |
| 13 | `prototypes.js` | Prototype chain, inheritance, `Object.create` |
| 14 | `classes.js` | ES6 classes, `extends`, `super`, private fields, getters/setters |
| 15 | `error_handling.js` | `try`/`catch`/`finally`, `throw`, custom errors |
| 16 | `optional_chaining.js` | `?.`, `??`, short-circuit evaluation |

### DOM (02-dom/)
| # | File | Concepts |
|---|------|----------|
| 1 | `todo_app.html` | DOM CRUD, event listeners, state management, filtering |
| 2 | `event_propagation.html` | Capture/Target/Bubble, delegation, `stopPropagation`, `preventDefault` |

### Async (03-async/)
| # | File | Concepts |
|---|------|----------|
| 1 | `promises.js` | Promise creation, `.then`/`.catch`, `Promise.all`, `Promise.race` |
| 2 | `async_await.js` | `async`/`await`, `try`/`catch` with async |
| 3 | `fetch_api.js` | `fetch()` with `.then` and `async/await` |
| 4 | `intervals.html` | `setInterval` / `clearInterval` |
| 5 | `xhr_api.html` | `XMLHttpRequest`, GitHub API |

---

## How to Use

### JS files
Run with Node.js:
```bash
node 01-basics/00_variables.js
```

### HTML files
Open in a browser directly — no build tools required.

---

## Learning Path

1. **Start with basics** (00 → 16) in order — each file builds on earlier ones
2. **Move to DOM** — see JavaScript in the browser
3. **Tackle async** — the most critical skill for modern JS

See [docs/learning-roadmap.md](docs/learning-roadmap.md) for details.

---

## Philosophy

This repo documents learning in public. The code is deliberately:
- **Self-documenting** — minimal comments, meaningful names
- **Practical** — real patterns, not just syntax
- **Progressive** — each file builds on earlier concepts
- **Interactive** — HTML files are visual playgrounds

---

## License

MIT License — free and open source. Use, modify, and distribute however you want. See [LICENSE](LICENSE).
