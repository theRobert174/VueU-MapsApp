
import { MutationTree } from 'vuex';
import { MapState } from './state';
import Mapboxgl from 'mapbox-gl';


const mutation: MutationTree<MapState> = {
    setMap(  state: MapState, map: Mapboxgl.Map ) {
        // a line to prevent linter errors
        state.map = map;
    }
}


export default mutation;