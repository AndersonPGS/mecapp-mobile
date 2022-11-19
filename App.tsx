
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { extendTheme, NativeBaseProvider, View } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import Home from './src/Home/Home';

export default function App() {

  SplashScreen.preventAutoHideAsync();

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'InterBlack': require('./assets/fonts/Inter/Inter-Black.ttf'),
          'InterBold': require('./assets/fonts/Inter/Inter-Bold.ttf'),
          'InterMedium': require('./assets/fonts/Inter/Inter-Medium.ttf'),
          'InterRegular': require('./assets/fonts/Inter/Inter-Regular.ttf'),
          'InterSemiBold': require('./assets/fonts/Inter/Inter-SemiBold.ttf'),
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {

      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const theme = extendTheme({
    initialColorMode: 'dark',
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
      <View onLayout={onLayoutRootView}>
        <StatusBar style="light" />
        <Home />
      </View>
    </NativeBaseProvider>
  );
}

