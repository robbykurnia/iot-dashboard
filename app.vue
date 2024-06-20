<template>
  <div class="map-container" ref="mapContainer"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const mapContainer = ref<HTMLDivElement | null>(null)

// Data dummy untuk posisi dan kecepatan
const path = ref([
  { lat: -6.200000, lng: 106.816666, speed: 10 },
  { lat: -6.210000, lng: 106.826666, speed: 20 },
  { lat: -6.220000, lng: 106.836666, speed: 30 },
])

const getColorBySpeed = (speed: number) => {
  if (speed < 15) return '#00FF00' // Hijau untuk kecepatan rendah
  if (speed < 25) return '#FFFF00' // Kuning untuk kecepatan sedang
  return '#FF0000' // Merah untuk kecepatan tinggi
}

onMounted(() => {
  if (mapContainer.value) {
    const map = new google.maps.Map(mapContainer.value, {
      center: { lat: -6.200000, lng: 106.816666 }, // Lokasi dummy (Jakarta)
      zoom: 12,
    })

    // Membuat Polyline
    const polylinePath = path.value.map(point => ({
      lat: point.lat,
      lng: point.lng,
    }))
    
    const polylineColors = path.value.map(point => getColorBySpeed(point.speed))

    const polyline = new google.maps.Polyline({
      path: polylinePath,
      geodesic: true,
      strokeOpacity: 1.0,
      strokeWeight: 2,
    })

    polyline.setMap(map)

    // Mengubah warna polyline berdasarkan kecepatan
    polyline.getPath().forEach((point, index) => {
      if (polylineColors[index]) {
        new google.maps.Polyline({
          path: [polyline.getPath().getAt(index), polyline.getPath().getAt(index + 1)],
          strokeColor: polylineColors[index],
          strokeOpacity: 1.0,
          strokeWeight: 2,
          map: map,
        })
      }
    })
  }
})
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
}
</style>
