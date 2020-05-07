/**
 * @format
 * @flow strict-local
 */

 /*TODO: Determine CLEMSON COLORS
*        Linker for docking component
*
*/
import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Header from './Header_Login';
import User_Data from './Login';

const App = () => {
  return (
    <View style={styles.container}>
        <Header title = 'CEVAC App'/>
        <Image source={require('./Uni_Logo.png')} style={styles.img} />
        <User_Data />
    </View>
  );
};

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
