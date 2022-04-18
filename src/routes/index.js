import Vue from 'vue';
import VueRouter from 'vue-router';

import History from '../views/History.vue';
import ThisWeek from '../views/ThisWeek.vue';
import NextWeek from '../views/NextWeek.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
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