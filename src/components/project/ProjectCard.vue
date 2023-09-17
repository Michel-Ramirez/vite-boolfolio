<script>
import { RouterLink, routerViewLocationKey } from 'vue-router';

export default {
    props: { project: Object, isDetail: Boolean },
    components: { RouterLink, routerViewLocationKey },
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
    <div v-if="isDetail" class="mt-5 d-flex justify-content-end">
        <RouterLink class="btn btn-sm btn-secondary" :to="{ name: 'home' }"><span>Torna indietro</span></RouterLink>
    </div>
    <div class="card my-3">
        <div class="card-header d-flex justify-content-between ">
            <h3>{{ project.title }}</h3>
            <div v-if="project.type">
                <span class="badge rounded-pill me-2    " :style="{ backgroundColor: project.type?.color }">
                    {{ project.type?.label }}
                </span>
            </div>
        </div>
        <div class="card-body">
            <p>{{ projectDescription }}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <div class="d-flex justify-content-start ">
                <div v-if="project.technologies?.length" class="text-end">
                    <span v-for="tech in project.technologies" class="badge rounded-pill me-2"
                        :class="`bg-${tech.color}`">{{
                            tech.label }}</span>
                </div>
            </div>
            <div v-if="!isDetail">
                <!-- nella rotta (:to) passo sia il name della rotta che il parametro per costruire l'url, key: value -->
                <RouterLink class="btn btn-sm btn-primary" :to="{ name: 'project-detail', params: { id: project.id } }">Vedi
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style></style>