export const state = () => ({
  courses: [],
  showModal: false
})

export const mutations = {
  addCourses(state, courses) {
    state.courses = courses
  },
  addCourse(state, course) {
    state.courses.unshift(course)
  },
  updateModal(state, showModal) {
    state.showModal = showModal;
  }
}

export const actions = {
  async fetchCourses({ commit, state}) {
    await this.$axios.get('/ada/list')
    .then(res => commit('addCourses', res.data))
  }
}