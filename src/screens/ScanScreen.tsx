import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function ScanScreen() {
  const [hasPermission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    if (!hasPermission?.granted) {
      requestPermission();
    }
  }, []);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScannedData(data);
    setScanning(false);
    Alert.alert('Produit scanné', data);
  };

  const restartScan = () => {
    setScannedData(null);
    setScanning(true);
  };

  if (!hasPermission?.granted) {
    return (
      <View style={styles.container}>
        <Text>Permission caméra requise</Text>
        <Button title="Autoriser l'accès" onPress={() => requestPermission()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {scanning ? (
        <CameraView
          onBarcodeScanned={handleBarCodeScanned}
          style={styles.camera}
          barcodeScannerSettings={{ barcodeTypes: ['qr', 'ean13', 'ean8', 'upc_a'] }}
        />
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Données scannées : {scannedData}</Text>
          <Button title="Scanner à nouveau" onPress={restartScan} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4ec', // rose pâle
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  resultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#c2185b',
    fontWeight: 'bold'
  },
});
