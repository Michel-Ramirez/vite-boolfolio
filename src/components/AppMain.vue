<script>
import AppProjectsList from './project/AppProjectsList.vue';

export default {
    props: { projects: Array },
    components: { AppProjectsList }
}
</script>

<template>
    <main class="container my-5">
        <AppProjectsList :projects="projects" />
    </main>
</template>

<style></style>