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
	Image,
	Dimensions,
	Share
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const FriendsScreen = () => {

	const onShare = async () => {
		    try {
			  const result = await Share.share({
					  message: 'Hi! I want to share with you an awesome app',
			  });
			  if (result.action === Share.sharedAction) {
				if (result.activityType) {
				// shared with activity type of result.activityType
				} else {
				// shared
				}
			  } else if (result.action === Share.dismissedAction) {
				// dismissed
			  }
		    } catch (error) {
		    	  alert(error.message);
		    }
	}
		    

	return (
		<TouchableOpacity style={ styles.container } onPress={() => {onShare();}}>
			<View style={{ justifyContent: 'center', marginLeft: 10 }}>
				<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Share with friends</Text>
				<Text style={{ fontSize: 15 }}>Share this game with your{'\n'}friends and receive a bonus for{'\n'}each participant</Text>
			</View>
			<Image
				source={require('../../assets/share.jpg')}
				style={{ height: screenHeight * 0.2, width: screenWidth * 0.3 }}
				resizeMode="contain"
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#f78270',
		borderRadius: 15,
		marginHorizontal: 10,
		marginTop: 10
	},
});

export default FriendsScreen;
