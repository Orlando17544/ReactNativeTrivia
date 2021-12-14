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
	ScrollView
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
	//colors = ['#9f0000', '#cc7800', '#f1c800', '']; //red, orange, yellow, gray

	const achievements = [{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Science'
	}, 
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Science'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Science'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Pop culture'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Pop culture'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Pop culture'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Sports'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Sports'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Sports'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Game'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Game'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Game'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Health'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Health'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Health'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'History'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'History'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'History'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Music'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Music'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Music'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Religion'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Religion'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Religion'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Design'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Design'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Design'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Law'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Law'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Law'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Animal'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Animal'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Animal'
		},
	{
		color: '#d1d1d1',
		level: 'Beginner',
		category: 'Business'
		},
	{
		color: '#d1d1d1',
		level: 'Expert',
		category: 'Business'
		},
	{
		color: '#d1d1d1',
		level: 'Legendary',
		category: 'Business'
		},
	];

	return (
		<View style={ styles.container }>
			<Image
				source={require('../../assets/backgroundImageProfile.jpg')}
				resizeMode="cover"
				style={ styles.image }
			/>
			<View style={{ flex: 2, backgroundColor: '#e6e9e0', alignSelf: 'stretch' }}>
				<Text style={{ textAlign: 'center', color: 'black', fontSize: 20, fontWeight: 'bold' }}>Player</Text>
			</View>
			<View style={{ flex: 7, backgroundColor: '#e6e9e0', alignSelf: 'stretch' }}>	
				<FontAwesome5 name="medal" size={30} color="#5b5b53" style={{ alignSelf: 'center' }}/>
				<Text style={{ textAlign: 'center' }}>Logros</Text>
				<View style={{ backgroundColor: '#5b5b53', height: 5, width: 70, alignSelf: 'center' }}></View>
			<ScrollView>
				{achievements.map((achievement) => 
					<>
					<View style={{flexDirection: 'row', padding: 15, marginLeft: '25%'}}>
						<FontAwesome name="star" size={30} color={achievement.color}/>	
						<View style={{ paddingHorizontal: 20 }}>
							<Text>{achievement.level} level</Text>
							<Text>{achievement.category} category</Text>
						</View>
					</View>
					<View style={{backgroundColor: '#808080', height: 1, width: '90%', alignSelf: 'center'}}/>
					</>
				)}
			</ScrollView>
			</View>
			<Image
				source={require('../../assets/profile.png')}
				style={ styles.profileImage }
				resizeMode="contain"
			/>
			<TouchableOpacity style={{ position: 'absolute', top: 160, right: 45, backgroundColor: '#8d9b8a', borderRadius: 45, padding: 10 }}>
				<MaterialIcons name="edit" size={30} color="white"/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	image: {
		flex: 4,
		height: '100%',
		width: '100%'
	},
	profileImage: {
		height: '30%',
		width: '30%',
		position: 'absolute',
		top: 100,
		left: 25
	}
});

export default ProfileScreen;
