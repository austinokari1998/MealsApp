import React from 'react';
import {View, StyleSheet, Pressable,Platform,Text} from 'react-native';

const CategoryGridItems = ({title, color,onPress}) => {
    return (
        <View style={[styles.gridItem,{backgroundColor:color}]}>
             <Pressable style={({pressed})=>[styles.button,
              pressed ? styles.buttonpressed:null]}
               android_ripple={{color:'#ccc'}}
               onPress={onPress}>
             <View style={styles.innergrid}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
             </Pressable>
        </View>
       
    );
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        borderRadius:8,
        elevation:6,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowRadius:8,
        shadowOffset:{width:0, height:2},
        backgroundColor:'white',
        height:150,
        overflow:Platform.OS  =='android'? 'hidden':'visible'
    },
    button:{
        flex:1,
    },
    buttonpressed:{
        opacity:0.5,
    },
    innergrid:{
        padding:16,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:12,
        fontWeight:'bold',
    }

})

export default CategoryGridItems;
