<template>
  <img :src="url" />
</template>

<script>
import { urlIcon } from "../../../../core/environment/env";

export default {
  name: "IconWeather",
  props: ["icon"],
  computed: {
    url() {
      return `${urlIcon}/${this.icon}@2x.png`;
    }
  }
};
</script>