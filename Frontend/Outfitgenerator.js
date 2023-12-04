import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Search from '../assets/Search.js';
import Cart from '../assets/Cart.js';
import Wand from '../assets/Wand.js';
import Profile from '../assets/Profile.js';
import Generated from './Generated.js';

// Import the background image
import backgroundImage from '../assets/Background.png';

const Outfitgenerator = () => {
  const navigation = useNavigation();
  const [aesthetic, setAesthetic] = useState('');
  const [occasion, setOccasion] = useState('');

  const navigateToOutiftgenerator = () => {
    navigation.replace('Outfitgenerator');
  };

  const navigateToUserpage = () => {
    navigation.replace('Userpage');
  };

  const navigateToShoppingcart = () => {
    navigation.replace('Shoppingcart');
  };

  const navigateToBrowse = () => {
    navigation.replace('Browse');
  };

  const navigateToGenerated = () => {
    navigation.navigate('Generated');
  };

  const navigateToGenerated2 = () => {
    navigation.navigate('Generated2');
  };

  const navigateToGeneratedWithDelay = () => {
    setTimeout(() => {
      navigateToGenerated();
    }, 0); // Adjust the delay time as needed (in milliseconds)
  };
  const navigateToGenerated2WithDelay = () => {
    setTimeout(() => {
      navigateToGenerated2();
    }, 0); // Adjust the delay time as needed (in milliseconds)
  };

  const sendDataToServer = async () => {
    const apiURL = 'http://127.0.0.1:5000/api'

    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          aesthetic: aesthetic,
          occasion: occasion,
        }),
      });

      const data = await response.json();
      console.log('Server response: ', data);
    }
    catch (err) {
      console.error('Error: ', err);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
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
            {/* Wrap the words in a row-oriented View with a background color */}
            <View style={styles.decorativeBox}>
              {/* <Text style={styles.buttonText}>Start</Text> */}
              <TouchableOpacity onPress={navigateToGeneratedWithDelay}>
                <Text style={styles.buttonTextl}>Start the </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateToGenerated2WithDelay}>
                <Text style={styles.buttonTextl}>Generator</Text>
              </TouchableOpacity>
              {/* <Text style={styles.buttonTextl}>e</Text>
              <Text style={styles.buttonText}>Generator</Text> */}
            </View>
          </View>
        </View>

        {/* Task bar at the bottom */}
        <View style={styles.taskBar}>
          <TouchableOpacity style={styles.taskBarItem} onPress={navigateToBrowse}>
            <View>
              <Search height={35} width={35} color={'white'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.taskBarItem} onPress={navigateToOutiftgenerator}>
            <View>
              <Wand height={35} width={35} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.taskBarItem} onPress={navigateToShoppingcart}>
            <View>
              <Cart height={35} width={35} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.taskBarItem} onPress={navigateToUserpage}>
            <View>
              <Profile height={35} width={35} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Use transparent background as the ImageBackground is handling the background
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
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
    margin: 2
  },
  buttonTextl: {
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
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  decorativeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFA234', // Adjust the color as needed
    padding: 10, // Adjust the padding as needed
    borderRadius: 10, // Add border radius for rounded corners
  },

});

export default Outfitgenerator;
