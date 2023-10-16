import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CoffeesType} from '../../coffee/slice/CoffeeSlice';

interface initialStateType {
  coffeesForBasket: CoffeesType[];
}

const initialState: initialStateType = {
  coffeesForBasket: [],
};

const basketSlice = createSlice({
  name: 'BASKET/basketSlice',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<CoffeesType>) => {
      const existingCoffee = state.coffeesForBasket.find(
        el => el.id === action.payload.id,
      );

      if (existingCoffee) {
        existingCoffee.count += 1;
      } else {
        const newCoffee = {...action.payload, count: 1};
        state.coffeesForBasket.push(newCoffee);
      }
    },
    removeCoffee: (state, action: PayloadAction<string>) => {
      const coffeeToRemove = state.coffeesForBasket.find(
        el => el.id === action.payload,
      );
      if (coffeeToRemove) {
        if (coffeeToRemove.count > 1) {
          coffeeToRemove.count -= 1;
        } else {
          state.coffeesForBasket = state.coffeesForBasket.filter(
            el => el.id !== action.payload,
          );
        }
      }
    },
  },
});
export const {addToBasket, removeCoffee} = basketSlice.actions;

export default basketSlice.reducer;
