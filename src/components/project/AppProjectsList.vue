<script>
import ProjectCard from './ProjectCard.vue';

export default {
    props: { projects: Array },
    components: { ProjectCard }
}
</script>

<template>
    <h1 class="text-center">Ecco gli ultimi 10 post</h1>
    <div v-if="projects.length">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
    <h4 v-else>Attualmente non ci sono post</h4>
</template>

<style></style>