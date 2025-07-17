import BotaoComponent from "@/components/ui/botao-component";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function userType() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tempo Zero</Text>

            <BotaoComponent
                titulo="Cliente"
            />

            <BotaoComponent
                titulo="Estabelecimento"
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FAE0C5",
    },
    text: {
        fontSize: 40,
        color: '#222222',
        fontFamily: 'PoppinsRegular',
        marginBottom: 96,
    },
});