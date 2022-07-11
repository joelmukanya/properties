// Setup the different route
import { createRouter, createWebHistory } from 'vue-router'
import PropertyListing from '../views/PropertyListing.vue'

const routes = [
    {
        path: '/',
        name: 'property-listing',
        component: PropertyListing
    },
    {
        path: '/admin',
        name: 'Admin',
        // Lazy-loaded
        component: ()=>import('../views/AdminComponent.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes
});

export default router