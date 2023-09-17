<script>
export default {
    name: 'NotFoundPage'
};
</script>

<template>
    <div class="vh-100 d-flex align-items-center justify-content-center flex-column">
        <h3> 404 | Ops... pagina non trovata</h3>

        <button calss="btn btn-sm" @click="$router.back()">Torna indietro</button>

    </div>
</template>