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
	Image
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AsyncStorage from '@react-native-async-storage/async-storage';

SplashScreen.hide();

/*

var Sound = require('react-native-sound');

Sound.setCategory('Playback');

var ocarina = new Sound('ocarina.mp3', Sound.MAIN_BUNDLE, (error) => {
	if (error) {
		console.log('failed to load the sound', error);
		return;
	} else {
	// if loaded successfully
	console.log('duration in seconds: ' + ocarina.getDuration() + 'number of channels: ' + ocarina.getNumberOfChannels());

	ocarina.play();
	}

});

ocarina.setVolume(50);

// To loop the song
ocarina.setNumberOfLoops(100);

*/

const AchievementScreen = ({ route, navigation }) => {

	let { level, category } = route.params;

	const storeAchievement = async () => {  
		try {    
			let jsonValue = await AsyncStorage.getItem('achievements');
			const jsonObject = JSON.parse(jsonValue);
			const achievementsArray = jsonObject[category];
			achievementsArray.push(level);
			jsonObject[category] = achievementsArray;

			jsonValue = JSON.stringify(jsonObject);
			await AsyncStorage.setItem('achievements', jsonValue);
		} catch (e) { 
			console.log(e); 
		}
	}

	return (
		<View style={ styles.container }>
			<Text style={{ fontSize: 25, fontWeight: 'bold', color: '#4c4c4c', textAlign: 'center' }}>Achievement Unlocked!</Text>
			<Image
				style={{height: '50%', width: '50%', alignSelf: 'center'}}
				source={require('../../assets/achievement.png')}
				resizeMode="contain"
			/>
			<Text style={{ fontSize: 25, fontWeight: 'bold', color: '#a7a7a7', textAlign: 'center' }}>{level} Level</Text>
			<Text style={{ fontSize: 20, color: '#484848', textAlign: 'center', marginTop: 25 }}>You have reached the {level} Level in {category} category!</Text>
			<TouchableOpacity onPress={() => {storeAchievement();navigation.navigate('Main');}} style={{ backgroundColor: '#1cb0f6', marginHorizontal: 15, borderRadius: 10, marginTop: 30, padding: 10 }}>
				<Text style={{ fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold' }}>OK</Text>
			</TouchableOpacity>
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
		fontWeight: 'bold'
	},
	textTitle: {
		fontWeight: 'bold',
		fontSize: 25
	},
	optionsButtonsContainer: {
		flexDirection: 'row',
		marginTop: '2%'
	},
	optionsButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 5,
		elevation: 10,
		padding: '3%'
	},
	textOptionsButtons: {
		fontSize: 12,
		color: 'black'
	}
});

export default AchievementScreen;
