import { Image, StyleSheet, View } from "react-native";

type props = {
  image: any;
};

export default function PerfilComponent({ image }: props) {
  return (
    <View style={styles.shadowContainer}>
      <Image source={image} style={styles.image} resizeMode="cover" />
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
    borderRadius: 50,
    width: 60,
    height: 60,
    overflow: "hidden", 
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
