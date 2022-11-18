import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import Home from './src/Home/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter/Inter-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const theme = extendTheme({
    fontConfig: {
      Inter: {
        400: {
          normal: 'Inter-Regular',
        },
        500: {
          normal: 'Inter-Medium',
        },
        600: {
          normal: 'Inter-SemiBold',
        },
        700: {
          normal: 'Inter-Bold',
        },
        800: {
          normal: 'Inter-Black',
        },
      },

      fonts: {
        inter: 'Inter',
      },
    }
  })
  return (
    <NativeBaseProvider theme={theme} >
      <StatusBar style="light" />
      <Home />
    </NativeBaseProvider>
  );
}

