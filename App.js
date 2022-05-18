
import { StyleSheet, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import MovieDetailScreen from './components/ MovieDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer  contentContainerStyle={{ paddingTop:50}}>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown:false,backgroundColor:'#000217' }}
      />
     <Stack.Screen 
     name="Movie Details" 
     component={MovieDetailScreen}
     options={{headerTransparent:true,headerTintColor:"white",title:"" }}
     
  
      />
    </Stack.Navigator>
  
  </NavigationContainer>
  );
}
const styles= StyleSheet.create({
  container:{
      height:"100%",
      width:"100%",
      flex:1,  
      backgroundColor: '#000217',
    
  }

  })