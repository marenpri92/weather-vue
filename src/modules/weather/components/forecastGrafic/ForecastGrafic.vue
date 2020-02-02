<template>
  <v-sheet
    class="v-sheet--offset mx-auto"
    color="secundary"
    elevation="12"
    max-width="calc(100% - 32px)"
  >
    <v-sparkline :labels="labels" :value="date.main.temp" color="white" line-width="2" padding="16"></v-sparkline>
  </v-sheet>
</template>

<script>
export default {
  name: "ForecastGrafic",
  props: ['day']
};
</script>
