// import { mount, Wrapper } from '@vue/test-utils';
// import WeatherCurrent from './WeatherCurrent.vue';

// import { Current } from '../../../../core/data/mocks';
// import Vuetify from 'vuetify/lib';
// import VueRouter from 'vue-router';


// let vuetify;
// let router;
// let currentDay;

// describe('WeatherCurrent.vue', () => {
// 	beforeAll(() => {
// 		vuetify =  new Vuetify();
//         router = new VueRouter();
//         currentDay = Current;
// 	});

// 	it('should show data', () => {
		
// 	});

// 	describe('logout', () => {
// 		let wrapper: Wrapper<
// 			CombinedVueInstance<Nav, object, object, object, Record<never, any>>
// 		>;
// 		beforeEach(() => {
// 			const store = getVuexMock({
// 				state: {
// 					isAuthenticated: true,
// 					error: null
// 				},
// 				mutations
// 			});

// 			wrapper = mount(Nav, {
// 				localVue,
// 				vuetify,
// 				mocks: {
// 					...getVueI18nMock()
// 				},
// 				stubs: {
// 					LanguageSelector: true
// 				},
// 				router,
// 				store
// 			});
// 		});

// 		it('should only display logout button if user is authenticated', () => {
// 			expect(wrapper.find('#login').exists()).toBe(false);
// 			expect(wrapper.find('#logout').exists()).toBe(true);
// 		});

// 		it('logout the user', () => {
// 			authService.logout = jest.fn();
// 			wrapper.find('#logout').trigger('click');
// 			expect(authService.logout).toHaveBeenCalled();
// 		});

// 		it('should navigate to default route after logout', () => {
// 			wrapper.find('#logout').trigger('click');
// 			expect(wrapper.vm.$router.currentRoute.fullPath).toMatch('catalog');
// 		});
// 	});
// });


describe('component', () => {
    it('should', () => {
        expect(true).toBeTruthy()
    })
})