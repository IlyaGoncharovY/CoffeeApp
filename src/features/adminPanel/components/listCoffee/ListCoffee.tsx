import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';

import {CoffeeAdminItem} from './item/CoffeeItem';
import {CoffeesType} from '../../../coffee/slice/CoffeeSlice';
import {useAppSelector} from '../../../../store/config/hooks';
import {FormComponent} from '../form/FormComponent';

interface IListCoffee {
  searchText: string;
}

export const ListCoffee: FC<IListCoffee> = ({searchText}) => {
  const coffees = useAppSelector(state => state.coffee.coffees);

  const filteredCoffees = coffees.filter(coffee =>
    coffee.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  if (filteredCoffees.length === 0) {
    return <Text>No matching coffees found.</Text>;
  }

  return (
    <View>
      <FlatList
        data={filteredCoffees}
        renderItem={({item}) => <CoffeeAdminItem coffee={item} />}
        keyExtractor={(item: CoffeesType) => item.id}
        ListHeaderComponent={<FormComponent />}
      />
    </View>
  );
};
