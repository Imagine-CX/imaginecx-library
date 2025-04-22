# ImagineCX Library

A collection of UI components by Imagine CX.

## Installation

```bash
npm install @imagine-cx/imaginecx-library
# or
yarn add @imagine-cx/imaginecx-library
# or
pnpm add @imagine-cx/imaginecx-library
```

## Setup

### Styles

1. Import the CSS in your main entry file:

```jsx
import '@imagine-cx/imaginecx-library/style.css';
```

2. Configure your Tailwind CSS to recognize the prefixed classes:

Add this to your tailwind.config.js:

```js
/** @type {import('tailwindcss').Config} */
export default {
  // Your existing configuration...
  content: [
    // Add this to include node_modules components
    './node_modules/@imagine-cx/imaginecx-library/**/*.{js,jsx,ts,tsx}',
    // Your existing content paths
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  // Your other configurations...
};
```

## Usage

```jsx
import { Button } from '@imagine-cx/imaginecx-library';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
    </div>
  );
}
```
