import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router';
import LoginView from "@/views/login/LoginView.vue";
import BaseComponents from "@/components/BaseComponents.vue";
import HomeView from "@/views/home/HomeView.vue";
import LoginHandler from "@/views/login/LoginHandler.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/components', component: BaseComponents },
    { path: '/login', component: LoginView },
    { path: '/login/oauth2/callback', component: LoginHandler }
]

export const router = createRouter({
    history: createWebHistory('/'),
    routes,
})