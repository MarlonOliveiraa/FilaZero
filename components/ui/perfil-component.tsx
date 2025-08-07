import { Image, StyleSheet, View } from "react-native";

type PerfilComponentProps = {
  image: number | { uri: string } | null;
};

export default function PerfilComponent({ image }: PerfilComponentProps) {
  const source =
    typeof image === "string"
      ? { uri: image }
      : image
      ? image
      : require("@/assets/images/image-cassems.png"); // imagem padrão fallback

  return (
    <View style={styles.shadowContainer}>
      <Image style={styles.image} source={source} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    maxWidth: 150,
    width: "100%",
    maxHeight: 150,
    height: "100%",
    borderRadius: 5,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#000000",
  },
  image: {
    width: 150,
    height: 150,
  },
});
