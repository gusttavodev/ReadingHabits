import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Button from '../components/Button';

export default function TabTwoScreen() {
 function teste(){
    alert("AAA")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} />   
      <Button text="Start" textColor="#F7F8F7" backgroundColor="#737575" onPress={data => teste("AAA")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F8F7',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
