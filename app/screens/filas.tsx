import InputComponent from "@/components/ui/input-component";
import Menucomponent from "@/components/ui/menu-component";
import { useThemeColor } from '@/hooks/useThemeColor';
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const menuItems = [
        { icon: require('@/assets/icons/home.png'), route: 'screens/home' }, 
        { icon: require('@/assets/icons/fila.png'), route: 'screens/filas' }, 
        { icon: require('@/assets/icons/search.png'), route: 'screens/search' }, 
        { icon: require('@/assets/icons/profile.png'), route: 'screens/profile' }, 
    ]

export default function Filas() {
    const background = useThemeColor('background');
    const text = useThemeColor('text');
    
    return (
        <View style={[styles.container, { backgroundColor: background}]}>
            <Text>Filas</Text>

            <Menucomponent 
                items={menuItems}
            />
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