import Vue from 'vue';
import Vuex from 'vuex';
import { WeatherStore } from '../modules/weather';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        weather: WeatherStore
    }
})

export default store;