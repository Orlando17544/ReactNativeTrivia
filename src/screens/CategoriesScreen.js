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

	return (
		<View style={ styles.container }>
			<ScrollView>
			<View style={{ alignItems: 'center' }}>
				<ImageBackground
					source={require('../../assets/science.jpg')}
					resizeMode="contain"
					style={ styles.imageCard }
				>
				<View style={ styles.containerTextCard }>
					<Text style={ styles.textCard }>Science</Text>
				</View>
				</ImageBackground>
			</View>
			<View style={{ alignItems: 'center', marginTop: 5 }}>
				<ImageBackground
					source={require('../../assets/popCulture.jpg')}
					resizeMode="contain"
					style={ styles.imageCard }
				>
				<View style={ styles.containerTextCard }>
					<Text style={ styles.textCard }>Pop culture</Text>
				</View>
				</ImageBackground>
			</View>
			<View style={{ alignItems: 'center', marginTop: 5 }}>
				<ImageBackground
					source={require('../../assets/sports.jpg')}
					resizeMode="contain"
					style={ styles.imageCard }
				>
				<View style={ styles.containerTextCard }>
					<Text style={ styles.textCard }>Sports</Text>
				</View>
				</ImageBackground>
			</View>
			<View style={{ alignItems: 'center', marginTop: 5 }}>
				<ImageBackground
					source={require('../../assets/game.jpg')}
					resizeMode="contain"
					style={ styles.imageCard }
				>
				<View style={ styles.containerTextCard }>
					<Text style={ styles.textCard }>Game</Text>
				</View>
				</ImageBackground>
			</View>
			<View style={{ alignItems: 'center', marginTop: 5 }}>
				<ImageBackground
					source={require('../../assets/health.jpg')}
					resizeMode="contain"
					style={ styles.imageCard }
				>
				<View style={ styles.containerTextCard }>
					<Text style={ styles.textCard }>Health</Text>
				</View>
				</ImageBackground>
			</View>
			<View style={{ alignItems: 'center', marginTop: 5 }}>
				<ImageBackground
					source={require('../../assets/history.jpg')}
					resizeMode="contain"
					style={ styles.imageCard }
				>
				<View style={ styles.containerTextCard }>
					<Text style={ styles.textCard }>History</Text>
				</View>
				</ImageBackground>
			</View>
			<View style={{ alignItems: 'center', marginTop: 5 }}>
				<ImageBackground
					source={require('../../assets/music.jpg')}
					resizeMode="contain"
					style={ styles.imageCard }
				>
				<View style={ styles.containerTextCard }>
					<Text style={ styles.textCard }>Music</Text>
				</View>
				</ImageBackground>
			</View>
			<View style={{ alignItems: 'center', marginTop: 5 }}>
				<ImageBackground
					source={require('../../assets/religion.jpg')}
					resizeMode="contain"
					style={ styles.imageCard }
				>
				<View style={ styles.containerTextCard }>
					<Text style={ styles.textCard }>Religion</Text>
				</View>
				</ImageBackground>
			</View>
			<View style={{ alignItems: 'center', marginTop: 5 }}>
				<ImageBackground
					source={require('../../assets/design.jpg')}
					resizeMode="contain"
					style={ styles.imageCard }
				>
				<View style={ styles.containerTextCard }>
					<Text style={ styles.textCard }>Design</Text>
				</View>
				</ImageBackground>
			</View>
			<View style={{ alignItems: 'center', marginTop: 5 }}>
				<ImageBackground
					source={require('../../assets/law.jpg')}
					resizeMode="contain"
					style={ styles.imageCard }
				>
				<View style={ styles.containerTextCard }>
					<Text style={ styles.textCard }>Law</Text>
				</View>
				</ImageBackground>
			</View>
			<View style={{ alignItems: 'center', marginTop: 5 }}>
				<ImageBackground
					source={require('../../assets/animal.jpg')}
					resizeMode="contain"
					style={ styles.imageCard }
				>
				<View style={ styles.containerTextCard }>
					<Text style={ styles.textCard }>Animal</Text>
				</View>
				</ImageBackground>
			</View>
			<View style={{ alignItems: 'center', marginTop: 5 }}>
				<ImageBackground
					source={require('../../assets/business.jpg')}
					resizeMode="contain"
					style={ styles.imageCard }
				>
				<View style={ styles.containerTextCard }>
					<Text style={ styles.textCard }>Business</Text>
				</View>
				</ImageBackground>
			</View>
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
