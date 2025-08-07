import React from "react";
import MapView, { Marker } from "react-native-maps";

export default function MapComponent({ empresas }: { empresas: any[] }) {
  return (
    <MapView
      style={{ width: "90%", height: 200, borderRadius: 16 }}
      initialRegion={{
        latitude:
          empresas.length > 0 ? parseFloat(empresas[0].localizacao_lat) : 0,
        longitude:
          empresas.length > 0 ? parseFloat(empresas[0].localizacao_lng) : 0,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {empresas.map((empresa) => (
        <Marker
          key={empresa.id}
          coordinate={{
            latitude: parseFloat(empresa.localizacao_lat),
            longitude: parseFloat(empresa.localizacao_lng),
          }}
          title={empresa.nome}
        />
      ))}
    </MapView>
  );
}
