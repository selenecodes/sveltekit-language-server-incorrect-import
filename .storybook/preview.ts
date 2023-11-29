import "../src/app.css";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/svelte";

import { darkTheme, lightTheme } from "./theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    darkMode: {
      current: "light",
      dark: darkTheme,
      darkClass: "dark",
      light: lightTheme,
      lightClass: "light",
      stylePreview: true,
    },
    docs: {
      layout: "centered",
      theme: lightTheme,
    },
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
