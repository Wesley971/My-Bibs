import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput, Text, Card } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { saveBottle } from "../storage/bottleStorage";

type AddBottleScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Ajout">;
};

const AddBottleScreen: React.FC<AddBottleScreenProps> = ({ navigation }) => {
  const [quantity, setQuantity] = useState("");

  const onSaveBottle = async () => {
    if (!quantity || isNaN(Number(quantity))) {
      alert("Veuillez entrer une quantité valide en ml.");
      return;
    }

    await saveBottle(quantity);
    setQuantity(""); // Réinitialiser le champ
    alert("Biberon ajouté !");
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Ajout d'un Biberon 🍼" />
        <Card.Content>
          <TextInput
            mode="outlined"
            label="Quantité (ml)"
            keyboardType="numeric"
            value={quantity}
            onChangeText={setQuantity}
            style={styles.input}
          />
          <Button mode="contained" onPress={onSaveBottle} style={styles.button}>
            Enregistrer
          </Button>
          <Button mode="text" onPress={() => navigation.navigate("Historique")} style={styles.link}>
            Voir l'historique
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFF0F5", padding: 20 },
  card: { width: "100%", backgroundColor: "#FFFFFF" },
  input: { marginBottom: 10 },
  button: { marginTop: 10, backgroundColor: "#FADADD" },
  link: { marginTop: 10 },
});

export default AddBottleScreen;
