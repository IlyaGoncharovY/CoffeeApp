import React, {FC} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import {CoffeesType} from '../../../slice/CoffeeSlice';
import {gStyles} from '../../../../../common/gStyle/gStyle';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../store/config/hooks';
import {addToBasket, removeCoffee} from '../../../../basket/slice/BasketSlice';

interface ICoffeeItem {
  coffee: CoffeesType;
}

export const CoffeeItem: FC<ICoffeeItem> = ({coffee}) => {
  const coffeeInBasket = useAppSelector(state => state.basket.coffeesForBasket);

  const dispatch = useAppDispatch();

  const addToBasketHandler = () => {
    dispatch(addToBasket(coffee));
  };

  const removeCoffeeHandler = (coffeeId: string) => {
    dispatch(removeCoffee(coffeeId));
  };

  const coffeeInBasketCount =
    coffeeInBasket.find(item => item.id === coffee.id)?.count || 0;

  return (
    <View style={styles.container}>
      <Text style={gStyles.title}>{coffee.title}</Text>
      <Image
        source={{
          uri: coffee.img,
        }}
        style={styles.image}
      />
      <Text>{coffee.description}</Text>
      <Text>{coffeeInBasketCount > 0 ? coffeeInBasketCount : ''}</Text>
      <View style={styles.buttonContainer}>
        <Button
          color={'#ffc0ad'}
          disabled={coffeeInBasketCount === 0}
          title={'-'}
          onPress={() => removeCoffeeHandler(coffee.id)}
        />
        <Button
          color={coffeeInBasketCount > 0 ? '#9656a1' : '#ffc0ad'}
          title={'+'}
          onPress={addToBasketHandler}
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
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
});
