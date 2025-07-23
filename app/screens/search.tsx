import CardRedirectComponent from "@/components/ui/card-redirect-component";
import InputComponent from "@/components/ui/input-component";
import { useThemeColor } from "@/hooks/useThemeColor";
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
  { icon: require("@/assets/icons/search.png"), route: "screens/search" },
  { icon: require("@/assets/icons/fila.png"), route: "screens/filas" },
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
    iconRedirect: "google.com",
    navigation: "DetalhesEmpresa",
  },
  {
    id: 2,
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: "",
  },
  {
    id: 3,
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: "",
  },
  {
    id: 4,
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: "",
  },
  {
    id: 5,
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: "",
  },
  {
    id: 6,
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: "",
  },
  {
    id: 7,
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: "",
  },
];

export function Filas({ navigation }: Empresas) {
  const background = useThemeColor("background");
  const text = useThemeColor("text");

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.botao}>
          <Image source={require("@/assets/icons/arrowBack.png")} />
        </TouchableOpacity>
        <InputComponent
          placeholder="Pesquise por localização ou serviço"
          keyboardType="email-address"
          icon={require("@/assets/icons/search-dark.png")}
        />
        <Text style={styles.text}>Empresas parceiras</Text>
        <View>
          <FlatList
            data={dados}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CardRedirectComponent
                image={item.image}
                iconRedirect={item.iconRedirect}
                onPress={() =>
                  navigation.navigate(item.navigation ?? "DefaultRoute", {
                    id: item.id,
                  })
                }
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    width: "100%",
    maxWidth: 320,
    marginTop: "10%",
    marginLeft: "5%",
  },
  text: {
    fontSize: 20,
    fontFamily: "PoppinsRegular",
    lineHeight: 60,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    marginBottom: 72,
  },
  botao: {
    marginBottom: "5%",
  },
});
