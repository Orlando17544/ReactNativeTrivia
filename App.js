/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen'

SplashScreen.hide();

var Sound = require('react-native-sound');

Sound.setCategory('Playback');

var ocarina = new Sound('ocarina.mp3', Sound.MAIN_BUNDLE, (error) => {
	if (error) {
		console.log('failed to load the sound', error);
		return;
	} else {
	// if loaded successfully
	console.log('duration in seconds: ' + ocarina.getDuration() + 'number of channels: ' + ocarina.getNumberOfChannels());

	ocarina.play();
	}

});

ocarina.setVolume(50);

// To loop the song
ocarina.setNumberOfLoops(100);

const App = () => {

	return (
		<View>
		<Text>First commit</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
	},
});

export default App;
