/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ActivityIndicator
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen.js';
import NameScreen from './src/screens/NameScreen.js';
import MainScreen from './src/screens/MainScreen.js';
import EditProfileScreen from './src/screens/EditProfileScreen.js';
import TriviaScreen from './src/screens/TriviaScreen.js';
import AchievementScreen from './src/screens/AchievementScreen.js';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

let value;

const App = () => {
	const [loading, setLoading] = useState(true);
	const [initialScreen, setInitialScreen] = useState(null);

	useEffect(() => {
		getInitialScreen();
	}, [])

	const getInitialScreen = async () => {

		let value = await AsyncStorage.getItem('initialScreen');

		if (value == 'Main') {
			setInitialScreen('Main');
		} else {
			setInitialScreen('Welcome');
		}
		setLoading(false);
	}

	function deleteInitialScreenInfo() {
		try {
			AsyncStorage.removeItem('initialScreen');
			let jsonValue = AsyncStorage.getItem('initialScreen');
			console.log(jsonValue);
		} catch (e) {
			console.log(e);
		}
	}

	if (loading) {
		return <ActivityIndicator/>
	} else {
		return <NavigationContainer>
		<Stack.Navigator initialRouteName={initialScreen}
		screenOptions={{
			headerShown: false
		}}
		>
		<Stack.Screen name="Welcome" component={WelcomeScreen} />
		<Stack.Screen name="Main" component={MainScreen} />
		<Stack.Screen name="Achievement" component={AchievementScreen} />
		<Stack.Screen name="EditProfile" component={EditProfileScreen} />
		<Stack.Screen name="Trivia" component={TriviaScreen} />
		<Stack.Screen name="Name" component={NameScreen} />
		</Stack.Navigator>
		</NavigationContainer>
	}

};

export default App;
