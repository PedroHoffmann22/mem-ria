import React from "react";
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {useState} from "react"

const style = StyleSheet.create ({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        width: 150,
        height: 150,
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
    },
    gradientTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '30%',
        backgroundColor: 'brown', 
    },
gradientBottom: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '70%',
    backgroundColor: 'black',
},
background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 880,
},
    
})

const splashScreen = function () {
    return <View style={style.container}>
        <LinearGradient
        colors={['#ffe6a7', '#252422']}
        style={style.background}
        />
        <Image
        style={style.stretch}
        source={require('../../assets/images/fusca.jpg')}
      />
    </View>
}

export default splashScreen