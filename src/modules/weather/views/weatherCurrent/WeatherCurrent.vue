<template>
  <p>{{current}}</p>
</template>

<script>
import store from "../../store/weather.store";
import { mapState, mapActions } from "vuex";

export default {
  name: "WeatherCurrent",
  store,
  computed: mapState({
    current: state => state.current
  }),
  methods: {
    ...mapActions(["getCurrent"]),
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