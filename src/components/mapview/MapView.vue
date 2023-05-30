
<template>
  <div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
    <div class="text-center">
      <h3>Please wait</h3>
      <span>Finding location ...</span>
    </div>
  </div>

  <div v-show="isUserLocationReady" class="map-container" ref="mapElement">

  </div>
</template>

<script lang="ts" src="./MapView.ts"/>
<style scoped>
.map-container{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: red;
}
.loading-map{
  background-color: rgba(0, 0, 0, 0.8);
  color:white;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 9999;
}
</style>