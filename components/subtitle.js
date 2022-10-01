import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const Subtitle = ({children}) => {
    return (
        <View>
             <View style={styles.subtitlecontainer}>

            <Text style={styles.subtitle}>{children}</Text> 
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    subtitle:{
        color:'#e2b497',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        

    },
    subtitlecontainer:{
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        padding:6,
        marginHorizontal:12,
        marginVertical:4


        

    }

})

export default Subtitle;
