import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({label,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} 
    style={{backgroundColor:'#FFC600',padding:10,borderRadius:10,marginTop:20,margin:20}}>
        <Text style={{textAlign:'center',fontWeight:'700',fontSize:20}}>{label}</Text>
      </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})