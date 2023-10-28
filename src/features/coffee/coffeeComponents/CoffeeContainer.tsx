import React from 'react';
import {View} from 'react-native';

import {Body} from './body/Body';
import {Footer} from './footer/Footer';
import {gStyles} from '../../../common/gStyle/gStyle';
import {useAppSelector} from '../../../store/config/hooks';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const CoffeeContainer = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const isAuth = useAppSelector(state => state.auth.isAuth);

  if (!isAuth) {
    navigation.navigate('AdminPage');
  }
  return (
    <View style={gStyles.main}>
      <Body />
      <Footer />
    </View>
  );
};
