<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';

const enpoint = 'http://127.0.0.1:8000/api/projects/';

export default {
  components: { AppHeader },
  data: () => ({ projects: [] }),
  methods: {
    fetchProjects() {
      axios.get(enpoint).then(res => { console.log(res.data) })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <AppHeader />
  <main class="container my-3">

  </main>
</template>

<style scoped></style>
