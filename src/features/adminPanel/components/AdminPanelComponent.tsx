import React from 'react';
import {ListCoffee} from './listCoffee/ListCoffee';
import {useAppSelector} from '../../../store/config/hooks';
import {useNavigationPageInApp} from '../../../common/assets/customHook/useNavigationPageInApp';

export const AdminPanelComponent = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth);
  useNavigationPageInApp(isAuth, 'CoffeePage');

  return (
    <>
      <ListCoffee />
    </>
  );
};
