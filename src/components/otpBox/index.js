import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const OtpInput = () => {
  const [digits, setDigits] = useState(['', '', '', '']);
  const refs = [useRef(), useRef(), useRef(), useRef()];

  const handleInput = (index, value) => {
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);

    if (value && index < refs.length - 1) {
      refs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, value) => {
    if (!value && index > 0) {
      refs[index - 1].current.focus();
    }
    const newDigits = [...digits];
    newDigits[index] = '';
    setDigits(newDigits);
  };

  useEffect(() => {
    const firstEmptyIndex = digits.findIndex((digit) => digit === '');
    if (firstEmptyIndex === -1) {
      refs[refs.length - 1].current.blur();
    } else {
      refs[firstEmptyIndex].current.focus();
    }
  }, [digits]);

  return (
    <View style={styles.container}>
      {digits.map((digit, index) => (
        <TextInput
          key={index}
          ref={refs[index]}
          style={[styles.input, digit ? styles.active : null]}
          maxLength={1}
          keyboardType="number-pad"
          onChangeText={(value) => handleInput(index, value)}
          onKeyPress={({ nativeEvent }) =>
            nativeEvent.key === 'Backspace' && handleBackspace(index, digit)
          }
          value={digit}
          secureTextEntry={true}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:20
  },
  input: {
    height: 40,
    width: 35,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal:10
  },
  active: {
    borderColor: 'red',
  },
});

export default OtpInput;
