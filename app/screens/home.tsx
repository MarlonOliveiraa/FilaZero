import CardComponent from "@/components/ui/card-component";
import CircleComponent from "@/components/ui/circle-component";
import InputComponent from "@/components/ui/input-component";
import Menucomponent from "@/components/ui/menu-component";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from "react-native";

const menuItems = [
  { icon: require("@/assets/icons/home.png"), route: "screens/home" },
  { icon: require("@/assets/icons/fila.png"), route: "screens/filas" },
  { icon: require("@/assets/icons/search.png"), route: "screens/search" },
  { icon: require("@/assets/icons/profile.png"), route: "screens/profile" },
];

export default function Home() {
    const background = useThemeColor('background');
    const text = useThemeColor('text');
    const router = useRouter();
    
    return (
        <View style={[styles.container, { backgroundColor: background}]}>
            <ScrollView style={{ width: "100%", maxWidth: 420, marginBottom: 60, paddingBottom: 20}} contentContainerStyle={{ alignItems: "center", gap: 16 }}>
                <Text style={[styles.text, { color: text }]}>Fila Zero</Text>

                <InputComponent
                    placeholder="Pesquise a empresa"
                    keyboardType="email-address"
                    icon={require("@/assets/icons/email.png")}
                />

                {/* AQUI VAI O MAPA */}
                <View style={{width: "90%", height: 200, backgroundColor: "#3d3d3dff", borderRadius: 16}}/>


                {/* Cards agendamentos */}
                <View style={{width: "100%", alignItems: "center", justifyContent: "center"}}>
                    <View style={{flex: 1, width: '90%', justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={[styles.subtitle2, { color: text } ]}>Agendamentos</Text>
                    </View>

                    <View style={{width: "100%", alignItems: "center", justifyContent: "center", marginTop: 8, gap: 8}}>
                        <CardComponent
                            image={(require('@/assets/images/CASSEMS-2.png'))}
                            titulo="Bem-vindo ao Fila Zero"
                            data="Hoje é 01/01/2024"
                            horario="Horário: 10:00"
                        />
                        <CardComponent
                            image={(require('@/assets/images/CASSEMS-2.png'))}
                            titulo="Bem-vindo ao Fila Zero"
                            data="Hoje é 01/01/2024"
                            horario="Horário: 10:00"
                        />
                    </View>
                </View>

                <View style={{width: "100%", alignItems: "center", justifyContent: "center"}}>
                    <View style={{flex: 1, width: '90%', justifyContent: 'center', alignItems: 'flex-start', marginBottom: 16}}>
                        <Text style={[styles.subtitle2, { color: text } ]}>Mais acessados</Text>
                    </View>

                    <View style={{flex: 1, flexDirection: "row", gap: 16, maxWidth: 420, height: "auto"}}>
                        <CircleComponent
                            image={(require('@/assets/images/logo1.png'))}
                            funcao={() => router.push('/screens/search')}
                            />

                        <CircleComponent
                            image={(require('@/assets/images/logo1.png'))}
                            funcao={() => router.push('/screens/search')}
                            />

                        <CircleComponent
                            image={(require('@/assets/images/logo1.png'))}
                            funcao={() => router.push('/screens/search')}
                            />

                        <CircleComponent
                            image={(require('@/assets/images/logo1.png'))}
                            funcao={() => router.push('/screens/search')}
                            />
                    </View>
                </View>
                
            </ScrollView>

      <Menucomponent items={menuItems} />
    </View>
  );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 16,
        paddingTop: 60,
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
        fontSize: 24,
        fontFamily: 'PoppinsRegular',
        fontWeight: 'bold',
    },
});
