import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css"

Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: "mdi"
    },
    theme: {
        themes: {
            light: {
                primary: "#3F51B5",
                secondary: "#84FFFF",
                accent: "#CFD8DC",
                error: "F44336",
            },
        },
    },
};

export default new Vuetify(opts);