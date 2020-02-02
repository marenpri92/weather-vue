<template>
  <v-container class="card-content">
    <v-row justify="space-between" align="start">
      <v-col>
        <div v-if="current">
          <v-card-title>{{current.name}}</v-card-title>
          <v-card-subtitle>{{formatDate}}</v-card-subtitle>
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
    <v-row class="elevation-22 ma-2">
      <v-col>
        <div v-if="current">
          <v-row justify="space-around" align="start">
            <v-icon color="accent">mdi-weather-windy</v-icon>
            <p>{{current.wind.speed}}</p>
          </v-row>
          <v-row justify="space-around" align="start">
            <v-icon color="accent">mdi-water-percent</v-icon>
            <p>{{current.main.humidity}}</p>
          </v-row>
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col v-if="current">
        <v-row justify="space-around" align="start">
          <v-icon color="accent">mdi-arrow-up-thick</v-icon>
          <p>{{current.main.temp_max}}</p>
        </v-row>
        <v-row justify="space-around" align="start">
          <v-icon color="accent">mdi-arrow-down-thick</v-icon>
          <p>{{current.main.temp_min}}</p>
        </v-row>
      </v-col>
    </v-row>
    <v-btn to="forecast" text small color="secondary">
      Next five days
      <v-icon small>mdi-arrow-right-thick</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import formatDate from "../../../../helpers/formatDate";
import { mapState, mapActions } from "vuex";
import IconWeather from "../../components/IconWeather/IconWeather";

export default {
  name: "WeatherCurrent",
  components: {
    IconWeather
  },
  computed: {
    ...mapState({
      current: state => state.weather.current,
      loading: state => state.weather.loading
    }),
    formatDate() {
      return formatDate(this.current.dt);
    }
  },
  methods: {
    ...mapActions(["getCurrent"])
  },
  created() {
    //eslint-disable-next-line
    console.log("entro created");
    this.getCurrent("lat=52.529713699999995&lon=13.4266165");
  }
};
</script>

<style>
.card-content {
  background: #307cf3;
  color: white;
}
</style>