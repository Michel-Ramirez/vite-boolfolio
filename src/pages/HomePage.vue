<script>
import axios from 'axios';
import AppProjectsList from '../components/project/AppProjectsList.vue';

const enpoint = 'http://127.0.0.1:8000/api/projects/';

export default {
    components: { AppProjectsList },
    data: () => ({
        projects: [],
        isLoading: false,
        isAlertOpen: false,
    }),
    methods: {
        fetchProjects() {
            this.isLoading = true;
            axios.get(enpoint).then(res => {
                this.projects = res.data
            })
                .catch(err => {
                    console.log(err);
                    this.isAlertOpen = true; // TODO inserire il comoponente alert //
                })
                .then(() => { this.isLoading = false })
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template>
    <AppLoader v-if="isLoading" />
    <div v-else>
        <AppProjectsList :projects="projects" />
    </div>
</template>

<style scoped></style>
