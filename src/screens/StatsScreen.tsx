import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

const StatsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Statistiques 📊" />
        <Card.Content>
          <Text>⚠️ Fonctionnalité en cours de développement...</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFF0F5", padding: 20 },
  card: { width: "100%", backgroundColor: "#FFFFFF" },
});

export default StatsScreen;
