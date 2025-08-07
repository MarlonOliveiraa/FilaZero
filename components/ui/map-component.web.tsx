import L, { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useRef } from "react";

type Empresa = {
  id: string;
  nome: string;
  latitude: number;
  longitude: number;
};

type MapWebProps = {
  empresas: Empresa[];
};

const MapWeb: React.FC<MapWebProps> = ({ empresas }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && !leafletMapRef.current) {
      leafletMapRef.current = L.map(mapRef.current).setView(
        [-23.55052, -46.633308],
        13
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(leafletMapRef.current);
    }

    if (leafletMapRef.current) {
      // Remove marcadores antigos
      leafletMapRef.current.eachLayer((layer) => {
        // Layer pode ser qualquer coisa, por isso checamos se é Marker
        if (layer instanceof L.Marker) {
          leafletMapRef.current?.removeLayer(layer);
        }
      });

      // Adiciona marcadores novos
      empresas.forEach(({ nome, latitude, longitude }) => {
        L.marker([latitude, longitude])
          .addTo(leafletMapRef.current as LeafletMap)
          .bindPopup(nome);
      });

      // Ajusta o mapa para exibir todos os marcadores
      if (empresas.length > 0) {
        if (empresas.length > 0) {
          const markers = empresas.map(({ latitude, longitude }) =>
            L.marker([latitude, longitude])
          );
          const group = L.featureGroup(markers);
          leafletMapRef.current.fitBounds(group.getBounds().pad(0.5));
        }
      }
    }

    // Cleanup
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, [empresas]);

  return (
    <div
      ref={mapRef}
      style={{ height: "400px", width: "100%", marginTop: "20px" }}
    />
  );
};

export default MapWeb;
