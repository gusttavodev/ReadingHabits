
import {Alert} from 'react-native';
import { AsyncStorage } from "react-native";

export const storeReading = async (data) => {
    try {
        let historicReading = await AsyncStorage.getItem('@historicReading');   
        if (historicReading) {
          //Get And Parse Data
          let historicData = JSON.parse(historicReading);        
          //Add new to old data
          historicData.push(data);      
          await AsyncStorage.setItem('@historicReading', JSON.stringify(historicData));
          return;
        } else {
          const newHistoricData = [data]
          await AsyncStorage.setItem('@historicReading', JSON.stringify(newHistoricData));
        }
        Alert.alert("Leitura Registrada com sucesso");
      } catch (e) {
        Alert.alert('Erro ao registrar a leitura no histórico', e.message);
      }
};

export const getHistoric = async () => {
  const historicData = await AsyncStorage.getItem('@historicReading');
  return JSON.parse(historicData);
};

export const calcPagesPerSecond = (pages, seconds) => {
    let average = Math.round(seconds/pages);
    average = isFinite(average) ? average : 0;
    return average;
};