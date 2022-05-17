import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const HistoryItem = ({historia}) =>{
  return(
    <View style={styles.itemContainer}>
      <Image source={{uri:'http://192.168.0.104:3500/'+historia.foto}} style={styles.Logo} />
      <Text style={styles.titleName}> {historia.nombre} 🐾</Text>
      <Text style={styles.itemName}>Acerca de mi: {historia.descripcion}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer:{
    backgroundColor: '#EEC6CD',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  itemName:{
    color:'#fff'
  },
  Logo:{
    width: 270,
    height: 150,
    alignItems: 'center',
    borderRadius:8
  },
  titleName:{
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30
  }
})

export default HistoryItem;
