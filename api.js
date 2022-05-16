const API = 'http://192.168.0.104:3500/gestion_mascotas/listapublicamascotas'

export const obtenerMascotas = async()=>{
  const res = await fetch(API)
  return await res.json()
}
