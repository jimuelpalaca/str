# Str

A simple string helper for NodeJS Project

# How to install

```bash
npm install @jimuelpalaca/str
```

# Usage

## random(len)
```js
import { Str } from '@jimuelpalaca/str';

console.log(Str.random(15));
// => 'dsydbmuesftlbx6'

// By default length is 10
console.log(Str.random())
// => 'uhgbsrzp72'

```

## ucWords(str)
```js
import { Str } from '@jimuelpalaca/str';

const str = 'page title';
console.log(Str.ucWords(str));
// => 'Page Title'
```

## toSlug(str)
```js
import { Str } from '@jimuelpalaca/str';

const str = 'page title';
console.log(Str.toSlug(str));
// => 'page-title';
```

## slugToWord(str)
```js
import { Str } from '@jimuelpalaca/str';

const str = 'page-title';
console.log(Str.slugToWord(str));
// => 'Page Title';
```

## toSnakeCase(str)
```js
import { Str } from '@jimuelpalaca/str';

const str = 'page title';
console.log(Str.toSnakeCase(str));
// => 'page_title';
```

## snakeToWord(str)
```js
import { Str } from '@jimuelpalaca/str';

const str = 'page_title';
console.log(Str.snakeToWord(str));
// => 'Page Title';
```
