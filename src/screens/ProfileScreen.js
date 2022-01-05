/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
	TextInput,
	Image,
	ScrollView,
	Dimensions
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ProfileScreen = ({ navigation }) => {
	//colors = ['#9f0000', '#cc7800', '#f1c800', '']; //red, orange, yellow, gray
	
	const [name, setName] = useState('');
	const [profileImage, setProfileImage] = useState('');
	const [achievements, setAchievements] = useState({});

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getName();
			getProfileImage();
			getAchievements();
		});

		return unsubscribe;
	}, [navigation]);

	const getProfileImage = async () => {
		try {
			const value = await AsyncStorage.getItem('profileImage');
			if(value != null) {
				setProfileImage(value);
			}	
		} catch(e) {
			console.log(e);
		}
	}

	const getName = async () => {
		try {
			const value = await AsyncStorage.getItem('name');
			if(value != null) {
				setName(value);
			}	
		} catch(e) {
			console.log(e);
		}
	}

	const getAchievements = async () => {  
		try {    
			let jsonValue = await AsyncStorage.getItem('achievements');
			jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null;
			if(jsonValue != null) {
				setAchievements(jsonValue);
			} else {
				jsonValue = {
					Science: {Legendary: false, Expert: false, Beginner: false},
					Pop_culture: {Legendary: false, Expert: false, Beginner: false},
					Sports: {Legendary: false, Expert: false, Beginner: false},
					Game: {Legendary: false, Expert: false, Beginner: false},
					Health: {Legendary: false, Expert: false, Beginner: false},
					History: {Legendary: false, Expert: false, Beginner: false},
					Music: {Legendary: false, Expert: false, Beginner: false},
					Religion: {Legendary: false, Expert: false, Beginner: false},
					Design: {Legendary: false, Expert: false, Beginner: false},
					Law: {Legendary: false, Expert: false, Beginner: false},
					Animal: {Legendary: false, Expert: false, Beginner: false},
					Business: {Legendary: false, Expert: false, Beginner: false}
				}
				setAchievements(jsonValue);
			}
		} catch(e) {    // error reading value  
			console.log(e);
		}
	}

	return (
		<View style={ styles.container }>
			<Image
				source={require('../../assets/backgroundImageProfile.jpg')}
				resizeMode="cover"
				style={ styles.image }
			/>
			<View style={{ flex: 2, backgroundColor: '#e6e9e0', alignSelf: 'stretch' }}>
				<Text style={{ textAlign: 'center', color: 'black', fontSize: 20, fontWeight: 'bold' }}>{name != '' ? name : 'Player'}</Text>
			</View>
			<View style={{ flex: 7, backgroundColor: '#e6e9e0', alignSelf: 'stretch' }}>	
				<FontAwesome5 name="medal" size={30} color="#5b5b53" style={{ alignSelf: 'center' }}/>
				<Text style={{ textAlign: 'center' }}>Logros</Text>
				<View style={{ backgroundColor: '#5b5b53', height: 5, width: 70, alignSelf: 'center' }}></View>
			{<ScrollView>
				{Object.keys(achievements).map((category) => Object.keys(achievements[category]).map((level) =>
					<View key={category + level}>
					<View style={{flexDirection: 'row', padding: 15, marginLeft: '25%'}}>
						<FontAwesome name="star" size={30} color={level == 'Legendary' && achievements[category][level] ? '#D4AF37' : level == 'Expert' && achievements[category][level] ? '#C0C0C0' : level == 'Beginner' && achievements[category][level] ? '#CD7F32' : '#808080'}/>
						<View style={{ paddingHorizontal: 20 }}>
							<Text>{level} level</Text>
							<Text>{category.replace('_', ' ')} category</Text>
						</View>
					</View>
					<View style={{backgroundColor: '#808080', height: 1, width: '90%', alignSelf: 'center'}}/>
					</View>
				)
				)}
			</ScrollView>
			}
			</View>
			<Image
				source={profileImage != '' ? {uri: profileImage} : require('../../assets/profile.png')}
				style={ styles.profileImage }
				resizeMode="cover"
			/>
			<TouchableOpacity style={{ position: 'absolute', top: 160, right: 45, backgroundColor: '#8d9b8a', borderRadius: 45, padding: 10 }} onPress={() => {navigation.navigate('EditProfile');}}>
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
		height: screenWidth * 0.3225,
		width: screenWidth * 0.3225,
		position: 'absolute',
		top: 100,
		left: 25,
		borderRadius: screenWidth * 0.3225 / 2
	}
});

export default ProfileScreen;
