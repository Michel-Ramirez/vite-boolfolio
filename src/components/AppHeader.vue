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
                <div class="collapse navbar-collapse d-flex justify-content-between " id="navbarNavAltMarkup">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink class="nav-link" aria-current="page" :to="{ name: 'home' }">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" aria-current="page" :to="{ name: 'contact' }">Contattami
                            </RouterLink>
                        </li>
                    </ul>
                    <div class="navbar-nav">
                        <a class="nav-link" href="http://127.0.0.1:8000/login">Login</a>
                    </div>
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