// Initialize and add the map
function initMap() {
    // The location of batam
    const batam = { lat: 1.1188982617933771, lng: 104.04837762366233 };
    // The map, centered at batam
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: batam,
    });
    // The marker, positioned at batam
    const marker = new google.maps.Marker({
      position: batam,
      map: map,
    });
  }