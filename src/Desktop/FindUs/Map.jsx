import { useEffect, useRef } from 'react';
import L from 'leaflet';
import styles from './Map.module.css';

const Map = () => {
  const mapRef = useRef(null); // Store the map instance reference
  const mapContainerRef = useRef(null); // Reference for the div container

  useEffect(() => {
    // Prevent reinitialization
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView(
        [13.787626735089935, 100.54837817731602],
        17
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        zIndex: -500,
      }).addTo(mapRef.current);

      // Add a marker
      L.marker([13.787626735089935, 100.54837817731602])
        .addTo(mapRef.current)
        .bindPopup('HIDEOUT')
        .openPopup();
    }

    // Cleanup function to properly remove the map instance when unmounting
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className={styles.leafletMap}
      ref={mapContainerRef}
      style={{ height: '370px', width: '90%' }}
    />
  );
};

export default Map;
