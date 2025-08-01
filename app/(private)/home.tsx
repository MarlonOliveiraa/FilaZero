import CardComponent, { Card } from "@/components/ui/card-component";
import CircleComponent, {
  ProfileCircle,
} from "@/components/ui/circle-component";
import InputComponent from "@/components/ui/input-component";
import Menucomponent from "@/components/ui/menu-component";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { searchEnterprise } from "../services/enterprise-service";

const menuItems = [
  { icon: require("@/assets/icons/home.png"), route: "/(private)/home" },
  { icon: require("@/assets/icons/fila.png"), route: "/(private)/filas" },
  { icon: require("@/assets/icons/search.png"), route: "/(private)/search" },
  { icon: require("@/assets/icons/profile.png"), route: "/(private)/profile" },
];

const cards: Card[] = [
  {
    image: require("@/assets/images/CASSEMS-2.png"),
    title: "testando card",
    date: "10/07/0303",
    time: "10:00",
  },
  {
    image: require("@/assets/images/CASSEMS-2.png"),
    title: "testando card",
    date: "10/07/0303",
    time: "10:00",
  },
];

const profileCircle: ProfileCircle[] = [
  { image: require("@/assets/images/logo1.png") },
  { image: require("@/assets/images/logo1.png") },
  { image: require("@/assets/images/logo1.png") },
  { image: require("@/assets/images/logo1.png") },
];

export default function Home() {
  const background = useThemeColor("background");
  const text = useThemeColor("text");
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [empresas, setEmpresas] = useState<any[]>([]);

  const handleSearch = async (query: string) => {
    setSearch(query);

    // só busca quando tiver mais de 2 letras
    if (query.length > 2) {
      const result = await searchEnterprise(query);
      setEmpresas(result || []);
    } else {
      setEmpresas([]);
    }
  };

  // FUNCAO PARA FAZER LOUGOUT
  // const handleLogout = async () => {
  //   await AsyncStorage.removeItem("@token");  // remove token
  //   router.replace("/(auth)/login");         // volta para login
  // };

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <ScrollView
        style={{
          width: "100%",
          maxWidth: 420,
          marginBottom: 60,
          paddingBottom: 20,
        }}
        contentContainerStyle={{ alignItems: "center", gap: 16 }}
      >
        <Text style={[styles.text, { color: text }]}>Fila Zero</Text>

        <InputComponent
          placeholder="Pesquise a empresa"
          keyboardType="web-search"
          icon={require("@/assets/icons/search.png")}
          onChangeText={handleSearch}
        />

        <FlatList
          data={empresas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={{ padding: 10 }}>{item.nome}</Text>
          )}
          ListEmptyComponent={
            search.length > 2 ? <Text>Nenhuma empresa encontrada</Text> : null
          }
        />

        {/* AQUI VAI O MAPA */}
        <View
          style={{
            width: "90%",
            height: 200,
            backgroundColor: "#3d3d3dff",
            borderRadius: 16,
          }}
        />

        {/* Cards agendamentos */}
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ flex: 1, width: "90%", alignItems: "flex-start" }}>
            <Text style={[styles.subtitle2, { color: text }]}>
              Agendamentos
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              alignItems: "center",
              marginTop: 8,
              gap: 8,
            }}
          >
            {cards.map((card, index) => (
              <CardComponent key={index} {...card} />
            ))}
          </View>
        </View>

        {/* Mais acessados */}
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              width: "90%",
              alignItems: "flex-start",
              marginBottom: 16,
            }}
          >
            <Text style={[styles.subtitle2, { color: text }]}>
              Mais acessados
            </Text>
          </View>

          <View style={{ flexDirection: "row", gap: 16, maxWidth: 420 }}>
            {profileCircle.map((profile, index) => (
              <CircleComponent key={index} image={profile.image} />
            ))}
          </View>
        </View>
      </ScrollView>

      <Menucomponent items={menuItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 16,
    paddingTop: 60,
  },
  text: {
    fontSize: 48,
    fontFamily: "PoppinsRegular",
    lineHeight: 60,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    marginBottom: 72,
  },
  subtitle2: {
    fontSize: 24,
    fontFamily: "PoppinsRegular",
    fontWeight: "bold",
  },
});
