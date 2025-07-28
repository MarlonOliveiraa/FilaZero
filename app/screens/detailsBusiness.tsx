import BotaoComponent from "@/components/ui/botao-component";
import Menucomponent from "@/components/ui/menu-component";
import PerfilComponent from "@/components/ui/perfil-component";
import { useThemeColor } from '@/hooks/useThemeColor';
import { push } from "expo-router/build/global-state/routing";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const menuItems = [
    { icon: require('@/assets/icons/home.png'), route: 'screens/home' }, 
    { icon: require('@/assets/icons/fila.png'), route: 'screens/filas' }, 
    { icon: require('@/assets/icons/search.png'), route: 'screens/search' }, 
    { icon: require('@/assets/icons/profile.png'), route: 'screens/profile' }, 
]

type props = {
    titulo: string;
    descricao: string;
    endereco: string;
};
    export default function DetailBusiness({
        titulo="Company Melancia",
        descricao="Lorem ipsum dot sit amet lorem ipsum dot sit ametorem ipsum dot sit amet.", endereco="Av Tamandaré 199, Campo Grande, MS, 79009790"}: props) {
        const background = useThemeColor('background');
        const text = useThemeColor('text');
    
    return (
        <View style={[styles.container, { backgroundColor: background}]}>
            
            {/* Seta voltar página */}
            <View style={{width: "90%", alignItems: 'flex-start'}}>
                <TouchableOpacity style={{flex: 1, paddingTop: 30}}>
                    <Image source={require('@/assets/icons/arrowBack.png')} />
                </TouchableOpacity>
            </View>
            
            {/* Logo da empresa */}
            <PerfilComponent
                image={require('@/assets/images/logo1.png')}
            />

            {/* Informações principais do estabelecimento/empresa */}
            <View style={{ width: '90%'}}>
                {/* Titulo */}
                <Text style={[{fontWeight: 'bold', fontSize: 20, marginTop: 8}, { color: text }]}>{titulo}</Text>

                {/* Descrição */}
                <Text style={[{fontWeight: '400', fontSize: 16, marginTop: 8, paddingRight: 32}, { color: text }]}>{descricao}</Text>
                
                {/* Endereço */}
                <Text style={[{fontWeight: '400', fontSize: 16, marginTop: 32, paddingRight: 64}, { color: text }]}>{endereco}</Text>
            </View>

            <View style={{width: "90%", justifyContent: "center", alignItems: "flex-start", gap: 16}}>
                <View style={{flex: 1, flexDirection: "row" ,width: "100%", gap: 16}}>
                    <Image source={require('@/assets/icons/phone.png')} />
                    <Text>(67) 99100-9862</Text>
                </View>
                <View style={{flex: 1, flexDirection: "row" ,width: "100%", gap: 16}}>
                    <Image source={require('@/assets/icons/time.png')} />
                    <Text>Fechado</Text>
                </View>
            </View>
            
            {/* Botao retirar senha */}
            <View style={{width: "100%", justifyContent: "center", alignItems: "center", marginTop: 32}}>
                <BotaoComponent
                    titulo="Retirar senha digital"
                    corFundo="background2"
                    corTexto="text2"
                    funcao={() => push('/screens/confirmPassword')}
                />
            </View>

            <Menucomponent 
                items={menuItems}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
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