import React from 'react';
import {Alert, Button, FlatList, StyleSheet, View} from 'react-native';

import {ItemBasket} from './itemBasket/ItemBasket';
import {gStyles} from '../../../common/gStyle/gStyle';
import {useAppDispatch, useAppSelector} from '../../../store/config/hooks';
import {CoffeesType} from '../../coffee/slice/CoffeeSlice';
import {deleteBasket} from '../slice/BasketSlice';

export const BasketContainer = () => {
  const coffeesForBasket = useAppSelector(
    state => state.basket.coffeesForBasket,
  );

  const dispatch = useAppDispatch();

  const purchasedСoffeeCount = coffeesForBasket.map(el => el.count);
  const purchasedСoffeeTitle = coffeesForBasket.map(el => el.title);

  const orderButtonHandler = () => {
    Alert.alert(
      'Thank you for ordering!',
      `${purchasedСoffeeTitle
        .map(
          (title, index) => purchasedСoffeeCount[index] + '- ' + title + '\n',
        )
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
          disabled={purchasedСoffeeCount.length === 0}
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
