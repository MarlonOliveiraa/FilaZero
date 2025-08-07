import BotaoComponent from "@/components/ui/botao-component";
import Menucomponent from "@/components/ui/menu-component";
import PerfilComponent from "@/components/ui/perfil-component";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
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
    descricao:
      "Agência movimentada com atendimentos para FGTS, Bolsa Família, habitação e serviços bancários em geral.",
    endereco: "Rua 14 de Julho, 123 - Centro, Campo Grande - MS",
    image:
      "https://t.ctcdn.com.br/T3vA3dToBndK4WbU1K6_6j-IyD0=/400x400/smart/i490109.jpeg",
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
    nome: "Laboratório Alfa",
    descricao: "Exames laboratoriais com agendamento online.",
    endereco:
      "Av Ernesto Geisel, 321 - Bairro São Francisco, Campo Grande - MS",
    image:
      "https://t.ctcdn.com.br/55l-VCvM_3sCA7Ha9VHzsnZsKQk=/600x600/smart/i535351.jpeg",
    iconRedirect: require("@/assets/icons/external-link.png"),
  },
];

export default function DetailBusiness() {
  const { id } = useLocalSearchParams();
  const text = useThemeColor("text");
  const background = useThemeColor("background");

  // Buscar empresa pelo id recebido
  const empresa = dadosMockados.find(
    (e) => e.id.toString() === (id ?? "").toString()
  );

  const router = useRouter();

  // Se não encontrar empresa, mostrar mensagem simples ou loading
  if (!empresa) {
    return (
      <View style={[styles.container, { backgroundColor: background }]}>
        <Text style={{ color: text, marginTop: 50, fontSize: 18 }}>
          Empresa não encontrada.
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ width: "90%", alignItems: "flex-start" }}>
          <TouchableOpacity
            style={{ flex: 1, paddingTop: 30 }}
            onPress={() => router.push("/(private)/filas")}
          >
            <Image source={require("@/assets/icons/arrowBack.png")} />
          </TouchableOpacity>
        </View>

        <PerfilComponent
          image={
            typeof empresa.image === "string"
              ? { uri: empresa.image }
              : empresa.image
          }
        />

        <View style={{ width: "90%" }}>
          <Text
            style={[
              { fontWeight: "bold", fontSize: 20, marginTop: 8 },
              { color: text },
            ]}
          >
            {empresa.nome}
          </Text>

          <Text
            style={[
              {
                fontWeight: "400",
                fontSize: 16,
                marginTop: 8,
                paddingRight: 32,
              },
              { color: text },
            ]}
          >
            {empresa.descricao}
          </Text>

          <Text
            style={[
              {
                fontWeight: "400",
                fontSize: 16,
                marginTop: 32,
                paddingRight: 64,
              },
              { color: text },
            ]}
          >
            {empresa.endereco}
          </Text>
        </View>

        <View
          style={{
            width: "90%",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 16,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: "100%",
              gap: 12,
              alignItems: "center",
            }}
          >
            <Image source={require("@/assets/icons/phone.png")} />
            <Text style={{ fontWeight: "bold" }}>(67) 99100-9862</Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: "100%",
              gap: 12,
              alignItems: "center",
            }}
          >
            <Image source={require("@/assets/icons/time.png")} />
            <Text style={{ fontWeight: "bold", color: "#ff0000" }}>
              Fechado
            </Text>
            <View
              style={{
                borderRadius: 100,
                width: 8,
                height: 8,
                borderColor: "#1d1d1dff",
                borderWidth: 3,
              }}
            />
            <Text style={{ fontWeight: "600", color: "#21212198" }}>
              Abre às 8 horas
            </Text>
            <Image source={require("@/assets/icons/arrow-down-fill.png")} />
          </View>

          <View style={{ flexDirection: "row", gap: 16 }}>
            <TouchableOpacity
              onPress={() => router.push("https://wa.me/5567991009862")}
            >
              <Image source={require("@/assets/icons/whatsapp-icon.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("https://instagram.com/evandroocm")}
            >
              <Image source={require("@/assets/icons/instagram-icon.png")} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("https://facebook.com/evandromktd")}
            >
              <Image source={require("@/assets/icons/facebook-icon.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 32,
          }}
        >
          <BotaoComponent
            titulo="Retirar senha digital"
            corFundo="background2"
            corTexto="text2"
            funcao={() => router.push("/(auth)/confirmPassword")}
          />
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
  },
  scrollContent: {
    paddingTop: 30,
    paddingBottom: 80,
    marginHorizontal: 12,
    alignItems: "center",
  },
});
