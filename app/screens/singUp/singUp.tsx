import BotaoComponent from "@/components/ui/botao-component";
import InputComponentInputComponent from "@/components/ui/input-component";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SingUp() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Registre-se</Text>
                <Text style={styles.subtitle}>Faça seu cadastro para continuar.</Text>
            </View>

            <InputComponentInputComponent
                placeholder="Nome completo"
                icon={require("@/assets/icons/user.png")}
            />

            <InputComponentInputComponent
                placeholder="Telefone"
                keyboardType="phone-pad"
                icon={require("@/assets/icons/phone.png")}
            />

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
            <InputComponentInputComponent
                placeholder="Confirme sua senha"
                secureTextEntry={true}
                icon={require("@/assets/icons/senha.png")}
            />

            <BotaoComponent
                titulo="Cadastrar"
            />

            <Text style={styles.cadastro}>Já tem uma conta? Entrar</Text>
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