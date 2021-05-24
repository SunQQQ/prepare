import Vue from 'vue';
import Router from 'vue-router';
import ChartPage from '../components/ChartPage';
import HelloWorld from '../components/HelloWorld';

Vue.use(Router);

export default new Router({
    mode: 'history',
    scrollBehavior:() => ({ y:0 }),
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/ChartPage',
            name: 'ChartPage',
            component: ChartPage
        }
    ]
});