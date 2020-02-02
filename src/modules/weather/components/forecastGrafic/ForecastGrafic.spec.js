import { mount } from "@vue/test-utils";

import ForecastGrafic from './ForecastGrafic.vue';

describe('ForecastGrafic', () => {
    it('should have a property day', () => {
        let day = { hours: [] };
        const wrapper = mount(ForecastGrafic, {
            propsData: { day: day }
        });
        expect(wrapper.props().day).toBe(day)
    })
})