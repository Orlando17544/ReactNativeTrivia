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
	Image,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {

	return (
		<View style={ styles.container }>
			<Image
				source={require('../../assets/backgroundImageProfile.jpg')}
				resizeMode="cover"
				style={ styles.image }
			/>
			<View style={{ flex: 2, backgroundColor: '#e6e9e0', alignSelf: 'stretch' }}>
				<Text style={{ textAlign: 'center', color: 'black', fontSize: 20, fontWeight: 'bold' }}>Player</Text>
			</View>
			<View style={{ flex: 7, backgroundColor: '#e6e9e0', alignSelf: 'stretch' }}>	
				<FontAwesome5 name="medal" size={30} color="#5b5b53" style={{ alignSelf: 'center' }}/>
				<Text style={{ textAlign: 'center' }}>Logros</Text>
				<View style={{ backgroundColor: '#5b5b53', height: 5, width: 70, alignSelf: 'center' }}></View>
			</View>
			<Image
				source={require('../../assets/profile.png')}
				style={ styles.profileImage }
				resizeMode="contain"
			/>
			<TouchableOpacity style={{ position: 'absolute', top: 160, right: 45, backgroundColor: '#8d9b8a', borderRadius: 45, padding: 10 }}>
				<MaterialIcons name="edit" size={30} color="white"/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	image: {
		flex: 4,
		height: '100%',
		width: '100%'
	},
	profileImage: {
		height: '30%',
		width: '30%',
		position: 'absolute',
		top: 95,
		left: 25
	}
});

export default ProfileScreen;
