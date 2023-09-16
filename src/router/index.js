import { createRouter, createWebHistory } from "vue-router";

// importo le pagine

import HomePage from "../pages/HomePage.vue";
import ProjectPage from "../pages/ProjectPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
//Creiamo il router

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/project", name: "project", component: ProjectPage },
    { path: "/not-found", name: "not-found", component: NotFoundPage },

    // guarda se l'url matcha con qualunque altra cosa (qualunque altra cosa trovi '.*' //|// (.*)* -> qualunque query string) fai il redirct a: notFoundPage
    { path: "/:pathMatch(.*)*", redirect: "/not-found" },
  ],
});

export { router };

//file da importare nel main JS --->
