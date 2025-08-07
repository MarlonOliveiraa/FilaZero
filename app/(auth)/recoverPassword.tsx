import BotaoComponent from "@/components/ui/botao-component";
import InputComponent from "@/components/ui/input-component";
import { useThemeColor } from '@/hooks/useThemeColor';
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RecuperarSenha() {
    const text = useThemeColor('text');
    const background = useThemeColor('background');
    // const primary = useThemeColor('primary');
    // const secondary = useThemeColor('secondary');
    // const accent = useThemeColor('accent');

    return (
        <View style={[styles.container, { backgroundColor: background}]}>
            <View style={{alignItems: "flex-start", width: "90%"}}>
                <Text style={[styles.text, { color: text }]}>Recuperar <br/>senha</Text>
                <Text style={[styles.subtitle, { color: text }]}>Digite seu e-mail para enviar o código.</Text>
            </View>

            <InputComponent
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
        gap: 16,
    },
    text: {
        fontSize: 48,
        fontFamily: 'PoppinsRegular',
        lineHeight: 60,
    },
    subtitle: {
        fontSize: 12,
        fontFamily: 'PoppinsRegular',
        marginBottom: 72,
    },
});