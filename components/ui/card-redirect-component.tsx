import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  image: any;
  iconRedirect: any;
  onPress?: (event: GestureResponderEvent) => void;
};

export default function CardRedirectComponent({
  image,
  iconRedirect,
  onPress,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageWrapper} onPress={onPress}>
        <Image source={{ uri: image }} style={styles.image} />
        <Image source={iconRedirect} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 250,
    height: "100%",
    maxHeight: 250,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8, // importante no Android
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  image: {
    width: 145,
    height: 145,
    borderRadius: 10,
    overflow: "hidden",
  },
  icon: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 5,
    right: 5,
  },
});
