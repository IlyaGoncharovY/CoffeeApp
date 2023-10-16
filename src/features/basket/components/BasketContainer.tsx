import React from 'react';
import {Button, FlatList, View} from 'react-native';
import {gStyles} from '../../../common/gStyle/gStyle';
import {useAppSelector} from '../../../store/config/hooks';
import {ItemBasket} from './itemBasket/ItemBasket';
import {CoffeesType} from '../../coffee/slice/CoffeeSlice';

export const BasketContainer = () => {
  const coffeesForBasket = useAppSelector(
    state => state.basket.coffeesForBasket,
  );

  return (
    <View style={gStyles.main}>
      <View>
        <FlatList
          data={coffeesForBasket}
          renderItem={({item}) => <ItemBasket coffeesForBasket={item} />}
          keyExtractor={(item: CoffeesType) => item.id}
        />
      </View>
      <Button title={'Заказать'} onPress={() => {}} />
    </View>
  );
};
