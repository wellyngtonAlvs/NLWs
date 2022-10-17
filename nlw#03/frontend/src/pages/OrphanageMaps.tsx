import mapMarkerImg from '../imagens/ancora.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

import '../styles/pages/orphanage-map.css';
import 'leaflet/dist/leaflet.css';

function OrphanageMaps() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no map</h2>
          <p>Muitas crianças estão esperando a sua vísita :)</p>
        </header>

        <footer>
          <strong>Pernambuco</strong>
          <span>Caruaru</span>
        </footer>
      </aside>

      <MapContainer 
        center={[-8.2495584,-35.9914278]} 
        zoom={15} 
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanageMaps;