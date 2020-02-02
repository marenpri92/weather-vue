<template>
  <v-container class="card-content">
    <p class="title">This week</p>
    <ForecastList :list="forecast.list" />
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ForecastList from "../../components/ForecastList/ForecastList";

export default {
  name: "WeatherForecast",
  components: {
    ForecastList
  },
  data: () => ({
    labels: [],
    value: []
  }),
  computed: mapState({
    forecast: state => state.weather.forecast
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