/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	Image,
	ScrollView,
	FlatList,
	ImageBackground,
	Dimensions
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const HistoryScreen = ({ navigation }) => {
	const [historyItems, setHistoryItems] = useState({});

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getHistoryItems();
		});

		return unsubscribe;
	}, [navigation])

	const screenWidth = Dimensions.get('window').width;

	const getHistoryItems = async () => {
		try {
			let jsonValue = await AsyncStorage.getItem('historyItems');
			jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null;
			if(jsonValue != null) {
				setHistoryItems(jsonValue);
			}
			console.log(jsonValue);
		} catch(e) {
			console.log(e);
		}
	}

	const QUESTIONS_ANSWERS = [{
		question: 'What year was the very first model of the iPhone released?',
		answer: 'Incorrect',
		image: require('../../assets/science.jpg')
	}, {
		question: 'What’s the shortcut for the “copy” function on most computers?',
		answer: 'Incorrect',
		image: require('../../assets/popCulture.jpg')
	}, {
		question: 'What is the name of the man who launched eBay back in 1995?',
		answer: 'Correct',
		image: require('../../assets/sports.jpg')
	}, {
		question: 'Which email service is owned by Microsoft?',
		answer: 'Incorrect',
		image: require('../../assets/game.jpg')
	}, {
		question: 'Google Chrome, Safari, Firefox, and Explorer are different types of what?',
		answer: 'Correct',
		image: require('../../assets/health.jpg')
	}, {
		question: 'Who discovered penicillin?',
		answer: 'Incorrect',
		image: require('../../assets/history.jpg')
	}, {
		question: 'Who was the first woman to win a Nobel Prize (in 1903)?',
		answer: 'Correct',
		image: require('../../assets/music.jpg')
	}, {
		question: 'What part of the atom has no electric charge?',
		answer: 'Incorrect',
		image: require('../../assets/religion.jpg')
	}, {
		question: 'What is meteorology the study of?',
		answer: 'Correct',
		image: require('../../assets/design.jpg')
	}, {
		question: 'What animals are pearls found in?',
		answer: 'Incorrect',
		image: require('../../assets/law.jpg')
	}, {
		question: 'Which planet has the most gravity?',
		answer: 'Incorrect',
		image: require('../../assets/animal.jpg')
	}, {
		question: 'What does DC stand for?',
		answer: 'Correct',
		image: require('../../assets/business.jpg')
	}, {
		question: 'What is the name of the song that Queen Elsa sings as she builds her ice castle in the movie Frozen?',
		answer: 'Correct',
		image: require('../../assets/popCulture.jpg')
	}, {
		question: 'How many films did Sean Connery play James Bond in?',
		answer: 'Incorrect',
		image: require('../../assets/law.jpg')
	}]

	return (
		<View style={ styles.container }>
			<ImageBackground
				source={require('../../assets/historyBackground.png')}
				style={{ height: '50%', width: '100%', flex: 1 }}
				resizeMode="cover"
			>
			{<ScrollView style={{ marginTop: '20%', flex: 1 }}>
				{Object.keys(historyItems).map((question) =>
					<View key={question}>
					<View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 5 }}>
					<Image
						source={historyItems[question][1]}
						style={{ height: 100, width: 125 }}
						resizeMode="contain"
					/>
					<View style={{ justifyContent: 'space-between' }}>
						<View style={{flexDirection: 'row', width: screenWidth * 0.6 }}>
						<Text style={{ flex: 1, fontWeight: 'bold', fontSize: 15, flexWrap: 'wrap', color: 'black' }}>{question}</Text>
						</View>
						<Text style={{ backgroundColor: historyItems[question][0] == 'Correct' ? '#64bb0a' : '#e65b46' , fontWeight: 'bold', padding: 2, alignSelf: 'flex-start', left: screenWidth * 0.5, color: 'black' }}>{historyItems[question][0]}</Text>
					</View>
					</View>
					<View style={{ backgroundColor: '#808080', height: 1, width: '90%', alignSelf: 'center', marginBottom: 5 }}/>
					</View>
				)}
			</ScrollView>
			}
			</ImageBackground>
			<Text style={{ textAlign: 'center', fontSize: 20, position: 'absolute', color: 'black', alignSelf: 'center', top: 5, fontWeight: 'bold' }}>History</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#9d9d9d',
	},
});

export default HistoryScreen;
