<template>
  <span>
    <img :src="url" />
  </span>
</template>

<script>
import { urlIcon } from "../../../../core/environment/env";

export default {
  name: "IconWeather",
  props: ["icon", "small"],
  computed: {
    url() {
      let icon = this.small ? this.icon : `${this.icon}@2x`;
      return `${urlIcon}/${icon}.png`;
    }
  }
};
</script>