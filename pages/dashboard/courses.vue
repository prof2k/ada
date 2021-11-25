<template>
  <div class="max-h-[87vh] relative overflow-auto bg-opacity-5 bg-dark">
    <table>
      <thead>
        <tr>
          <th width="150">Code</th>
          <th class="">Name</th>
          <!-- <th>Title</th> -->
          <th>Textbooks</th>
          <th class="w-0">...</th>
          <!-- <th>Past Questions</th>
          <th>Tips</th> -->
        </tr>
      </thead>
      <tbody v-if="courses.length > 2">
        <tr v-for="course of courses" :key="`course-${course.id}`">
          <td class="font-bold uppercase">
            {{ course.name }}
          </td>
          <td>
            {{ course.title.split('\n')[0].slice(0, 20) }}
          </td>
          <td>
            {{ course.textbook.slice(0, 20) }}
          </td>
          <td>
            
          </td>
          <!-- <td>
            Rice
          </td>
          <td>
            Pay attention in classes
          </td> -->
        </tr> 
      </tbody>
    </table>
    <button @click="addCourse()" class="flex fixed bottom-10 right-12 shadow-xl items-center justify-center space-x-3 !rounded-full cta green hover:!bg-dark">
      <svg aria-hidden="true" width="25" fill="#fff" focusable="false" data-prefix="fas" data-icon="plus" class="inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
      <span>Add Course</span>
    </button>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  head() {
    return {
      title: 'Courses Dashboard 🚀 Ada'
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    courses() {
      return this.$store.state.courses;
    }
  },
  methods: {
    convertCode(code) {
      return code.slice(0, 3)
    },
    addCourse() {
      this.$store.commit("updateModal", true)
    }
  }
}
</script>

<style>
  .container.bigger {
    @apply !max-w-[90%];
  }

  table {
    @apply w-[90%] mx-auto max-h-[40%] overflow-auto mt-8 mb-28 max-w-[90%];
  }

  th {
    @apply text-left p-5;
  }

  tr {
    @apply !p-5;
  }

  tr {
    /* @apply; */
  }

  tr:nth-child(even) {
    @apply cursor-pointer bg-dark bg-opacity-25 transform transition ease-in-out duration-300;
  }

  tr:not(thead tr):hover {
    @apply bg-dark text-white shadow-xl;
  }

  td {
    @apply max-w-[2rem] text-sm p-5 py-3 cursor-pointer overflow-hidden;
  }
</style>