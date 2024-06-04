import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window');

const Main = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.circleTop}></View>
        <View style={styles.circleBottom}></View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/onlineshopping.png')}
            style={styles.image} resizeMode='contain' />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Explore The App</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maecenas quis interdum enim enim molestie faucibus. Pretium non non massa eros, nunc, urna. Ac laoreet sagittis donec vel. Amet, duis justo, quam quisque egestas. Quam enim at dictum condimentum. Suspendisse.
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
          <Text style={styles.buttonText}>Let's Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    circleTop: {
        position: 'absolute',
        top: -width * 0.25,
        left: -width * 0.25,
        width: width * 0.5,
        height: width * 0.5,
        borderRadius: width * 0.25,
        backgroundColor: '#FFC600',
    },
    circleBottom: {
        position: 'absolute',
        bottom: -width * 0.25,
        right: -width * 0.25,
        width: width * 0.5,
        height: width * 0.5,
        borderRadius: width * 0.25,
        backgroundColor: '#FFC600',
    },
    imageContainer: {
        margin: 30,
    },
    image: {
        width: 300,
        height: 300,
    },
    textContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        color: 'black',
        fontWeight: '500',
        fontSize: 20,
    },
    description: {
        margin: 10,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#FFC600',
        padding: 20,
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
    },
});
