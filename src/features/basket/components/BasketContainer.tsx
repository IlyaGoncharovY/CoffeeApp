import React from 'react';
import {Alert, Button, FlatList, StyleSheet, View} from 'react-native';

import {deleteBasket} from '../slice/BasketSlice';
import {ItemBasket} from './itemBasket/ItemBasket';
import {gStyles} from '../../../common/gStyle/gStyle';
import {CoffeesType} from '../../coffee/slice/CoffeeSlice';
import {useAppDispatch, useAppSelector} from '../../../store/config/hooks';

export const BasketContainer = () => {
  const coffeesForBasket = useAppSelector(
    state => state.basket.coffeesForBasket,
  );

  const dispatch = useAppDispatch();

  const coffeeCount = coffeesForBasket.map(el => el.count);
  const coffeeTitle = coffeesForBasket.map(el => el.title);

  const orderButtonHandler = () => {
    Alert.alert(
      'Thank you for ordering!',
      `${coffeeTitle
        .map((title, index) => coffeeCount[index] + '- ' + title + '\n')
        .join('')}`,
      [{text: 'ok'}],
    );
    setTimeout(() => {
      return dispatch(deleteBasket());
    }, 2000);
  };

  return (
    <View style={gStyles.main}>
      <View>
        <FlatList
          data={coffeesForBasket}
          renderItem={({item}) => <ItemBasket coffeesForBasket={item} />}
          keyExtractor={(item: CoffeesType) => item.id}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          disabled={coffeeCount.length === 0}
          color={'#ffc0ad'}
          title={'Заказать'}
          onPress={orderButtonHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
  },
});
