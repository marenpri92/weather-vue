<template>
  <v-app>
    <Layout />
  </v-app>
</template>

<script>
import Layout from "../../core/layout/components/Layout";

export default {
  name: "App",
  components: {
    Layout
  }
};
</script>

<style>
html,
body,
#layout {
  height: 100%;
}
</style>
