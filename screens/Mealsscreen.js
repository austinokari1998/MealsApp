import React from 'react';
import {View,Text,FlatList, StyleSheet} from 'react-native';
import Mealitem from '../components/mealitem';
import { useLayoutEffect } from 'react';
import { MEALS,CATEGORIES } from '../data/dummy-data';

const Mealsscreen = ({route,navigation}) => {
    const mealcategoryId=route.params.categoryID
    //filter the meals whose id marches the one in the mealcategoryid..
    const displayedmeals=MEALS.filter((meal)=>{
        return meal.categoryIds.indexOf(mealcategoryId)>=0;
    })

    //to find the title of the category and display it as the top of the navigation to this screen

    // we useLayoutEffect hook to set up the side effect on the screens. handled the same as useffect only rendered at the same time as the component.
    useLayoutEffect(() => {
        const categoryTitle=CATEGORIES
        .find((category)=>category.id===mealcategoryId)
        .title

        navigation.setOptions({
            title:categoryTitle
        })
    }, [navigation,mealcategoryId]);

    


    function rendermeals(itemData) {
       
        const item=itemData.item;
        const mealitemsProps={
            id:item.id,
            title:item.title,
            steps:item.steps,
            
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            complexity:item.complexity,
            duration:item.duration
        }
        return (
            <Mealitem {... mealitemsProps}  />

        );

        
    }
    return (
        <View style={styles.mealsscreen}>

        <FlatList data={displayedmeals} keyExtractor={(item)=>item.id} renderItem={rendermeals}>

        </FlatList>           
        </View>
    );
}

const styles = StyleSheet.create({

    mealsscreen:{
        padding:16,
        flex:1,

    }
}
    
    )

export default Mealsscreen;
