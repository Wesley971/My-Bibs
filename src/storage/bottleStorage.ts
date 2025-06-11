import AsyncStorage from "@react-native-async-storage/async-storage";

// Sauvegarder un biberon avec date et heure
export const saveBottle = async (quantity: string, date: Date, notes?: string) => {
  try {
    if (!quantity || isNaN(Number(quantity))) {
      console.error("Quantité invalide :", quantity);
      return;
    }

    const bottles = await getBottles();
    const newBottle = {
      id: Date.now(),
      quantity: Number(quantity),
      timestamp: date.toISOString(),
      notes: notes || "",
    };
    bottles.push(newBottle);
    
    await AsyncStorage.setItem("bottles", JSON.stringify(bottles));
    console.log("Biberon sauvegardé :", newBottle);
  } catch (error) {
    console.error("Erreur lors de la sauvegarde :", error);
  }
};

// Récupérer tous les biberons
export const getBottles = async (): Promise<{ id: number; quantity: number; timestamp: string; notes: string }[]> => {
  try {
    const bottles = await AsyncStorage.getItem("bottles");
    return bottles ? JSON.parse(bottles) : [];
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
    return [];
  }
};

// Supprimer un biberon par ID
export const deleteBottle = async (id: number) => {
  try {
    let bottles = await getBottles();
    bottles = bottles.filter(bottle => bottle.id !== id);
    await AsyncStorage.setItem("bottles", JSON.stringify(bottles));
    console.log("Biberon supprimé :", id);
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
  }
};
