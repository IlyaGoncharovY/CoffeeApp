import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';

import {gStyles} from '../../../../../common/gStyle/gStyle';
import {CoffeesType} from '../../../../coffee/slice/CoffeeSlice';

interface ICoffeeAdminItem {
  coffee: CoffeesType;
}

export const CoffeeAdminItem: FC<ICoffeeAdminItem> = ({coffee}) => {
  return (
    <View style={gStyles.main}>
      <Text>{coffee.title}</Text>
      <Text>{coffee.description}</Text>
      <Button title={'delete coffee'} />
    </View>
  );
};
