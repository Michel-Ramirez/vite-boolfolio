<script>
export default {
    name: 'ContactPage',
}
</script>

<template>
    <div class="wrapper d-flex align-items-center flex-column">
        <h2 class="my-5">Contattami</h2>
        <div class="wrapper-form">
            <form action="">
                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="lname-id">
                            <label for="lname-id">Cognome</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="fname-id">
                            <label for="fname-id">Nome</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="email-id">
                            <label for="email-id">Email</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-floating">
                            <textarea class="form-control" id="text-area-id"></textarea>
                            <label for="text-area-id">Descrizione</label>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col d-flex justify-content-center">
                        <button type="reset" class="btn btn-sm btn-warning me-2">Reset</button>
                        <button type="submit" class="btn btn-sm btn-success">Invia</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper-form {
    width: 600px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
}

#text-area-id {
    height: 150px;
}
</style>