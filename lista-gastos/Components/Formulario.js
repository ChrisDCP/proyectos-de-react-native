import { View, Text, TextInput, TouchableOpacity, StyleSheet  } from 'react-native'
import React, { useState } from 'react'
import { v4 } from 'uuid'

export default function Formulario({GuardarDatos, EnviarDatos,indexEdit, datos, texto}) {

  const [nombreGasto, setNomberGasto] = useState('')
  const [cantidad, setCantidad] = useState('')

  const EnviarDatos = () =>{
    if ((!nombreGasto) || (!cantidad) || (gasto<=0)) return

    if (indexEdit === null){
      const nuevoGasto = {
        id: uuid.v4(),
        nombGasto : nombreGasto,
        cantidad : cantidad 
      }

      GuardarDatos(nuevoGasto)
    }else{
      const nuevoGasto2 = {
        nomgasto: nombreGasto,
        cantidad: cantidad
      }
      GuardarDatos(nuevoGasto2)
    }
    setNomberGasto("")
    setCantidad("")
  }
  
  return (
    <View style={styles.form} >
      <Text style={styles.titulo} >Añade tus gastos</Text>

      <TextInput 
      placeholder='Gasto' 
      style={styles.input}></TextInput>

      <TextInput 
      placeholder='Cantidad' 
      keyboardType='numeric'
      style={styles.input}></TextInput>

      <TouchableOpacity style={styles.botonAgregar} onPress={EnviarDatos} >
        <Text style={styles.textoBotonAgregar} >Agregar Gasto</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    form:{
        alignItems:'center',
        width:'100%'
    },
    titulo:{
        fontSize:30,
        margin:25,
        alignSelf:'flex-start',
        fontWeight:'bold',
        fontFamily:'Roboto'
    },
    input:{
        width:'90%',
        height:50,
        borderColor:'gray',
        borderWidth:2,
        paddingHorizontal:15,
        marginBottom:10
    },
    botonAgregar:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'purple',
        width:'90%',
        height:50,
        marginTop:15
    },
    textoBotonAgregar:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        fontFamily:'Roboto'
    }
})