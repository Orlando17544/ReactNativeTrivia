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
	ScrollView,
	Modal,
	Dimensions
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

const TriviaScreen = ({ route, navigation }) => {
	const [userAnswer, setUserAnswer] = useState('');

	const { category } = route.params;

	let question = 'What year was the very first model of the iPhone released?';

	let answers = ['2007', '1990', '1985', '2005'];
	let correctAnswer = answers[0];

	shuffleArray(answers);


	return (
		<View style={ styles.container }>
			<Image
				source={require('../../assets/game.jpg')}
				resizeMode="cover"
				style={ styles.image }
			/>
			<View style={{flex: 1, justifyContent: 'center', marginHorizontal: 15}}>
			<Text style={{fontSize: 20, fontWeight: 'bold'}}>{question}</Text>
			</View>
			<View style={{flex: 3, marginHorizontal: 15}}>
				{answers.map((answer) =>
					<TouchableOpacity key={answer} style={{flex: 1, backgroundColor: answer == correctAnswer ? '#66ba0c' : answer == userAnswer && userAnswer != correctAnswer ? '#fd6e64' : '#c2bfb0', marginBottom: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}} onPress={() => {setUserAnswer(answer);}}>
						<Text style={{fontSize: 17, fontWeight: 'bold'}}>{answer}</Text>
					</TouchableOpacity>
				)}
			{userAnswer != '' ? (
				<>
				<View style={{backgroundColor: '#808080', height: 1, width: '90%', alignSelf: 'center', marginBottom: 10}}/>
				<TouchableOpacity style={{flex:1, backgroundColor: '#3e4152', marginHorizontal: 15, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 5}} onPress={() => {setUserAnswer('');}}>
				<Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Continue</Text>
				</TouchableOpacity>
				</>
			) : null}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		height: '100%',
		width: '100%'
	},
	profileImage: {
		height: '30%',
		width: '30%',
		position: 'absolute',
		top: 80,
		alignSelf: 'center'
	}
});

export default TriviaScreen;
