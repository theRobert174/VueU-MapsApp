import { usePlacesStore } from '@/composables';
import { defineComponent, onMounted, ref, watch } from 'vue';
import Mapboxgl from 'mapbox-gl';

export default defineComponent({
    name: 'MapView',
    setup() {
        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore()

        const initMap = async() => {
            if(!mapElement.value) throw new Error('Div Element no exist');
            if(!userLocation.value) throw new Error('user Location no existe');

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
                });
        }

        onMounted(() => {
            if(isUserLocationReady.value) return initMap();
            console.log('No se obtuvo el user location');
        })

        watch( isUserLocationReady, (newVal) => {
            if(isUserLocationReady.value) initMap()
        })

        return {
            isUserLocationReady, mapElement
        } 
    }
});