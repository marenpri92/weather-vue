import { mount } from "@vue/test-utils";

import ForecastList from './ForecastList.vue';

describe('ForecastList', () => {
    it('should have a property list', () => {
        let list = [];
        const wrapper = mount(ForecastList, {
            propsData: { list }
        });
        expect(wrapper.props().list).toBe(list)
    })
})