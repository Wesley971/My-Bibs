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
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
          name="Ajout" 
          component={AddBottleScreen} 
          options={{ 
            title: "My Bibs", 
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="baby-bottle-outline" color={color} size={size} />
          }}
        />
        <Tab.Screen 
          name="Historique" 
          component={HistoryScreen} 
          options={{ 
            title: "Historique", 
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="history" color={color} size={size} />
          }} 
        />
        <Tab.Screen 
          name="Statistiques" 
          component={StatsScreen} 
          options={{ 
            title: "Statistiques", 
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="chart-bar" color={color} size={size} />
          }} 
        />
        <Tab.Screen 
          name="Scan" 
          component={StatsScreen} 
          options={{ 
            title: "Scan", 
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="barcode-scan" color={color} size={size} />
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
