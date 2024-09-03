# React useRandom() Hook

A React hook for generating random numbers and keep them consistent between renders.

## Overview

This package exports a React hook, `useRandomNumber`, which generates a random number between 0 and 1. The hook also provides a provider, `RandomNumberProvider`, which is required to enable `useRandomNumber`.

## Exported Functions


### `RandomNumberProvider`

```typescript
import { RandomNumberProvider } from '@alexrah/react-use-random-hook';

const App = () => {
  <RandomNumberProvider>
    // ...
  </RandomNumberProvider>
};
```

The `RandomNumberProvider` provider provides a way to share the random number with other components and keep the generated number consistent between renders.

#### `RandomNumberProvider` props

The `base` prop in `RandomNumberProvider` is an optional parameter that allows you to specify the upper limit of the random number generated.

According to the code snippet from `src/index.tsx:RandomNumberProvider`, the `base` prop is used to multiply the random number generated by `Math.random()`. This means that the random number will be generated between 0 and the value of `base`.

Here's the relevant code snippet:
```typescript
const [random, ] = React.useState<number>( () =>{return Math.random()*base});
```
If you don't provide a `base` prop, it will default to 1, which means the random number will be generated between 0 and 1.

By providing a `base` prop, you can generate random numbers within a specific range. For example, if you set `base` to 100, the random number will be generated between 0 and 100.

Here's an example of how you can use the `base` prop:
```typescript
import { RandomNumberProvider } from '@alexrah/react-use-random-hook';

const App = () => {
  <RandomNumberProvider base={100}>
    // ...
  </RandomNumberProvider>
};
```
In this example, the random number generated will be between 0 and 100.


### `useRandomNumber`

```typescript
import { useRandomNumber } from '@alexrah/react-use-random-hook';

const random = useRandomNumber();
```

The `useRandomNumber` hook returns a random number between 0 and 1. The number does not change between renders.


## Scripts
---------

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
import { useRandomNumber, RandomNumberProvider } from '@alexrah/react-use-random-hook';

const App = () => {
  const random = useRandomNumber();
  return <div>Random number: {random}</div>;
};

ReactDOM.render(<RandomNumberProvider><App/></RandomNumberProvider>, document.getElementById('root'));

```
This code defines a React component that uses the `useRandomNumber` hook to generate a random number, and then displays the number in a `div` element.

