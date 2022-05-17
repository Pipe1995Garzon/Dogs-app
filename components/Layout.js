import React from 'react';
import {View, StyleSheet,StatusBar} from 'react-native';
const Layout = ({children})=>{
  return(
    <View style={styles.container}>
      <StatusBar backgroundColor='#476062'/>
      {children}
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#EC90A1",
    padding: 20,
    flex:1,
    alignItems:'center',

  }
});

export default Layout;
