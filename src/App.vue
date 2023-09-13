<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
import AppMain from './components/AppMain.vue';

const enpoint = 'http://127.0.0.1:8000/api/projects/';

export default {
  components: { AppHeader, AppMain },
  data: () => ({
    projects: [],
    isLoading: false
  }),
  methods: {
    fetchProjects() {
      this.isLoading = true;
      axios.get(enpoint).then(res => {
        this.projects = res.data
      })
        .catch()
        .then(() => { this.isLoading = false })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <AppHeader />

  <AppLoader v-if="isLoading" />
  <AppMain v-else :projects="projects" />
</template>

<style scoped></style>
