import BotaoComponent from "@/components/ui/botao-component";
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Index() {
    const background = useThemeColor({}, 'background');
    const text = useThemeColor({}, 'text');

    return(
        <View style={[styles.container, { backgroundColor: background }]}>
            <Text style={[styles.text, { color: text }]}>Tempo Zero</Text>

            <BotaoComponent 
                titulo="Iniciar"
                />
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 220,
    },
    text: {
        fontSize: 40,
        fontFamily: 'PoppinsRegular',
    },
});