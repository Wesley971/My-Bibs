import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { List, Button, IconButton, Text, Card } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { getBottles, deleteBottle } from "../storage/bottleStorage";

type HistoryScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Historique">;
};

// Fonction pour formater la date et l'heure
const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleString(); // 📅 Format lisible selon la langue du téléphone
};

const HistoryScreen: React.FC<HistoryScreenProps> = ({ navigation }) => {
  const [bottles, setBottles] = useState<{ id: number; quantity: number; timestamp: string; notes: string }[]>([]);

  useEffect(() => {
    loadBottles();
  }, []);

  const loadBottles = async () => {
    const storedBottles = await getBottles();
    setBottles(storedBottles);
  };

  const handleDeleteBottle = async (id: number) => {
    await deleteBottle(id);
    loadBottles(); // Recharger la liste après suppression
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Historique des Biberons 📜" />
        <Card.Content>
          {bottles.length === 0 ? (
            <Text>Aucun biberon enregistré.</Text>
          ) : (
            bottles.map((bottle) => (
              <List.Item
                key={bottle.id}
                title={`Biberon de ${bottle.quantity} ml`}
                description={
                  <>
                    <Text>Le {formatDate(bottle.timestamp)}</Text>
                    {bottle.notes && (
                      <Text style={styles.notes}>📝 {bottle.notes}</Text>
                    )}
                  </>
                }
                left={(props) => <List.Icon {...props} icon="baby-bottle-outline" />}
                right={(props) => (
                  <IconButton
                    {...props}
                    icon="trash-can-outline"
                    onPress={() => handleDeleteBottle(bottle.id)}
                  />
                )}
              />
            ))
          )}
          <Button mode="contained" onPress={() => navigation.navigate("Ajout")} style={styles.button}>
            Retour à l'ajout
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#FFF0F5", 
    padding: 20 
  },
  card: { 
    width: "100%", 
    backgroundColor: "#FFFFFF",
    elevation: 4,
  },
  button: { 
    marginTop: 10, 
    backgroundColor: "#FADADD" 
  },
  notes: {
    marginTop: 4,
    fontStyle: "italic",
    color: "#666",
  },
});

export default HistoryScreen;
