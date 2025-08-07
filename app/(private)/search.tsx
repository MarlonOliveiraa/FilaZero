import CardRedirectComponent from "@/components/ui/card-redirect-component";
import InputComponent from "@/components/ui/input-component";
import MenuComponent from "@/components/ui/menu-component";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import React, { useState } from "react";
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
  { icon: require("@/assets/icons/home.png"), route: "/(private)/home" },
  { icon: require("@/assets/icons/fila.png"), route: "/(private)/filas" },
  { icon: require("@/assets/icons/search.png"), route: "/(private)/search" },
  { icon: require("@/assets/icons/profile.png"), route: "/(private)/profile" },
];

type Empresa = {
  id: number;
  nome: string;
  descricao: string;
  endereco: string;
  image: any;
  iconRedirect?: any;
};

const dadosMockados: Empresa[] = [
  {
    id: 1,
    nome: "Unimed",
    descricao: "Atendimento médico completo com especialistas.",
    endereco: "Av Afonso Pena, 1234 - Centro, Campo Grande - MS",
    image: require("@/assets/images/unimed.png"),
    iconRedirect: require("@/assets/icons/external-link.png"),
  },
  {
    id: 2,
    nome: "Caixa Econômica Federal - Agência Centro",
    descricao: "Agência movimentada com atendimentos para FGTS, Bolsa Família, habitação e serviços bancários em geral.",
    endereco: "Rua 14 de Julho, 123 - Centro, Campo Grande - MS",
    image: require("@/assets/images/caixa.png"),
    iconRedirect: require("@/assets/icons/external-link.png"),
  },
  {
    id: 3,
    nome: "Banco do Brasil SA",
    descricao: "Emergência 24h e internações.",
    endereco: "Rua da Saúde, 789 - Vida Nova, Campo Grande - MS",
    image: require("@/assets/images/banco-brasil.png"),
    iconRedirect: require("@/assets/icons/external-link.png"),
  },
  {
    id: 4,
    nome: "Detran-MS",
    descricao: "Unidade do Detran responsável por CNH, emplacamentos e vistorias, com filas frequentes devido à alta procura por serviços presenciais.",
    endereco: "Av. Gury Marques, 7155 - Cidade Morena, Campo Grande - MS",
    image: "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: require("@/assets/icons/external-link.png"),
  },
];

export default function Filas() {
  const background = useThemeColor("background");
  const router = useRouter();
  const [busca, setBusca] = useState("");

  const empresasFiltradas = dadosMockados.filter((empresa) =>
    empresa.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={[styles.screen, { backgroundColor: background }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("/(private)/home")}
        >
          <Image source={require("@/assets/icons/arrowBack.png")} />
        </TouchableOpacity>

        <InputComponent
          placeholder="Pesquise por localização ou serviço"
          icon={require("@/assets/icons/search-dark.png")}
          value={busca}
          onChangeText={(text) => setBusca(text)}
        />

        <Text style={[styles.text, { color: useThemeColor("text") }]}>
          Empresas parceiras
        </Text>

        <FlatList
          data={empresasFiltradas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardRedirectComponent
              image={
                typeof item.image === "string"
                  ? { uri: item.image }
                  : item.image
              }
              iconRedirect={item.iconRedirect}
              onPress={() => {
                router.push({
                  pathname: "/(private)/detailsBusiness",
                  params: { id: item.id.toString() },
                });
              }}
            />
          )}
          numColumns={2}
          columnWrapperStyle={styles.linha}
          contentContainerStyle={styles.containerCard}
          scrollEnabled={false}
        />
      </ScrollView>

      <MenuComponent items={menuItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  scrollContainer: {
    paddingTop: 30,
    paddingBottom: 80,
    marginHorizontal: 12,
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
