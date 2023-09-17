<script>
import ProjectCard from './ProjectCard.vue';

export default {
    props: {
        projects: Array, projectLength: Array
    },
    components: { ProjectCard }
}
</script>

<template>
    <h1 class="text-center my-5">Ecco gli ultimi {{ projectLength }} post</h1>
    <div v-if="projects.length">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
    <h4 v-else>Attualmente non ci sono post</h4>
</template>

<style></style>