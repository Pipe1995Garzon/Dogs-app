const API = 'http://192.168.0.104:3500/gestion_mascotas/listapublicamascotas'

const APIHISTORY='http://192.168.0.104:3500/gestion_mascotas/historias'

export const obtenerMascotas = async()=>{
  const res = await fetch(API)
  return await res.json()
}

export const obtenerHistorias = async()=>{
  const res = await fetch(APIHISTORY)
  return await res.json()
}
