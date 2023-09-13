<script>
export default {
    props: { project: Object }
}
</script>

<template>
    <div class="card my-5">
        <div class="card-header">
            <h3>{{ project.title }}</h3>
        </div>
        <div class="card-body">
            {{ project.description }}
        </div>
        <div class="card-footer d-flex justify-content-between">
            <div>{{ project.type }}</div>
            <button class="btn btn-sm btn-primary">Vedi</button>
        </div>
    </div>
</template>

<style></style>