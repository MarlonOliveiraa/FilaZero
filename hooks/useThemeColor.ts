import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type Theme = 'light' | 'dark';
type ColorName = keyof typeof Colors.light & keyof typeof Colors.dark;

export function useThemeColor(colorName: ColorName): string {
  const theme: Theme = useColorScheme() ?? 'light';
  return Colors[theme][colorName];
}