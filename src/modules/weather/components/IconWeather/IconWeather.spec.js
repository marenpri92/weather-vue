// helper function that mounts and returns the rendered text
import { mount } from "@vue/test-utils";

import IconWeather from './IconWeather.vue'

describe('IconWeather', () => {
    it('should have a property icon', () => {
        const wrapper = mount(IconWeather, {
            propsData: { icon: "img-src" }
        });
        expect(wrapper.props().icon).toBe("img-src")
    })

    it('should render an image with small icon property src', () => {
        const wrapper = mount(IconWeather, {
            propsData: { icon: "img-src" },
            attachToDocument: true
        });
        expect(wrapper.contains("img")).toBe(true);
        expect(wrapper.find("img").attributes().src).toMatch(/.*\/img-src@2x.png$/);
        wrapper.setProps({small: true});
        expect(wrapper.find("img").attributes().src).toMatch(/.*\/img-src.png$/);
    })
})