import { StyleSheet, Text, View } from 'react-native';
import React, { JSX } from 'react';
import * as Yup from 'yup';

const passwordSchema = Yup.object({
  passworkLength: Yup.number()
    .min(4, 'Should be min of 4 charactor')
    .max(16, 'Should be max of 16 charactor')
    .required.apply('Password Length is Required'),
});

export default function App(): JSX.Element {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
