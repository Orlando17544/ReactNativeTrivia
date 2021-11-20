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

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import HomeScreen from './HomeScreen.js';

const MainScreen = () => {
	const [colorInterest, setColorInterest] = useState('black');

	function activateOption(option) {
		console.log('hola');
	}	

	return (
		<Tab.Navigator>
		      <Tab.Screen name="Home" component={HomeScreen} />
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});

export default MainScreen;
