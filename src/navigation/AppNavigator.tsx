import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AddBottleScreen from "../screens/AddBottleScreen";
import HistoryScreen from "../screens/HistoryScreen";
import StatsScreen from "../screens/StatsScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Définition des types pour la navigation
export type RootStackParamList = {
  Ajout: undefined;
  Historique: undefined;
  Statistiques: undefined;
};

const Tab = createBottomTabNavigator();


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen 
        name="Ajout" 
        component={AddBottleScreen} 
        options={{ 
          title: "My Bibs", 
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="baby-bottle-outline" color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Historique" 
        component={HistoryScreen} 
        options={{ 
          title: "Historique", 
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="history" color={color} size={size} />
        }} 
      />
      <Tab.Screen 
        name="Statistiques" 
        component={StatsScreen} 
        options={{ 
          title: "Statistiques", 
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="chart-bar" color={color} size={size} />
        }} 
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
