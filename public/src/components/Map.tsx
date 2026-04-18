import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import type { Location } from '../types/Location';

interface MapProps {
    locationData: Location | null
}

function Map({ locationData }: MapProps){

    return(
<MapContainer key={locationData?.location?.city} className='h-screen z-0' center={locationData?.location ? [locationData.location.lat, locationData.location.lng] : [51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={locationData?.location ? [locationData.location.lat, locationData.location.lng] : [51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    )
}

export default Map;