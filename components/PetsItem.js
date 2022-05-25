import React from 'react';
import {View,Text,StyleSheet,Image,Button,Linking} from 'react-native';

const PetsItem = ({mascota})=>{
    //boton de accion para llamar a preguntar por la mascota
    const handleCallPress = async()=>{
      //Linking.openURL("tel:+573162993564" );
      await Linking.openURL(`tel:${mascota.numero_contacto}`);
    }

    //boton de accion para preguntar por la mascota handleWhatsAppPress
    const handleWhatsAppPress = async()=>{
      //await Linking.openURL(`https://wa.me/${mascota.numero_contacto}`)
      await Linking.openURL(`https://wa.me/?text=Hola vi tu publicacion en Dogs!!!. Me interesa adoptar a ${mascota.nombre}`)
    }

    return(
      <View style={styles.itemContainer}>
        <Image source={{uri:'http://192.168.0.104:3500/'+mascota.foto}} style={styles.Logo} />
        <Text style={styles.titleName}> {mascota.nombre} 🐾</Text>
        <Text style={styles.itemName}>Acerca de mi: {mascota.descripcion}</Text>
        <Text style={styles.itemName}>Vacuna: {mascota.vacuna}</Text>
        <Text style={styles.itemName}>Raza: {mascota.raza}</Text>
        <Text style={styles.itemName}>Edad: {mascota.edad}</Text>
        <Text style={styles.itemName}>Pregunta por: {mascota.usuario}</Text>
        <Text style={styles.itemName}>Numero decontacto: {mascota.numero_contacto}</Text>
        <Button title="contactar 📞"  color="#f194ff" onPress={handleCallPress}/>
        <Button title="WhatsApp" color="#33D858" onPress={handleWhatsAppPress} />
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
    color:'#fff',
    fontWeight: 'bold'
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


export default PetsItem;
