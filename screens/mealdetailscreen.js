import React, { useLayoutEffect } from 'react';
import {View, StyleSheet,Image, Text, ScrollView} from 'react-native';
import Iconbutton from '../components/iconbutton';
import Mealdetails from '../components/mealdetails';
import Subtitle from '../components/subtitle';
import { MEALS } from '../data/dummy-data';

const Mealdetailscreen = ({route,navigation}) => {

    const mealId=route.params.mealId
    const selectedmeal=MEALS.find((meal)=>meal.id===mealId)

    const Ingredients='ingredients';
    function favoritesetter(params) {
        return;
        
    }

    const step='Steps';
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>{
                return <Iconbutton onPress={favoritesetter} names='star' color='white'/>
            }
        })

    },
    [])
   
    return (
        <ScrollView style={styles.rootcontainer}>
        <Image style={styles.image} source={{uri:selectedmeal.imageUrl}} />
        <Text style={styles.title}>{selectedmeal.title}</Text>

        <View>
        <Mealdetails duration={selectedmeal.duration} 
        complexity={selectedmeal.complexity} 
        affordability={selectedmeal.affordability}
        textstyle={styles.textstyle}
        />
        </View>
        <View style={styles.outercontainer}>
            <View style={styles.innerContainer}>
            <Subtitle children={Ingredients}/>
            <View>
            {selectedmeal.ingredients.map((ingredient)=>
                    <View style={styles.listeditor}>
                    <Text style={styles.Textitem} key={ingredient}>
                        {ingredient}
                    </Text>
                    </View>
                   

                
            )}
          
             </View>


            <Subtitle children={step}/>
            <View>
            {selectedmeal.steps.map((step)=>
                    <View style={styles.listeditor}>
                    <Text style={styles.Textitem} key={step} >
                        {step}
                    </Text>
                    </View>
                   

                
            )}
          
             </View>
            
            


            
            

        </View>

        </View>
        
       

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootcontainer:{
        marginBottom:32,
    },
    listeditor:{
        borderRadius:6,
        paddingHorizontal:6,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'#e2b497',

    },
    Textitem:{
        textAlign:'center',
        color:'#351401',

    },

    image:{
        width:'100%',
        height:340,



    },
    title:{
        fontWeight:'bold',

        color:'white',
        fontSize:24,
        margin:8,
        textAlign:'center',

    },
    textstyle:{
        color:'white',
    },
    outercontainer:{
        alignItems:'center',
    },
    innerContainer:{
        width:'80%',
    }
   
})

export default Mealdetailscreen;
