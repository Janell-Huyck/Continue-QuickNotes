import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from 'react-native';
import { Platform } from 'react-native';

console.log(`RootLayout is rendering on ${Platform.OS}`);

// Prevent the splash screen from auto-hiding before the app is ready.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    async function hideSplash() {
      try
      {
        console.log(`Attempting to hide splash screen on ${Platform.OS}...`);
        await SplashScreen.hideAsync();
        console.log(`Splash screen hidden on ${Platform.OS}`);
      } catch (error) {
        console.log(`Error hiding splash screen on ${Platform.OS}:`, error);
      }
    }
    hideSplash();
  }, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
