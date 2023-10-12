import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import coffeeReducer from '../../features/coffee/slice/CoffeeSlice';

export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
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
