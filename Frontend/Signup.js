import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginname}>
        <Text style={styles.loginText}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonAndMessageContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={navigateToLogin}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.signupText}>
            Already have an account?{' '}
            <TouchableOpacity onPress={navigateToLogin}>
              <Text style={styles.signupLink}>Log In</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  loginname: {
    width: '80%',
    padding: 10,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    marginLeft: 30
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginVertical: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'lightgray',
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
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  signupText: {
    marginTop: 10,
    fontSize: 16,
    bottom: -240,
  },
  signupLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
