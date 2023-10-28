import React, {FC} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import {removeCoffee} from '../../slice/BasketSlice';
import {gStyles} from '../../../../common/gStyle/gStyle';
import {useAppDispatch} from '../../../../store/config/hooks';
import {CoffeesType} from '../../../coffee/slice/CoffeeSlice';

interface IItemBasket {
  coffeesForBasket: CoffeesType;
}

export const ItemBasket: FC<IItemBasket> = ({coffeesForBasket}) => {
  const dispatch = useAppDispatch();

  const removeCoffeeHandler = (coffeeId: string) => {
    dispatch(removeCoffee(coffeeId));
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={gStyles.title}>{coffeesForBasket.title}</Text>
        <Image
          source={{
            uri: coffeesForBasket.img,
          }}
          style={styles.image}
        />
        <Text>{coffeesForBasket.description}</Text>
        <Text>{coffeesForBasket.count}</Text>
        <Button
          color={'#ffc0ad'}
          title={'-'}
          onPress={() => removeCoffeeHandler(coffeesForBasket.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 40,
    height: 40,
  },
});
