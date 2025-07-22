import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useThemeColor } from '@/hooks/useThemeColor';
import { useNavigation } from "expo-router"; // ou @react-navigation/native se estiver usando React Navigation puro
import React from "react";

type props = {
  titulo: string;
  funcao?: () => void;
  rota?: string;
};

export default function BotaoComponent({ titulo, funcao, rota }: props) {
  const text = useThemeColor({}, 'text');
  const primary = useThemeColor({}, 'primary');
  const navigation = useNavigation();

  const handlePress = () => {
    if (rota) {
      // Vai para a rota se fornecida
      navigation.navigate(rota as never);
    }
    if (funcao) {
      funcao(); 
    }
  };

  return (
    <TouchableOpacity
      style={[style.container, { backgroundColor: primary }]}
      onPress={handlePress}
    >
      <Text style={[style.titulo, { color: text }]}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    width: "90%",
    maxWidth: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 8,
  },
  titulo: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
  },
});
