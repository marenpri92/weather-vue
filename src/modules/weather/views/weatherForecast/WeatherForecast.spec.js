import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';

import WeatherForecast from './WeatherForecast.vue';
import ForecastList from "../../components/forecastList/ForecastList.vue";
import { geolocalization } from "../../../../helpers";


jest.mock("../../../../helpers");
geolocalization.mockResolvedValue(Promise.resolve({coords: {latitude: 12, longitude: 34}}));

const localVue = createLocalVue();

localVue.use(Vuex);

describe('WeatherForecast', () => {
    let state;
    let actions;
    let store;

    beforeEach(() => {
        state = {
            forecast: [],
            loading: false,
            error: ""
        }
        actions = {
            getForecast: jest.fn(),
        }
        store = new Vuex.Store({
            modules: {
                weather: {
                    state,
                    actions
                }
            }
        })
    })

    it('should have render ForecastList component', () => {
        const wrapper = shallowMount(WeatherForecast, { store, localVue });
        expect(wrapper.contains(ForecastList)).toBe(true)
    })
})