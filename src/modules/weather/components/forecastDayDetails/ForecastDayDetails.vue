<template>
  <v-row class="mt-10 mr-2 mb-5 ml-2" align="center" justify="space-around" >
    <v-col>
      <div v-if="current">
        <v-row justify="space-around" align="start">
          <v-icon color="accent">mdi-weather-windy</v-icon>
          <p>{{current.wind}} <span class="font-italic font-weight-high	">km/h</span></p>
        </v-row>
        <v-row justify="space-around" align="start">
          <v-icon color="accent">mdi-water-percent</v-icon>
          <p>{{current.humidity}} %</p>
        </v-row>
      </div>
    </v-col>
    <v-spacer></v-spacer>
    <v-col v-if="current">
      <v-row justify="space-around" align="start">
        <v-icon color="accent">mdi-arrow-up-thick</v-icon>
        <p>{{current.max}} &#8451;</p>
      </v-row>
      <v-row justify="space-around" align="start">
        <v-icon color="accent">mdi-arrow-down-thick</v-icon>
        <p>{{current.min}} &#8451;</p>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: "ForecastDayDetails",
    props: ["current"]
}
</script>