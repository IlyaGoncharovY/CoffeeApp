import React from 'react';
import {View} from 'react-native';

import {Body} from './body/Body';
import {Header} from './header/Header';
import {Footer} from './footer/Footer';

export const CoffeeContainer = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};
