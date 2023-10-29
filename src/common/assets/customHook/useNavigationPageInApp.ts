import {useEffect} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

/**
 * custom hook for navigation on pages in app.
 * @param isAuth
 * @param page
 */
export const useNavigationPageInApp = (isAuth: boolean, page: string) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  useEffect(() => {
    if (isAuth) {
      navigation.navigate(page);
    }
  }, [isAuth, navigation, page]);
};
