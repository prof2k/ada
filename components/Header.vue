<template>
  <header class="pt-10">
    <div class="container flex items-center justify-between">
      <nuxt-link id="home-linnk" to="/">
        <img src="~assets/logo.svg" width="80" alt="">
      </nuxt-link>
      <nav>
        <nuxt-link to="/login" class="cta empty bg-empty yellow">Login</nuxt-link>
        <nuxt-link to="/signin" class="cta green">Signin</nuxt-link>
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