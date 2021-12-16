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


const EditProfileScreen = () => {
	//colors = ['#9f0000', '#cc7800', '#f1c800', '']; //red, orange, yellow, gray
	const [modalVisibleCountries, setModalVisibleCountries] = useState(false);
	const [country, setCountry] = useState('Country');
	const [modalVisibleAges, setModalVisibleAges] = useState(false);
	const [age, setAge] = useState('Age');
	const [modalVisibleGenders, setModalVisibleGenders] = useState('false');
	const [gender, setGender] = useState('Gender');

	const COUNTRIES = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Côte d’Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

	const AGES = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106];

	const GENDERS = ['Woman', 'Man', 'Other'];

	return (
		<View style={ styles.container }>
			<Image
				source={require('../../assets/backgroundImageProfile.jpg')}
				resizeMode="cover"
				style={ styles.image }
			/>
			<Image
				source={require('../../assets/profile.png')}
				style={ styles.profileImage }
				resizeMode="contain"
			/>
			<View style={{ flex: 5, marginHorizontal: '15%', marginTop: 10 }}>
				<TextInput style={{ borderBottomWidth: 1, flex: 1 }}
				placeholder="Your name"
				textAlignVertical="bottom"
				/>
				<TextInput style={{ borderWidth: 1, marginTop: 15, flex: 3 }}
				placeholder="Bio"
				multiline={true}
				textAlignVertical="top"
				/>
				<TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1 }} onPress={() => {setModalVisibleCountries(true)}}>
					<Text style={{ flex: 1, color: country == 'Country' ? '#9f9f9f' : 'black' }}>{country}</Text>
					<AntDesign name="caretdown" size={15} color="black"/>
				</TouchableOpacity>
				<View style={{flex: 1, flexDirection: 'row'}}>
					<TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1 }} onPress={() => {setModalVisibleAges(true)}}>
						<Text style={{ flex: 1, color: age == 'Age' ? '#9f9f9f' : 'black' }}>{age}</Text>
						<AntDesign name="caretdown" size={15} color="black"/>
					</TouchableOpacity>
					<TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1 }} onPress={() => {setModalVisibleGenders(true)}}>
						<Text style={{ flex: 1, color: gender == 'Gender' ? '#9f9f9f' : 'black' }}>{gender}</Text>
						<AntDesign name="caretdown" size={15} color="black"/>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={{flex: 1, backgroundColor: '#46a2ef', justifyContent: 'center', borderRadius: 10, marginBottom: 5, marginTop: 15}}> 
					<Text style={{alignSelf: 'center', color: 'white', fontSize: 15, fontWeight: 'bold'}}>Save</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1977f1', borderRadius: 10, marginVertical: 5}}> 
					<MaterialCommunityIcons name="facebook" size={30} color='white' style={{right: screenWidth * 0.25}}/>
					<Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Log in</Text>
				</TouchableOpacity>
			</View>	
			<Modal 
				visible={modalVisibleCountries}
				transparent={true}
				animationType='fade'
				onRequestClose={() => {setModalVisibleCountries(false)}}
			>
				<ScrollView style={{alignSelf: 'center', backgroundColor: 'white', elevation: 15, margin: 40}}>
				<Text style={{fontSize: 25, marginBottom: 5, color: '#9f9f9f'}} onPress={() => {setCountry('Country'); setModalVisibleCountries(false);}}>Select a country</Text>
				{COUNTRIES.map((country) =>
					<TouchableOpacity onPress={() => {setCountry(country); setModalVisibleCountries(false);}}>
						<Text style={{fontSize: 25, marginBottom: 5, color: 'black'}}>{country}</Text>
					</TouchableOpacity>
				)}
				</ScrollView>
			</Modal>
			<Modal 
				visible={modalVisibleAges}
				transparent={true}
				animationType='fade'
				onRequestClose={() => {setModalVisibleAges(false)}}
			>
				<ScrollView style={{alignSelf: 'center', backgroundColor: 'white', elevation: 15, margin: 40}}>
				<Text style={{fontSize: 25, marginBottom: 5, color: '#9f9f9f'}} onPress={() => {setAge('Age'); setModalVisibleAges(false);}}>Select an age</Text>
				{AGES.map((age) =>
					<TouchableOpacity onPress={() => {setAge(age); setModalVisibleAges(false);}}>
						<Text style={{fontSize: 25, marginBottom: 5, color: 'black'}}>{age}</Text>
					</TouchableOpacity>
				)}
				</ScrollView>
			</Modal>
			<Modal 
				visible={modalVisibleGenders}
				transparent={true}
				animationType='fade'
				onRequestClose={() => {setModalVisibleGenders(false)}}
			>
				<ScrollView style={{alignSelf: 'center', backgroundColor: 'white', elevation: 15, marginHorizontal: 40, marginVertical: screenHeight * 0.3}}>
				<Text style={{fontSize: 25, marginBottom: 5, color: '#9f9f9f'}} onPress={() => {setGender('Gender'); setModalVisibleGenders(false);}}>Select a gender</Text>
				{GENDERS.map((gender) =>
					<TouchableOpacity onPress={() => {setGender(gender); setModalVisibleGenders(false);}}>
						<Text style={{fontSize: 25, marginBottom: 5, color: 'black'}}>{gender}</Text>
					</TouchableOpacity>
				)}
				</ScrollView>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 2,
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

export default EditProfileScreen;
