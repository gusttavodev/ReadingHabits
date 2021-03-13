import * as React from "react";
import { StyleSheet, View, Text, ActivityIndicator, SafeAreaView, FlatList } from "react-native";

import { useState, useEffect } from "react";
import { getHistoric } from "../services/reading";

export default function TabTwoScreen() {
  const [historic, setHistoric] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchHistoric();
  }, [historic]);

  async function fetchHistoric() {
    const response = await getHistoric();
    if(historic != response || historic.length < 1) setHistoric(response);    
    setIsLoading(false)
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.created_at} - {item.pages} Paginas </Text>      
      <Text style={styles.text}>Foi lida 1 pagina em {item.average} segundos</Text>     
    </View>    
  );

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        
        <FlatList
          data={historic}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 20,
    backgroundColor: "#b5a7ff",
    flex: 1,
  },
  container: {
    backgroundColor: "#ffc5dd",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ffb4ed",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "#F7F8F7",
  },
  separator: {
    backgroundColor: "red",
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
