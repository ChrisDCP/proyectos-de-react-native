import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Formulario from './Components/Formulario'
import ListaGastos from './Components/ListaGasto'

export default function Main() {

  const [listaGastos, setListaGastos] = useState([{id: 1, nombre:'comida', cantidad:'50'}])

  return (
    <View>
      <Formulario/>
      
      <Text style={styles.tituloLista} >Lista de gastos</Text>
      
      <ScrollView>
        {listaGastos.map((g)=>{
          return(
            <ListaGastos
              id={g.id}
              key={g.id}
              nombre ={g.nombre}
              cantidad = {g.cantidad}
              //editarDatos={editarDatos}
              //eliminarDatos={eliminarDatos}
            />
          )
        })}
      </ScrollView>
      <ListaGastos/>
    </View>
  )
}

const styles = StyleSheet.create({
  tituloLista:{
    alignSelf:'flex-start',
    marginHorizontal:25,
    marginTop:10,
    fontSize:30,
    fontWeight:'bold'
  },
})