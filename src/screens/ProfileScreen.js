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

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getName();
			getProfileImage();
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

	const achievements = [{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Science'
	}, 
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Science'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Science'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Pop_culture'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Pop_culture'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Pop_culture'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Sports'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Sports'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Sports'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Game'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Game'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Game'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Health'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Health'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Health'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'History'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'History'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'History'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Music'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Music'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Music'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Religion'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Religion'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Religion'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Design'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Design'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Design'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Law'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Law'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Law'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Animal'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Animal'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Animal'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Business'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Business'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Business'
		},
	];

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
			<ScrollView>
				{achievements.map((achievement) => 
					<View key={achievement.level + achievement.category}>
					<View style={{flexDirection: 'row', padding: 15, marginLeft: '25%'}}>
						<FontAwesome name="star" size={30} color={achievement.color}/>	
						<View style={{ paddingHorizontal: 20 }}>
							<Text>{achievement.level} level</Text>
							<Text>{achievement.category} category</Text>
						</View>
					</View>
					<View style={{backgroundColor: '#808080', height: 1, width: '90%', alignSelf: 'center'}}/>
					</View>
				)}
			</ScrollView>
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
