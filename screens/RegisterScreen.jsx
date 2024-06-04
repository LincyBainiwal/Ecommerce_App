import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

const { width, height } = Dimensions.get('window');

const RegisterScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.circleTop}></View>
        <View style={styles.circleBottom}></View>
        <Image source={require("../assets/images/Minishop.png")} style={styles.logo} resizeMode='contain' />

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Register</Text>
        </View>

        <View style={styles.inputWrapper}>
          <InputField label={'Full Name'} />
          <InputField label={'Email ID'} keyboardType={'email-address'} />
          <InputField label={'Password'} inputType={'password'} />
          <InputField label={'Confirm Password'} inputType={'password'} />
        </View>

        <CustomButton label={'Register'} onPress={() => {}} customStyles={styles.registerButton} />

        <Text style={styles.signUpText}>Or, sign up with</Text>
        <View style={styles.socialLoginContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
            <Image source={require("../assets/images/google.png")} style={styles.socialIcon} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
            <Image source={require("../assets/images/facebook.png")} style={styles.socialIcon} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
            <Image source={require("../assets/images/apple.png")} style={styles.socialIcon} resizeMode='contain' />
          </TouchableOpacity>
        </View>

        <View style={styles.loginContainer}>
          <Text style={styles.notRegisteredText}>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 20,
  },
  circleTop: {
    position: 'absolute',
    top: -width * 0.2,
    right: -width * 0.4,
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    backgroundColor: '#FFC600',
    opacity: 0.7,
  },
  circleBottom: {
    position: 'absolute',
    bottom: -width * 0.2,
    left: -width * 0.4,
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    backgroundColor: '#FFC600',
    opacity: 0.7,
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: 30,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: '#FFC600',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  signUpText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#6C6A6A',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  socialButton: {
    borderBottomWidth: 4,
    borderLeftWidth:3,
      borderColor: '#a49d9d',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  notRegisteredText: {
    color: '#6C6A6A',
  },
  loginText: {
    fontWeight: '700',
    color: '#FFC600',
    marginLeft: 5,
  },
});
