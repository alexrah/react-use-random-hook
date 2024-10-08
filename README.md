# React useRandom() Hook

A React hook for generating random numbers and strings and keep them consistent between renders.

## Overview

This package exports a React hook, `useRandom`, which generates a random number between 0 and 1 and a random string. The hook also provides a provider, `RandomProvider`, which is required to enable `useRandom`.

## Exported Functions

### `RandomProvider`

```typescript
import { RandomProvider } from '@alexrah/react-use-random-hook';

const App = () => {
  <RandomProvider>
    // ...
  </RandomProvider>
};
```

The `RandomProvider` provider provides a way to share the random number with other components and keep the generated number consistent between renders.

#### `RandomProvider` prop `numberBase`

The `numberBase` prop in `RandomProvider` is an optional parameter that allows you to specify the upper limit of the random number generated.

According to the code snippet from `src/index.tsx:RandomProvider`, the `base` prop is used to multiply the random number generated by `Math.random()`. This means that the random number will be generated between 0 and the value of `base`.

Here's the relevant code snippet:
```typescript
const [random, ] = React.useState<number>( () =>{return Math.random()*base});
```
If you don't provide a `base` prop, it will default to 1, which means the random number will be generated between 0 and 1.

By providing a `base` prop, you can generate random numbers within a specific range. For example, if you set `base` to 100, the random number will be generated between 0 and 100.

Here's an example of how you can use the `base` prop:
```typescript
import { RandomProvider } from '@alexrah/react-use-random-hook';

const App = () => {
  <RandomProvider base={100}>
    // ...
  </RandomProvider>
};
```
In this example, the random number generated will be between 0 and 100.

#### `RandomProvider` prop `stringLength`

The `stringLength` prop in `RandomProvider` is an optional parameter that allows you to specify the length of the random string generated.

According to the code snippet from `src/index.tsx:RandomProvider`, the `stringLength` prop is used to generate a random string of the specified length.

Here's the relevant code snippet:
```typescript
const [randomString, ] = React.useState<string>( () =>{return generateRandomString(stringLength)});
```

By default, the length of the random string is 4 characters. If you want to generate a random string with a different length, you can set the `stringLength` prop.

For example, if you set `stringLength` to 8, the random string will have a length of 8 characters.

Here's an example of how you can use the `stringLength` prop:
```typescript
import { RandomProvider } from '@alexrah/react-use-random-hook';

const App = () => {
  <RandomProvider stringLength={10}>
    // ...
  </RandomProvider>
};
```
In this example, the random string generated will be 10 characters long.


### `useRandom`

```typescript
import { useRandom } from '@alexrah/react-use-random-hook';

const { randomNumber, randomString } = useRandom();
```

The `useRandom` hook returns an object with two properties: `randomNumber` and `randomString`. 
- The `randomNumber: number` property returns a random number between 0 and 1. The number does not change between renders.
- The `randomString: string` property returns a random string of the specified length. The string does not change between renders.


### `generateRandomString`

#### Description

Generates a random string of a specified length.

#### Parameters

* `stringLength`: The length of the random string to be generated. (Type: `number`)

#### Returns

A random string of the specified length. (Type: `string`)

#### Example Usage

```typescript
const randomString = generateRandomString(10);
console.log(randomString); // Output: a random string of length 10
```

#### Implementation

The `generateRandomString` function uses a combination of uppercase and lowercase letters, as well as numbers, to generate a random string. The function iterates `stringLength` times, selecting a random character from the character set and appending it to the result string.


## Scripts

The package defines several scripts in `package.json`:

### `start`

```bash
npm start
```

The `start` script runs the `tsdx watch` command, which builds the package and runs it in watch mode. This means that any changes to the code will trigger a rebuild and re-run of the package.

### `build`

```bash
npm run build
```

The `build` script runs the `tsdx build` command, which builds the package and generates the output files in the `dist` directory.

### `test`

```bash
npm test
```

The `test` script runs the `tsdx test` command, which runs the tests.

### `lint`

```bash
npm run lint
```

The `lint` script runs the `tsdx lint` command, which checks the code for any linting errors.

### `size`

```bash
npm run size
```

The `size` script runs the `size-limit` command, which checks the size of the output files in the `dist` directory.

### `analyze`

```bash
npm run analyze
```

The `analyze` script runs the `size-limit --why` command, which provides more detailed information about the size of the output files in the `dist` directory.

## Example Usage
---------------

Here is an example of how to use the `useRandom` hook:
```typescript
import React from 'react';
import { useRandom, RandomProvider } from '@alexrah/react-use-random-hook';

const App = () => {
  const { randomNumber, randomString } = useRandom();
  return <div>Random number: {randomNumber}<br/>Random string: {randomString}</div>;
};

ReactDOM.render(<RandomProvider><App/></RandomProvider>, document.getElementById('root'));

```
This code defines a React component that uses the `useRandom` hook to generate a random number, and then displays the number in a `div` element.
