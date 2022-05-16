import React,{useEffect, useState} from 'react';
import {View} from 'react-native';
import {obtenerMascotas} from '../api';
import PetList from '../components/Petslist'

const HomeScreen = ()=>{

   const [mascotas,setMascotas] = useState([]);
  //traigo las mascotas desde el backend
  const loadPets = async ()=>{
    const data = await obtenerMascotas()
    setMascotas(data)
  }
  //aqui nos aseguramos que al cargar esta vista triga los datos primero
  useEffect(()=>{
    loadPets()
  },[])

  return(
    <View>
      <PetList mascotas={mascotas}/>
    </View>
  )
}

export default HomeScreen;
