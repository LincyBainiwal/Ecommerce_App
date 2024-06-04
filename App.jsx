import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Authenticate from './navigation/Authenticate'
import AppStack from './navigation/AppStack'


const Stack = createNativeStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
             <Authenticate/>

    </NavigationContainer>
  )
}


// const Home =()=>{
//   return(
//     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//     <Text>Hello</Text>
//     </View>
    
//   )
// }

export default App

const styles = StyleSheet.create({})