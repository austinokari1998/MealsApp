
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridItems from "../components/categoryGridItems";




const Categoriesscreen = ({navigation}) => {
    function renderItem(itemData) {
        function onPressHandler() {
            navigation.navigate('meals',{
             categoryID:itemData.item.id
            }
           )
            
        }
        return <CategoryGridItems title={itemData.item.title} color={itemData.item.color}
         onPress={onPressHandler}/>;
        
    }
    return (
        <FlatList data={CATEGORIES} 
         keyExtractor={(item)=>item.id}
        renderItem={renderItem}
        numColumns={2}
          >
            
        </FlatList>
    );
}

const styles = StyleSheet.create({})

export default Categoriesscreen;
