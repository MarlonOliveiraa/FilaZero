import BotaoComponent from "@/components/ui/botao-component";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useThemeColor } from '@/hooks/useThemeColor';

type Props = {
  placeholder: string;
}

export default function CodigoVerificacao() {
    const text = useThemeColor('text');
    const background = useThemeColor('background');
    // const primary = useThemeColor('primary');
    // const secondary = useThemeColor('secondary');
    // const accent = useThemeColor('accent');
    
    return (
        <View style={[styles.container, { backgroundColor: background}]}>
            <View style={{alignItems: "flex-start", width: "90%"}}>
                <Text style={[styles.text, { color: text }]}>Digite o <br/>código</Text>
                <Text style={[styles.subtitle, { color: text }]}>Digite o código recebido.</Text>
            </View>

            <View style={{flex: 1, flexDirection: "row", gap: 8, maxHeight: 120}}>
                <View style={styles.input}>
                    <TextInput
                            style={[styles.textinput, { color: text }]}
                            placeholder={"0"}
                            placeholderTextColor="#00000045"
                            keyboardType="numeric"
                            maxLength={1}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                            style={[styles.textinput, { color: text }]}
                            placeholder={"0"}
                            placeholderTextColor="#00000045"
                            keyboardType="numeric"
                            maxLength={1}                     
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                            style={[styles.textinput, { color: text }]}
                            placeholder={"0"}
                            placeholderTextColor="#00000045"
                            keyboardType="numeric"
                            maxLength={1}                     
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                            style={[styles.textinput, { color: text }]}
                            placeholder={"0"}
                            placeholderTextColor="#00000045"
                            keyboardType="numeric"
                            maxLength={1}                     
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                            style={[styles.textinput, { color: text }]}
                            placeholder={"0"}
                            placeholderTextColor="#00000045"
                            keyboardType="numeric"
                            maxLength={1}                     
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                            style={[styles.textinput, { color: text }]}
                            placeholder={"0"}
                            placeholderTextColor="#00000045"
                            keyboardType="numeric"
                            maxLength={1}                     
                    />
                </View>
            </View>

            <View style={{width: '90%'}}>
                <BotaoComponent
                    titulo="Enviar código"
                    corFundo="background2"
                    corTexto="text2"
                    funcao={() => alert('Senha alterada com sucesso!')}
                />
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
    input: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinput: {
        width: "100%",
        textAlign: "center",
        fontSize: 24,
        outlineWidth: 0,
    }
});