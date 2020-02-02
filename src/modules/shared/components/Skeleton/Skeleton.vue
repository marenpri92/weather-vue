<template>
  <v-skeleton-loader
    :loading="loading"
    transition="scale-transition"
    height="94"
    :type="type"
  >
    <slot></slot>
  </v-skeleton-loader>
</template>

<script>
export default {
  name: "Skeleton",
  props: ["loading", "type"]
};
</script>