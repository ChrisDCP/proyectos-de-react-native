import { View, Text,StyleSheet, Pressable } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function ListaGasto({id, nombre, cantidad, eliminarDatos, editarDatos}) {
  return (
    <View  >
      
      <View style={styles.Lista}>
        <Text style={styles.Gasto} >{nombre}</Text>
        <Text style={styles.Cantidad} >${cantidad}</Text>

        <View style={styles.iconos} >
          <Pressable onPress={eliminarDatos} style={{marginHorizontal:5}}>
            <MaterialCommunityIcons name="close-circle-outline" color={'#000'} size={30}/>
          </Pressable>

          <Pressable onPress={editarDatos} style={{marginHorizontal:5}} >
            <MaterialCommunityIcons name="pencil-circle-outline" color={'#000'} size={30}/>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    Lista:{
        alignItems:'center',
        width:'90%',
        height:40,
        flexDirection:'row',
        borderColor:'black',
        borderWidth:1,
        marginHorizontal: 25,
        marginVertical:10,
        justifyContent:'space-between' 
    },

    Gasto: {
      alignSelf: 'flex-start',
      marginLeft:5,
      fontSize: 20,
      verticalAlign:'middle'
    },
    Cantidad:{
      marginLeft:5,
      fontSize: 20,
      verticalAlign:'middle'
    },
    iconos:{
      flexDirection:'row',
      justifyContent:'flex-end'
    }
  })
  