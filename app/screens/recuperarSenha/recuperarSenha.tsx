import BotaoComponent from "@/components/ui/botao-component";
import InputComponentInputComponent from "@/components/ui/input-component";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RecuperarSenha() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Recuperar <br/>senha</Text>
                <Text style={styles.subtitle}>Digite seu e-mail para enviar o código.</Text>
            </View>

            <InputComponentInputComponent
                placeholder="E-mail"
                keyboardType="email-address"
                icon={require("@/assets/icons/email.png")}
            />

            <BotaoComponent
                titulo="Enviar código"
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FAE0C5",
    },
    text: {
        fontSize: 48,
        color: '#222222',
        fontFamily: 'PoppinsRegular',
        lineHeight: 60,
    },
    subtitle: {
        fontSize: 12,
        color: '#222222',
        fontFamily: 'PoppinsRegular',
        marginBottom: 72,
    },
});