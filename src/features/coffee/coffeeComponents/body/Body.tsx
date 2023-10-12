import React from 'react';
import {FlatList, View} from 'react-native';

import {CoffeeItem} from './coffeeItem/CoffeeItem';
import {CoffeesType} from '../../slice/CoffeeSlice';
import {useAppSelector} from '../../../../store/config/hooks';

export const Body = () => {
  const coffees = useAppSelector(state => state.coffee.coffees);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={coffees}
        renderItem={({item}) => <CoffeeItem coffee={item} />}
        keyExtractor={(item: CoffeesType) => item.id}
      />
    </View>
  );
};
