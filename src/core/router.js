import Vue from 'vue';
import VueRouter from 'vue-router';
import { WeatherCurrent, WeatherForecast } from '../modules/weather';

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: 'current' },
    { path: '/current', component: WeatherCurrent },
    { path: '/forecast', component: WeatherForecast }
];

export default new VueRouter({
    routes
});
