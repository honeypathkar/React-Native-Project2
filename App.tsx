import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

//Form validation
const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Min length should be 4')
    .max(16, 'Max length should be 16')
    .required('Length is required'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numsbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = (passwordLength: number) => {
    //
  };

  const createPassword = (characters: string, passwordLength: number) => {
    //
  };

  const resetPassword = () => {
    //
  };
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
