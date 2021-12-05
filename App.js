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
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen.js';
import NameScreen from './src/screens/NameScreen.js';
import MainScreen from './src/screens/MainScreen.js';
import ProfileScreen from './src/screens/ProfileScreen.js';
import CategoriesScreen from './src/screens/CategoriesScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {

	return (
		<NavigationContainer>
		<Stack.Navigator initialRouteName="MainScreen" 
		screenOptions={{
			headerShown: false
		}}
		>
		<Stack.Screen name="Main" component={MainScreen} />
		<Stack.Screen name="Profile" component={ProfileScreen} />
		<Stack.Screen name="Welcome" component={WelcomeScreen} />
		<Stack.Screen name="Name" component={NameScreen} />
		</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
