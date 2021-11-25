<template>
  <header class="z-10 px-10 py-3 border-b-0 shadow-2xl border-green">
    <div class="flex justify-between">
      <div class="flex items-center space-x-5">
        <span class="text-3xl font-semibol">Hello FASSA </span><span><img src="~assets/imgs/ios-wave.png" alt="" class="inline w-[50px]"></span>
      </div>
      <div class="flex items-center space-x-5">
        <button class="duration-700 ease-in-out transform hover:rotate-180">
          <img src="~assets/cog.svg" width="30" alt="">
        </button>
        <!-- <button class="cta green">Log Out</button> -->
        <img src="~assets/imgs/fassa.jpg" class="box-border w-[3.75rem] rounded-full shadow-md" alt="">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  head() {
    return {
      title: 'Dashboard | Welcome'
    }
  }
}
</script>

<style>
  
</style>