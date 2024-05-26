import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router';
import BaseComponents from "@/components/BaseComponents.vue";
import HomePage from "@/pages/home/HomePage.vue";
import LoginPage from "@/pages/login/LoginPage.vue";
import LoginHandlerPage from "@/pages/login/LoginHandlerPage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/components', component: BaseComponents },
    { path: '/login', component: LoginPage },
    { path: '/login/oauth2/callback', component: LoginHandlerPage }
]

export const router = createRouter({
    history: createWebHistory('/'),
    routes,
})