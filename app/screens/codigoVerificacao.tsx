import BotaoComponent from "@/components/ui/botao-component";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  placeholder: string;
}

export default function CodigoVerificacao() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Digite o <br/>código</Text>
                <Text style={styles.subtitle}>Digite o código recebido.</Text>
            </View>

            <View style={styles.input}>
                <TextInput
                        style={styles.textinput}
                        placeholder={"0"}
                        placeholderTextColor="#00000045"
                        keyboardType="numeric"
                        maxLength={1}                     
                />
            </View>
            <View style={styles.input}>
                <TextInput
                        style={styles.textinput}
                        placeholder={"0"}
                        placeholderTextColor="#00000045"
                        keyboardType="numeric"
                        maxLength={1}                     
                />
            </View>
            <View style={styles.input}>
                <TextInput
                        style={styles.textinput}
                        placeholder={"0"}
                        placeholderTextColor="#00000045"
                        keyboardType="numeric"
                        maxLength={1}                     
                />
            </View>
            <View style={styles.input}>
                <TextInput
                        style={styles.textinput}
                        placeholder={"0"}
                        placeholderTextColor="#00000045"
                        keyboardType="numeric"
                        maxLength={1}                     
                />
            </View>
            <View style={styles.input}>
                <TextInput
                        style={styles.textinput}
                        placeholder={"0"}
                        placeholderTextColor="#00000045"
                        keyboardType="numeric"
                        maxLength={1}                     
                />
            </View>
            <View style={styles.input}>
                <TextInput
                        style={styles.textinput}
                        placeholder={"0"}
                        placeholderTextColor="#00000045"
                        keyboardType="numeric"
                        maxLength={1}                     
                />
            </View>

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
        backgroundColor: "#FAE0C5",
        gap: 16,
    },
    text: {
        fontSize: 48,
        color: '#222222',
        fontFamily: 'PoppinsRegular',
        lineHeight: 60,
    },
    subtitle: {
        fontSize: 12,
        color: '#222222',
        fontFamily: 'PoppinsRegular',
        marginBottom: 72,
    },
    input: {
        width: 60,
        height: 60,
        borderColor: "#222222",
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#000000",
        marginBottom: 24,
    },
    textinput: {
        width: "100%",
        textAlign: "center",
        fontSize: 24,
        outlineWidth: 0,
    }
});