import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

interface Enterprise {
  id: string;
  nome: string;
  localizacao_lat: string;
  localizacao_lng: string;
}

interface Props {
  empresas: Enterprise[];
}

export default function MapComponent({ empresas }: Props) {
  const [region, setRegion] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permissão de localização negada");
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
      setLoading(false);
    })();
  }, []);

  if (loading || !region) {
    return (
      <View style={[styles.loading]}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <MapView style={styles.map} initialRegion={region}>
      {/* Usuário atual */}
      <Marker
        coordinate={{ latitude: region.latitude, longitude: region.longitude }}
        title="Você está aqui"
        pinColor="blue"
      />

      {/* Empresas */}
      {empresas.map((e) => (
        <Marker
          key={e.id}
          coordinate={{
            latitude: parseFloat(e.localizacao_lat),
            longitude: parseFloat(e.localizacao_lng),
          }}
          title={e.nome}
          pinColor="red"
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 300,
    borderRadius: 16,
  },
  loading: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
});
