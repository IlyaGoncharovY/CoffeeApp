import React from 'react';
import {View} from 'react-native';

import {Body} from './body/Body';
import {Header} from './header/Header';
import {Footer} from './footer/Footer';
import {gStyles} from '../../../common/gStyle/gStyle';

export const CoffeeContainer = () => {
  return (
    <View style={gStyles.main}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};
