import React from 'react';
import Constants from 'expo-constants';
import {Text, View} from 'react-native';

const Main = ()=>{
  return(
    <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
      <Text>Para nosotros es un  gusto darte la bienvenida a Dogs.</Text>
    </View>
  )
}

export default Main;
