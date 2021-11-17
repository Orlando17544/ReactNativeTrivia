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

const App = () => {
	SplashScreen.hide();

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
