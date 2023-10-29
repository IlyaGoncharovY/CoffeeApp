import React from 'react';
import {View} from 'react-native';

import {Body} from './body/Body';
import {Footer} from './footer/Footer';
import {gStyles} from '../../../common/gStyle/gStyle';
import {useAppSelector} from '../../../store/config/hooks';
import {useNavigationPageInApp} from '../../../common/assets/customHook/useNavigationPageInApp';

export const CoffeeContainer = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth);
  useNavigationPageInApp(!isAuth, 'AdminPage');

  return (
    <View style={gStyles.main}>
      <Body />
      <Footer />
    </View>
  );
};
