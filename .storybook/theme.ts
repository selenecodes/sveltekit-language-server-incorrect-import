import { create } from "@storybook/theming";

// eslint-disable-next-line n/file-extension-in-import

const BRAND_INFO = {
  title: "Test",
  url: "https://www.google.com/",
};

export const lightTheme = create({
  base: "light",
  brandTitle: BRAND_INFO.title,
  brandUrl: BRAND_INFO.url,
});

export const darkTheme = create({
  base: "dark",
  brandTitle: BRAND_INFO.title,
  brandUrl: BRAND_INFO.url,
});
