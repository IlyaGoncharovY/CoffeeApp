import React, {FC} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {CoffeesType} from '../../../slice/CoffeeSlice';

interface ICoffeeItem {
  coffee: CoffeesType;
}

export const CoffeeItem: FC<ICoffeeItem> = ({coffee}) => {
  const addToBasketHandler = () => {};

  return (
    <View>
      <Text>{coffee.title}</Text>
      <Image
        source={{
          uri: coffee.img,
        }}
        style={{width: '80%', height: 200}}
      />
      <Text>{coffee.description}</Text>
      <Button title={'+'} onPress={addToBasketHandler} />
    </View>
  );
};
