<template>
  <v-container class="card-content">
    <v-row justify="space-around" align="start">
      <p class="title">Next five days</p>
      <v-btn to="current" text small color="secondary" class="font-weight-black">
        <v-icon small>mdi-arrow-left-thick</v-icon>Back
      </v-btn>
    </v-row>
    <v-skeleton-loader
      v-for="(item,i) in 5"
      :key="i"
      :loading="loading"
      transition="scale-transition"
      height="94"
      type="list-item-avatar-three-line"
    >
      <ForecastList :list="forecast.list" />
    </v-skeleton-loader>
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
    forecast: state => state.weather.forecast,
    loading: state => state.weather.loading
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