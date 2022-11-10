import Leaflet from "leaflet";

const iconMarker = Leaflet.icon({
  iconSize: [30, 41],
  iconAnchor: [15, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://cdn.discordapp.com/attachments/630730736009216003/1033011895814340709/Map_pin_icon_green.svg.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png",
});

export default iconMarker;