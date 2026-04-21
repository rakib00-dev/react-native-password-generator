import { StyleSheet, Text, View } from 'react-native';
import React, { JSX } from 'react';
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passworkLength: Yup.number()
    .min(4, 'Should be min of 4 charactor')
    .max(16, 'Should be max of 16 charactor')
    .required('Password Length is Required'),
});

export default function App(): JSX.Element {
  const [password, setPassword] = React.useState('');
  const [isPassword, setIsPassword] = React.useState(false);

  const [lowerCase, setLowerCase] = React.useState(true);
  const [uperCase, setUperCase] = React.useState(false);
  const [numbers, setNumbers] = React.useState(false);
  const [symbols, setSymbols] = React.useState(false);

  const generatePasswordString = (passwordLength: number) => {
    //
  };

  const createPassword = (charactors: string, passwordLength: number) => {
    //
  };

  const resetPasswordState = (charactors: string, passwordLength: number) => {
    //
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
