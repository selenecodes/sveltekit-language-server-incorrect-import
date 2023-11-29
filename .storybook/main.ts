import type { StorybookConfig } from "@storybook/sveltekit";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
    "storybook-dark-mode",
    "@storybook/addon-themes",
  ],
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: "tag",
  },
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },
  staticDirs: ["../static/"],
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)"],
};
export default config;
