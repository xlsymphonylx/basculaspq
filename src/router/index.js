import HomeView from "@/views/HomeView.vue"
import NullWeightView from "@/views/NullWeightView.vue"
import WeightingView from "@/views/WeightingView.vue"
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/pesaje',
            name: 'Weighting',
            component: WeightingView
        },
        {
            path: '/anular-pesaje',
            name: 'NullWeight',
            component: NullWeightView
        },
        // Add more routes here
    ]
});