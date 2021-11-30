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
	TouchableOpacity
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

SplashScreen.hide();

/*

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

*/

const WelcomeScreen = () => {
	const [colorMan, setColorMan] = useState('white');
	const [colorWoman, setColorWoman] = useState('white');
	const [colorOther, setColorOther] = useState('white');
	const [colorTechnologyScience, setColorTechnologyScience] = useState('white');
	const [colorPopCulture, setColorPopCulture] = useState('white');
	const [colorCarsSports, setColorCarsSports] = useState('white');
	const [colorGameRiddles, setColorGameRiddles] = useState('white');
	const [colorHealthCooking, setColorHealthCooking] = useState('white');
	const [colorGeographyHistory, setColorGeographyHistory] = useState('white');
	const [colorMusicLiterature, setColorMusicLiterature] = useState('white');
	const [colorReligionCulture, setColorReligionCulture] = useState('white');
	const [colorFashionDesign, setColorFashionDesign] = useState('white');
	const [colorLawPolitics, setColorLawPolitics] = useState('white');
	const [colorAnimal, setColorAnimal] = useState('white');
	const [colorBusiness, setColorBusiness] = useState('white');
	const [colorGender, setColorGender] = useState('black');
	const [colorInterest, setColorInterest] = useState('black');

	function activateOption(option) {
		if (option == 'man') {
			if (colorMan == 'white') {
				setColorMan('#ffe264');
				setColorWoman('white');
				setColorOther('white');
			} else {
				setColorMan('white');
			}
		} else if (option == 'woman') {
			if (colorWoman == 'white') {
				setColorWoman('#ffe264');
				setColorMan('white');
				setColorOther('white');
			} else {
				setColorWoman('white');
			}
		} else if (option == 'other') {
			if (colorOther == 'white') {
				setColorOther('#ffe264');
				setColorMan('white');
				setColorWoman('white');
			} else {
				setColorOther('white');
			}
		} else if (option == 'technologyScience') {
			if (colorTechnologyScience == 'white') {
				setColorTechnologyScience('#ffe264');
			} else {
				setColorTechnologyScience('white');
			}
		} else if (option == 'popCulture') {
			if (colorPopCulture == 'white') {
				setColorPopCulture('#ffe264');
			} else {
				setColorPopCulture('white');
			}
		} else if (option == 'carsSports') {
			if (colorCarsSports == 'white') {
				setColorCarsSports('#ffe264');
			} else {
				setColorCarsSports('white');
			}
		} else if (option == 'gameRiddles') {
			if (colorGameRiddles == 'white') {
				setColorGameRiddles('#ffe264');
			} else {
				setColorGameRiddles('white');
			}
		} else if (option == 'healthCooking') {
			if (colorHealthCooking == 'white') {
				setColorHealthCooking('#ffe264');
			} else {
				setColorHealthCooking('white');
			}
		} else if (option == 'geographyHistory') {
			if (colorGeographyHistory == 'white') {
				setColorGeographyHistory('#ffe264');
			} else {
				setColorGeographyHistory('white');
			}
		} else if (option == 'musicLiterature') {
			if (colorMusicLiterature == 'white') {
				setColorMusicLiterature('#ffe264');
			} else {
				setColorMusicLiterature('white');
			}
		} else if (option == 'religionCulture') {
			if (colorReligionCulture== 'white') {
				setColorReligionCulture('#ffe264');
			} else {
				setColorReligionCulture('white');
			}
		} else if (option == 'fashionDesign') {
			if (colorFashionDesign == 'white') {
				setColorFashionDesign('#ffe264');
			} else {
				setColorFashionDesign('white');
			}
		} else if (option == 'lawPolitics') {
			if (colorLawPolitics == 'white') { 
				setColorLawPolitics('#ffe264');
			} else {
				setColorLawPolitics('white');
			}
		} else if (option == 'animal') {
			if (colorAnimal == 'white') {
				setColorAnimal('#ffe264');
			} else {
				setColorAnimal('white');
			}
		} else if (option == 'business') {
			if (colorBusiness == 'white') {
				setColorBusiness('#ffe264');
			} else {
				setColorBusiness('white');
			}
		}
}

	function checkAnswers() {
		if (colorMan == 'white' && colorWoman == 'white' && colorOther == 'white') {
			setColorGender('#ca0f02');
		} else if (colorMan == '#ffe264' || colorWoman == '#ffe264' || colorOther == '#ffe264') {
			setColorGender('black');
		}

		let numberInterests = 0;
		if (colorTechnologyScience == '#ffe264') {
			numberInterests = numberInterests + 1;
		}

		if (colorPopCulture == '#ffe264') {
			numberInterests = numberInterests + 1;
		}

		if (colorCarsSports == '#ffe264') {
			numberInterests = numberInterests + 1;
		}
		
		if (colorGameRiddles == '#ffe264') {
			numberInterests = numberInterests + 1;
		}

		if (colorHealthCooking == '#ffe264') {
			numberInterests = numberInterests + 1;
		}

		if (colorGeographyHistory == '#ffe264') {
			numberInterests = numberInterests + 1;
		}

		if (colorMusicLiterature == '#ffe264') {
			numberInterests = numberInterests + 1;
		}

		if (colorReligionCulture == '#ffe264') {
			numberInterests = numberInterests + 1;
		}

		if (colorFashionDesign == '#ffe264') {
			numberInterests = numberInterests + 1;
		}

		if (colorLawPolitics == '#ffe264') {
			numberInterests = numberInterests + 1;
		}

		if (colorAnimal == '#ffe264') {
			numberInterests = numberInterests + 1;
		}

		if (colorBusiness == '#ffe264') {
			numberInterests = numberInterests + 1;
		}

		if (numberInterests < 3) {
			setColorInterest('#ca0f02');
		} else {
			setColorInterest('black');
		}
	}

	return (
		<View style={ styles.container }>
		<ImageBackground
		        source={require('../../assets/backgroundImage.jpg')}
			style={ styles.imageBackgroundContainer }
			resizeMode="cover"
		>
		<View style={{ alignItems: 'center' }}>
			<Text style={[ styles.text, {textAlign: 'center'} ]}>1 / 2</Text>
			<Text style={[ styles.text, styles.textTitle, {textAlign: 'center'} ]}>We would like to know you{"\n"}better!</Text>
		</View>
		<View style={{ marginHorizontal: '5%' }}>
		<View>
			<Text style={[ styles.text, {color: colorGender} ]}>Your gender identity: </Text>
			<View style={ styles.optionsButtonsContainer }>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorMan} ]}
					onPress={() => {activateOption('man')}}
				>
					<Ionicons name="male" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Man</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorWoman, marginLeft: '3%'} ]}
					onPress={() => {activateOption('woman')}}
				>
					<Ionicons name="female" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Woman</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorOther, marginLeft: '3%'} ]}
					onPress={() => {activateOption('other')}}
				>
					<Ionicons name="male-female" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Other</Text>
				</TouchableOpacity>
			</View>
		</View>
		<View style={{ marginTop: '5%' }}>
			<Text style={[ styles.text, {color: colorInterest} ]}>Your interests (at least 3): </Text>
			<View style={ styles.optionsButtonsContainer }>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorTechnologyScience} ]}
					onPress={() => {activateOption('technologyScience')}}
				>
					<MaterialIcons name="science" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Science</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorPopCulture, marginLeft: '3%'} ]}
					onPress={() => {activateOption('popCulture')}}
				>
					<FontAwesome name="hand-rock-o" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Pop culture</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorCarsSports, marginLeft: '3%'} ]}
					onPress={() => {activateOption('carsSports')}}
				>
					<MaterialIcons name="sports-soccer" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Sports</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorGameRiddles, marginLeft: '3%'} ]}
					onPress={() => {activateOption('gameRiddles')}}
				>
					<MaterialIcons name="videogame-asset" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Game</Text>
				</TouchableOpacity>
			</View>
			<View style={ styles.optionsButtonsContainer }>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorHealthCooking} ]}
					onPress={() => {activateOption('healthCooking')}}
				>
					<MaterialIcons name="healing" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Health</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorGeographyHistory, marginLeft: '3%'} ]}
					onPress={() => {activateOption('geographyHistory')}}
				>
					<Entypo name="back-in-time" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>History</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorMusicLiterature, marginLeft: '3%'} ]}
					onPress={() => {activateOption('musicLiterature')}}
				>
					<Ionicons name="musical-notes" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Music</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorReligionCulture, marginLeft: '3%'} ]}
					onPress={() => {activateOption('religionCulture')}}
				>
					<FontAwesome5 name="cross" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Religion</Text>
				</TouchableOpacity>
			</View>
			<View style={ styles.optionsButtonsContainer }>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorFashionDesign} ]}
					onPress={() => {activateOption('fashionDesign')}}
				>
					<MaterialIcons name="design-services" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Design</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorLawPolitics, marginLeft: '3%'} ]}
					onPress={() => {activateOption('lawPolitics')}}
				>
					<Octicons name="law" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Law</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorAnimal, marginLeft: '3%'} ]}
					onPress={() => {activateOption('animal')}}
				>
					<MaterialCommunityIcons name="elephant" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Animal</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[ styles.optionsButtons, {backgroundColor: colorBusiness, marginLeft: '3%'} ]}
					onPress={() => {activateOption('business')}}
				>
					<MaterialIcons name="business" size={20} color="black" />
					<Text style={ styles.textOptionsButtons }>Business</Text>
				</TouchableOpacity>
			</View>
		</View>
		</View>
		<View style={{ alignItems: 'center' }}>
			<TouchableOpacity
				style={{ backgroundColor: '#65b90b', paddingHorizontal: '30%' , paddingVertical: '3%', borderRadius: 5 }}
				onPress={() => {checkAnswers()}}>
				<Text style={{ fontSize: 20, color: 'white' }}>CONTINUE</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={[ styles.text, {marginTop: '5%'} ]}>Skip</Text>
			</TouchableOpacity>
		</View>
		</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	imageBackgroundContainer: {
		flex: 1, 
		justifyContent: 'space-around', 
		width: '100%', 
		height: '100%' 
	},
	text: {
		fontSize: 15, 
		color: 'black',
		fontWeight: 'bold'
	},
	textTitle: {
		fontWeight: 'bold',
		fontSize: 25
	},
	optionsButtonsContainer: {
		flexDirection: 'row',
		marginTop: '2%'
	},
	optionsButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 5,
		elevation: 10,
		padding: '3%'
	},
	textOptionsButtons: {
		fontSize: 12,
		color: 'black'
	}
});

export default WelcomeScreen;
