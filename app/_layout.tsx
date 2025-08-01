import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { Slot, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Layout() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("@token");
        if (token) {
          // Usuário já logado → manda para home
          router.replace("/screens/home");
        } else {
          // Sem token → vai para login
          router.replace("/screens/login");
        }
      } catch (error) {
        console.log("Erro ao buscar token:", error);
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  if (!fontsLoaded || loading) {
    // Tela de loading enquanto verifica o token
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return <Slot />;
}
