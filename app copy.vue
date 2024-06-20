<template>
  <GoogleMap :center="center" :zoom="10" style="width:100%; height:400px;">
    <CustomMarker :options="markerOptions">
      <div style="text-align: center">
        <img src="https://www.svgrepo.com/show/113123/location-pin.svg" width="50" height="50"/>
      </div>
    </CustomMarker>
    <Polyline :options="flightPath" />
  </GoogleMap>
</template>

<head>
  <script async defer src="https://maps.googleapis.com/maps/api/js"></script>
</head>



<script setup lang="ts">
import { ref } from 'vue'
import { GoogleMap, CustomMarker, Polyline } from 'vue3-google-map'
import sampleData from './assets/json/sample-data.json'
import normalizer from './utils/normalizer'

const { history } = normalizer({ history: sampleData })
const center = ref({ lat: history[0].lat, lng: history[0].lng })
const markerOptions = { position: { lat: history[0].lat, lng: history[0].lng }, anchorPoint: 'BOTTOM_CENTER' }

console.log('debug history', history)

const flightPath = {
  path: history,
  geodesic: true,
  // strokeColor: '#FF0000',
  strokeOpacity: 1.0,
  strokeWeight: 2,
}

console.log('debug history', history)
</script>
