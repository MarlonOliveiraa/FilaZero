import BotaoComponent from "@/components/ui/botao-component";
import InputComponent from "@/components/ui/input-component";
import { useThemeColor } from '@/hooks/useThemeColor';
import { push } from "expo-router/build/global-state/routing";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
    const text = useThemeColor('text');
    const background = useThemeColor('background');
    // const primary = useThemeColor('primary');
    // const secondary = useThemeColor('secondary');
    // const accent = useThemeColor('accent');

    return (
        <View style={[styles.container, {backgroundColor: background }]}>
            <View style={{alignItems: "flex-start", width: "90%", justifyContent: "center", maxWidth: 300}}>
                <Text style={[styles.text, {color: text}]}>Entre com <br/>sua conta</Text>
                <Text style={[styles.subtitle, {color: text}]}>Faça login para continuar.</Text>

            <InputComponent
                placeholder="E-mail"
                keyboardType="email-address"
                icon={require("@/assets/icons/email.png")}
            />

            <InputComponent
                placeholder="Senha"
                secureTextEntry={true}
                icon={require("@/assets/icons/senha.png")}
            />
            <View style={{ width: "90%", maxWidth: 300, alignItems: "flex-end", marginBottom: 32 }}>
                <Text style={[styles.senha, {color: text}]}>Esqueci minha senha.</Text>
            </View>

            <BotaoComponent
                titulo="Entrar"
                corFundo="background2"
                corTexto="text2"
                funcao={() => push('/screens/home')}
            />

            </View>
            <Text style={[styles.cadastro, {color: text}]}>Não tem uma conta? Cadastre-se</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 48,
        color: "text",
        fontFamily: 'PoppinsRegular',
        lineHeight: 60,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'PoppinsRegular',
        marginBottom: 96,
    },
    senha: {
        fontSize: 12,
        fontFamily: 'PoppinsRegular',
        marginBottom: 32,
    },
    cadastro: {
        fontSize: 12,
        fontFamily: 'PoppinsRegular',
        marginTop: 8,
    },
});