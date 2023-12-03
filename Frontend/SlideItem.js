import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated, Easing } from 'react-native';

const { width, height } = Dimensions.get('screen');

const SlideItem = ({ item }) => {
  const translateYImage = new Animated.Value(70);

  useEffect(() => {
    Animated.timing(translateYImage, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: item.img }}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

      <View style={styles.content}>
        <Text style={styles.score}>{item.score}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '90%',
    backgroundColor: 'transparent',
  },
  content: {
    flex: 0.5,
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 25,
    width: 370,
    marginBottom: 70,
    marginTop: 0
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20
  },
  description: {
    fontSize: 16,
    marginVertical: 18,
    color: 'black',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: -20,
    left: 150
  }
});

export default SlideItem;
