import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {gStyles} from '../../../../common/gStyle/gStyle';
import {useAppSelector} from '../../../../store/config/hooks';

export const Footer = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const coffeesForBasket = useAppSelector(
    state => state.basket.coffeesForBasket,
  );
  const LoadScene = () => {
    navigation.navigate('BasketContainer');
  };

  const totalCount = coffeesForBasket.reduce(
    (acc, coffee) => acc + coffee.count,
    0,
  );

  return (
    <TouchableOpacity
      style={totalCount === 0 ? styles.disabledButton : styles.buttonContainer}
      onPress={LoadScene}
      disabled={totalCount === 0}>
      <Text style={gStyles.title}>
        {totalCount === 0 ? 'add coffee' : 'go to cart'}
      </Text>
      <Text>{totalCount || ''}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#ffc0ad',
    alignItems: 'center',
    paddingVertical: 10,
  },
  disabledButton: {
    backgroundColor: '#b4b3af',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
