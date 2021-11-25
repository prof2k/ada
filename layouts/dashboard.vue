<template>
  <div class="flex">
    <DashboardNav class="" />
    <div class="flex flex-col flex-grow">
      <DashboardHeader class="w-full" />  
      <Nuxt class="flex-grow"/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  body {
    @apply !overflow-hidden;
  }
</style>