import React from 'react';
import {Button, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const Footer = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const LoadScene = () => {
    navigation.navigate('BasketContainer');
  };

  return (
    <View>
      <Button title={'BasketContainer'} onPress={LoadScene} />
    </View>
  );
};
