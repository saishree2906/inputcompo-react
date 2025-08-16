import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",     // ✅ auto-props & docs
    "@storybook/addon-a11y",     // ✅ accessibility testing
    "@chromatic-com/storybook",  // ✅ if you deploy with Chromatic
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  }
};
export default config;
