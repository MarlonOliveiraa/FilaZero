import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme(); // Agora já está corretamente tipado como 'light' | 'dark'
  const colorFromProps = props[theme];

  return colorFromProps ?? Colors[theme][colorName];
}