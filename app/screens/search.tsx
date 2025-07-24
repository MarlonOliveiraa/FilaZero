import CardRedirectComponent from "@/components/ui/card-redirect-component";
import InputComponent from "@/components/ui/input-component";
import MenuComponent from "@/components/ui/menu-component";
import { useThemeColor } from "@/hooks/useThemeColor";
import { push } from "expo-router/build/global-state/routing";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const menuItems = [
  { icon: require("@/assets/icons/home.png"), route: "screens/home" },
  { icon: require("@/assets/icons/fila.png"), route: "screens/filas" },
  { icon: require("@/assets/icons/search.png"), route: "screens/search" },
  { icon: require("@/assets/icons/profile.png"), route: "screens/profile" },
];

type Empresas = {
  id: number;
  image: string;
  iconRedirect?: string;
  navigation?: string;
};

const dados: Empresas[] = [
  {
    id: 1,
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    navigation: "home",
    iconRedirect: require("@/assets/icons/external-link.png"),
  },
  {
    id: 2,
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: require("@/assets/icons/external-link.png"),
  },
  {
    id: 3,
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: require("@/assets/icons/external-link.png"),
  },
  {
    id: 4,
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: require("@/assets/icons/external-link.png"),
  },
  {
    id: 5,
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: require("@/assets/icons/external-link.png"),
  },
  {
    id: 6,
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: require("@/assets/icons/external-link.png"),
  },
  {
    id: 7,
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: require("@/assets/icons/external-link.png"),
  },
  {
    id: 8,
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: require("@/assets/icons/external-link.png"),
  },
];

export default function Filas({ navigation }: any) {
  const background = useThemeColor("background");
  const text = useThemeColor("text");

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.botao}
          onPress={() => push("../screens/home")}
        >
          <Image source={require("@/assets/icons/arrowBack.png")} />
        </TouchableOpacity>

        <InputComponent
          placeholder="Pesquise por localização ou serviço"
          keyboardType="email-address"
          icon={require("@/assets/icons/search-dark.png")}
        />

        <Text style={styles.text}>Empresas parceiras</Text>

        <FlatList
          data={dados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardRedirectComponent
              image={item.image}
              iconRedirect={item.iconRedirect}
              // onPress={() => push(`/screens/estabelecimento?id=${item.id}`)} CODIGO PRONTO PARA RECEBER O BACKEND
              onPress={() => push(`/screens/home`)}
            />
          )}
          numColumns={2}
          columnWrapperStyle={styles.linha} // estilo para cada linha
          contentContainerStyle={styles.containerCard}
        />
      </ScrollView>

      <MenuComponent items={menuItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingTop: 30,
    paddingBottom: 80,
    marginHorizontal: 12,
  },
  menuContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    fontSize: 20,
    fontFamily: "PoppinsRegular",
    marginBottom: 10,
    marginTop: 14,
    fontWeight: "600",
  },
  botao: {
    marginBottom: "5%",
  },
  linha: {
    gap: 8,
  },
  containerCard: {
    gap: 6,
  },
});
