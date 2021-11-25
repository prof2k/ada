<template>
  <div class="flex flex-col justify-between w-64 h-screen px-10 py-10 space-y-24 text-white dashboard-nav bg-green">
    <nuxt-link to="/" class="bg-none" id="home-link" title="Go to Home">
      <img src="~assets/logo-white.svg" width="120" alt="" class="mx-auto">
    </nuxt-link>
    <nav class="flex flex-col flex-grow space-y-5 justify-items-center">
      <nuxt-link to="courses" class="text-center cta white">Courses</nuxt-link>
      <nuxt-link to="collaborators" class="text-center cta white">Collaborators</nuxt-link>
      <nuxt-link to="analytics" class="text-center cta white">Analytics</nuxt-link>
    </nav>
    <footer>
      <p class="text-center">Ada v1.0</p>
    </footer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .nuxt-link-active:not(#home-link) {
    @apply !bg-yellow !text-white scale-110 transform;
  }
</style>