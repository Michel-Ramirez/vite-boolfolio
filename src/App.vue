<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';

export default {
  components: { AppHeader, HomePage },
}
</script>

<template>
  <AppHeader />
  <main class="container my-3">
    <HomePage />
  </main>
</template>

<style scoped></style>
