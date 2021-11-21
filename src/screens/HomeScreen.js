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

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import CategoriesScreen from './CategoriesScreen.js';
import FriendsScreen from './FriendsScreen.js';

const HomeScreen = () => {

	return (
		<View style={ styles.container }>
		<ImageBackground
		        source={require('../../assets/mainImage.jpg')}
			style={ styles.imageBackgroundContainer }
			resizeMode="cover"
		>
		<Image
			source={require('../../assets/profile.png')}
			style={ styles.profileImage }
			resizeMode="contain"
		/>
		</ImageBackground>
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<TouchableOpacity style={{ backgroundColor: '#19ba50', borderRadius: 5, paddingHorizontal: '40%', paddingVertical: '3%' }}>
			<Text style={{ fontSize: 18, color: 'white' }}>Play</Text>
		</TouchableOpacity>
		</View>
		<Tab.Navigator style={{ flex: 7 }} >
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
		width: '100%'
	},
	profileImage: {
		height: '100%',
		width: '100%'
	}
});

export default HomeScreen;
