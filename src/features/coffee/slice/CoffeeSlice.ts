import {createSlice} from '@reduxjs/toolkit';

export type CoffeesType = {
  id: string;
  title: string;
  description: string;
  img: string;
};

interface initialStateType {
  coffees: CoffeesType[];
}

const initialState: initialStateType = {
  coffees: [
    {
      id: '1',
      title: 'Glesse',
      description: 'Cool Glesse',
      img: 'http://vidpoviday.com/wp-content/uploads/2016/04/d90dc819d58c6df61a48452ef80f3719.jpg',
    },
    {
      id: '2',
      title: 'Capychino',
      description: 'Cool Capychino',
      img: 'http://vidpoviday.com/wp-content/uploads/2016/04/d90dc819d58c6df61a48452ef80f3719.jpg',
    },
    {
      id: '3',
      title: 'Latte',
      description: 'Cool Latte',
      img: 'http://vidpoviday.com/wp-content/uploads/2016/04/d90dc819d58c6df61a48452ef80f3719.jpg',
    },
    {
      id: '4',
      title: 'Mocko',
      description: 'Cool Mocko',
      img: 'http://vidpoviday.com/wp-content/uploads/2016/04/d90dc819d58c6df61a48452ef80f3719.jpg',
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
