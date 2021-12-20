/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
	TextInput
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const NameScreen = ({ navigation }) => {

	const [name, setName] = useState('');

	const storeName = async (value) => {
		try {
			await AsyncStorage.setItem('name', value)
		} catch (e) {
			console.log(e);
		}
	}

	function checkAnswer() {
		if (name != '') {
			storeName(name);
		}
			navigation.navigate('Main');
	}

	return (
		<View style={ styles.container }>
		<ImageBackground
		        source={require('../../assets/backgroundImage.jpg')}
			style={ styles.imageBackgroundContainer }
			resizeMode="cover"
		>
		<View style={{ alignItems: 'center' }}>
			<Text style={[ styles.text, {textAlign: 'center'} ]}>2 / 2</Text>
			<Text style={[ styles.text, styles.textTitle, {textAlign: 'center'} ]}>Please, enter your name</Text>
			<Text style={[ styles.text, {textAlign: 'center'} ]}>It will be used in the game</Text>
		</View>
		<View style={{ alignItems: 'center' }}>
			<TextInput
				textAlign='left'
				placeholder="Your name"
				onChangeText={(text) => {setName(text);}}
				style={{ height: '25%', width: '60%', backgroundColor: 'white', borderRadius: 5 }}
			/>
			<Text style={[ styles.text, { marginTop: '5%' }]}>You can come back to this step later</Text>
		</View>
		<View style={{ alignItems: 'center' }}>
			<TouchableOpacity
				style={{ backgroundColor: '#65b90b', paddingHorizontal: '30%' , paddingVertical: '3%', borderRadius: 5 }}
				onPress={() => {checkAnswer();}}>
				<Text style={{ fontSize: 20, color: 'white' }}>CONTINUE</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {navigation.navigate('Main');}}>
				<Text style={[ styles.text, {marginTop: '5%'} ]}>Skip</Text>
			</TouchableOpacity>
		</View>
		</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	imageBackgroundContainer: {
		flex: 1, 
		justifyContent: 'space-around', 
		width: '100%', 
		height: '100%' 
	},
	text: {
		fontSize: 15, 
		color: 'black',
	},
	textTitle: {
		fontWeight: 'bold',
		fontSize: 25
	}
});

export default NameScreen;
