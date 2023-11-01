import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

import {ListCoffee} from './listCoffee/ListCoffee';
import {useAppSelector} from '../../../store/config/hooks';
import {useNavigationPageInApp} from '../../../common/assets/customHook/useNavigationPageInApp';

export const AdminPanelComponent = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const [searchText, setSearchText] = useState<string>('');
  useNavigationPageInApp(isAuth, 'CoffeePage');

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <>
      <TextInput
        placeholder="Search by coffee name"
        value={searchText}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
      <ListCoffee searchText={searchText} />
    </>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    borderBottomColor: 'black',
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
