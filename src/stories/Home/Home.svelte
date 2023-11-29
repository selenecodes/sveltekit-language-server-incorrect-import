<!-- @component An example homepage component. -->
<script lang="ts">
  /**
   * The Home component shows an example homepage.
   * @example
   *  <Home title="The title to display" />
   * Description for this example.
   */

  /**
   * The title shown on the page.
   * @type {string} - The title to display.
   * (@type is needed for correct storybooks docs generation)
   */
  export let title: string = "My SvelteKit App";
</script>

<div class="bg-white">
  <div class="relative isolate h-screen w-screen px-6 pt-14 lg:px-8">
    <!-- Top backdrop -->
    <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2
          rotate-[30deg] bg-gradient-to-tr from-hemelblauw to-robijnrood opacity-30
          sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(
          74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%,
          80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%,
          47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%,
          17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      ></div>
    </div>
    <svg
      class="absolute inset-0 -z-10 h-screen w-screen stroke-black/10
        [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-grijs-5/10">
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          stroke-width="0"
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        stroke-width="0"
        fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
      />
    </svg>
    <!-- Center text -->
    <div class="grid h-full w-full place-items-center">
      <div class="max-w-4xl text-center">
        <h1 class="text-7xl font-bold tracking-tight text-paars-tint-1 dark:text-rood-tint-1">
          {title}
        </h1>
        <p class="mt-6 text-2xl leading-8 text-black">
          If you see this you probably just initialized this project!
        </p>
      </div>
    </div>
  </div>
</div>
