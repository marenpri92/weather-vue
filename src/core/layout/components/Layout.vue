<template>
  <div id="layout" class="content">
    <v-container flex>
      <v-row align="center" justify="center">
        <v-col cols="12" xs="2">
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
.content {
  background-color: #0d47a1;
}
</style>