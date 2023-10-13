import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BasketContainer} from './features/basket/components/BasketContainer';
import {CoffeeContainer} from './features/coffee/coffeeComponents/CoffeeContainer';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={'CoffeePage'}
          component={CoffeeContainer}
          options={{
            title: 'Coffee',
            headerStyle: {backgroundColor: '#e78fb3'},
          }}
        />
        <Stack.Screen
          name={'BasketContainer'}
          component={BasketContainer}
          options={{
            title: 'BasketContainer',
            headerStyle: {backgroundColor: '#e78fb3'},
          }}
        />
      </Stack.Navigator>
    </>
  );
};
