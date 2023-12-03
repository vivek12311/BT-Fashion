import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigateToWelcome = () => {
    navigation.replace('Welcome');
  };

  const navigateToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginname}>
        <Text style={styles.loginText}>Log In</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <View style={styles.buttonAndMessageContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={navigateToWelcome}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <Text style={styles.signupText}>
            Don't have an account?{' '}
            <TouchableOpacity onPress={navigateToSignup}>
              <Text style={styles.signupLink}>Sign Up</Text>
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
    backgroundColor: '#FFDEB7', 
  },
  buttonAndMessageContainer: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#FFA234',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: '80%%',
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
