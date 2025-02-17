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
<Stack.Screen name="Ajout" component={AddBottleScreen} options={{ title: "Ajouter un Biberon" }} />

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Ajout" component={AddBottleScreen} options={{ title: "My Bibs" }} />
        <Stack.Screen name="Historique" component={HistoryScreen} options={{ title: "Historique" }} />
        <Stack.Screen name="Statistiques" component={StatsScreen} options={{ title: "Statistiques" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
