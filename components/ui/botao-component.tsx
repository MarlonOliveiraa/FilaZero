import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useThemeColor } from '@/hooks/useThemeColor';

type props = {
  titulo: string;
  funcao?: () => void;
};

export default function BotaoComponent({ titulo, funcao }: props) {
  const text = useThemeColor({}, 'text');
  const background = useThemeColor({}, 'background');
  const primary = useThemeColor({}, 'primary');
  const secondary = useThemeColor({}, 'secondary');
  const accent = useThemeColor({}, 'accent');

  return (
    <TouchableOpacity style={[style.container, { backgroundColor: text  }]} onPress={funcao}>
      <Text style={[style.titulo, {color: background}]}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    width: "90%",
    maxWidth: 300, //Se quiser limitar a largura máxima e mudar a responsividade
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