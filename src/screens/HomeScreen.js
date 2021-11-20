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
	TextInput,
	Image
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
	const [colorMan, setColorMan] = useState('white');

	function activateOption(option) {
		console.log('hola');
	}

	return (
		<View style={ styles.container }>
		<ImageBackground
		        source={require('../../assets/backgroundImage.png')}
			style={ styles.imageBackgroundContainer }
			resizeMode="cover"
		>
		<Image
			source={require('../../assets/profile.png')}
		/>
		</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});

export default HomeScreen;
