import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Lista de nomes válidos de cores do seu Colors.ts
type ColorName =
  | 'text'
  | 'text2'
  | 'background'
  | 'background2'
  | 'primary'
  | 'secondary'
  | 'accent';

type props = {
  titulo: string;
  funcao?: () => void;
  corFundo?: ColorName;
  corTexto?: ColorName;
};

export default function BotaoComponent({ titulo, funcao, corFundo="primary", corTexto= "secondary" }: props) {
  const backgroundColor = useThemeColor(corFundo);
  const textColor = useThemeColor(corTexto);

  console.log(backgroundColor, textColor);

  return (
    <TouchableOpacity style={[style.container, { backgroundColor: backgroundColor }]} onPress={funcao}>
      <Text style={[style.titulo, { color: textColor }]}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 420,
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