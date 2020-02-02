// helper function that mounts and returns the rendered text

import { mount } from "@vue/test-utils";

import ForecastDayDetails from './ForecastDayDetails.vue';
import { Current } from "../../../../core/data/mocks";

describe('ForecastDayDetails', () => {
    it('should have a property current', () => {
        const wrapper = mount(ForecastDayDetails, {
            propsData: { current: Current }
        });
        expect(wrapper.props().current).toBe(Current)
    })
})