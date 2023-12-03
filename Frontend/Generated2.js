import React, { useState, useEffect, useRef } from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet, Animated, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SlideItem from './SlideItem';
import Pagination from './Pagination';
import Search from '../assets/Search.js';
import Cart from '../assets/Cart.js';
import Wand from '../assets/Wand.js';
import Profile from '../assets/Profile.js';
import backgroundImage from '../assets/Background.png';


const Slides = [
  {
    score: '♻️ +20',
    img: 'https://i.ebayimg.com/images/g/VB4AAOSwJeNj7BFX/s-l400.jpg',
    title: 'Coat',
    description: 'Moda Jacket Womens Trench Coat Suede Long',
    price: '$38.00',
  }, 
  {
    score: '♻️ +20',
    img: 'https://i.ebayimg.com/images/g/FVUAAOSwpLRkZl83/s-l400.jpg',
    title: 'Sweater',
    description: 'Sweater Knit Textured V-Neck Pullover Pink',
    price: '$9.99',
  },
  {
    score: '♻️ +20',
    img: 'https://i.ebayimg.com/thumbs/images/g/fRwAAOSwn-tjog4x/s-l640.jpg',
    title: 'Jeans',
    description: 'Womans Bootcut Jeans Light Blue',
    price: '$20.00',
  },
  {
    score: '♻️ +20',
    img: 'https://i.ebayimg.com/images/g/RCQAAOSw7NRjsw2n/s-l1200.webp',
    title: 'Winter Boots',
    description: 'U.S. Polo Womens Winter Boots Fur Beige',
    price: '$18.99',
  },
  {
    score: '♻️ +20',
    img: 'https://cdni.llbean.net/is/image/wim/507866_1207_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/507866_1207_41',
    title: 'Womans Hat',
    description: 'Womans Winter Lined Pom Hat',
    price: '$10.00',
  },
];

const Generated2 = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleOnScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const navigateToUserPage = () => {
    navigation.replace('Userpage');
  };

  const navigateToShoppingCart = () => {
    navigation.replace('Shoppingcart');
  };

  const navigateToOutfitGenerator = () => {
    navigation.replace('Outfitgenerator');
  };

  const navigateToBrowse = () => {
    navigation.replace('Browse');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="medium" color="#FFA234" />
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <FlatList
            data={Slides}
            renderItem={({ item, index }) => (
              <SlideItem
                item={item}
                // Add a style to the last item to control its height
                style={
                  index === Slides.length - 1
                    ? { height: 100 } // Adjust the height as needed
                    : {}
                }
              />
            )}
            horizontal
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={handleOnScroll}
            onViewableItemsChanged={handleOnViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
          <Pagination data={Slides} scrollX={scrollX} index={index} />
        </View>
      )}
      {/* Bottom task bar */}
      <View style={styles.taskBar}>
        <TouchableOpacity style={styles.taskBarItem} onPress={navigateToBrowse}>
          <View>
            <Search height={35} width={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskBarItem} onPress={navigateToOutfitGenerator}>
          <View>
            <Wand height={35} width={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskBarItem} onPress={navigateToShoppingCart}>
          <View>
            <Cart height={35} width={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskBarItem} onPress={navigateToUserPage}>
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
    backgroundColor: 'transparent'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
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
    marginHorizontal: 10,
  },
});

export default Generated2;
