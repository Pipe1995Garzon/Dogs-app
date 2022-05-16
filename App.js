import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SendComent from './screens/SendComent';



const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="SendComent" component={SendComent}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
