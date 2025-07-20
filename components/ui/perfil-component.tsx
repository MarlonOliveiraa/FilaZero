import { Image, StyleSheet, View } from "react-native";

type props = { 
    image: any;
}

export default function PerfilComponent({ image }: props) {
  return (
    <View style={style.container}>
        <Image
            source={image}
            style={style.image}
            
        />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden", // ESSENCIAL para o efeito circular funcionar

    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  
    
  },
  image: {
    width: "100%", // ocupa todo o container
    height: "100%",
    resizeMode: "cover", // cobre todo o container
    

  },
});
