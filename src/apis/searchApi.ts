import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1Ijoicm9iZXJ0LXJhbmQyMDIzIiwiYSI6ImNsaWF2anNpeDAyNGEzZnF4cGNqa21xYTIifQ.UtWeswmxBOkOzEdFpT5vyw'
    }
});

export default searchApi;