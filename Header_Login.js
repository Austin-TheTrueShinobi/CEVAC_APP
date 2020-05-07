import React from 'react'
import {View, Text, StyleSheet, ViewComponent} from 'react-native'

const Header = (props) => {
    return(
    <View style={StyleSheet.Header}>
        <Text style={styles.text}>{props.title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'orange',
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',
    },
});
export default Header;