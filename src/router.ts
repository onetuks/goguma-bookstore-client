import { createMemoryHistory, createRouter } from 'vue-router';
import LoginView from "@/views/login/LoginView.vue";
import BaseComponents from "@/components/BaseComponents.vue";
import HomeView from "@/views/home/HomeView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/components', component: BaseComponents },
    { path: '/login', component: LoginView },
]

export const router = createRouter({
    history: createMemoryHistory('/'),
    routes,
})