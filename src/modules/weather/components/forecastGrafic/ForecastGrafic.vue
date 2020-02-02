<template>
  <v-sheet class="v-sheet--offset mx-auto mt-2" color="cyan" elevation="12" width="100%">
    <v-sparkline
      :labels="points.labels"
      :value="points.values"
      color="white"
      line-width="2"
      padding="16"
      show-labels
    ></v-sparkline>
  </v-sheet>
</template>

<script>
import { formatHours } from "../../../../helpers";

export default {
  name: "ForecastGrafic",
  props: ["day"],
  computed: {
    points() {
      return this.getPoints(this.day.hours);
    }
  },
  methods: {
    getPoints(list) {
      let points = {
        labels: [],
        values: []
      };
      list.forEach(elem => {
        points.labels.push(formatHours(elem.dt)),
          points.values.push(elem.main.temp);
      });
      return points;
    }
  }
};
</script>
