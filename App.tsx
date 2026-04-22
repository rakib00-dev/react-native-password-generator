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
  const [isPasswordGenerated, setIsPasswordGenerated] = React.useState(false);

  const [lowerCase, setLowerCase] = React.useState(true);
  const [upperCase, setUpperCase] = React.useState(false);
  const [numbers, setNumbers] = React.useState(false);
  const [symbols, setSymbols] = React.useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let charactorList = '';

    const lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChar = lowerCaseChar.toUpperCase();
    const digitChar = '0123456789';
    const specialChar = '!@#$%^&*()_+-=[]{};\':"\\|,.<>/?';

    if (lowerCase) {
      charactorList += lowerCaseChar;
    }
    if (upperCase) {
      charactorList += upperCaseChar;
    }
    if (numbers) {
      charactorList += digitChar;
    }
    if (symbols) {
      charactorList += specialChar;
    }

    const passwordResult = createPassword(charactorList, passwordLength);

    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (charactors: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const charactorIndex = Math.round(Math.random() * charactors.length);
      result += charactors.charAt(charactorIndex);
    }
    return result;
  };

  const resetPasswordState = (charactors: string, passwordLength: number) => {
    setPassword('');
    setIsPasswordGenerated(false);

    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
