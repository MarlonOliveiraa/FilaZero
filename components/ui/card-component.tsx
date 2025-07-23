import { Image, StyleSheet, Text, View } from "react-native";

type props = {
  image: any;
  titulo: string;
  data: string;
  horario: string;
};

export default function CardComponent({ image, titulo, data, horario }: props) {
  return (
    <View style={style.container}>
      <View style={style.imageShadowWrapper}>
        <Image source={image} style={style.image} />
      </View>

      <View style={style.containerinfos}>
        <Text style={style.titulo}>{titulo}</Text>
        <Text style={style.info}>{data}</Text>
        <Text style={style.info}>{horario}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    maxWidth: 420,
    padding: 10,
    height: 90,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  imageShadowWrapper: {
    maxHeight:65,
    // só sombra aqui, sem borda
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  
    borderRadius: 4, // mesmo raio da imagem para sombra arredondada
    
  },

  image: {
    width: 68,
    height: 68,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff", 
    resizeMode: "cover",
    
  },

  containerinfos: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  titulo: {
    fontSize: 20,
    color: "#000000",
    marginBottom: 4,
  },

  info: {
    fontSize: 14,
    color: "#020202",
  },
});
