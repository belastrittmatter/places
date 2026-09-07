import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from 'src/components/HomeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
