import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const PetsItem = ({mascota})=>{
    return(
      <View style={styles.itemContainer}>
        <Image source={{uri:'http://192.168.0.104:3500/'+mascota.foto}} style={styles.Logo} />
        <Text style={styles.itemName}> Nombre:</Text>
        <Text style={styles.itemName}> {mascota.nombre}</Text>
        <Text style={styles.itemName}>Acerca de mi: {mascota.descripcion}</Text>
        <Text style={styles.itemName}>Vacuna: {mascota.vacuna}</Text>
        <Text style={styles.itemName}>Raza: {mascota.raza}</Text>
        <Text style={styles.itemName}>Edad: {mascota.edad}</Text>
        <Text style={styles.itemName}>Pregunta por: {mascota.usuario}</Text>
        <Text style={styles.itemName}>Numero decontacto: {mascota.numero_contacto}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  itemContainer:{
    backgroundColor: '#387CDF',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  itemName:{
    color:'#fff'
  },
  Logo:{
    width: 130,
    height: 130,
    resizeMode: 'center',
    borderRadius:8
  }
})


export default PetsItem;
