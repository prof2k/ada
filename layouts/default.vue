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
  body {
    @apply font-mono text-dark;
  }
  .container {
    @apply max-w-[80%] mx-auto;
  }

  .cta {
    @apply inline-block px-8 py-[.9rem] rounded-[1rem] bg-yellow text-white;
  }

  .cta.green {
    @apply bg-green;
  }

  .cta.empty.yellow {
    @apply text-yellow;
    background: none;
  }

  h1 {
    @apply font-serif;
  }

  h1 {
    font-size: 9rem;
  }
</style>