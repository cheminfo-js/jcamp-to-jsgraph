# jcamp-to-jsgraph

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![Test coverage][codecov-image]][codecov-url]
  [![npm download][download-image]][download-url]

Converts a jcamp to a jsgraph json format.

This library will also have the possibility to change the units on the fly and extract the xUnits and yUnits to display on the corresponding axis.

## Installation

`$ npm install --save jcamp-to-jsgraph`

## Usage

```js
import convert from 'jcamp-to-jsgraph';

const jcamp=`##TITLE=
##JCAMP-DX=4.24
##DATA TYPE=IV SPECTRUM
##ORIGIN=
##OWNER=
##XUNITS=mV
##YUNITS=mA
##FIRSTX=1
##LASTX=5
##FIRSTY=1
##LASTY=4
##$header=
##NPOINTS=5
##PEAK TABLE=(XY..XY)
1 2
2 3
3 4
4 2
5 1
##END
`
const options={};

const result = convert(jcamp, options);


```

## [API Documentation](https://cheminfo.github.io/jcamp-to-jsgraph/)

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/jcamp-to-jsgraph.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/jcamp-to-jsgraph
[travis-image]: https://img.shields.io/travis/cheminfo/jcamp-to-jsgraph/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cheminfo/jcamp-to-jsgraph
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/jcamp-to-jsgraph.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/cheminfo/jcamp-to-jsgraph
[download-image]: https://img.shields.io/npm/dm/jcamp-to-jsgraph.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/jcamp-to-jsgraph
