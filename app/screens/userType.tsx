import BotaoComponent from "@/components/ui/botao-component";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useThemeColor } from '@/hooks/useThemeColor';

export default function userType() {
    const text = useThemeColor('text');
    const background = useThemeColor('background');
    const primary = useThemeColor('primary');
    const secondary = useThemeColor('secondary');
    const accent = useThemeColor('accent');

    return (
        <View style={[styles.container, { backgroundColor: background }]}>
            <Text style={[styles.text, { color: text }]}>Tempo Zero</Text>

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
    },
    text: {
        fontSize: 40,
        fontFamily: 'PoppinsRegular',
        marginBottom: 96,
    },
});