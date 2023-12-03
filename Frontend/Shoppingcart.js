import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { FlatGrid } from 'react-native-super-grid';
import Search from '../assets/Search.js';
import Cart from '../assets/Cart.js';
import Wand from '../assets/Wand.js';
import Profile from '../assets/Profile.js';
import Chat from '../assets/Chat.js';

// Import the background image
import backgroundImage from '../assets/Background.png';

const Shoppingcart = () => {
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

  const navigateToBrowse = () => {
    navigation.replace('Browse');
  };

  const items = [
    {
      uri: 'https://i.ebayimg.com/images/g/jr4AAOSwo21eriSu/s-l1200.webp',
    },
    {
      uri: 'https://i.ebayimg.com/images/g/2H8AAOSwLEpi-qq5/s-l1200.webp',
    },
    {
      uri:
        'https://bossandsaucehtx.com/cdn/shop/products/LonghornOrangeDadHatStock_300x300.jpg?v=1630780833',
    },
    {
      uri: 'https://i.ebayimg.com/thumbs/images/g/gFcAAOSwuUVlPFc~/s-l640.jpg',
    },
  ];

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <SafeAreaView style={styles.main}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.headerText}>Cart</Text>

            <SearchBar
              containerStyle={styles.searchBarContainer}
              inputContainerStyle={styles.searchBarInputContainer}
              lightTheme={true}
              round={true}
              placeholder="Search"
              onChangeText={setSearch}
              value={search}
            />

            {/* New component for the orange box */}
            <View style={styles.headerRight}>
              <View style={styles.orangeBox}>
                <Text style={styles.orangeBoxText}>Cart Total: $58.00 </Text>
              </View>
            </View>

            {/* Updated layout for the grey boxes */}
            <View style={styles.itemContainer}>
              {/* First Grey box containing item information */}
              <View style={styles.greyBox}>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: items[0].uri }} style={{ flex: 1, borderRadius: 7 }} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.bootsText}>Ribbed, Orange, V-neck Sweater</Text>
                  <Text> </Text>
                  <Text> Samhitha Thalluru</Text>
                  <Text> $15.00</Text>
                </View>
                <View style={styles.circle} />
                <TouchableOpacity style={styles.chatButton} onPress={() => { /* Add your action here */ }}>
                  <Chat height={35} width={35} />
                </TouchableOpacity>
              </View>

              {/* Second Grey box (similar structure) */}
              <View style={styles.greyBox}>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: items[1].uri }} style={{ flex: 1, borderRadius: 7 }} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.bootsText}>Dark Denim Mini Skirt</Text>
                  <Text> </Text>
                  <Text> Melissa Huang</Text>
                  <Text> $10.00</Text>
                </View>
                <View style={styles.circle} />
                <TouchableOpacity style={styles.chatButton} onPress={() => { /* Add your action here */ }}>
                  <Chat height={35} width={35} />
                </TouchableOpacity>
              </View>

              {/* Third Grey box (similar structure) */}
              <View style={styles.greyBox}>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: items[2].uri }} style={{ flex: 1, borderRadius: 7 }} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.bootsText}>UT Embroidered Longhorn Cap</Text>
                  <Text> </Text>
                  <Text> Jay Hartzell</Text>
                  <Text> $8.00</Text>
                </View>
                <View style={styles.circle} />
                <TouchableOpacity style={styles.chatButton} onPress={() => { /* Add your action here */ }}>
                  <Chat height={35} width={35} />
                </TouchableOpacity>
              </View>

              {/* Fourth Grey box (similar structure) */}
              <View style={styles.greyBox}>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: items[3].uri }} style={{ flex: 1, borderRadius: 7 }} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.bootsText}>Black Western Bow Boots</Text>
                  <Text> </Text>
                  <Text> Jay Hartzell</Text>
                  <Text> $20.00</Text>
                </View>
                <View style={styles.circle} />
                <TouchableOpacity style={styles.chatButton} onPress={() => { /* Add your action here */ }}>
                  <Chat height={35} width={35} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Task bar at the bottom */}
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
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
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
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 10,
    marginLeft: 21,
    marginBottom: -10,
    marginTop: 13,
    backgroundColor: 'transparent',
  },
  gridView: {
    marginTop: 5,
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 58,
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
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    padding: 0,
    width: '40%',
    borderRadius: 7,
    margin: 20,
    marginBottom: -70,
  },
  searchBarInputContainer: {
    backgroundColor: 'lightgrey',
    height: 20,
    borderRadius: 7,
  },
  greyBox: {
    flexDirection: 'row',
    backgroundColor: '#FFDEB7',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 130,
    marginBottom: 20,
    width: '95%',
    alignSelf: 'center',
  },
  imageContainer: {
    width: '35%',
    height: '90%',
    borderRadius: 20,
  },
  textContainer: {
    width: '50%',
    marginLeft: 30,
  },
  bootsText: {
    fontSize: 18.81,
    fontWeight: 'bold',
    left: -10
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#FFA234',
    left: -24,
  },
  chatButton: {
    zIndex: 1,
    marginLeft: 'auto',
  },
  // New styles for the header right section
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orangeBox: {
    backgroundColor: '#FFBC6D',
    borderRadius: 7,
    padding: 8,
    marginLeft: 10,
    left: 200,
    bottom: -50,
    height: 31,
    width: '40%'
  },
  orangeBoxText: {
    color: 'black',
    fontSize: 16,
  },
});

export default Shoppingcart;
