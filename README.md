# is-up

[![NPM version](https://img.shields.io/npm/v/@zcorky/is-up.svg?style=flat)](https://www.npmjs.com/package/@zcorky/is-up)
[![Coverage Status](https://img.shields.io/coveralls/zcorky/is-up.svg?style=flat)](https://coveralls.io/r/zcorky/is-up)
[![Dependencies](https://david-dm.org/@zcorky/is-up/status.svg)](https://david-dm.org/@zcorky/is-up)
[![Build Status](https://travis-ci.com/zcorky/is-up.svg?branch=master)](https://travis-ci.com/zcorky/is-up)
![license](https://img.shields.io/github/license/zcorky/is-up.svg)
[![issues](https://img.shields.io/github/issues/zcorky/is-up.svg)](https://github.com/zcorky/is-up/issues)

> Check whether a website is up or down using the [isitup.org](https://isitup.org/) API

### Install

```
$ npm install @zcorky/is-up
```

### Usage

```javascript
import isUp from '@zcorky/is-up';
// const isUp = require('@zcorky/is-up').isUp;

(async () => {
	console.log(await isUp('https://sindresorhus.com'));
	//=> true
})();
```

### Related
* [sindresorhus/is-up](https://github.com/sindresorhus/is-up)