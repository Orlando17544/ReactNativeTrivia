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
	Dimensions
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import CategoriesScreen from './CategoriesScreen.js';
import FriendsScreen from './FriendsScreen.js';

const HomeScreen = ({ navigation }) => {

	const [profileImage, setProfileImage] = useState('');
	const [name, setName] = useState('');
	const [interests, setInterests] = useState([]);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getName();
			getProfileImage();
			getInterests();
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

	const getInterests = async () => {
		try {
			let jsonValue = await AsyncStorage.getItem('interests');
			jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null;
			const arrayValue = Object.values(jsonValue);
			if(arrayValue != null) {
				setInterests(arrayValue);
			}
		} catch(e) {
			console.log(e);
		}
	}

	return (
		<View style={ styles.container }>
		<ImageBackground
		        source={require('../../assets/mainImage.jpg')}
			style={ styles.imageBackgroundContainer }
			resizeMode="cover"
		>
		<Image
			source={profileImage != '' ? {uri: profileImage} : require('../../assets/profile.png')}
			style={ styles.profileImage }
			resizeMode="cover"
		/>
		<Text style={{ flex: 1, fontSize: 25, color: 'black', textAlign: 'center', fontWeight: 'bold' }}>{name != '' ? name : 'Player'}</Text>
		</ImageBackground>
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e5e7e2' }}>
		<TouchableOpacity style={{ backgroundColor: '#19ba50', borderRadius: 5, paddingHorizontal: '40%', paddingVertical: '3%' }} onPress={() => {navigation.navigate('Trivia', {
			categories: interests
		});}}>
			<Text style={{ fontSize: 18, color: 'white' }}>Play</Text>
		</TouchableOpacity>
		</View>
		<Tab.Navigator style={{ flex: 7 }} screenOptions={{
			tabBarStyle: { backgroundColor: '#e5e7e2' }
		}}
		>
		      <Tab.Screen name="Categories" component={CategoriesScreen} options={{ tabBarIcon: () => (
			      <MaterialIcons name="category" size={20} color="#505149" /> 
		      ), tabBarActiveTintColor: "#505149", tabBarInactiveTintColor: "#8f9c8b", tabBarPressColor: "#505149"
		      }}
/>
		      <Tab.Screen name="Friends" component={FriendsScreen} options={{ tabBarIcon: () => (
			      <FontAwesome5 name="user-friends" size={20} color="#505149" /> 
		      ), tabBarActiveTintColor: "#505149", tabBarInactiveTintColor: "#8f9c8b", tabBarPressColor: "#505149"
		      }}
/>
		</Tab.Navigator>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	imageBackgroundContainer: {
		flex: 2,
		height: '100%',
		width: '100%',
	},
	profileImage: {
		flex: 2,
		height: screenWidth * 0.20,
		width: screenWidth * 0.20,
		borderRadius: screenWidth * 0.20 / 2,
		alignSelf: 'center'
	}
});

export default HomeScreen;
