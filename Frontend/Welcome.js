import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoMain from '../assets/LogoMain.png';
import MainW from '../assets/MainW.png';

export default function Welcome() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect with a delay
  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Adjust the delay as needed
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const navigateToOutfitGenerator = () => {
    navigation.replace('Outfitgenerator');
  };

  return (
    <ImageBackground
      source={MainW}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {isLoading ? (
          // If loading, show the loading indicator
          <ActivityIndicator size="large" color="white" />
        ) : (
          // If not loading, show the main content
          <>
            <View style={styles.messageContainer}>
              <Text style={styles.message}>Welcome Back,</Text>
              <Text style={styles.username}>Vivek!</Text>
            </View>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={navigateToOutfitGenerator}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',  // Set the background color to transparent
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange'
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
  logo: {
    width: '100%',
    height: '100%',
  },
  messageContainer: {
    alignItems: 'center',
    marginTop: 150
  },
  message: {
    fontSize: 28,
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
    backgroundColor: 'white',
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
    fontSize: 19
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },

});
