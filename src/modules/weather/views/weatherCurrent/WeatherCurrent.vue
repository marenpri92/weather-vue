<template>
  <v-container class="card-content">
    <v-content v-if="!error">
      <v-row justify="space-between" align="start">
        <v-col>
          <Skeleton :loading="loading" type="paragraph">
            <div>
              <v-card-title>{{current && current.name}}</v-card-title>
              <v-card-subtitle>{{current && formatDate}}</v-card-subtitle>
            </div>
          </Skeleton>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <Skeleton :loading="loading" type="paragraph">
            <div>
              <IconWeather :icon="current && current.weather[0].icon" />
              <p class="headline">{{current && current.weather[0].main}}</p>
              <p class="display-1">{{current && current.main.temp}} &#8451;</p>
              <p
                class="font-italic font-weight-light caption"
              >Feels like {{current && current.main.feels_like}} &#8451;</p>
            </div>
          </Skeleton>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <Skeleton :loading="loading" type="paragraph">
        <ForecastDayDetails :current="current && mapCurrent" />
      </Skeleton>
      <Skeleton :loading="loading" type="paragraph">
        <v-btn to="forecast" text small color="secondary" class="font-weight-black">
          Next five days
          <v-icon small>mdi-arrow-right-thick</v-icon>
        </v-btn>
      </Skeleton>
    </v-content>
    <Error :text="error" v-if="error" />
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

import IconWeather from "../../components/IconWeather/IconWeather";
import ForecastDayDetails from "../../components/ForecastDayDetails/ForecastDayDetails";
import { mapDetails, formatDate, geolocalization } from "../../../../helpers";
import { Error, Skeleton } from "../../../shared";

export default {
  name: "WeatherCurrent",
  components: {
    IconWeather,
    ForecastDayDetails,
    Error,
    Skeleton
  },
  computed: {
    ...mapState({
      current: state => state.weather.current,
      loading: state => state.weather.loading,
      error: state => state.weather.error
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
  async created() {
    let pos = await geolocalization();
    await this.getCurrent(
      `lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
    );
  }
};
</script>

<style>
.card-content {
  background: #307cf3;
  color: white;
}
</style>