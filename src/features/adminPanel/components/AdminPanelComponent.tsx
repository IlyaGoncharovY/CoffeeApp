import React from 'react';
import {Text, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useAppSelector} from '../../../store/config/hooks';

export const AdminPanelComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const isAuth = useAppSelector(state => state.auth.isAuth);

  if (isAuth) {
    navigation.navigate('CoffeePage');
  }

  return (
    <View>
      <Text>AdminPanelComponent</Text>
    </View>
  );
};
