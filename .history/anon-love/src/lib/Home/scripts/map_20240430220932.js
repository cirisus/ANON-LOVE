import mapboxgl from "mapbox-gl";
import chihaya from "./chihaya.geojson";

mapboxgl.accessToken = "pk.eyJ1IjoiY2lyaXN1cyIsImEiOiJjbHZrcXdlaXQwcWwzMmxta3g5ZG9zdmxiIn0._vIXngdZDz5RmgkBZc4mIQ";

export function initializeMap() {
    const map = new mapboxgl.Map({
        container: "map",
        style: "https://tiles.stadiamaps.com/styles/alidade_smooth.json",
        center: [139.69926444254838, 35.73110714350051],
        zoom: 13.44686212128901,
    });

    map.on("load", () => {
        map.addSource("chihaya", {
            type: "geojson",
            data: chihaya,
        });

        map.addLayer({
            id: "chihaya",
            source: "chihaya",
            type: "fill",
            paint: { "fill-color": "#ffb8c6", "fill-opacity": 0.6 },
        });

        map.addLayer({
            id: "chihaya-stroke",
            source: "chihaya",
            type: "line",
            paint: { "line-color": "#cc8a9e" },
        });
    });
}