import { Image, StyleSheet, Text, View } from "react-native";

type props = {
  image: any;
  titulo: string;
  data: string;
  horario: string;
};

export default function CardComponent({ image, titulo, data, horario }: props) {
  return (
    <View style={[style.container]}>
      <Image source={image} style={[style.image]} />
      <View style={[style.containerinfos]}>
        <Text style={[style.titulo]}> {titulo} </Text>
        <Text style={[style.titulo]}>{data}</Text>
        <Text style={[style.titulo]}>{horario}</Text>
      </View>
      
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "80%",
    maxHeight: 100,
    height: 4,
    maxWidth: 396,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderRadius: 5,
  },
  containerinfos: {
    flex: 1,
    flexDirection: "column",
  },
  titulo: {
    fontSize: 16,
    color: "#000000",
  },
  info: {
    fontSize: 12,
    color: "#000000",
  },
  image: {
    width: 100,
    height: "auto",
  }
});
