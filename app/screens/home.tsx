import InputComponent from "@/components/ui/input-component";
import { useThemeColor } from '@/hooks/useThemeColor';
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
    const text = useThemeColor({}, 'text');
    const background = useThemeColor({}, 'background');

    return (
        <View style={[styles.container, { backgroundColor: background}]}>
            <InputComponent
                placeholder="Pesquise a empresa"
                keyboardType="email-address"
                icon={require("@/assets/icons/email.png")}
            />

            <View style={{alignItems: "flex-start", width: "90%"}}>
                <Text style={[styles.text, { color: text }]}> <br/></Text>
                <Text style={[styles.subtitle, { color: text }]}></Text>
            </View>
            
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