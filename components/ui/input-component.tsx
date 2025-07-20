import {
  Image,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type Props = {
  icon: any; 
  placeholder: string;
  className?: string;
} & TextInputProps;

export default function InputComponentInputComponent({
  icon,
  placeholder,
  className,
  ...rest
}: Props) {
  return (
    <View style={[styles.container]}>
      <Image source={icon} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        style={(styles.input, { fontFamily: "PoppinsRegular" })}
        placeholderTextColor="#0000008b"
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    maxWidth: 300, //Se quiser limitar a largura máxima e mudar a responsividade
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#222222",
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    paddingLeft: 22,
    borderRadius: 40,
    marginVertical: 6,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    gap: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 4,
    resizeMode: "contain",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
  },
});
