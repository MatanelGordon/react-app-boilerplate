# React App Boilerplate

A Boilerplate for building react components using typescript and storybook

Technologies:

- React
- Typescript
- SCSS
- postCSS
- eslint + prettier
- husky 🐶 + lint-staged
- Vitest ⚡

Features:

- Unit Tests (using `vitest`)
- **Full control** over each configuration
- CSS Preprocessors support
- CSS Modules support

## Usage

### Using `degit`

to get the boilerplate type the following:

```bash
npx degit https://github.com/MatanelGordon/react-app-boilerplate.git <directory name>
```

### Using git

to get the boilerplate type the following:

```bash
git clone --depth 0 https://github.com/MatanelGordon/react-app-boilerplate.git <directory name>
```

### Dev Server

To run a dev server, use the following command:

```bash
npm run dev
```

> NOTE: You can also use yarn / pnpm

### Building the project

To Build the project, run the following command:

```bash
npm run build
```

### Running tests

There are several different ways to run tests:

- `npm run test` - will run all tests
- `npm run test:dev` - will run all tests when a file changes
- `npm run test:ui` - will open a webview with all the tests and run them on change

## Monorepo Integration

### Using Turborepo

install the boilerplate inside `apps/`

refer to [Usage](#usage)

### Using Nx Package-based

install the boilerplate inside `packages/`

refer to [Usage](#usage)
