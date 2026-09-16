import { StatusBar } from 'expo-status-bar';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import '../../global.css';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          <Stack screenOptions={{ headerShown: false }} />
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
