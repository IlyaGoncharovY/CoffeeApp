import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';

import {gStyles} from '../../../../../common/gStyle/gStyle';
import {useAppDispatch} from '../../../../../store/config/hooks';
import {CoffeesType, deleteCoffee} from '../../../../coffee/slice/CoffeeSlice';

interface ICoffeeAdminItem {
  coffee: CoffeesType;
}

export const CoffeeAdminItem: FC<ICoffeeAdminItem> = ({coffee}) => {
  const dispatch = useAppDispatch();
  const deleteCoffeeHandler = (coffeeId: string) => {
    dispatch(deleteCoffee(coffeeId));
  };

  return (
    <View style={gStyles.main}>
      <Text>{coffee.title}</Text>
      <Text>{coffee.description}</Text>
      <Button
        title={'delete coffee'}
        onPress={() => deleteCoffeeHandler(coffee.id)}
      />
    </View>
  );
};
