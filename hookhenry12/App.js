import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const WelcomeApp = () => {
  const [name, setName] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  useEffect(() => {
    if (name) {
      setWelcomeMessage(`¡Bienvenido/a, ${name}!`);
    } else {
      setWelcomeMessage('');
    }
  }, [name]);

  const handleClearName = () => {
    setName('');
    setWelcomeMessage('');
  };

  return (
    <View>
      <TextInput
        placeholder="Ingresa tu nombre"
        value={name}
        onChangeText={setName}
      />
      <Button title="Limpiar" onPress={handleClearName} />
      <Text>{welcomeMessage}</Text>
    </View>
  );
};

export default WelcomeApp;
