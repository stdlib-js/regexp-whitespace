<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# reWhitespace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Regular expression][regexp] to match a [white space][whitespace] character.



<section class="usage">

## Usage

To use in Observable,

```javascript
reWhitespace = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/regexp-whitespace@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var reWhitespace = require( 'path/to/vendor/umd/regexp-whitespace/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/regexp-whitespace@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.reWhitespace;
})();
</script>
```

#### reWhitespace( \[options] )

Returns a [regular expression][regexp] to match a [white space][whitespace] character.

```javascript
var RE_WHITESPACE = reWhitespace();

var bool = RE_WHITESPACE.test( '\n' );
// returns true

bool = RE_WHITESPACE.test( ' ' );
// returns true
```

The function accepts an `options` object with optional properties:

-   **flags**: `string` specifying regular expression [flags][mdn-regexp-flags]. Default: `''`.
-   **capture**: `boolean` indicating whether to create a capture group for the match. Default: `false`.

By default, the function returns a regular expression which does not have any flags specified. To specify [flags][mdn-regexp-flags], set the `flags` option with a list of flags (which may be in any order).

```javascript
var RE_WHITESPACE = reWhitespace({
    'flags': 'gm'
});

var str = 'Hello World!';
var bool = RE_WHITESPACE.test( str );
// returns true

bool = RE_WHITESPACE.test( str );
// returns false
```

By default, the function returns a regular expression which does not capture the part of a string matching the regular expression. To capture matches, set the `capture` option.

```javascript
var RE_WHITESPACE = reWhitespace({
    'capture': true
});
var str = 'Hello World!';
var arr = str.split( RE_WHITESPACE );
// returns [ 'Hello', ' ', 'World!' ]
```

#### reWhitespace.REGEXP

[Regular expression][regexp] to match a [white space][whitespace] character.

```javascript
var bool = reWhitespace.REGEXP.test( '\n' );
// returns true

bool = reWhitespace.REGEXP.test( '\\n' );
// returns false
```

#### reWhitespace.REGEXP_CAPTURE

[Regular expression][regexp] to capture characters matching a [white space][whitespace] character.

```javascript
var replace = require( '@stdlib/string-replace' );

var str = 'Duplicate capture';
var out = replace( str, reWhitespace.REGEXP_CAPTURE, '$1$1' );
// returns 'Duplicate  capture'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Matches the `25` characters defined as white space ("WSpace=Y","WS") characters in the Unicode `9.0` character database.

-   Matches one related white space character without the Unicode character property "WSpace=Y" (zero width non-breaking space which was deprecated as of Unicode 3.2).

-   The `REGEXP` regular expression is defined as

    ```text
    /[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/
    ```

-   The `REGEXP_CAPTURE` regular expression is defined as

    ```text
    /([\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error",  stdlib/doctest: "off" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/regexp-whitespace@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var RE_WHITESPACE = reWhitespace();

var bool = RE_WHITESPACE.test( 'beep boop' );
// returns true

bool = RE_WHITESPACE.test( '\n' );
// returns true

bool = RE_WHITESPACE.test( '\r' );
// returns true

bool = RE_WHITESPACE.test( '\t' );
// returns true

bool = RE_WHITESPACE.test( 'beep' );
// returns false

var str = 'This is\na newline\r\ndelimited string.';

var arr = str.split( RE_WHITESPACE );
// returns [ 'This', 'is', 'a', 'newline', '', 'delimited', 'string.' ]

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-whitespace`][@stdlib/assert/is-whitespace]</span><span class="delimiter">: </span><span class="description">test whether a string contains only white space characters.</span>

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/regexp-whitespace.svg
[npm-url]: https://npmjs.org/package/@stdlib/regexp-whitespace

[test-image]: https://github.com/stdlib-js/regexp-whitespace/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/regexp-whitespace/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/regexp-whitespace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/regexp-whitespace?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/regexp-whitespace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/regexp-whitespace/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/regexp-whitespace/tree/deno
[deno-readme]: https://github.com/stdlib-js/regexp-whitespace/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/regexp-whitespace/tree/umd
[umd-readme]: https://github.com/stdlib-js/regexp-whitespace/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/regexp-whitespace/tree/esm
[esm-readme]: https://github.com/stdlib-js/regexp-whitespace/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/regexp-whitespace/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/regexp-whitespace/main/LICENSE

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[whitespace]: https://en.wikipedia.org/wiki/Whitespace_character

[mdn-regexp-flags]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2

<!-- <related-links> -->

[@stdlib/assert/is-whitespace]: https://github.com/stdlib-js/assert-is-whitespace/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
