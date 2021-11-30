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

const HistoryScreen = () => {

	return (
		<View style={ styles.container }>
			<Text>History</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});

export default HistoryScreen;
