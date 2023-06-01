<script lang="ts" src="./TripDetails.ts"/>

<template>
    <div v-if="distance" class="trip-container column">
        <div class="col"> Distance: <strong>{{distance}} kms</strong></div>
        <div class="col"> Duration: <strong>{{duration}} min</strong></div>
    </div>
</template>

<style scoped>
.trip-container{
    background-color: white;
    border-radius: 10px;
    bottom: 50px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 25px;
    left: 20px;
    padding: 10px;
    position: fixed;
    width: 350px;
}
strong{
    color: #42b983;
}
</style>