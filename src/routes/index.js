import Vue from 'vue';
import VueRouter from 'vue-router';

<<<<<<< HEAD
import History from '../views/History.vue';
import ThisWeek from '../views/ThisWeek.vue';
import NextWeek from '../views/NextWeek.vue';
=======
import Contact from '../views/Contact.vue';
import Product from '../views/Product.vue';
import History from '../views/History.vue';
>>>>>>> e28b04fc79db9670f0b0ad6afc2a68e1bc24d5f5

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
<<<<<<< HEAD
            redirect: '/history'
        },
        {
            path: '/history',
            component: History
        },
        {
            path: '/thisweek',
            component: ThisWeek
        },
        {
            path: '/nextweek',
            component: NextWeek
        },
    ]
})
=======
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
>>>>>>> e28b04fc79db9670f0b0ad6afc2a68e1bc24d5f5
