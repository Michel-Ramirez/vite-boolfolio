<script>
import axios from 'axios';
import ProjectCard from '../components/project/ProjectCard.vue';
import { routeLocationKey } from 'vue-router';

//costruisco la base del url per la chiamata axios
const apiBaseUri = 'http://127.0.0.1:8000/api/projects/';

export default {
    name: 'ProjectDetail',
    components: { ProjectCard },
    data: () => ({
        project: null,
        isLoading: false,
    }),
    methods: {
        getProject() {
            this.isLoading = true;
            //costruisco il endpoint usando il apiBaseUri e i parametri che mi arrivao
            const endpoint = apiBaseUri + this.$route.params.id;
            axios.get(endpoint)
                .then(res => {
                    this.project = res.data;
                })
                // se sono in errore, pusho un oggetto rindirizzandolo alla rotta not-found
                .catch(err => { this.$router.push({ name: 'not-found' }) })
                .then(() => { this.isLoading = false });
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <!-- se hai smesso di leggere e mostrami il progetto -->
    <AppLoader v-if="isLoading && !project" />
    <ProjectCard v-if="!isLoading && project" :project="project" :isDetail="true" />
</template>