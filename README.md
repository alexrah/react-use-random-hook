# React Use Random Hook

A React hook for generating random numbers and keep them consistent between renders.

## Overview

This package exports a React hook, `useRandom`, which generates a random number between 0 and 1. The hook also provides a provider, `RandomNumberProvider`, which is required to enable `useRandom`.

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


### `useRandom`

```typescript
import { useRandom } from '@alexrah/react-use-random-hook';

const random = useRandom();
```

The `useRandom` hook returns a random number between 0 and 1. The number does not change between renders.


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
import { useRandom, RandomNumberProvider } from '@alexrah/react-use-random-hook';

const App = () => {
  const random = useRandom();
  return <div>Random number: {random}</div>;
};

ReactDOM.render(<RandomNumberProvider><App/></RandomNumberProvider>, document.getElementById('root'));

```
This code defines a React component that uses the `useRandom` hook to generate a random number, and then displays the number in a `div` element.

