import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const Iconbutton = ({onPress,names,color}) => {
    return (
        <Pressable onPress={onPress} style={({pressed})=>pressed && styles.pressed}>
        <Ionicons name={names} size={24} color={color}/>

        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed:{
        opacity:0.7,


    }
})

export default Iconbutton;
