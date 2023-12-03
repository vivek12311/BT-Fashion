import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';
import Search from '../assets/Search';
import Cart from '../assets/Cart';
import Wand from '../assets/Wand';
import Profile from '../assets/Profile';
import { useNavigation } from '@react-navigation/native';
import Outfit1 from '../assets/Outfit1.png';
import Outfit2 from '../assets/Outfit2.png';
import Outfit3 from '../assets/Outfit3.png';
import Outfit4 from '../assets/Outfit4.png';
import Outfit5 from '../assets/Outfit5.png';
import Outfit6 from '../assets/Outfit6.png';
import Mainpfp from '../assets/Mainpfp.png'; 
import backgroundImage from '../assets/Background.png';


const Userpage = ({ user }) => {
  const navigation = useNavigation();

  const navigateToUserpage = () => {
    navigation.replace('Userpage');
  };
  const navigateToShoppingcart = () => {
    navigation.replace('Shoppingcart');
  };
  const navigateToOutiftgenerator = () => {
    navigation.replace('Outfitgenerator');
  };
  const navigateToBrowse = () => {
    navigation.replace('Browse');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Grey circle with the word "username" */}
        <View style={styles.profileCircle}>
          {/* Use the Image component to display the profile picture */}
          <Image source={Mainpfp} style={styles.profileImage} />
        </View>
        <View>
          <Text style={styles.username}>vivek_m.7</Text>
          <Text style={styles.followersText}>8 Followers      8 Following</Text>
        </View>
      </View>
      {/* Add more sections as needed */}
      <View style={styles.section}>
        {/* Add content for the section */}
        <Text style={styles.boldText}>Selling</Text>

        {/* Updated styles for the boxes */}
        <View style={styles.boxContainer}>
          <TouchableOpacity style={styles.box} onPress={() => console.log("Scan new items pressed")}>
            <Text style={styles.boxText}>Scan new items +</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => console.log("See my items pressed")}>
            <Text style={styles.boxText}>See my items ⇨</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.boldText}>Saved</Text>
        {/* Add a 3x3 grid for posts */}
        <View style={styles.postGrid}>
          {/* Individual post items */}
          <TouchableOpacity style={styles.postItem} onPress={() => console.log("Post 1 pressed")}>
            <Image source={Outfit1} style={styles.boxImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.postItem} onPress={() => console.log("Post 2 pressed")}>
            <Image source={Outfit2} style={styles.boxImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.postItem} onPress={() => console.log("Post 3 pressed")}>
            <Image source={Outfit3} style={styles.boxImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.postItem} onPress={() => console.log("Post 4 pressed")}>
            <Image source={Outfit4} style={styles.boxImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.postItem} onPress={() => console.log("Post 5 pressed")}>
            <Image source={Outfit5} style={styles.boxImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.postItem} onPress={() => console.log("Post 6 pressed")}>
            <Image source={Outfit6} style={styles.boxImage} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Task bar at the bottom */}
      <View style={styles.taskBar}>
        <TouchableOpacity style={styles.taskBarItem} onPress={navigateToBrowse}>
          <View>
            <Search height={35} width={35} />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20, 
    marginLeft: 20, 
    backgroundColor: 'transparent',
    width: 450,
    height: 125
  },
  profileCircle: {
    width: 140,
    height: 140,
    borderRadius: 75,
    backgroundColor: 'transparent',
    marginRight: 30,
    marginLeft: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%', 
    height: '100%', 
    borderRadius: 70, 
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 100,
  },
  followersText: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
  },
  section: {
    marginBottom: 10, // Adjusted margin
    marginTop: 40,
    marginRight: 10, // Adjusted margin
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 20,
  },
  // Updated styles for the boxes
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align the boxes at both ends of the row
    marginTop: 10,
    paddingHorizontal: 10, // Add horizontal padding to space out the boxes
    width: '100%', // Make the box container span the entire width
  },
  box: {
    flex: 1,
    height: 30, // Adjust the height as needed
    backgroundColor: '#FFA234',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Add border radius for rounded corners
    margin: 10,
    marginBottom: 20,
  },
  boxText: {
    fontSize: 14,
    color: 'white', // Customize the text color as needed
    fontWeight: 'bold'
  },
  // Add new styles for the post grid
  postGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
    marginBottom: 50,
    marginLeft: 10,
  },
  postItem: {
    width: '31%', // Adjust as needed based on your design
    height: 150,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 20,
  },
  boxImage: {
    width: '100%', // Adjust the width as needed
    height: '100%', // Adjust the height as needed
    borderRadius: 10, // Add border radius for rounded corners
  },
  postText: {
    fontSize: 16,
    color: 'black',
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
});

export default Userpage;
