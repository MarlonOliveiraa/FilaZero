import { StyleSheet, Text, TouchableOpacity } from "react-native";

type props = {
  titulo: string;
  funcao?: () => void;
};

export default function BotaoComponent({ titulo, funcao }: props) {
  return (
    <TouchableOpacity style={[style.container]} onPress={funcao}>
      <Text style={[style.titulo]}>{titulo}</Text>
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
    backgroundColor: "#222222",
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 8,
    
  },
  titulo: {
    color: "#FAE0C5",
    fontSize: 16,
    fontFamily: "PoppinsRegular",
  },
});
