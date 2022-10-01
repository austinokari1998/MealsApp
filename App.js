import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Categoriesscreen from './screens/categoriesscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mealsscreen from './screens/Mealsscreen';
import Mealdetailscreen from './screens/mealdetailscreen';

const stack= createNativeStackNavigator()

export default function App() {
  
  return (<>
      <StatusBar style='light'/>
      <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#351401'},
        contentStyle:{backgroundColor:'#3f2f25'},
        headerTintColor:'white',
      }}>
        <stack.Screen name='MealsCategories' component={Categoriesscreen} 
        options={{
          title:'All Meal Categories',
        }}/>
        <stack.Screen name='meals' component={Mealsscreen} options={{
          title:'Meals '
        }}/>
        <stack.Screen name='mealdetails' component={Mealdetailscreen} options={{
          title:'mealdetails',
          
        }}/>



      </stack.Navigator>

      </NavigationContainer>
      
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
