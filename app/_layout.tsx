import { Stack } from 'expo-router';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#153641ff" />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}