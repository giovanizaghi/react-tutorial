# React Tutorial Project

Welcome! This project is designed to help you learn modern React development using TypeScript and Vite. If you're following along with my tutorial video, this README contains everything you need to understand and run the code.

## What You'll Learn

- **State Management:** Learn how to manage component state using React's `useState` and more advanced patterns.
- **Context:** See how to share data across your app using React Context.
- **Hooks:** Discover custom and built-in hooks for reusable logic.
- **Reducers:** Use `useReducer` for complex state logic.
- **Automated Tests:** Explore how to write and run automated tests for your React components.

## Project Structure

- `src/` — Main source code for the app
- `src/context/` — Context providers and consumers
- `src/hooks/` — Custom React hooks
- `src/reducers/` — Reducer functions and related logic
- `src/__tests__/` — Automated tests ([Vitest](https://vitest.dev/))
- `public/` — Static assets
- `vite.config.ts` — Vite configuration
- `eslint.config.js` — ESLint configuration for code quality

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Run automated tests:**
   ```sh
   npm test
   ```
4. **Lint your code:**
   ```sh
   npm run lint
   ```

## ESLint & TypeScript

This project uses ESLint with TypeScript for code quality. For production apps, enable type-aware lint rules as shown below:

```js
// eslint.config.js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

For React-specific lint rules, install these plugins:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Useful Links

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Jest](https://jestjs.io/) / [Vitest](https://vitest.dev/)

---

If you have any questions, feel free to leave a comment or reach out for help. Happy coding!
