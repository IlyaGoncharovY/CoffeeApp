import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface initialStateType {
  isAuth: boolean;
}

const initialState: initialStateType = {
  isAuth: false,
};

const authSlice = createSlice({
  name: 'AUTH/authSlice',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});
export const {setIsAuth} = authSlice.actions;

export default authSlice.reducer;
