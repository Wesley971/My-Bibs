import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AddBottleScreen from "../screens/AddBottleScreen";
import HistoryScreen from "../screens/HistoryScreen";
import StatsScreen from "../screens/StatsScreen";

// Définition des types pour la navigation
export type RootStackParamList = {
  Ajout: undefined;
  Historique: undefined;
  Statistiques: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Ajout" component={AddBottleScreen} options={{ title: "My Bibs", headerShown: false }} />
        <Stack.Screen name="Historique" component={HistoryScreen} options={{ title: "Historique", headerShown: false }} />
        <Stack.Screen name="Statistiques" component={StatsScreen} options={{ title: "Statistiques", headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
