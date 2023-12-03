import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  const navigateToHomepage = () => {
    navigation.replace('Homepage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReFit</Text>
      <View style={styles.circleContainer}>
        {/* Your logo or circle goes here */}
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Welcome Back,</Text>
        <Text style={styles.username}>Vivek!</Text>
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={navigateToHomepage} 
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA234'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  circleContainer: {
    width: 120,
    height: 120,
    backgroundColor: 'grey',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginBottom: 70,
  },
  messageContainer: {
    alignItems: 'center',
  },
  message: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  username: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 1,
    marginBottom: 5,
    color: 'white'
  },
  nextButton: {
    backgroundColor: 'white', // Use the same styling as the "Login" button
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: '40%',
    marginBottom: 100
  },
  buttonText: {
    color: '#FFA234',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17
  },
});
