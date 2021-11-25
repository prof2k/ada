<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {

}
</script>

<style>
  :root {
    font-size: 17px;
  }
  body {
    @apply font-mono text-dark;
  }
  .container {
    @apply max-w-[80%] mx-auto;
  }

  .cta {
    @apply transition duration-300 ease-in-out transform inline-block px-8 py-[.9rem] rounded-[1rem] bg-yellow text-white;
  }

  .cta:hover {
    @apply scale-105;
  }

  .cta.green {
    @apply bg-green;
  }

  .cta.white {
    @apply bg-white text-dark;
  }

  .cta.empty.yellow {
    @apply text-yellow;
    background: none;
  }

  h1 {
    @apply font-serif;
  }

  h1 {
    font-size: 10rem;
  }
</style>