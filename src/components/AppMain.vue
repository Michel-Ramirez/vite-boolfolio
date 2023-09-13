<script>
export default {
    props: { projects: Array }
}
</script>

<template>
    <main class="container my-5">

        <div v-for="project in projects" class="card my-5">
            <div class="card-header">
                <h3>{{ project.title }}</h3>
            </div>
            <div class="card-body">
                {{ project.description }}
            </div>
            <div class="card-footer d-flex justify-content-end">
                <button class="btn btn-sm btn-primary">Vedi</button>
            </div>
        </div>
    </main>
</template>

<style></style>