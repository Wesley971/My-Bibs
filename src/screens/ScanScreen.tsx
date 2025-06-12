import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import {
  CameraView,
  useCameraPermissions,
  BarcodeScanningResult,
} from 'expo-camera';

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, []);

  const handleScan = (data: BarcodeScanningResult) => {
    if (!scanned && data?.data) {
      setScanned(true);
      setCode(data.data);
      Alert.alert('Code scanné', data.data);
    }
  };

  if (!permission?.granted) {
    return (
      <View style={styles.center}>
        <Text>Autorisation caméra requise</Text>
        <Button title="Demander l'autorisation" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFill}
        onBarcodeScanned={handleScan}
        barcodeScannerSettings={{
          barcodeTypes: ['ean13', 'ean8', 'upc_a', 'upc_e'],
        }}
      />
      {scanned && (
        <View style={styles.overlay}>
          <Text style={styles.codeText}>Code : {code}</Text>
          <Button title="Scanner à nouveau" onPress={() => {
            setScanned(false);
            setCode(null);
          }} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  overlay: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  codeText: {
    fontSize: 18,
    marginBottom: 10,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
