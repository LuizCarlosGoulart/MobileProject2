// screens/DashboardScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DashboardScreen({ route }) {
  const { cpf } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CPF: {cpf}</Text>
      <Button title="Selecionar Imagem" onPress={() => {}} />
      <Button title="Tirar Foto" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
