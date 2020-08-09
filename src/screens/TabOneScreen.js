import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  AsyncStorage,
  Alert,
} from "react-native";
import { useState, useRef } from "react";

import StopWatch from "../components/StopWatch";
import Button from "../components/Button";

import {storeReading} from '../services/reading';

export default function TabOneScreen() {
  const [numberOfPages, setNumberOfPages] = useState("");
  const [readingDuration, setReadingDuration] = useState("");
  
  const save = async () => {
    const current_datetime = new Date()
    const day = current_datetime.getDate()
    const month = current_datetime.getMonth()
    const year = current_datetime.getFullYear()
    const data = {
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
      <View style={styles.separator} />
      <Text style={styles.title}>Stopwatch</Text>
      <StopWatch
        onStop={(data) => onStop(data)}
        onStart={(data) => onStart(data)}
        onResume={(data) => onResume(data)}
        onReset={(data) => onReset(data)}
      />
      <View style={styles.separator} />
      <Text>Quantidade de paginas</Text>
      <TextInput
        style={styles.numberInput}
        onChangeText={(value) => setNumberOfPages(value)}
        keyboardType={"numeric"}
        maxLength={3}
        value={`${numberOfPages}`}
      />
      <View style={styles.container}>
        <Button
          text="SALVAR LEITURA"
          textColor="#F7F8F7"
          backgroundColor="#737575"
          onPress={(data) => save()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    backgroundColor: "red",
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  numberInput: {
    margin: 5,
    borderRadius: 10,
    padding: 10,
    height: 40,
    width: 60,
    borderColor: "gray",
    borderWidth: 2,
  },
});
