import React,{useEffect,useState} from 'react';
import {View,Text} from 'react-native';
import {obtenerHistorias} from '../api';
import Layout from '../components/Layout';
import HistoryPetsList from '../components/History_Pets_List';

const HistoryScreen = ()=>{
  const [historias,setHistorias] = useState([]);
  //traigo las historias desde el backend
  const loadHistory = async()=>{
    const data = await obtenerHistorias()
    setHistorias(data)
  }
  //aqui nos aseguramos que al cargar esta vist traiga los datos primero
  useEffect(()=>{
    loadHistory()
  },[])
  return(
    <Layout>
      <HistoryPetsList historias={historias}/>
    </Layout>
  )
}

export default HistoryScreen;
