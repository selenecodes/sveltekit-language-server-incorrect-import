<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";

  import Page from "./Home.svelte";

  export const meta: Meta = {
    component: Page,
    tags: ["autodocs"],
    title: "Pages/Home",
  };
</script>

<script lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  // import { within, userEvent } from '@storybook/testing-library';
</script>

<Template let:args>
  <Page {...args} />
</Template>

<Story name="Default" />
<Story
  name="With a custom title"
  args={{ title: "hi" }}
  parameters={{
    docs: {
      description: {
        story: "# your story-specific description here",
      },
    },
  }}
/>

<Story name="Logged in" />
