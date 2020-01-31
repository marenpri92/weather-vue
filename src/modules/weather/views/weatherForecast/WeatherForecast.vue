<template>
  <p>{{forecast}}</p>
</template>

<script>
import store from "../../store/weather.store";
import { mapState, mapActions } from "vuex";

export default {
  name: "WeatherForecast",
  store,
  computed: mapState({
    forecast: state => state.forecast
  }),
  methods: {
    ...mapActions(["getForecast"])
  },
  created() {
    //eslint-disable-next-line
    console.log("entro created");
    this.getForecast("lat=52.529713699999995&lon=13.4266165");
  }
};
</script>