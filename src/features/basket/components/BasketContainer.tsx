import React from 'react';
import {Text, View} from 'react-native';
import {gStyles} from '../../../common/gStyle/gStyle';
import {useAppSelector} from '../../../store/config/hooks';

export const BasketContainer = () => {
  const coffeesForBasket = useAppSelector(
    state => state.coffeeInBasket.coffeesForBasket,
  );

  return (
    <View style={gStyles.main}>
      <View>
        {coffeesForBasket.map(coffeeInBasket => (
          <Text>{coffeeInBasket.title}</Text>
        ))}
      </View>
    </View>
  );
};
