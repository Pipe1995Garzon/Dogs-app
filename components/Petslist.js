import React from 'react';
import {View, Text,FlatList} from 'react-native';

const PetList = ({ mascotas })=>{
  return (
    <FlatList
      data={mascotas}
      keyExtractor={(item) => item.id_dog+''}
      renderItem={({item}) => {
        console.log(item);
        return <Text>{item.nombre}</Text>
      }}
    />
  )
}
export default PetList
