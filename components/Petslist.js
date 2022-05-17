import React from 'react';
import {View, Text,FlatList} from 'react-native';
import PetsItem from '../components/PetsItem';

const PetList = ({ mascotas })=>{
  //rederiza cada dato en una funcion aparte
  const renderItem = ({ item })=>{
    return <PetsItem mascota={item}/>;
  };


  return (
    <FlatList
      style={{ width: '100%'}}
      data={mascotas}
      keyExtractor={(item) => item.id_dog+''}
      renderItem={renderItem}
    />
  )
}
export default PetList
