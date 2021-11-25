<template>
  <header class="pt-10">
    <div class="container flex items-center justify-between">
      <nuxt-link id="home-linnk" to="/">
        <img src="~assets/logo.svg" width="80" alt="">
      </nuxt-link>
      <nav>
        <nuxt-link to="/how-it-works" class="cta empty bg-empty yellow">How it Works</nuxt-link>
        <nuxt-link to="/signup" class="cta empty bg-empty yellow">Signup</nuxt-link>
        <nuxt-link to="/login" class="cta green">Login</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style>
  
</style>