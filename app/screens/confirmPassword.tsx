import BotaoComponent from "@/components/ui/botao-component";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useThemeColor } from '@/hooks/useThemeColor';


export default function ConfirmPassword() {
    const text = useThemeColor({}, 'text');
    const background = useThemeColor({}, 'background');
    const primary = useThemeColor({}, 'primary');

    return (
        <View style={[styles.container, { backgroundColor: background }]}>
            <View style={{ marginBottom: 32 }}>
                <Image source={require("@/assets/icons/drawConfirmarSenha.png")}/>
            </View>
            <Text style={[styles.text, { color: text }]}>Confirmação de senha</Text>
            <Text style={[styles.number, { color: primary }]}>A001</Text>

            <Text style={[styles.subtitle]}>3 Pessoas na sua frente</Text>
            <Text style={[styles.subtitle]}>Tempo estimado de 26 minutos</Text>

            <BotaoComponent
                titulo="Confirmar agendamento"
            />

        <Text style={{fontFamily: "PoppinsRegular", fontSize: 12, textDecorationLine: "underline"}}>Cancelar senha</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontFamily: 'PoppinsRegular',
        textAlign: 'center',
        marginBottom: 32,
    },
    number: {
        fontSize: 60,
        fontFamily: 'PoppinsRegular',
        marginBottom: 32,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'PoppinsRegular',
        textAlign: 'center',
        marginBottom: 24,
    }
});