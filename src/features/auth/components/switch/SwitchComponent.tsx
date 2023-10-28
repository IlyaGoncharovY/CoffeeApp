import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

import {setIsAuth} from '../../slice/authSlice';
import {useAppDispatch, useAppSelector} from '../../../../store/config/hooks';

import {gStyles} from '../../../../common/gStyle/gStyle';

export const SwitchComponent = () => {
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const dispatch = useAppDispatch();
  const toggleSwitch = () => {
    dispatch(setIsAuth(!isAuth));
  };

  return (
    <View style={styles.container}>
      <Text style={[gStyles.title, styles.label]}>
        {isAuth ? 'Guest' : 'Admin'}
      </Text>
      <Switch
        trackColor={{false: '#767577', true: '#9656a1'}}
        thumbColor={isAuth ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isAuth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#ffc0ad',
  },
  label: {
    color: 'black',
  },
});
