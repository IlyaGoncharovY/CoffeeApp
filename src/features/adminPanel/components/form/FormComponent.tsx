import React from 'react';
import {Formik} from 'formik';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import {useAppDispatch} from '../../../../store/config/hooks';
import {addCoffee, CoffeesType} from '../../../coffee/slice/CoffeeSlice';

export const FormComponent = () => {
  const dispatch = useAppDispatch();
  const addNewCoffee = (newCoffee: CoffeesType) => {
    dispatch(addCoffee(newCoffee));
  };
  return (
    <View>
      <Formik
        initialValues={{
          id: '',
          title: '',
          description: '',
          img: '',
          count: 0,
        }}
        onSubmit={(values, action) => {
          addNewCoffee(values);
          action.resetForm();
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('title')}
              placeholder={'Title coffee'}
              onBlur={handleBlur('title')}
              value={values.title}
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChange('description')}
              placeholder={'Description coffee'}
              onBlur={handleBlur('description')}
              value={values.description}
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChange('img')}
              placeholder={'Img coffee'}
              onBlur={handleBlur('img')}
              value={values.img}
            />
            <Button
              onPress={handleSubmit as (values: any) => void}
              color={'#ff8e3c'}
              title="Добавить"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#e78fb3',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
});
