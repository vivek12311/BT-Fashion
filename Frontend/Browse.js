import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, StatusBar, Platform, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { FlatGrid } from 'react-native-super-grid';
import Search from '../assets/Search.js';
import Cart from '../assets/Cart.js';
import Wand from '../assets/Wand.js';
import Profile from '../assets/Profile.js';
import backgroundImage from '../assets/Background.png';


const Browse = () => {
  const navigation = useNavigation();
  const [search, setSearch] = React.useState('');

  const navigateToShoppingCart = () => {
    navigation.replace('Shoppingcart');
  };

  const navigateToUserPage = () => {
    navigation.replace('Userpage');
  };

  const navigateToOutfitGenerator = () => {
    navigation.replace('Outfitgenerator');
  };

  const items = [
    { uri: 'https://openclipart.org/image/800px/305245' },
    { uri: 'https://i.ebayimg.com/images/g/g7wAAOSw-VJkEUMZ/s-l1600.jpg' },
    { uri: 'https://pintoranch.com/cdn/shop/files/8649TRiosMens-1.png?v=1688653441&width=1445' },
    { uri: 'https://i.ebayimg.com/images/g/FVUAAOSwpLRkZl83/s-l400.jpg' },
    { uri: 'https://i.ebayimg.com/thumbs/images/g/fRwAAOSwn-tjog4x/s-l640.jpg' },
    { uri: 'https://cdni.llbean.net/is/image/wim/507866_1207_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/507866_1207_41' },
    { uri: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ryan-hoffman-6Nub980bI3I-unsplash.jpg' },
    { uri: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=faith-yarn-Wr0TpKqf26s-unsplash.jpg'},
    { uri: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=alex-haigh-fEt6Wd4t4j0-unsplash.jpg'},
    { uri: 'https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=mariabeatrice-alonzi-VyI0GBHSsJ8-unsplash.jpg'},
    { uri: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=raquel-gambin-kS3YkVtf85U-unsplash.jpg'}, 
    { uri: 'https://images.unsplash.com/photo-1623609163859-ca93c959b98a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=yves-monrique-LR99Ho2eIec-unsplash.jpg'},
    { uri: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=emily-pottiger-Zx76sbAndc0-unsplash.jpg'},
    { uri: 'https://img01.ztat.net/article/spp-media-p1/20d5e542bb6a45099ab89f254dd57652/329a06a160e04719a4f19f8a4973a268.jpg?imwidth=1800&filter=packshot' },
    { uri: 'https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=mitchel-lensink-1BI-ar91C7U-unsplash.jpg'},
    { uri: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=mostafa-mahmoudi-3OZr-hLbsq0-unsplash.jpg'},
    { uri: 'https://i.ebayimg.com/images/g/VB4AAOSwJeNj7BFX/s-l400.jpg' },
    { uri: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=andrew-tanglao-tjvURCarBf0-unsplash.jpg'},
    { uri: 'https://images.unsplash.com/photo-1567333126229-db29200c25f1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=karlis-reimanis-g1nmcKUtGQU-unsplash.jpg'},
    { uri: 'https://i.ebayimg.com/images/g/RCQAAOSw7NRjsw2n/s-l1200.webp' },
    { uri: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=claudio-schwarz-PH8GUKG-Do0-unsplash.jpg'},
    { uri: 'https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ryan-hoffman-2BK0JEwQSpQ-unsplash.jpg'},
    { uri: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=matthew-moloney-YeGao3uk8kI-unsplash.jpg'},
    { uri: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=kemal-alkan-_BDBEP0ePQc-unsplash.jpg'},
  ];

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

    <SafeAreaView style={styles.main}>
      <Text style={styles.headerText}>Browse</Text>
  
      <SearchBar
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        lightTheme={true}
        round={true}
        placeholder="Type Here..."
        onChangeText={setSearch}
        value={search}
      />
  
      <FlatGrid
        itemDimension={100}
        data={items}
        style={styles.gridView}
        spacing={10}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.uri }} style={{ width: '100%', height: '100%', borderRadius: 10}} />
          </View>
        )}
      />

      {/* Task bar at the bottom */}
      <View style={styles.taskBar}>
        <TouchableOpacity style={styles.taskBarItem}>
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
    </SafeAreaView>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 10,
    marginLeft: 21
  },
  gridView: {
    marginTop: 30,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 115,
  },
  taskBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFDEB7',
    padding: 38,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
  },
  taskBarItem: {
    borderRadius: 20,
    backgroundColor: 'transparent',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  searchBarContainer: {
    height: 20,
    backgroundColor: 'transparent', // Set the background color to transparent
    borderBottomColor: 'transparent', // Hide the border
    borderTopColor: 'transparent', // Hide the border
    padding: 0, // Remove padding
    width: '90%',
    alignSelf: 'center',
    borderRadius: 7
  },
  searchBarInputContainer: {
    backgroundColor: 'lightgrey', // Set the input container background color to white
    height: 20,
    borderRadius: 7
  },
});

export default Browse;
