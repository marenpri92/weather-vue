<template>
  <v-expansion-panels popout v-if="list && list.length" v-model="open">
    <v-expansion-panel v-for="(item) in days" :key="item.dt">
      <v-expansion-panel-header class="pa-1 panel">
        <IconWeather :icon="item.hours[0].weather[0].icon" :small="true" />
        {{item.dt}}
      </v-expansion-panel-header>
      <v-expansion-panel-content class="pt-1 panel">
        <ForecastGrafic :day="item" v-if="item" />
        <ForecastDayDetails :current="item" v-if="item" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import ForecastGrafic from "../forecastGrafic/ForecastGrafic";
import { formatDate } from "../../../../helpers";
import IconWeather from "../IconWeather/IconWeather";
import ForecastDayDetails from "../forecastDayDetails/ForecastDayDetails";

export default {
  name: "ForecastList",
  data: () => ({
    open: 0
  }),
  components: {
    ForecastGrafic,
    IconWeather,
    ForecastDayDetails
  },
  props: ["list"],
  computed: {
    days() {
      let myList = [];
      for (let i = 0; i < this.list.length; i += 8) {
        let hours = this.list.slice(i, i + 8);
        myList.push({
          dt: formatDate(this.list[i].dt),
          min: this.minTemp(hours),
          max: this.maxTemp(hours),
          humidity: this.list[i].main.humidity,
          wind: this.list[i].wind.speed,
          hours
        });
      }
      return myList;
    }
  },
  methods: {
    minTemp(list) {
      return list.reduce((min, currentValue) => {
        if (!min) {
          return currentValue.main.temp_min;
        }
        return min > currentValue.main.temp_min
          ? currentValue.main.temp_min
          : min;
      }, null);
    },
    maxTemp(list) {
      return list.reduce((max, currentValue) => {
        if (!max) {
          return currentValue.main.temp_max;
        }
        return max < currentValue.main.temp_max
          ? currentValue.main.temp_max
          : max;
      }, null);
    }
  }
};
</script>

<style>
.panel {
  background: darkblue;
  color: white;
}
</style>