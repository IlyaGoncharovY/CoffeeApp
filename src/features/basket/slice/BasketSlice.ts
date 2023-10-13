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
      state.coffeesForBasket.push(action.payload);
    },
  },
});
export const {addToBasket} = basketSlice.actions;

export default basketSlice.reducer;
