import CardComponent from "@/components/ui/card-component";
import InputComponent from "@/components/ui/input-component";
import Menucomponent from "@/components/ui/menu-component";
import { useThemeColor } from '@/hooks/useThemeColor';
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const menuItems = [
        { icon: require('@/assets/icons/home.png'), route: 'screens/home' }, 
        { icon: require('@/assets/icons/search.png'), route: 'screens/search' }, 
        { icon: require('@/assets/icons/fila.png'), route: 'screens/filas' }, 
        { icon: require('@/assets/icons/profile.png'), route: 'screens/profile' }, 
    ]

export default function Home() {
    const background = useThemeColor('background');
    const text = useThemeColor('text');
    
    return (
        <View style={[styles.container, { backgroundColor: background}]}>
            <ScrollView style={{ width: "100%"}} contentContainerStyle={{ alignItems: "center", gap: 16 }}>
            <Text style={[styles.text, { color: text }]}>Fila Zero</Text>

            <InputComponent
                placeholder="Pesquise a empresa"
                keyboardType="email-address"
                icon={require("@/assets/icons/email.png")}
            />

            {/* AQUI VAI O MAPA */}

            

            <View style={{width: "90%", height: 150, backgroundColor: "#3d3d3dff", borderRadius: 16}}></View>
            <Text style={[styles.subtitle2, { color: text } ]}>Empresas em destaque</Text>
                    <CardComponent
                        image={(require('@/assets/icons/CASSEMS-2.png'))}
                        titulo="Bem-vindo ao Fila Zero"
                        data="Hoje é 01/01/2024"
                        horario="Horário: 10:00"
                    />
                    <CardComponent
                        image={(require('@/assets/icons/CASSEMS-2.png'))}
                        titulo="Bem-vindo ao Fila Zero"
                        data="Hoje é 01/01/2024"
                        horario="Horário: 10:00"
                    />
                    <CardComponent
                        image={(require('@/assets/icons/CASSEMS-2.png'))}
                        titulo="Bem-vindo ao Fila Zero"
                        data="Hoje é 01/01/2024"
                        horario="Horário: 10:00"
                    />
                    <CardComponent
                        image={(require('@/assets/icons/CASSEMS-2.png'))}
                        titulo="Bem-vindo ao Fila Zero"
                        data="Hoje é 01/01/2024"
                        horario="Horário: 10:00"
                    />
                    <CardComponent
                        image={(require('@/assets/icons/CASSEMS-2.png'))}
                        titulo="Bem-vindo ao Fila Zero"
                        data="Hoje é 01/01/2024"
                        horario="Horário: 10:00"
                    />
                    <CardComponent
                        image={(require('@/assets/icons/CASSEMS-2.png'))}
                        titulo="Bem-vindo ao Fila Zero"
                        data="Hoje é 01/01/2024"
                        horario="Horário: 10:00"
                    />
                    <CardComponent
                        image={(require('@/assets/icons/CASSEMS-2.png'))}
                        titulo="Bem-vindo ao Fila Zero"
                        data="Hoje é 01/01/2024"
                        horario="Horário: 10:00"
                    />
            </ScrollView>

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
        marginTop: 32
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
    subtitle2: {
        fontSize: 16,
        fontFamily: 'PoppinsRegular',
        
    },
});