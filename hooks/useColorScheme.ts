import { Appearance } from 'react-native';

export function useColorScheme(): 'light' | 'dark' {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === 'dark' ? 'dark' : 'light';
}