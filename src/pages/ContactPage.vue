<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/contact-message/'

const emtyForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
}
export default {
    name: 'ContactPage',
    data: () => ({
        form: emtyForm
    }),
    methods: {
        sendForm() {
            axios.post(endpoint, this.form)
                // Inviato il form lo svuoto riportandolo allo stato iniziale
                .then(res => { this.form = emtyForm })
                .catch(err => { console.error(err) })
                .then(() => { })
        }
    }
}
</script>

<template>
    <div class="wrapper d-flex align-items-center flex-column">
        <h2 class="my-5">Contattami</h2>
        <div class="wrapper-form">

            <!-- IL FORM NON DEVE MAI TARTIRE QUINDI USO @SUBMIT.PREVENT QUINDI NON AGGIORNA LA PAGINA -->
            <form @submit.prevent="sendForm">
                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="fname-id" v-model.trim="form.name">
                            <label for="fname-id">Nome</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="email-id" v-model.trim="form.email">
                            <label for="email-id">La tua email<sup class="text-danger">*</sup></label>
                            <small>La tua email. Ti contatteremo a questo indirizzo</small>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="subject-id" min="5" max="100"
                                v-model.trim="form.subject">
                            <label for="subject-id">Oggetto<sup class="text-danger">*</sup></label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-floating">
                            <textarea class="form-control" id="text-area-id" v-model.trim="form.message"></textarea>
                            <label for="text-area-id">Descrizione<sup class="text-danger">*</sup></label>
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