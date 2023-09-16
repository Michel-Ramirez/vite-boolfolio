import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import AppLoader from "./components/AppLoader.vue";

//import router
import { router } from "./router";

const app = createApp(App);
app.component("AppLoader", AppLoader);

//utilizzo il router
app.use(router);
app.mount("#app");
