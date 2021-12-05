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
	ScrollView
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const CategoriesScreen = () => {

	const categories = [{
		image: require('../../assets/science.jpg'),
		name: 'Science'	
	}, {
		image: require('../../assets/popCulture.jpg'),
		name: 'Pop culture'
	}, {
		image: require('../../assets/sports.jpg'),
		name: 'Sports'
	}, {
		image: require('../../assets/game.jpg'),
		name: 'Game'
	}, {
		image: require('../../assets/health.jpg'),
		name: 'Health'
	}, {
		image: require('../../assets/history.jpg'),
		name: 'History'
	}, {
		image: require('../../assets/music.jpg'),
		name: 'Music'
	}, {
		image: require('../../assets/religion.jpg'),
		name: 'Religion' 
	}, {
		image: require('../../assets/design.jpg'),
		name: 'Design'
	}, {
		image: require('../../assets/law.jpg'),
		name: 'Law'
	}, {
		image: require('../../assets/animal.jpg'),
		name: 'Animal'
	}, {
		image: require('../../assets/business.jpg'),
		name: 'Business'
	}];

	return (
		<View style={ styles.container }>
			<ScrollView>
			{categories.map((category) => 
				<View style={{ alignItems: 'center' }}>
					<ImageBackground
						source={category.image}
						resizeMode="contain"
						style={ styles.imageCard }
					>
					<View style={ styles.containerTextCard }>
						<Text style={ styles.textCard }>{category.name}</Text>
					</View>
					</ImageBackground>
				</View>
			)}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	imageCard: {
		justifyContent: 'flex-end', 
		width: screenWidth * 0.8, 
		height: screenHeight * 0.4, 
		overflow: 'hidden', 
		borderRadius: 15 
	},
	containerTextCard: {
		backgroundColor: '#d1cf9c', 
		height: 50, 
		justifyContent: 'center', 
		borderRadius: 15
	},
	textCard: {
		color: 'black', 
		fontWeight: 'bold', 
		fontSize: 15, 
		marginLeft: 5
	}
});

export default CategoriesScreen;
