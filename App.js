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

const Stack = createNativeStackNavigator();

const App = () => {

	return (
		<NavigationContainer>
		<Stack.Navigator initialRouteName="Welcome">
		<Stack.Screen name="Welcome" component={WelcomeScreen} />
		</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
