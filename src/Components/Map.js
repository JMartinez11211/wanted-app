import mapboxgl from 'mapbox-gl';
import { useEffect, useState, useRef } from "react";

mapboxgl.accessToken = 
'pk.eyJ1Ijoiam1hcnRpbmV6MTEyMTEiLCJhIjoiY2t5dWVxYXY0MW10azJvbzczdTlqNXdpYSJ9.-qvGecq0wF10WUlT3RyfGQ';
const Map =() => {
    const mapContainerRef = useRef(null);

    const [lng, setLng] = useState(-102.8549);
    const [lat, setLat] = useState(39.5751);
    const [zoom, setZoom] = useState(3.39);

    //initialize map when component mopunts
    useEffect(()=> {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/jmartinez11211/ckyvwj9j0001614o26wioyc4u",
            center: [lng, lat],
            zoom: zoom,
        });

        // map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        map.on('move', () => {
          setLng(map.getCenter().lng.toFixed(4));
          setLat(map.getCenter().lat.toFixed(4));
          setZoom(map.getZoom().toFixed(2));
        });
       

        /* 
Add an event listener that runs
  when a user clicks on the map element.
*/
map.on('click', (event) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ['wanted'] // replace with your layer name
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];

  /* 
    Create a popup, specify its options 
    and properties, and add it to the map.
  */
const popup = new mapboxgl.Popup({ offset: [1 ] })
.setLngLat(feature.geometry.coordinates)
.setHTML(
  `<div class="mapCard" ><img class= "mapImage" src=${feature.properties.img}><div class="mapText"><h3>${feature.properties.place_name}</h3>
  <p>${feature.properties.number}</p> <p>${feature.properties.info}</p></div></div>`
)
.addTo(map);

  // Code from the next step will go here.
  return () => map.remove();
});

    },[])

    return(
        <div>
          <h3>Field office Map, click on an icon to see office info.</h3>
      <div className="sidebarStyle">
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
    )
};


export default Map;