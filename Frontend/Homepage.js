import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  const navigation = useNavigation();
  const [aesthetic, setAesthetic] = useState('');
  const [occasion, setOccasion] = useState('');

  const navigateToWelcome = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Generate Your Fit</Text>
      <Text style={styles.description}>Build an outfit for ...</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>An Aesthetic</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Type here..."
            value={aesthetic}
            onChangeText={(text) => setAesthetic(text)}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>An Occasion</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Type here..."
            value={occasion}
            onChangeText={(text) => setOccasion(text)}
          />
        </View>
      </View>
      <View style={styles.buttonAndMessageContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={navigateToWelcome}
        >
          <Text style={styles.buttonText}>Start the generator</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 10,
    width: '80%',
  },
  inputBox: {
    backgroundColor: 'lightgray', 
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    width: '100%',
    height: 130
  },
  inputLabel: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputField: {
    width: '100%',
    marginTop: 20,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'white', 
  },
  buttonAndMessageContainer: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: '60%',
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default Homepage;
