import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Main from '../screens/MainScreen';
const Stack = createNativeStackNavigator();

const Authenticate = () => {
  return (

        <Stack.Navigator>
             <Stack.Screen  name = "Main" component={Main} options={{headerShown:false}}/>
             <Stack.Screen  name="Login" component={LoginScreen} options={{headerShown:false}}/>
             <Stack.Screen  name="Register" component={RegisterScreen} options={{headerShown:false}}/>

        </Stack.Navigator>
    
  )
}


export default Authenticate

const styles = StyleSheet.create({})