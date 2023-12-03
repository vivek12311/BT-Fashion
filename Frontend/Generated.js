import React, { useState, useEffect, useRef } from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet, Animated, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SlideItem from './SlideItem';  // Add this import statement
import Pagination from './Pagination';  // Add this import statement
import Search from '../assets/Search.js';
import Cart from '../assets/Cart.js';
import Wand from '../assets/Wand.js';
import Profile from '../assets/Profile.js';
import backgroundImage from '../assets/Background.png';


const Slides = [
  {
    score: '♻️ +20',
    img: 'https://i.ebayimg.com/images/g/g7wAAOSw-VJkEUMZ/s-l1600.jpg',
    title: 'UT Polo',
    description: 'Antigua UT Longhorn polyester polo shirt',
    price: '$20.00',
  }, 
  {
    score: '♻️ +50',
    img: 'https://img01.ztat.net/article/spp-media-p1/20d5e542bb6a45099ab89f254dd57652/329a06a160e04719a4f19f8a4973a268.jpg?imwidth=1800&filter=packshot',
    title: 'Blue Jeans',
    description: 'Tommy Hilfiger Modern Straight Light Blue',
    price: '$15.99',
  },
  {
    score: '♻️ +80',
    img: 'https://pintoranch.com/cdn/shop/files/8649TRiosMens-1.png?v=1688653441&width=1445',
    title: 'Boots',
    description: 'Rios Mens Brown Feral Hog Cowboy Boots',
    price: '$40.00',
  },
  // Add other slides as needed
];

const Generated = () => {
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
          <ActivityIndicator size="auto" color="#FFA234" />
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <FlatList
            data={Slides}
            renderItem={({ item }) => <SlideItem item={item} />}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
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
    height:90
  },
  taskBarItem: {
    borderRadius: 20,
    backgroundColor: 'transparent',
    marginBottom: 10,
    marginHorizontal: 10,
  },
});

export default Generated;
