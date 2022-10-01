import React from 'react';
import {View,Text, StyleSheet, Pressable, Image, Platform} from 'react-native';
import Mealdetails from './mealdetails';
import { useNavigation} from '@react-navigation/native'

const Mealitem = ({id, imageUrl,title, affordability,duration, complexity}) => {
    const navigation=useNavigation()
    function selectMealItemHandler() {
        navigation.navigate('mealdetails', {
          mealId: id,
        });
      }
      
    return (
        <View style={styles.mealitem}>
        <Pressable android_ripple={{color:'#ccc'} } onPress={selectMealItemHandler}
        style={({pressed})=>
              pressed ? styles.buttonpressed:null} >
        <View>
             <Image source={{uri:imageUrl}} style={styles.image}/>
        <Text style={styles.title}>
                {title}
            </Text>
        </View>
        <Mealdetails affordability={affordability} duration={duration} complexity={complexity}/>
           
        </Pressable>
           
        </View>
    );
}

const styles = StyleSheet.create({
    mealitem:{
        margin:16,
        borderRadius:8,
        overflow:Platform.OS  =='android'? 'hidden':'visible',
        backgroundColor:'white',
        elevation:4,
        shadowOpacity:0.45,
        shadowRadius:8,
        shadowOffset:{width:0, height:2},
        backgroundColor:'white',
    buttonpressed:{
        opacity:0.5,
    }

    },
    image:{
        width:'100%',
        height:200,

    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center',
        margin:8,
    },
   

   
})

export default Mealitem;
