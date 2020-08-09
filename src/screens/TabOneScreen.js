import * as React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { useState, useRef } from 'react';

import StopWatch from '../components/StopWatch';
import Button from '../components/Button';

export default function TabOneScreen() {
  const [numberOfPages, setNumberOfPages] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.separator}/>
      <Text style={styles.title}>Stopwatch</Text>
      <StopWatch />
      <View style={styles.separator} />
      <Text >Quantidade de paginas</Text>
        <TextInput
          style={styles.numberInput}
          onChangeText={value => setNumberOfPages(value)}
          keyboardType={'numeric'}
          maxLength={3}
          value={`${numberOfPages}`} 
        />
      <View style={styles.container}>        
        <Button           
              text="SALVAR LEITURA"
              textColor="#F7F8F7"
              backgroundColor="#737575"
              onPress={(data) => handleStart()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    backgroundColor: 'red',
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  numberInput: {
    margin: 5,
    borderRadius: 10,
    padding: 10,
    height: 40,
    width: 60,
    borderColor: 'gray', 
    borderWidth: 2
  }
});
