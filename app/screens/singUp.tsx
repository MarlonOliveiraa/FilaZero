import BotaoComponent from "@/components/ui/botao-component";
import InputComponentInputComponent from "@/components/ui/input-component";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useThemeColor } from '@/hooks/useThemeColor';

export default function SingUp() {
    const text = useThemeColor({}, 'text');
    const background = useThemeColor({}, 'background');
    const primary = useThemeColor({}, 'primary');
    const secondary = useThemeColor({}, 'secondary');
    const accent = useThemeColor({}, 'accent');

    return (
        <View style={[styles.container, {backgroundColor: background }]}>
            <View style={{alignItems: "flex-start", width: "90%"}}>
                <Text style={[styles.text, { color: text}]}>Registre-se</Text>
                <Text style={[styles.subtitle, { color: text }]}>Faça seu cadastro para continuar.</Text>
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

            <Text style={[styles.entrar, {color: text}]}>Já tem uma conta? Entrar</Text>
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
    entrar: {
        fontSize: 12,
        fontFamily: 'PoppinsRegular',
        marginTop: 8,
    },
});