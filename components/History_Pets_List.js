import React from 'react';
import {View, Text,FlatList} from 'react-native';
import HistoryItem from '../components/HistoryItem';

const HistoryPetsList = ( {historias} )=>{
  //renderiza cada dato en una funcion aparte
  const renderItem = ({ item })=>{
    return <HistoryItem historia={item}/>
  };

  return (
    <FlatList
      style={{width: '100%'}}
      data={historias}
      keyExtractor={(item) => item.id_historia+''}
      renderItem={renderItem}
    />
  )
}

export default HistoryPetsList;
