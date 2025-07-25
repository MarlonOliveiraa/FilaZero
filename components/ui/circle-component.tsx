import { Image, StyleSheet, TouchableOpacity } from "react-native";

export interface ProfileCircle {
  image: any;
  funcao?: () => void;
}

export default function CircleComponent({ image, funcao }: ProfileCircle) {
  return (
    <TouchableOpacity style={styles.shadowContainer} onPress={funcao}>
      <Image source={image} style={styles.image} resizeMode="cover" />
    </TouchableOpacity>
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
    width: 80,
    height: 80,
    overflow: "hidden",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});
