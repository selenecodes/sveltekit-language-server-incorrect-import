module.exports = {
  root: true,
  parserOptions: {
    project: true,
    extraFileExtensions: [".svelte"],
  },
  extends: [
    "hardcore",
    "hardcore/ts",
    "hardcore/fp",
    "hardcore/node",
    "plugin:svelte/recommended",
    "plugin:jsdoc/recommended-typescript-error",
    "plugin:storybook/recommended",
  ],
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: true,
      },
      rules: {
        "import/no-mutable-exports": "off",
        "functional/no-let": "off",
      },
    },
    /**
     * Remove the following override once this issue is resolved
     * @see https://github.com/storybookjs/storybook/issues/16609
     */
    {
      files: ["*.svelte"],
      rules: {
        "jsdoc/check-tag-names": [
          "error",
          {
            typed: false,
          },
        ],
      },
    },
    // Ignore certain rules in storybook files
    {
      files: ["./.storybook/**/*", "./src/**/*.stories.svelte"],
      rules: {
        "import/no-unused-modules": "off",
        "import/no-anonymous-default-export": "off",
        "import/no-extraneous-dependencies": "off",
        "prefer-named-capture-group": "off",
        "regexp/prefer-named-capture-group": "off",
        "n/no-extraneous-import": "off",
      },
    },
    // SvelteKit rules
    {
      files: ["./src/routes/**/+layout.ts"],
      rules: {
        "import/no-unused-modules": "off",
      },
    },
    // App.html rules
    {
      files: ["./src/app.html"],
      rules: {
        "@html-eslint/no-inline-styles": "off",
      },
    },
  ],
  rules: {
    "ext/lines-between-object-properties": ["error", "never"],
    "@typescript-eslint/naming-convention": "off",
    "putout/putout": "off",
    "lines-around-comment": "off",
    "import/unambiguous": "off",
    "regexp/require-unicode-regexp": "off",
    "regexp/require-unicode-sets-regexp": "off",
    // Ignore n/no-missing-import rule since it gives false positives
    "n/no-missing-import": "off",
    complexity: ["error", 10],
    "id-length": [
      "error",
      {
        min: 2,
        // Allow single-letter variable _ for unused variables
        // Allow single-letter variable t for time steps
        exceptions: ["_", "t"],
        // Allow single-letter i/j/k for loop indices
        // Allow single-letter x/y/z for coordinates
        exceptionPatterns: ["[x-z]", "[i-k]"],
      },
    ],
  },
  ignorePatterns: [
    "*.cjs",
    ".DS_Store",
    "node_modules",
    "coverage",
    "/build",
    "/.svelte-kit",
    "/package",
    "!.storybook",
    // Env files
    ".env",
    ".env.*",
    "!.env.example",
    // # Ignore files for PNPM, NPM and YARN
    "pnpm-lock.yaml",
    "package-lock.json",
    "yarn.lock",
    // Ignore a few config files
    "tsconfig.json",
    "playwright.config.ts",
    "vite.config.ts",
    "vitest.config.ts",
    "svelte.config.js",
  ],
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
};
