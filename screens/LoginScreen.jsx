import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import CustomButton from '../components/CustomButton';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.circleTop}></View>
        <View style={styles.circleBottom}></View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Login Account</Text>
          <Image source={require("../assets/images/User.png")} style={styles.userIcon} resizeMode='contain' />
        </View>
        <Text style={styles.welcomeText}>Welcome back Rohit thakur!</Text>
        <Image source={require("../assets/images/Minishop.png")} style={styles.logo} resizeMode='contain' />

        <View style={styles.inputContainer}>
          <TextInput placeholder='Enter email ID' keyboardType='email-address' style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Enter Password' secureTextEntry={true} style={styles.input} />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgetPasswordText}>Forget Password?</Text>
        </TouchableOpacity>
        
        <CustomButton label={'Login'} onPress={() => {}} customStyles={styles.loginButton} />

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
        <View style={styles.registerContainer}>
          <Text style={styles.notRegisteredText}>Not registered yet?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
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
    top: height * 0.4,
    left: -width * 0.3,
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.3,
    backgroundColor: '#FFC600',
    opacity: 0.7,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#6C6A6A',
    marginTop: 10,
    textAlign: 'center',
  },
  logo: {
    marginTop: 20,
    width: 100,
    height: 40,
  },
  inputContainer: {
    borderColor: '#6C6A6A',
    borderRadius: 5,
    borderWidth: 1,
    padding: 12,
    marginTop: 20,
    width: '100%',
  },
  input: {
    width: '100%',
  },
  forgetPasswordText: {
    color: '#000000',
    fontWeight: '100',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#FFC600',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 30,
  },
  signUpText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#6C6A6A',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  socialButton: {
    borderBottomWidth: 4,
    borderLeftWidth:3,
    borderColor: '#c2baba',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  notRegisteredText: {
    color: '#6C6A6A',
  },
  registerText: {
    fontWeight: '700',
    color: '#FFC600',
    marginLeft: 5,
  },
});
