import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#3F51B5',
                secondary: '#00BCD4',
                error: 'F44336',
            },
        },
    },
};

export default new Vuetify(opts);