import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, Alert } from "react-native";
import { List, IconButton, Text } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { getBottles, deleteBottle } from "../storage/bottleStorage";
import ScreenWrapper from "../components/ScreenWrapper";

type HistoryScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Historique">;
};

type Bottle = {
  id: number;
  quantity: number;
  timestamp: string;
  notes: string;
};

// Fonction pour formater la date et l'heure
const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleString(); // 📅 Format lisible selon la langue du téléphone
};

const HistoryScreen: React.FC<HistoryScreenProps> = () => {
  const [bottles, setBottles] = useState<Bottle[]>([]);

  useEffect(() => {
    loadBottles();
  }, []);

  const loadBottles = async () => {
    const storedBottles = await getBottles();
    setBottles(storedBottles);
  };

  const handleDeleteBottle = async (id: number) => {
    Alert.alert(
      "Supprimer le biberon",
      "Êtes-vous sûr de vouloir supprimer ce biberon ?",
      [
        {
          text: "Annuler",
          style: "cancel"
        },
        {
          text: "Supprimer",
          style: "destructive",
          onPress: async () => {
            await deleteBottle(id);
            loadBottles();
          }
        }
      ],
      { cancelable: true }
    );
  };

  const renderItem = ({ item }: { item: Bottle }) => (
    <List.Item
      title={`Biberon de ${item.quantity} ml`}
      description={
        <>
          <Text>Le {formatDate(item.timestamp)}</Text>
          {item.notes && (
            <Text style={styles.notes}>📝 {item.notes}</Text>
          )}
        </>
      }
      left={(props) => <List.Icon {...props} icon="baby-bottle-outline" />}
      right={(props) => (
        <IconButton
          {...props}
          icon="trash-can-outline"
          onPress={() => handleDeleteBottle(item.id)}
        />
      )}
      style={styles.listItem}
    />
  );

  const ListEmptyComponent = () => (
    <Text style={styles.emptyText}>Aucun biberon enregistré.</Text>
  );

  const ListHeaderComponent = () => (
    <Text style={styles.header}>Historique des Biberons 📜</Text>
  );

  return (
    <ScreenWrapper>
      <FlatList
        data={bottles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={ListEmptyComponent}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#5A5A5A',
  },
  listItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 2,
    marginVertical: 4,
  },
  separator: {
    height: 8,
  },
  button: { 
    marginTop: 16, 
    backgroundColor: "#FADADD",
  },
  notes: {
    marginTop: 4,
    fontStyle: "italic",
    color: "#666",
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 16,
    color: '#666',
  },
});

export default HistoryScreen;
