import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { useThemeColor } from '@/hooks/useThemeColor';
import MenuComponent from "@/components/ui/menu-component";
import { BiLinkExternal } from "react-icons/bi";

const menuItems = [
  { icon: require('@/assets/icons/home.png'), route: '/screens/home' },
  { icon: require('@/assets/icons/fila.png'), route: '/screens/filas' },
  { icon: require('@/assets/icons/search.png'), route: '/screens/search' },
  { icon: require('@/assets/icons/profile.png'), route: '/screens/profile' },
];

const options = [
  { label: "Dados pessoais", route: "/perfil/dados" },
  { label: "Configurações", route: "/perfil/configuracoes" },
  { label: "Histórico", route: "/perfil/historico" },
  { label: "Empresas parceiras", route: "/perfil/empresas" },
  { label: "Termos de uso", route: "/perfil/termos" },
  { label: "Política de privacidade", route: "/perfil/politica" },
  { label: "Sobre a TempoZero", route: "/perfil/sobre" },
];

export default function ProfileScreen() {
  const router = useRouter();
  const background = useThemeColor('background');
  const text2 = useThemeColor('text2');

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={require('@/assets/icons/avatar-user.png')}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Image
            source={require('@/assets/icons/edit-icon.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>

      {/* Lista de opções */}
      <View style={styles.optionsWrapper}>
        {options.map((item, index) => (
          <React.Fragment key={index}>
            <TouchableOpacity
              style={styles.option}
              onPress={() => router.push(item.route)}
            >
              <Text style={[styles.optionText]}>
                {item.label}
              </Text>
              <BiLinkExternal />
            </TouchableOpacity>
            <View style={styles.divider} />
          </React.Fragment>
        ))}
      </View>

      {/* Menu inferior */}
      <MenuComponent items={menuItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 80,
  },
  avatarContainer: {
    width: '90%',
    alignItems: 'center',
    marginTop: 32,
  },
  avatar: {
    width: 120,
    height: 120,
  },
  editIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  optionsWrapper: {
    width: '100%',
    marginTop: 32,
    alignItems: 'center',
  },
  option: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  optionText: {
    fontWeight: '500',
    fontSize: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
  },
});