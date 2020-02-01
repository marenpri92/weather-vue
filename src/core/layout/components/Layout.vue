<template>
  <div id="layout">
    <v-container flex>
      <v-row align="center" justify="center">
        <v-col xs="11" sm="10" lg="5">
          <v-card rised shaped>
            <router-view></router-view>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style>
#layout {
  background-color: #0d47a1;
}
</style>