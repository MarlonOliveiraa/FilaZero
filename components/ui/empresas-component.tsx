import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

type props = {
    image: any;
}

export default function EmpresaComponent({image}: props){
    <View>
        <TouchableOpacity>
            <Image 
                source={require("@/assets/icons/user.png")} 
                style={style.icon}
            />
        </TouchableOpacity>
        <Image
            source={image}
            style={style.image}
        />
    </View>
   
}


const style = StyleSheet.create ({
    container: {
        maxHeight: 120,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image:{
        width: 120,
        height: 120,
    },
    icon: {
        width:20,
        height:20,
        justifyContent:"flex-end",
        alignItems: "flex-end"
    }
})