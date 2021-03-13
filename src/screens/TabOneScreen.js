import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  AsyncStorage
} from "react-native";
import { useState } from "react";

import StopWatch from "../components/StopWatch";
import Button from "../components/Button";

import {storeReading} from '../services/reading';

export default function TabOneScreen() {
  const [numberOfPages, setNumberOfPages] = useState("");
  const [readingDuration, setReadingDuration] = useState("");

  const clear = async () => {
    await AsyncStorage.clear();
  };
  
  const save = async () => {
    const current_datetime = new Date()
    const day = current_datetime.getDate()
    const month = current_datetime.getMonth()
    const year = current_datetime.getFullYear()
    const data = {
      id: Date.now(),
      created_at: `${year}/${month}/${day}`,
      pages: numberOfPages,
      duration: readingDuration,
      average: Math.round(readingDuration/numberOfPages)
    };
    await storeReading(data) 
  };

  const onStop = async (data) => {
    setReadingDuration(data)
    console.log("data", data);
  };

  const onStart = async (data) => {
    console.log("data", data);  
  };

  const onResume = async (data) => {
    console.log("data", data);  
  };

  const onReset = async (data) => {
    console.log("data", data);  
  };

  return (
    <View style={styles.container}>
      <View style={styles.sphereOne}>
        
      </View>
      <View style={styles.separator} />
      <Text style={styles.title}>Cronometro</Text>
      <StopWatch
        onStop={(data) => onStop(data)}
        onStart={(data) => onStart(data)}
        onResume={(data) => onResume(data)}
        onReset={(data) => onReset(data)}
      />
      <View style={styles.separator} />
      <Text style={styles.title}>Quantidade de paginas</Text>
      <TextInput
        style={styles.numberInput}
        onChangeText={(value) => setNumberOfPages(value)}
        keyboardType={"numeric"}
        maxLength={3}
        value={`${numberOfPages}`}
      />
      <View style={styles.container}>
        {/* <Button
          text="LIMPAR"
          textColor="#F7F8F7"
          backgroundColor="#b5a7ff"
          onPress={(data) => clear()}
        /> */}
        <Button
          text="SALVAR LEITURA"
          textColor="#F7F8F7"
          backgroundColor="#b5a7ff"
          onPress={(data) => save()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sphereOne: {
    width: 200,
    height: 50,
    backgroundColor: "#b5a7ff",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  container: {
    backgroundColor: "#ffc5dd",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#F7F8F7",
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    backgroundColor: "#b5a7ff",
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  numberInput: {
    backgroundColor: "#b5a7ff",
    margin: 5,
    padding: 20,
    borderRadius: 5, 
    textAlign: 'center',
    color: "#F7F8F7",
    borderColor: "#F7F8F7",
    borderWidth: 2,
  },
});
