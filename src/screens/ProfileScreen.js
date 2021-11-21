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

const ProfileScreen = () => {

	return (
		<View style={ styles.container }>
			<Text>Profile</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});

export default ProfileScreen;
