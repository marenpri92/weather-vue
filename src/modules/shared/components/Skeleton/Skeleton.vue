<template>
  <v-skeleton-loader
    :loading="loading"
    transition="scale-transition"
    height="94"
    type="list-item-two-line"
  ></v-skeleton-loader>
</template>

<script>
export default {
  name: "Skeleton"
};
</script>