import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {gStyles} from '../../../../common/gStyle/gStyle';

export const Footer = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const LoadScene = () => {
    navigation.navigate('BasketContainer');
  };

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={LoadScene}>
      <Text style={gStyles.title}>Basket Container</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#ffc0ad',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
