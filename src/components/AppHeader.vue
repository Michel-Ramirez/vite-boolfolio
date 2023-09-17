<script>
export default {

}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid container">
                <h1 class="navbar-brand" href="#">M R</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink class="nav-link" aria-current="page" :to="{ name: 'home' }">Home</RouterLink>
                        </li>
                        <li>
                            <!-- <RouterLink class="nav-link" aria-current="page" to="/">Progetti</RouterLink> -->
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header .navbar {
    background-color: #9dcef2;
}
</style>