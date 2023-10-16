import {createSlice} from '@reduxjs/toolkit';
import {v1} from 'react-native-uuid/dist/v1';

export type CoffeesType = {
  id: string;
  title: string;
  description: string;
  img: string;
  count: number;
};

interface initialStateType {
  coffees: CoffeesType[];
}

const initialState: initialStateType = {
  coffees: [
    {
      id: v1() as string,
      title: 'Glesse',
      description: 'Cool Glesse',
      img: 'http://vidpoviday.com/wp-content/uploads/2016/04/d90dc819d58c6df61a48452ef80f3719.jpg',
      count: 0,
    },
    {
      id: v1() as string,
      title: 'Capychino',
      description: 'Cool Capychino',
      img: 'http://vidpoviday.com/wp-content/uploads/2016/04/d90dc819d58c6df61a48452ef80f3719.jpg',
      count: 0,
    },
    {
      id: v1() as string,
      title: 'Latte',
      description: 'Cool Latte',
      img: 'http://vidpoviday.com/wp-content/uploads/2016/04/d90dc819d58c6df61a48452ef80f3719.jpg',
      count: 0,
    },
    {
      id: v1() as string,
      title: 'Mocko',
      description: 'Cool Mocko',
      img: 'http://vidpoviday.com/wp-content/uploads/2016/04/d90dc819d58c6df61a48452ef80f3719.jpg',
      count: 0,
    },
  ],
};

const coffeeSlice = createSlice({
  name: 'COFFEE/coffeeSlice',
  initialState,
  reducers: {},
});
export const {} = coffeeSlice.actions;

export default coffeeSlice.reducer;
