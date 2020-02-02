<template>
  <v-container class="card-content">
    <v-row justify="space-between" align="start">
      <v-col>
        <div v-if="current">
          <v-card-title>{{current.name}}</v-card-title>
          <v-card-subtitle color="accent">{{formatDate}}</v-card-subtitle>
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <div v-if="current">
          <IconWeather :icon="current.weather[0].icon" />
          <p class="headline">{{current.weather[0].main}}</p>
          <p class="display-1">{{current.main.temp}}&#8451;</p>
          <p
            class="font-italic font-weight-light caption"
          >Feels like {{current.main.feels_like}}&#8451;</p>
        </div>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <ForecastDayDetails :current="mapCurrent" v-if="current" />
    <v-btn to="forecast" text small color="secondary" class="font-weight-black">
      Next five days
      <v-icon small>mdi-arrow-right-thick</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import formatDate from "../../../../helpers/formatDate";
import mapDetails from "../../../../helpers/mapDetails";
import { mapState, mapActions } from "vuex";
import IconWeather from "../../components/IconWeather/IconWeather";
import ForecastDayDetails from "../../components/ForecastDayDetails/ForecastDayDetails";
import geolicalization from "../../../../helpers/geolocalization";

export default {
  name: "WeatherCurrent",
  components: {
    IconWeather,
    ForecastDayDetails
  },
  computed: {
    ...mapState({
      current: state => state.weather.current,
      loading: state => state.weather.loading
    }),
    formatDate() {
      return formatDate(this.current.dt);
    },
    mapCurrent() {
      return mapDetails(this.current);
    }
  },
  methods: {
    ...mapActions(["getCurrent"])
  },
  created() {
    geolicalization().then(pos => {
      this.getCurrent(`lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
    });
  }
};
</script>

<style>
.card-content {
  background: #307cf3;
  color: white;
}
</style>