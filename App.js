/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
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
import EditProfileScreen from './src/screens/EditProfileScreen.js';
import TriviaScreen from './src/screens/TriviaScreen.js';
import AchievementScreen from './src/screens/AchievementScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {

	return (
		<NavigationContainer>
		<Stack.Navigator initialRouteName="Main" 
		screenOptions={{
			headerShown: false
		}}
		>
		<Stack.Screen name="Main" component={MainScreen} />
		<Stack.Screen name="Achievement" component={AchievementScreen} />
		<Stack.Screen name="EditProfile" component={EditProfileScreen} />
		<Stack.Screen name="Welcome" component={WelcomeScreen} />
		<Stack.Screen name="Trivia" component={TriviaScreen} />
		<Stack.Screen name="Name" component={NameScreen} />
		</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
