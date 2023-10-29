import React from 'react';
import {FlatList, View} from 'react-native';

import {CoffeeAdminItem} from './item/CoffeeItem';
import {CoffeesType} from '../../../coffee/slice/CoffeeSlice';
import {useAppSelector} from '../../../../store/config/hooks';
import {FormComponent} from '../form/FormComponent';

export const ListCoffee = () => {
  const coffees = useAppSelector(state => state.coffee.coffees);

  return (
    <View>
      <FlatList
        data={coffees}
        renderItem={({item}) => <CoffeeAdminItem coffee={item} />}
        keyExtractor={(item: CoffeesType) => item.id}
        ListHeaderComponent={<FormComponent />}
      />
    </View>
  );
};
