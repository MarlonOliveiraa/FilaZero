import InputComponent from "@/components/ui/input-component";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const menuItems = [
  { icon: require("@/assets/icons/home.png"), route: "screens/home" },
  { icon: require("@/assets/icons/search.png"), route: "screens/search" },
  { icon: require("@/assets/icons/fila.png"), route: "screens/filas" },
  { icon: require("@/assets/icons/profile.png"), route: "screens/profile" },
];

export default function Filas() {
  const background = useThemeColor("background");
  const text = useThemeColor("text");

  return (
    <View>
      <TouchableOpacity>
        <Image source={require("@/assets/icons/arrowBack.png")} />
      </TouchableOpacity>
      <InputComponent
        placeholder="Pesquise a empresa"
        keyboardType="email-address"
        icon={require("@/assets/icons/search-dark.png")}
      />
      <Text style={styles.text}>Empresas parceiras</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  text: {
    fontSize: 20,
    fontFamily: "PoppinsRegular",
    lineHeight: 60,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    marginBottom: 72,
  },
});
