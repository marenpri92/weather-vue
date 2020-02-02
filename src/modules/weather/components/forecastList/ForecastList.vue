<template>
  <v-expansion-panels popout v-if="list && list.length">
    <v-expansion-panel v-for="(item) in days" :key="item.dt">
      <v-expansion-panel-header>{{item.dt}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <!-- <ForecastGrafic :day="item" /> -->
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
// import ForecastGrafic from "../ForecastGrafic/ForecastGrafic";
import formatDate from "../../../../helpers/formatDate";

export default {
  name: "ForecastList",
  components: {
    // ForecastGrafic
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
          hours
        });
      }
      return myList;
    }
  },
  methods: {
    minTemp(list) {
      list.reduce((min, currentValue) => {
        if (!min) {
          return currentValue.main.temp_min;
        }
        return min > currentValue.main.temp_min
          ? currentValue.main.temp_min
          : min;
      }, null);
    },
    maxTemp(list) {
      list.reduce((max, currentValue) => {
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