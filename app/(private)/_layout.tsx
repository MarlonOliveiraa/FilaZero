import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import { Slot, Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function PrivateLayout() {
  const [loading, setLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Carrega as fontes
    const loadFonts = async () => {
      await Font.loadAsync({
        Poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
        // aqui você pode carregar outras variações da Poppins se quiser
      });
      setFontsLoaded(true);
    };

    // Verifica o token e carrega as fontes
    const prepare = async () => {
      await loadFonts();
      const token = await AsyncStorage.getItem("@token");
      if (!token) {
        router.replace("/(auth)/login");
      }
      setLoading(false);
    };

    prepare();
  }, []);

  if (loading || !fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <Stack>
      <Slot />
    </Stack>
  );
}
