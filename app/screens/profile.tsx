import InputComponent from "@/components/ui/input-component";
import Menucomponent from "@/components/ui/menu-component";
import { useThemeColor } from '@/hooks/useThemeColor';
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const menuItems = [
        { icon: require('@/assets/icons/home.png'), route: 'screens/home' }, 
        { icon: require('@/assets/icons/fila.png'), route: 'screens/filas' }, 
        { icon: require('@/assets/icons/search.png'), route: 'screens/search' }, 
        { icon: require('@/assets/icons/profile.png'), route: 'screens/profile' }, 
    ]
    
    export default function Profile() {
        const background = useThemeColor('background');
        const text = useThemeColor('text');
    
    return (
        <View style={[styles.container, { backgroundColor: background}]}>
            <View style={{width: '90%', alignItems: 'center'}}>
                {/* Foto perfil */}
                <View>
                    <Image 
                        style={{width: 120, height: 120, marginTop: 32}}
                        source={require('@/assets/icons/avatar-user.png')}
                    />
                </View>
                <View style={{width: 150, alignItems: 'flex-end'}}>
                    <Image 
                        style={{width: 24, height: 24, marginTop: -20}}
                        source={require('@/assets/icons/edit-icon.png')}
                    />
                </View>
            </View>

            <View style={{width: "100%", marginTop: 32, alignItems: 'center'}}>
                <TouchableOpacity 
                    style={{width: "90%", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    
                    
                    <Text style={[ {color: "text2", fontWeight: '500'} ]}>Dados pessoais</Text>
                    <BiLinkExternal/>

                </TouchableOpacity>
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