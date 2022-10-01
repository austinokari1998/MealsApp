import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const Mealdetails = ({duration,complexity,affordability,detailstyle,textstyle}) => {
    return (
        <View style={[styles.details,detailstyle]}>
            <Text style={[styles.detailItem, textstyle]}>{duration}m</Text>
            <Text style={[styles.detailItem, textstyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textstyle]} >{affordability.toUpperCase()}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    details:{
        flexDirection:'row',
        padding:8,
        alignItems:'center',
        justifyContent:'center',
},
 
    detailItem:{
        marginHorizontal:4,
        fontSize:12,

}
}
)

export default Mealdetails;
