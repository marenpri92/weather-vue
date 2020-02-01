import { getCurrentWeather, getForecastWeather } from '../../../core/data/weather.data';

const store = {
    state: {
        current: null,
        forecast: [],
        loading: false,
        error: ''
    },
    mutations: {
        setLoading: (state, payload) => state.loading = payload,
        fillCurrent: (state, payload) => state.current = payload,
        fillForecast: (state, payload) => state.forecast = payload,
        fillError: (state, payload) => state.error = payload
    },
    getters: {},
    actions: {
        getCurrent: async ({ commit }, query) => {
            commit('setLoading', true);
            try {
                const current = await getCurrentWeather(query);
                commit('fillCurrent', current);
                commit('setLoading', false);
            } catch (error) {
                commit('setLoading', false);
                commit('fillError', error);
            }
        },
        getForecast: async ({ commit }, query) => {
            commit('setLoading', true);
            try {
                const forecast = await getForecastWeather(query);
                commit('fillForecast', forecast);
                commit('setLoading', false);
            } catch (error) {
                commit('setLoading', false);
                commit('fillError', error);
            }
        }
    }
}

export default store;