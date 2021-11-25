<template>
  <div class="py-16 mb-16 space-y-5 overflow-auto">
    <h2 class="text-center">Welcome Back</h2>
    <div id="create" class="box-content block max-w-md p-10 mx-auto bg-white shadow-2xl rounded-3xl">
      <form @submit.prevent="login()" class="space-y-5">
        <div class="space-y-5 inputs">
          <div>
            <label>Username</label>
            <input required v-model="code" type="text">
          </div>
          <div>
            <label>password</label>
            <input required v-model="title" type="password">
          </div>
        </div>
        <div class="flex justify-center pt-10">
          <button class="cta">Login <span class="inline-block duration-300 ease-in-out transform" :class="{rocket: creatingCourse}">🚀</span></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showModal"],
  data() {
    return {
      code: "",
      title: "",
      textbook: "",
      lectureNotes: "",
      pastQuestions: "",
      tips: "",
      creatingCourse: false,
    }
  },
  methods: {
    async login() {
      // clearState();
      this.creatingCourse = true;
      
      setInterval(() => {
        this.$router.push("/dashboard/courses")
      },700);

    },

    clearState()  {
      // this.
    }
  }
}
</script>

<style scoped>
  .inputs div {
    @apply flex flex-col space-y-2;
  }

  label {
    @apply text-xl;
  }

  input, textarea {
    @apply px-5 py-3 ring-2 transition ease-in-out duration-300 ring-green ring-opacity-30 rounded-xl outline-none;
  }

  input:focus,textarea:focus {
    @apply ring-opacity-100;
  }

  .rocket {
    animation: cruising .5s ease-in-out infinite;
  }

  @keyframes cruising {
    25% {
      transform: translate(5px,-5px);
    }

    75% {
      transform: translate(-5px, 5px);
    }
  }
</style>