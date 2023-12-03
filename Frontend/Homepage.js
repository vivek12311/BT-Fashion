import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Search from '../assets/Search.js'
import Cart from '../assets/Cart.js'
import Wand from '../assets/Wand.js'
import Profile from '../assets/Profile.js'


const Homepage = () => {
  const navigation = useNavigation();
  const [aesthetic, setAesthetic] = useState('');
  const [occasion, setOccasion] = useState('');

  var iconName = "archive";

  const navigateToWelcome = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageContent}>
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

      

      {/* Task bar at the bottom */}
      <View style={styles.taskBar}>
        <TouchableOpacity style={styles.taskBarItem}>
          <View>
            <Search height={35} width={35} color={'white'}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskBarItem}>
          <View>
            <Wand height={35} width={35}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskBarItem}>
          <View>
            <Profile height={35} width={35}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskBarItem}>
          <View>
            <Cart height={35} width={35} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pageContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#FFDEB7',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    width: '100%',
    height: 130,
  },
  inputLabel: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold'
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
    backgroundColor: '#FFA234',
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
  taskBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFDEB7',
    padding: 38,
    height: 90
  },
  taskBarItem: {
    borderRadius: 20,
    backgroundColor: 'transparent',
    marginBottom: 10,
    marginHorizontal: 10
  },
});

export default Homepage;
