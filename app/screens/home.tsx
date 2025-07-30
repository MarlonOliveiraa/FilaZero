import CardComponent, { Card } from "@/components/ui/card-component";
import CircleComponent, {
  ProfileCircle,
} from "@/components/ui/circle-component";
import InputComponent from "@/components/ui/input-component";
import Menucomponent from "@/components/ui/menu-component";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const menuItems = [
  { icon: require("@/assets/icons/home.png"), route: "screens/home" },
  { icon: require("@/assets/icons/fila.png"), route: "screens/filas" },
  { icon: require("@/assets/icons/search.png"), route: "screens/search" },
  { icon: require("@/assets/icons/profile.png"), route: "screens/profile" },
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
  {
    image: require("@/assets/images/logo1.png"),
  },
  {
    image: require("@/assets/images/logo1.png"),
  },
  {
    image: require("@/assets/images/logo1.png"),
  },
  {
    image: require("@/assets/images/logo1.png"),
  },
];

export default function Home() {
  const background = useThemeColor("background");
  const text = useThemeColor("text");
  const router = useRouter();

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
        
        <View style={{width: '90%'}}>
          <InputComponent
            placeholder="Pesquise a empresa"
            keyboardType="email-address"
            icon={require("@/assets/icons/email.png")}
            />
        </View>

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
          <View
            style={{
              flex: 1,
              width: "90%",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text style={[styles.subtitle2, { color: text }]}>
              Agendamentos
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 8,
              gap: 8,
            }}
          >
            {cards.map((card, index) => (
              <CardComponent
                image={card.image}
                title={card.title}
                date={card.date}
                time={card.time}
              />
            ))}
          </View>
        </View>

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
              justifyContent: "center",
              alignItems: "flex-start",
              marginBottom: 16,
            }}
          >
            <Text style={[styles.subtitle2, { color: text }]}>
              Mais acessados
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 16,
              maxWidth: 420,
              height: "auto",
            }}
          >

            {profileCircle.map((profile) => (
              <CircleComponent image={profile.image} />
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
