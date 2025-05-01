# 🍼 MonAppliBiberon

Application mobile développée avec **React Native + Expo + TypeScript**, permettant de :
- Ajouter la quantité des biberons donnés à bébé
- Voir un historique avec date/heure
- Supprimer un biberon enregistré
- Prévoir des statistiques (à venir)

---

## 📱 Technologies utilisées

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [AsyncStorage](https://github.com/react-native-async-storage/async-storage)
- [React Native Paper](https://callstack.github.io/react-native-paper/) (UI)

---

## ⚙️ Installation

```bash
git clone https://github.com/ton-projet/MonAppliBiberon.git
cd MonAppliBiberon
npm install
npm start
```

👉 Scanne le QR code avec **Expo Go** sur ton téléphone.

---

## 📁 Structure du projet

```
MonAppliBiberon/
│── App.tsx                  # Entrée principale de l’app
│── tsconfig.json            # Config TypeScript
│── app.json                 # Config Expo
│
├── src/
│   ├── screens/             # AddBottle, History, Stats
│   ├── navigation/          # AppNavigator (React Navigation)
│   ├── storage/             # Gestion des données avec AsyncStorage
│   ├── components/          # (À venir si besoin de composants réutilisables)
│   ├── context/             # (Si besoin de global state)
│   └── utils/               # (Formatage, calculs...)
```

---

## ✅ Fonctionnalités actuelles

| Fonction                          | Statut |
|----------------------------------|--------|
| Ajouter un biberon avec quantité | ✅     |
| Enregistrement avec date/heure   | ✅     |
| Historique consultable           | ✅     |
| Suppression de biberon           | ✅     |
| Thème visuel rose pâle           | ✅     |
| Statistiques                     | 🔜     |

---

## 🔧 À prévoir

- [ ] Calcul du total/jour dans l'écran statistiques
- [ ] Choix de l’heure manuellement
- [ ] Sauvegarde cloud (optionnelle)

---

## ✍️ Auteur

Développé avec ❤️ par [Ton Prénom ou Pseudo]