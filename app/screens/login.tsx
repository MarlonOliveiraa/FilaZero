import BotaoComponent from "@/components/ui/botao-component";
import InputComponentInputComponent from "@/components/ui/input-component";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>
            <View className="bg-blue-500">
                <Text style={styles.text}>Entre com <br/>sua conta</Text>
                <Text style={styles.subtitle}>Faça login para continuar.</Text>
            </View>

            <InputComponentInputComponent
                placeholder="E-mail"
                keyboardType="email-address"
                icon={require("@/assets/icons/email.png")}
            />

            <InputComponentInputComponent
                placeholder="Senha"
                secureTextEntry={true}
                icon={require("@/assets/icons/senha.png")}
            />
            <View style={{ width: "90%", maxWidth: 300, alignItems: "flex-end", marginBottom: 32 }}>
                <Text style={styles.senha}>Esqueci minha senha.</Text>
            </View>

            <BotaoComponent
                titulo="Entrar"
            />

            <Text style={styles.cadastro}>Não tem uma conta? Cadastre-se</Text>
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
        fontSize: 16,
        color: '#222222',
        fontFamily: 'PoppinsRegular',
        marginBottom: 96,
    },
    senha: {
        fontSize: 12,
        color: '#222222',
        fontFamily: 'PoppinsRegular',
        marginBottom: 32,
    },
    cadastro: {
        fontSize: 12,
        color: '#222222',
        fontFamily: 'PoppinsRegular',
        marginTop: 8,
    },
});