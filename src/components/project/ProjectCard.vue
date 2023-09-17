<script>
import { RouterLink } from 'vue-router';

export default {
    props: { project: Object, isDetail: Boolean },
    components: { RouterLink },
    computed: {
        projectDescription() {
            if (this.isDetail) return this.project.description;
            const abstract = this.project.description.slice(0, 100);
            return abstract + '...';
        }
    }
}
</script>

<template>
    <div class="card my-5">
        <div class="card-header">
            <h3>{{ project.title }}</h3>
        </div>
        <div class="card-body">
            <!-- uso un ternatio -> è' il dettaglio del post? mostra l'intera description altrimenti mostra l'abstract -->
            <p>{{ projectDescription }}</p>
        </div>
        <div class="card-footer d-flex justify-content-end">
            <!-- nella rotta (:to) passo sia il name della rotta che il parametro per costruire l'url, key: value -->
            <RouterLink class="btn btn-sm btn-primary" :to="{ name: 'project-detail', params: { id: project.id } }">Vedi
            </RouterLink>
        </div>
    </div>
</template>

<style></style>