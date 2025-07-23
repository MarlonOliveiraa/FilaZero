import BotaoComponent from "@/components/ui/botao-component";
import { push } from "expo-router/build/global-state/routing";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useThemeColor } from '@/hooks/useThemeColor';

export default function Index() {
    const background = useThemeColor('background');
    const text = useThemeColor('text');

    return (
        <View style={[styles.container, { backgroundColor: background }]}>
            <Text style={[styles.text, { color: text }]}>Tempo Zero</Text>

            <BotaoComponent
                titulo="Iniciar"
                corFundo="background2"
                corTexto="text2"
                funcao={() => push('/screens/home')}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 156,
    },
    text: {
        fontSize: 40,
        fontFamily: 'PoppinsRegular',
    },
});