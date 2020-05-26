/**
 * @format
 * @flow strict-local
 */

 /*TODO: Determine CLEMSON COLORS
*        Linker for docking component
*
*/
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Header from './Header_Login';
import User_Data from './Login';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack_Nav = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>

      <View style={styles.container}>
          <Header title = 'CEVAC App'/>
          <Image source={require('./Uni_Logo.png')} style={styles.img} />
          <User_Data />
      </View>

      
    </NavigationContainer>
  );
}

//const App = () => {
//  return (
    
//  );
//};

function HomeScreen({ navigation }) {
  return (
    <Button
      title="User Profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Temp_Name' })
      }
    />
  );
}
const styles = StyleSheet.create({

  container: {

    padding: 15,
    backgroundColor: 'darkslategrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 /2,
  },
});

export default App;

/*
<!-- Load an icon library to show a hamburger menu (bars) on small screens -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Top Navigation Menu -->
<div class="topnav">
  <a href="#home" class="active">Logo</a>
  <!-- Navigation links (hidden by default) -->
  <div id="myLinks">
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

This is the CSS STUFF 


.topnav {
  overflow: hidden;
  background-color: #333;
  position: relative;
}


.topnav #myLinks {
  display: none;
}

.topnav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

.topnav a.icon {
  background: black;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.active {
  background-color: #4CAF50;
  color: white;
}

This is the JS stuff

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


*/




