import Vue from 'vue';
import VueRouter from 'vue-router';

import Contact from '../views/Contact.vue';
import Product from '../views/Product.vue';
import History from '../views/History.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/contact'
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/product',
            component: Product
        },
        {
            path: '/history',
            component: History
        }
    ]
})
