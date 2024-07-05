// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (cpf === '08993356912' && password === '123456') {
      navigation.navigate('Dashboard', { cpf });
    } else {
      Alert.alert('Erro', 'CPF ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Fazer Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
