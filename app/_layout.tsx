import { useFonts } from "expo-font";
import { Slot } from "expo-router";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return <Slot />;
}
