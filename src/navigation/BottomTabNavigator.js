import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from "react-native";

import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
      <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Registrar') {
            iconName = "ios-book"
          } else if (route.name === 'Historico') {
            iconName = "ios-eye"
          }          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: '#F7F8F7',
        inactiveTintColor: '#d6b5ff',
        style: {
          backgroundColor: '#b5a7ff',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16
        },
      }}>
      <BottomTab.Screen
        name="Registrar"
        component={TabOneNavigator}
      />
      <BottomTab.Screen
        name="Historico"
        component={TabTwoNavigator}
        options={{        
          // tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          headerTitle: 'Registrar Leitura',
          headerTitleStyle: styles.headerTitle,
          headerStyle: styles.headerBody
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{
          headerTitle: 'Historico',
          headerTitleStyle: styles.headerTitle,
          headerStyle: styles.headerBody
        }}
      />
    </TabTwoStack.Navigator>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    color: "#F7F8F7",
  },
  headerBody: {
    backgroundColor: "#b5a7ff",
  }
});

/**
 * 
 * disable:  	#d6b5ff
    shadow: #b5a7ff
    destaque: #ffb4ed
    background: #ffc5dd
 */