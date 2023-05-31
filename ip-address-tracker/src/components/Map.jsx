import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import './Map.css'
import { Icon } from 'leaflet';
import indicator from '../assets/images/icon-location.svg'

const Map = () => {


  const customIcon = new Icon({
    iconUrl: indicator
  })

  const position = [51.505, -0.09]
  return (
<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  <Marker position={position} icon={customIcon}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  
</MapContainer>

  )
}

export default Map