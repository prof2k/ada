<template>
  <div class="relative flex">
    <DashboardNav :class="{'modal-blur': showModal}" />
    <div class="flex flex-col flex-grow" :class="{'modal-blur': showModal}">
      <DashboardHeader class="w-full" />  
      <Nuxt @addCourse="showModal = true" class="flex-grow"/>
    </div>
    <DashboardModal :showModal="showModal" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // showModal: this.$store.state.showModal
    }
  },
  computed: {
    showModal() {
      return this.$store.state.showModal;
    }
  },
  async mounted() {
    this.$store.dispatch('fetchCourses')
  }
}
</script>

<style>
  body {
    @apply !overflow-hidden;
  }

  .modal-blur {
    @apply filter blur-sm;
  }
</style>