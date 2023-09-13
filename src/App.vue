<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
import AppMain from './components/AppMain.vue';

const enpoint = 'http://127.0.0.1:8000/api/projects/';

export default {
  components: { AppHeader, AppMain },
  data: () => ({ projects: [] }),
  methods: {
    fetchProjects() {

      axios.get(enpoint).then(res => {
        this.projects = res.data
      })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <AppHeader />
  <AppMain :projects="projects" />
</template>

<style scoped></style>
