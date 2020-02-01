<template>
  <v-container>
    <v-row justify-space-between align-content-start>
      <v-col>
        <div v-if="current">
          <v-card-title>{{current.name}}</v-card-title>
          <v-card-subtitle>{{formatDate()}}</v-card-subtitle>
        </div>
      </v-col>
      <v-col>
        <div v-if="current">
          <div>
            <p class="font-weight-black">Black text.</p>
          </div>
          <v-card-title class="title font-weight-bold">{{current.weather[0].icon}}</v-card-title>
          <v-card-title>{{current.weather[0].main}}</v-card-title>
          <v-card-subtitle>{{current.main.temp}}</v-card-subtitle>
          <v-card-title class="caption">{{current.main.feels_like}}</v-card-title>
        </div>
      </v-col>
    </v-row>
    <v-row justify-space-between align-content-end>
      <v-col>
        <div v-if="current">
          <v-card-title>{{current.name}}</v-card-title>
          <v-card-subtitle>{{formatDate()}}</v-card-subtitle>
        </div>
      </v-col>
      <v-col>
        <div v-if="current">
          <v-card-title>{{current.name}}</v-card-title>
          <v-card-subtitle>{{formatDate()}}</v-card-subtitle>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment";
// import store from "../../store/weather.store";
import { mapState, mapActions } from "vuex";

export default {
  name: "WeatherCurrent",
  // store,
  computed: {
    ...mapState({
      current: state => state.weather.current,
      loading: state => state.weather.loading
    })
  },
  methods: {
    ...mapActions(["getCurrent"]),
    formatDate() {
      return moment.unix(this.current.dt).format("DD MMM YYYY");
    },
    navigateNextWeek() {
      this.$router.push({ name: "forecast" });
    }
  },
  created() {
    //eslint-disable-next-line
    console.log("entro created");
    this.getCurrent("lat=52.529713699999995&lon=13.4266165");
  }
};
</script>