<template>
  <div class="mapaUbicacion" style="">
    <v-container class="mapa_Container" style="padding: 0; margin: 10;">
      <div>
          <v-row no-gutters>
            <v-col cols="0"  class="mapContainer">
              <GMapMap :center="center" :zoom="15" map-type-id="roadmap" 
              class="mapa" :disableDefaultUI="true"  
              :options="{
                zoomControl: false,
                mapTypeControl: true,
                scaleControl: true,
                streetViewControl: true,
                rotateControl: false,
                fullscreenControl: true,
              }">
              <GMapMarker v-for="(m, key) in markers" :key="key" :position="m.position" :clickable="true"
                :draggable="false" :disableDefaultUI="true" />
            </GMapMap>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "MapaCOBB",
  data() {
    let mapMarkerActiveClass = ("active");
    let mapMarkerClass = ("");
    return {
      locale: 
      mapMarkerActiveClass,
      mapMarkerClass,
      selectedKey: null,
      center: { lat: 19.5201868, lng: -96.8775668 },
      markers: [
        {
          index : 1,
          position: {
            lat: 19.5201571,
            lng: -96.8769714,
          },
        },
      ],
    };
    var sucurs;
  },
  methods: {
    
  },
};
</script>