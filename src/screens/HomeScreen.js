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

	return (
		<View style={ styles.container }>
		<ImageBackground
		        source={require('../../assets/mainImage.jpg')}
			style={ styles.imageBackgroundContainer }
			resizeMode="cover"
		>
		{/*
		<Image
			source={require('../../assets/profile.png')}
		/>}*/}
		</ImageBackground>
		<TouchableOpacity style={{ flex: 2 }}>
			<Text>Play</Text>
		</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	imageBackgroundContainer: {
		flex: 1,
		height: '100%',
		width: '100%'
	}
});

export default HomeScreen;
