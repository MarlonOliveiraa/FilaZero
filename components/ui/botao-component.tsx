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
    width: 396,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222222",
    borderRadius: 40,
    paddingHorizontal: 16,
    paddingVertical: 16,
    
  },
  titulo: {
    color: "#FAE0C5",
    fontSize: 20,
  },
});
