import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        notifications: 'none',
        access_token: 'pk.eyJ1Ijoicm9iZXJ0LXJhbmQyMDIzIiwiYSI6ImNsaWF2anNpeDAyNGEzZnF4cGNqa21xYTIifQ.UtWeswmxBOkOzEdFpT5vyw'
    }
});

export default directionsApi;