import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const User_Data = () => {
  return (
    <View style={styles.container}>
        <TextInput placeholder='Username' style={styles.input} />
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
      },
  });

export default User_Data;
