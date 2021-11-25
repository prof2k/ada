<template>
  <div v-if="showModal" class="absolute top-0 bottom-0 left-0 right-0 py-16 overflow-auto bg-opacity-40 bg-[#000]">
    <dailog id="create" class="box-content block max-w-md p-10 mx-auto bg-white shadow-2xl rounded-3xl">
      <div v-if="createSuccess" class="space-y-5">
        <h2 class="text-green">Success!</h2>
        <p>The course has been successfully added.</p>
      </div>
      <form @submit.prevent="createCourse()" class="space-y-5" v-else>
        <h2>Create a Course</h2>
        <div class="space-y-5 inputs">
          <div>
            <label>Course Code</label>
            <input required v-model="code" type="text">
          </div>
          <div>
            <label>Course Title</label>
            <input required v-model="title" type="text">
          </div>
          <div>
            <label>Textbook Link</label>
            <input required v-model="textbook" type="text">
          </div>
          <div>
            <label>Lecture Notes Link</label>
            <input required v-model="lectureNotes" type="text">
          </div>
          <div>
            <label>Past Questions Link</label>
            <input required v-model="pastQuestions" type="text">
          </div>
          <div>
            <label>Tips</label>
            <textarea required v-model="tips" class="h-[150px]"></textarea>
          </div>
        </div>
        <div class="flex justify-center mt-10">
          <button class="cta">Create <span class="inline-block duration-300 ease-in-out transform" :class="{rocket: creatingCourse}">🚀</span></button>
        </div>
      </form>
    </dailog>
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
      createSuccess: false
    }
  },
  methods: {
    async createCourse() {
      // clearState();
      this.creatingCourse = true;
      this.createSuccess = false;

      this.$axios.post('/ada/create', {
        code: this.code,
        title: this.title,
        textbook: this.textbook,
        lecture_notes: this.lectureNotes,
        past_question: this.pastQuestions,
        tips: this.tips
      })
      .then(res => {
        this.$store.commit("addCourse", {
          code: this.code,
          title: this.title,
          textbook: this.textbook,
          lecture_notes: this.lectureNotes,
          past_question: this.pastQuestions,
          tips: this.tips,
          id: res.data.id
        })

        this.creatingCourse = false;
        this.createSuccess = true;
      })
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