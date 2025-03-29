<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the base `b` [logarithm][logarithm] of a single-precision floating-point number.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-logf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var logf = require( '@stdlib/math-base-special-logf' );
```

#### logf( x, b )

Computes the base `b` logarithm of a single-precision floating-point number.

```javascript
var v = logf( 100.0, 10.0 );
// returns 2.0

v = logf( 16.0, 2.0 );
// returns 4.0

v = logf( 5.0, 1.0 );
// returns Infinity
```

For negative `x` or `b`, the [logarithm][logarithm] is **not** defined.

```javascript
var v = logf( -4.0, 1.0 );
// returns NaN

v = logf( 2.0, -4.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-array-discrete-uniform' );
var logf = require( '@stdlib/math-base-special-logf' );

var opts = {
    'dtype': 'float32'
};

var x = randu( 100, 0, 100, opts );
var b = randu( 100, 0, 5, opts );

var i;
for ( i = 0; i < 100; i++ ) {
    console.log( 'logf( %d, %d ) = %d', x[ i ], b[ i ], logf( x[ i ], b[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/logf.h"
```

#### stdlib_base_logf( x, b )

Computes the base `b` logarithm of a single-precision floating-point number.

```c
float v = stdlib_base_logf( 100.0f, 10.0f );
// returns 2.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **b**: `[in] float` input value.

```c
float stdlib_base_logf( const float x, const float b );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/logf.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    float out;
    float x;
    float b;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (float)rand() / (float)RAND_MAX ) * 100.0f;
        b = ( (float)rand() / (float)RAND_MAX ) * 5.0f;
        out = stdlib_base_logf( x, b );
        printf( "logf(%f, %f) = %f\n", x, b, out );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-logf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-logf

[test-image]: https://github.com/stdlib-js/math-base-special-logf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-logf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-logf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-logf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-logf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-logf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-logf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-logf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-logf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-logf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-logf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-logf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-logf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-logf/main/LICENSE

[logarithm]: https://en.wikipedia.org/wiki/Logarithm

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
