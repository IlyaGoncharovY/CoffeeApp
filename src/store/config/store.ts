import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

import coffeeReducer from '../../features/coffee/slice/CoffeeSlice';
import basketReducer from '../../features/basket/slice/BasketSlice';

export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    basket: basketReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
