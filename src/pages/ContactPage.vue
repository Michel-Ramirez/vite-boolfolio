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
        form: emtyForm,
        errors: {},
        successMessage: null,
        isLoading: false,
    }),
    computed: {
        hasErrors() {
            //dato un oggetto dammi un array di chiavi, keys
            //se c'è una chiave restituisce true o false se non c'è.
            return Object.keys(this.errors).length;
        },
        showAlert() {
            // trasforma questa funzione in un booleano effettivo
            return Boolean(this.hasErrors || this.successMessage);
        },
        alertType() {
            //Ci sono errori? allora è danger altrimenti è success
            return this.hasErrors ? 'danger' : 'success';
        }
    },
    methods: {
        sendForm() {
            this.errors = {};
            this.successMessage = null;
            this.isLoading = true;
            axios.post(endpoint, this.form)
                // Inviato il form lo svuoto riportandolo allo stato iniziale
                .then(res => {
                    this.form = emtyForm;
                    this.successMessage = 'Messaggio inviato'
                })
                .catch(err => {
                    if (err.response.status === 400) {
                        //prendo gli errori provenienti dal backend
                        const errors = err.response.data.errors
                        // preparo un oggetto da riempire
                        const errorMessages = {}

                        for (let field in errors) errorMessages[field] = errors[field][0];
                        this.errors = errorMessages;
                    } else {
                        console.error(err);
                        this.errors = { network: 'Si è verificato un errore' }
                    }

                })
                .then(() => { this.isLoading = false; });
        }
    },
}
</script>

<template>
    <AppLoader v-if="isLoading" />
    <div v-else>
        <div class="wrapper d-flex align-items-center flex-column">
            <h2 class="my-5">Contattami</h2>
            <div class="wrapper-form">

                <AppAlert :type="alertType" :isOpen="showAlert">
                    <div v-if="successMessage">{{ successMessage }}</div>
                    <ul v-if="hasErrors">
                        <li v-for="(error, field) in errors" :key="field">{{ error }}</li>
                    </ul>
                </AppAlert>

                <!-- IL FORM NON DEVE MAI TARTIRE QUINDI USO @SUBMIT.PREVENT QUINDI NON AGGIORNA LA PAGINA -->
                <form @submit.prevent="sendForm" novalidate>
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
                                <input type="email" :class="{ 'is-invalid': errors.email }" class="form-control"
                                    id="email-id" v-model.trim="form.email">
                                <label for="email-id">La tua email<sup class="text-danger">*</sup></label>
                                <small>La tua email. Ti contatteremo a questo indirizzo</small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" :class="{ 'is-invalid': errors.subject }" class="form-control"
                                    id="subject-id" min="5" max="100" v-model.trim="form.subject">
                                <label for="subject-id">Oggetto<sup class="text-danger">*</sup></label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating">
                                <textarea class="form-control" :class="{ 'is-invalid': errors.message }" id="text-area-id"
                                    v-model.trim="form.message"></textarea>
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

ul {
    list-style-type: none;
}
</style>