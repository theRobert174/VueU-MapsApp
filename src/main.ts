import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iZXJ0LXJhbmQyMDIzIiwiYSI6ImNsaWFrMThreTAzcDUzZHVsY3Izd3F2Y3AifQ.gan9Fpi_lPwQDGE-6FlsoQ';

if(!navigator.geolocation){
    alert('Tu navegador no soporta GeoLocation')
    throw new Error('Tu navegador no soporta GeoLocation')
}

createApp(App).use(store).use(router).mount('#app')
