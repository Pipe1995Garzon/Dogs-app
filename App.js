import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text,TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';



const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation })=>({
            title: 'Dogs adopta',
            headerStyle: {backgroundColor:'#476062'},
            headerTitleStyle:{color:'#fff'},
            headerRight:()=>(
               <TouchableOpacity onPress={()=>navigation.navigate("HistoryScreen")}>
                 <Text style={{color: '#fff',marginRight: 20, fontSize: 15}}>Historias</Text>
               </TouchableOpacity>
             ),
          })}
        />
        <Stack.Screen
          name="HistoryScreen"
          component={HistoryScreen}
          options={{
            title: 'Dogs Historias'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
