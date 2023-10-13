import React, {FC} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

import {CoffeesType} from '../../../slice/CoffeeSlice';
import {gStyles} from '../../../../../common/gStyle/gStyle';
import {useAppDispatch} from '../../../../../store/config/hooks';
import {addToBasket} from '../../../../basket/slice/BasketSlice';

interface ICoffeeItem {
  coffee: CoffeesType;
}

export const CoffeeItem: FC<ICoffeeItem> = ({coffee}) => {
  const dispatch = useAppDispatch();

  const addToBasketHandler = () => {
    dispatch(addToBasket(coffee));
  };

  return (
    <View style={styles.container}>
      <Text style={gStyles.title}>{coffee.title}</Text>
      <Image
        source={{
          uri: coffee.img,
        }}
        style={{width: 40, height: 40}}
      />
      <Text>{coffee.description}</Text>
      <Button color={'#ffc0ad'} title={'+'} onPress={addToBasketHandler} />
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
});
