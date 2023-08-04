import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/homeComponent.vue';
import Customer from './components/customerComponent.vue';
import Lender from './components/LenderComponent.vue';


const routes = [
    { path: '/', component: Home },
    { path: '/customer', component: Customer },
    { path: '/lender', component: Lender }

];  

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
