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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import HomeScreen from './HomeScreen.js';
import ProfileScreen from './ProfileScreen.js';
import HistoryScreen from './HistoryScreen.js';

const MainScreen = () => {

	return (
		<Tab.Navigator>
		      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: () => (
			      <FontAwesome name="user" size={15} color="black" /> 
		      )
		      }}
/>
		      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: () => (
			      <Ionicons name="home" size={15} color="black" /> 
		      )
		      }}
		      />
		      <Tab.Screen name="History" component={HistoryScreen} options={{ tabBarIcon: () => (
			      <FontAwesome5 name="clock" size={15} color="black" /> 
		      )
		      }}
/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});

export default MainScreen;
