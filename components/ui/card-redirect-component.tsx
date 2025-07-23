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
    maxHeight: 120,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  icon: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 5,
    right: 5,
  },
});
