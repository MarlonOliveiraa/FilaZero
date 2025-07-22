import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { useThemeColor } from '@/hooks/useThemeColor';

type MenuItem = {
  icon: any;
  route: string;
};

type MenuProps = {
  items: MenuItem[];
};

export default function MenuComponent({ items }: MenuProps) {
    const router = useRouter();
    const pathname = usePathname();
    const background = useThemeColor({}, 'background');

  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        const isActive = pathname === item.route;

        return (
          <TouchableOpacity key={index} onPress={() => router.push(item.route as any)}>
            <Image
              source={item.icon}
              style={[styles.icon, isActive && styles.activeIcon]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#09160B",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    position: "absolute",
    bottom: 0,
    width: "100%",
    maxHeight: 64,
    height: "100%", 
  },
  icon: {
    width: 24,
    height: 24,
    
  },
  activeIcon: {
    opacity: 1,
  },
});
