<template>
  <v-container class="card-content">
    <v-content v-if="!error">
      <v-row justify="space-around" align="start">
        <p class="title">Next five days</p>
        <v-btn to="current" text small color="secondary" class="font-weight-black">
          <v-icon small>mdi-arrow-left-thick</v-icon>Back
        </v-btn>
      </v-row>
      <Skeleton :loading="loading" type="list-item-avatar-three-line">
        <ForecastList :list="forecast.list" />
      </Skeleton>
      <v-content v-if="loading">
        <Skeleton
          v-for="(item, i) in 4"
          :key="i"
          :loading="loading"
          type="list-item-avatar-three-line"
        />
      </v-content>
    </v-content>
    <Error :text="error" v-if="error" />
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

import ForecastList from "../../components/ForecastList/ForecastList";
import { geolocalization } from "../../../../helpers";
import { Error, Skeleton } from "../../../shared";

export default {
  name: "WeatherForecast",
  components: {
    ForecastList,
    Error,
    Skeleton
  },
  computed: mapState({
    forecast: state => state.weather.forecast,
    loading: state => state.weather.loading,
    error: state => state.weather.error
  }),
  methods: {
    ...mapActions(["getForecast"])
  },
  async created() {
    let pos = await geolocalization();
    await this.getForecast(
      `lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
    );
  }
};
</script>