import React, {useEffect, useState} from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import {Navigation} from './Navigation';

const loadFonts = async () => {
  await Font.loadAsync({
    'kt-bold': require('./assects/fonts/Kanit-SemiBold.ttf'),
    'kt-light': require('./assets/fonts/Kanit-Light.ttf'),
  });
};

export const AppContainer = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFonts();
        setIsReady(true);
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  if (!isReady) {
    return null;
  }

  return <Navigation />;
};
