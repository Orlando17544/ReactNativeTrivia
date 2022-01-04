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

import AsyncStorage from '@react-native-async-storage/async-storage';

const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

let items = [];

let indexItem = 0;

let correctAnswer = ''

let categoryImage;

let numberItems;

let categories;

let legendaryAchievementLeft;
let expertAchievementLeft;
let beginnerAchievementLeft;

let jsonValue;

const TriviaScreen = ({ route, navigation }) => {
	const DATA = {
		Science: [
			{question: 'What year was the very first model of the iPhone released?', 
				answers: ['2007', '2004', '1990', '2000']},
			{question: 'What’s the shortcut for the “copy” function on most computers?', 
				answers: ['ctrl c', 'ctrl d', 'shift f', 'mayus c']},
			{question: 'What is often seen as the smallest unit of memory?', 
				answers: ['kilobyte', 'byte', 'bit', 'terabyte']},
			{question: 'Is Java a type of OS?', 
				answers: ['No', 'Yes', 'Depends', 'I don"t know']},
			{question: 'Who is often called the father of the computer?', 
				answers: ['Charles Babbage', 'Steve Jobs', 'Linux Torvalds', 'Bill Gates']},
			{question: 'What does “HTTP” stand for?', 
				answers: ['HyperText Transfer Protocol', 'Hyper Text Transboard Plain', 'High Transfer Transboard Plus', 'Huge Transboard Trans Plain']},
			{question: 'What is the name of the man who launched eBay back in 1995?', 
				answers: ['Pierre Omidyar', 'Terry Colby', 'Larry Page', 'Sergey Brin']},
			{question: 'Which email service is owned by Microsoft?', 
				answers: ['Hotmail', 'Gmail', 'Outlook', 'MSN']},
			{question: 'Google Chrome, Safari, Firefox, and Explorer are different types of what?', 
				answers: ['Web browsers', 'Applications', 'Social networks', 'Scripts']},
			{question: 'What was Twitter’s original name?', 
				answers: ['twttr', 'bird', 'blue bird', 'awesome chat']},
			{question: 'Who discovered penicillin?', 
				answers: ['Alexander Fleming', 'Dmitri Mendelev', 'Antoine Lavoisier', 'Alfred Nobel']},
			{question: 'Who was the first woman to win a Nobel Prize (in 1903)?', 
				answers: ['Marie Curie', 'Irene Joliot', 'Dorothy Hodgkin', 'Stephanie Kwolek']},
			{question: 'What part of the atom has no electric charge?', 
				answers: ['Neutron', 'Electron', 'Positron', 'Quark']},
			{question: 'What is the symbol for potassium?', 
				answers: ['K', 'Ca', 'H', 'He']},
			{question: 'What is meteorology the study of?', 
				answers: ['The weather', 'Planets', 'Asteroids', 'Stars']},
			{question: 'Which planet is the hottest in the solar system?', 
				answers: ['Venus', 'Jupyter', 'Mercury', 'Mars']},
			{question: 'Which natural disaster is measured with a Richter scale?', 
				answers: ['Earthquakes', 'Storms', 'Tsumani', 'Hurricane']},
			{question: 'What animals are pearls found in?', 
				answers: ['Oysters', 'Fishes', 'Sharks', 'Octopus']},
			{question: 'Which planet has the most gravity?', 
				answers: ['Jupiter', 'Pluton', 'Mars', 'Mercury']},
			{question: 'How many molecules of oxygen does ozone have?', 
				answers: ['Three', 'Five', 'Six', 'Ten']},
		],
		Pop_culture: [
			{question: 'What is Hawkeye’s real name?', 
				answers: ['Clint Barton', 'Clint Eastwood', 'Elton John', 'Steven Tylor']},
			{question: 'Which Avenger is the only one who could calm the Hulk down?', 
				answers: ['Black Widow', 'Captain America', 'Cyclops', 'Wonder woman']},
			{question: 'Night Crawler, member of the X-Men, has what kind of powers?', 
				answers: ['Can teleport', 'Levitation', 'Super strength', 'Hyper inteligence']},
			{question: 'Which infinity stone was located on Vormir?', 
				answers: ['Soul Stone', 'Gold stone', 'Silver stone', 'Bronze stone']},
			{question: 'Which original Avenger was not in the first few movies?', 
				answers: ['The Wasp', 'Hulk', 'Captain America', 'Wonder woman']},
			{question: 'What was Superman’s birth name?', 
				answers: ['Kal-El', 'Super hero', 'Kripto man', 'Man of men']},
			{question: 'What is the name of Batman’s butler?', 
				answers: ['Alfred', 'Carl', 'Elton', 'Charls']},
			{question: 'Aquaman is from which city under the sea?', 
				answers: ['Atlantis', 'Macondo', 'Castle rock', 'Arkham']},
			{question: 'Who is Green Lantern’s nemesis?', 
				answers: ['Sinestro', 'Spiderman', 'Venom', 'Carnage']},
			{question: 'What does DC stand for?', 
				answers: ['Detective Comics', 'Die Comedy', 'Deceptive Cars', 'Deceptive Comedy']}
		],
		Sports: [
			{question: 'Who is often credited with creating the world’s first car?', 
				answers: ['Karl Benz', 'Ford', 'Porsche', 'Ferrari']},
			{question: 'Which animal can be seen on the Porsche logo?', 
				answers: ['Horse', 'Eagle', 'Lion', 'Snake']},
			{question: 'Which companies are part of the Big Three?', 
				answers: ['General Motors, Fiat Chrysler Automobiles, and Ford Motor Company', 'Nissan, Volkswagen, Toyota', 'Toyota, Honda, Mazda', 'KIA, Toyota, Volkswagen']},
			{question: 'Which company owns Bugatti, Lamborghini. Audi, Porsche, and Ducati?', 
				answers: ['Volkswagen', 'Mazda', 'Toyota', 'KIA']},
			{question: 'Which auto brand was the first to offer seat belts?', 
				answers: ['Nash Motors', 'Mazda', 'Toyota', 'Volkswagen']},
			{question: 'What does BMW stand for (in English)?', 
				answers: ['Bavarian Motor Works', 'Best Motor Work', 'Best Machine Works', 'Best Motor Wave']},
			{question: 'What or who is the Ford Mustang named after?', 
				answers: ['A fighter plane from WWII', 'A horse', 'A lion', 'A famous horse rider']},
			{question: 'How many parts (screws and bolts included) does the average car have?', 
				answers: ['30, 000', '100', '500', '5, 000']},
			{question: 'Which car is often called the first muscle car?', 
				answers: ['The Pontiac GTO', 'Mustang', 'Jetta', 'Tsuru']},
			{question: 'In what year was the Corvette introduced?', 
				answers: ['1953', '1960', '1980', '2000']},
			{question: 'How many soccer players should each team have on the field at the start of each match?',
				answers: ['11', '9', '7', '13']},
			{question: 'Which Williams sister has won more Grand Slam titles?', 
				answers: ['Serena', 'Cristina', 'Elisa', 'Guadalupe']},
			{question: 'What country won the very first FIFA World Cup in 1930?', 
				answers: ['Uruguay', 'Brazil', 'Germany', 'Italy']},
			{question: 'In what year was the first-ever Wimbledon Championship held?', 
				answers: ['1877', '1990', '1850', '1970']},
			{question: 'Which racer holds the record for the most Grand Prix wins?', 
				answers: ['Michael Schumacher', 'John Williams', 'Elton Murris', 'Charls Browns']},
			{question: 'Which Jamaican runner is an 11-time world champion and holds the record in the 100 and 200-meter race?', 
				answers: ['Usain Bolt', 'Flash', 'Pelee', 'Charles Darwin']},
			{question: 'Which boxer was known as “The Greatest” and “The People’s Champion”?', 
				answers: ['Muhammad Ali', 'Myke Tyson', 'Rocky Balboa', 'Saul Alvarez']},
			{question: 'What sport was Jesse Owens involved in?', 
				answers: ['Track and field', 'Soccer', 'Basketball', 'Futball']},
			{question: 'Which hockey team did Wayne Gretzky play for in the ‘80s?', 
				answers: ['Edmonton Oilers', 'Cruz Azul', 'America', 'Chivas']}
		],
		Game: [
			{question: 'Where did backgammon originate?', 
				answers: ['In Persia', 'Russia', 'Germany', 'Italy']},
			{question: 'How many cards are there in a deck of Uno?', 
				answers: ['108', '50', '25', '20']},
			{question: 'In which board game do you try to solve a murder?', 
				answers: ['Clue', 'Worldwide tourist', 'Guess who', 'Mastermind']},
			{question: 'In chess, the queen has the combined movement of which two pieces?', 
				answers: ['bishop and rook', 'merge', 'Straight move', 'Super move']},
			{question: 'Which of these games includes the phrase “Do not pass go, do not collect $200”?', 
				answers: ['Monopoly', 'Worldwide tourist', 'Guess who', 'Mastermind']},
			{question: 'The video game “Happy Feet” features what animals?', 
				answers: ['Penguins', 'Lions', 'Rats', 'Snakes']},
			{question: 'What classic video game requires you to eat all the dots throughout a maze?', 
				answers: ['Pac-Man', 'Mario Bros', 'Gears of war', 'Halo']},
			{question: 'Which Street Fighter character wears a white outfit and a red headband?', 
				answers: ['Ryu', 'Ken', 'Zangief', 'Dhalsim']},
			{question: '“Astro Boy” is what genre of a video game?', 
				answers: ['Action', 'Adventure', 'Violence', 'Fear']},
			{question: 'What sport is featured in the video game “FIFA”?', 
				answers: ['Football', 'Basketball', 'Baseball', 'Tenis']},
			{question: 'In “The Farmer in the Dell,” what did the cat take?', 
				answers: ['The rat', 'The snake', 'The umbrella', 'The mouse']},
			{question: 'What did the “Itsy Bitsy Spider” climb up?', 
				answers: ['The waterspout', 'The wall', 'The car', 'The house']},
			{question: 'What did the “Three Little Kittens” lose?', 
				answers: ['Their mittens', 'Their cakes', 'Their coffees', 'Their dignity']},
			{question: 'How many bags of wool did “Baa Baa Black Sheep” have?', 
				answers: ['Three', 'Four', 'Five', 'Ten']},
			{question: 'Why did Jack and Jill go up the hill?', 
				answers: ['To fetch a pail of water', 'To enjoy the weather', 'To spend time each other', 'To run']},
			{question: 'How can a man go eight days without sleep?', 
				answers: ['By sleeping during the night', 'By drinking a lot of water', 'By eating a lot of meat', 'By doing a lot of sport']},
			{question: 'How can you drop a raw egg on the concrete floor without cracking it?', 
				answers: ['The egg won’t crack the concrete floor', 'Putting a pillow on the floor', 'Warming up the egg before', 'Putting the egg on oil']},
			{question: 'If there are six apples and you take away four, how many do you have?', 
				answers: ['Four', 'Five', 'Ten', 'Eight']},
			{question: 'What goes up and down, but still remains in the same place?', 
				answers: ['Stairs', 'Threes', 'Thoughts', 'Feelings']},
			{question: 'What gets wetter and wetter the more it dries?', 
				answers: ['A towel', 'The water', 'The grass', 'The clouds']}
		],
		Health: [
			{question: 'What is the common name for dried plums?', 
				answers: ['Prunes', 'Wrinkled', 'Blacks', 'Dried']},
			{question: 'What name does deer meat go by?', 
				answers: ['Venison', 'Andrison', 'Zanguison', 'Raison']},
			{question: 'What other name does “corn” go by?', 
				answers: ['Maize', 'Yellows', 'Whites', 'Crunchies']},
			{question: 'What’s the primary ingredient in hummus?', 
				answers: ['Chickpeas', 'Rice', 'Tomatoes', 'Lemons']},
			{question: 'Which country produces the most coffee in the world?', 
				answers: ['Brazil', 'New Zealand', 'Colombia', 'Mexico']},
			{question: 'Which country invented tea?', 
				answers: ['China', 'Japan', 'South Korea', 'Germany']},
			{question: 'Which kind of alcohol is Russia notoriously known for?', 
				answers: ['Vodka', 'Tequila', 'Whysky', 'Mezcal']},
			{question: 'What is the national dish of Spain?', 
				answers: ['Paella', 'Pizza', 'Tacos', 'Pasta']},
			{question: 'Which European nation was said to invent hot dogs?', 
				answers: ['Germany', 'Italy', 'Monaco', 'France']},
			{question: 'Which country is responsible for giving us pizza and pasta?', 
				answers: ['Italy', 'Sweden', 'Denmark', 'Norway']},
			{question: 'Which organ has four chambers?', 
				answers: ['The heart', 'The lung', 'The brain', 'The skin']},
			{question: 'In which body part can you find the femur?', 
				answers: ['Leg', 'Arm', 'Chest', 'Shoulders']},
			{question: 'What is your body’s largest organ?', 
				answers: ['The skin', 'The brain', 'The lung', 'The eyes']},
			{question: 'What kind of cells are found in the brain?', 
				answers: ['Neurons', 'Mother cells', 'Myofibrils', 'Osteocytes']},
			{question: 'Which bone are babies born without?', 
				answers: ['Knee cap', 'Femur', 'Clavicle', 'Ribs']},
			{question: 'About how many taste buds does the average human tongue have?', 
				answers: ['10,000', '5, 000', '500', '250']},
			{question: 'What percentage of our bodies is made up of water?', 
				answers: ['60-65%', '40-45%', '30-35%', '90-95%']},
			{question: 'Which element is said to keep bones strong?', 
				answers: ['Calcium', 'Potasium', 'Helyum', 'Hydrogen']},
			{question: 'What does the acronym AIDS stand for?', 
				answers: ['Acquired Immune Deficiency Syndrome', 'Akward Information Deficiency Symptom', 'Akward Ilusion Deficit Sign', 'Akward Inocency Due Sign']},
			{question: 'How many times does the heartbeat per day?', 
				answers: ['About 100,000', '250, 000', '100, 000', '50, 000']}
		],
		History: [
			{question: 'What is the name of the thin and long country that spans more than half of the western coast of South America?', 
				answers: ['Chile', 'Colombia', 'China', 'Japan']},
			{question: 'Which American state is the largest (by area)?', 
				answers: ['Alaska', 'California', 'Texas', 'Luisiana']},
			{question: 'Which two countries share the longest international border?', 
				answers: ['Canada and the USA', 'Germany and Swiss', 'France and Swiss', 'France and Spain']},
			{question: 'What is the smallest country in the world?', 
				answers: ['Vatican City', 'Italy', 'Germany', 'France']},
			{question: 'Which continent is the largest?', 
				answers: ['Asia', 'America', 'Europe', 'Africa']},
			{question: 'Which of the Seven Wonders is located in Egypt?', 
				answers: ['The Pyramids of Giza', 'Cruising the Nile', 'Aswan', 'Abu Simbel']},
			{question: 'What is the capital of New Zealand?', 
				answers: ['Wellington', 'Auckland', 'Tornstorn', 'Gambille']},
			{question: 'Which desert is the largest in the world?', 
				answers: ['The Sahara Desert (although Antarctica, which is larger, might qualify as a desert as well)', 'Black river', 'Dry forest', 'The wisconsin desert']},
			{question: 'What is the name of the world’s longest river?', 
				answers: ['The Nile', 'Ganges', 'Danubio', 'Amazonas']},
			{question: 'Which city in India would you find the Taj Mahal in?', 
				answers: ['Agra', 'Bombay', 'Bangalore', 'Chennai']},
			{question: 'By what name were the Egyptian kings/rulers known?', 
				answers: ['Pharaohs', 'Duke', 'Marques', 'Earl']},
			{question: 'How many Pyramids of Giza were made?', 
				answers: ['Three', 'Four', 'Seven', 'Eight']},
			{question: 'Who which queen was Julius Caesar involved with?', 
				answers: ['Cleopatra', 'Ana de Mendoza', 'Pocahontas', 'Isabel Clara']},
			{question: 'Where did the Franks settle after defeating the Romans?', 
				answers: ['Gaul', 'Praga', 'Amsterdam', 'Paris']},
			{question: 'How long did the Middle Ages last?', 
				answers: ['About 1000 years', '500 years', '250 years', '50 years']},
			{question: 'Which religion dominated the Middle Ages?', 
				answers: ['Catholicism', 'Christianity', 'Islam', 'Buddhism']},
			{question: 'In which year World War I begin?', 
				answers: ['1914', '1814', '1832', '1934']},
			{question: 'In which country Adolph Hitler was born?', 
				answers: ['Austria', 'Germany', 'Italy', 'France']},
			{question: 'John F. Kennedy was assassinated in which city?', 
				answers: ['Dallas', 'Chicago', 'Boston', 'Seattle']},
			{question: 'On Sunday 18th June 1815, which famous battle took place?', 
				answers: ['The Battle of Waterloo', 'The Battle of Marathon', 'Battle of Cajamarca', 'Battle of Hastings']}
		],
		Music: [
			{question: 'What was the name of the group Justin Timberlake used to be part of?', 
				answers: ['N’ SYNC', 'U2', 'Green day', 'The Who']},
			{question: 'What was the name of the rock band formed by Jimmy Page?', 
				answers: ['Led Zeppelin', 'The Beatles', 'Pink Floyd', 'Nirvana']},
			{question: 'Which country did AC/DC originate in?', 
				answers: ['Australia', 'New Zealand', 'Germany', 'England']},
			{question: 'What genre of music did Taylor Swift start in?', 
				answers: ['Country', 'Pop', 'Rock', 'Metal']},
			{question: 'Who was the lead singer of the iconic ‘80s band, Culture Club?', 
				answers: ['Boy George', 'Elvis Presley', 'Justin Bieber', 'Katy Perry']},
			{question: 'Which name is rapper Sean Combs better known by?', 
				answers: ['P. Diddy', 'J.P.', 'C.J.', 'J. Dad']},
			{question: 'Which musical legend is Jay-Z married to?', 
				answers: ['Beyonce', 'Taylor Swift', 'Lady Gaga', 'Mariah Carey']},
			{question: 'How many Grammys does John Legend have?', 
				answers: ['Ten', 'Two', 'Three', 'Four']},
			{question: 'Which British girl group had a member by the name of Mel B?', 
				answers: ['Spice Girls', 'The Pussycat Dolls', 'Little Mix', 'Bananarama']},
			{question: 'What is the name of the home of the Greek Gods?', 
				answers: ['Olympus', 'Heaven', 'Nirvana', 'Valhala']},
			{question: 'Which warrior’s weakness was their heel?', 
				answers: ['Achilles', 'Hercules', 'Hefesto', 'Apolo']},
			{question: 'Who was the messenger of the gods?', 
				answers: ['Hermes', 'Hades', 'Hefesto', 'Apolo']},
			{question: 'What’s the name of the paradise warriors go to after death?', 
				answers: ['Valhalla', 'Heaven', 'Nirvana', 'Olympus']},
			{question: 'Thor was the son of which God?', 
				answers: ['Odin', 'Frigg', 'Balder', 'Loki']},
			{question: 'Romulus and Remus were raised by what animal?', 
				answers: ['A she-wolf', 'A cow', 'A lion', 'A cat']},
			{question: 'The Roman God of War inspired the name of which planet?', 
				answers: ['Mars', 'Jupiter', 'Venus', 'Mercury']},
			{question: 'What was the name of the Egyptian God of the Sun?', 
				answers: ['Ra', 'Osiris', 'Isis', 'Horus']},
			{question: 'Anubis, the God of Death, had the head of a…', 
				answers: ['Jackal', 'Dog', 'Wolf', 'Lion']},
			{question: 'Set throws Osiris into which river, after tricking him into a coffin?', 
				answers: ['The Nile', 'The Pelusiac', 'The Tanitic', 'The Mendesian']},
			{question: 'What author became famous for his six-volume biography of Lincoln?', 
				answers: ['Carl Sandburg', 'Carl Sagans', 'Christopher Neils', 'Abraham Bambuher']},
			{question: 'Who wrote “Old Man and The Sea” and is considered one of the greatest writers of the 20th century?', 
				answers: ['Ernest Hemingway', 'Claudis Heterman', 'Robert Gaussian', 'Steven Rayiolic']},
			{question: 'What Danish author is considered by many to be the most prolific fairy tale writer?', 
				answers: ['Hans Christian Andersen', 'Romero Gabriel', 'Luidic Vandelsin', 'Andreu Homerman']},
			{question: 'Who is the writer of “Merchant of Venice”?', 
				answers: ['William Shakespeare', 'Charles Dickens', 'Mark Twain', 'James Joyce']},
			{question: '“Adventure of Sherlock Holmes” was written by which writer?', 
				answers: ['Arthur Conan Doyle', 'Arthur Connaway', 'Frederic Elderson', 'James de Nilo']},
			{question: 'What is the name of the fourth book in the Harry Potter series?', 
				answers: ['Harry Potter and the Goblet of Fire', 'Harry Potter and the Chamber of Secrets', 'Harry Potter and the Order of the Phoenix', 'Harry Potter and the Half Blood Prince']},
			{question: 'The Hunger Games series was written by which author?', 
				answers: ['Suzanne Collins', 'Christopher Ruflus', 'George Damade', 'Steven Roagins']},
			{question: 'Which country is Aesop’s Fables believed to originate in?', 
				answers: ['Greece', 'Germany', 'Italy', 'France']},
			{question: 'In Herman Melville’s novel “Moby Dick,” who was the loyal, reasonable first mate?', 
				answers: ['Starbuck', 'Frederic', 'Charles', 'Freeman']},
			{question: 'The book “Da Vinci Code,” was written by whom?', 
				answers: ['Dan Brown', 'Jimmy Roberson', 'Claud Benjamin', 'Franklin Watson']}
		],
		Religion: [
			{question: 'What holiday is called “turkey day”?', 
				answers: ['Thanksgiving Day', 'Valentine"s day', 'Easter', 'Christmas']},
			{question: 'In the US, what month is Labor Day in?', 
				answers: ['September', 'October', 'December', 'January']},
			{question: 'When is Canada Day?', 
				answers: ['July 1st', 'June 27th', 'October 1st', 'November 25th']},
			{question: 'Mexico’s Dia de los Muertos, means what in English?', 
				answers: ['Day of the Dead', 'Day of the zoombies', 'Day of the killed people', 'Day of the worst']},
			{question: 'Oktoberfest in Germany is celebrated with what drink?', 
				answers: ['Beer', 'Tea', 'Coffee', 'Vodka']},
			{question: 'What is celebrated on the 2nd Saturday in June in the United Kingdom?', 
				answers: ['The Queen’s Official Birthday', 'The King’s Official Birthday', 'The son of the King’s Birthday', 'The daughter of the Queen’s Birthday']},
			{question: 'Which country celebrates the Storming of the Bastille?', 
				answers: ['France', 'Germany', 'Spain', 'Italy']},
			{question: 'Mahatma Gandi’s birthday is a national holiday in which country?', 
				answers: ['India', 'Pakistan', 'Iran', 'Irak']},
			{question: 'The Chinese New Year is celebrated on what day and month?', 
				answers: ['25th January', '20th January', '15th February', '17th September']},
			{question: 'Independence Day in Cambodia is when?', 
				answers: ['9th November', '10th November', '15th February', '17th March']},
			{question: 'How many books are in the Catholic Bible?', 
				answers: ['Seventy-three', 'Sixty', 'Fifty-five', 'Thirty-nine']},
			{question: 'How many fish were used to feed the 5,000 along with the loaves?', 
				answers: ['Two', 'Three', 'Fifteen', 'Sixty']},
			{question: 'Which god is considered the “destroyer” and is part of the Hindu Trinity?', 
				answers: ['Shiva', 'Brahma', 'Vishnu', 'Devi']},
			{question: 'The mother of the youngest Pandavas is?', 
				answers: ['Madri', 'Brahma', 'Vishnu', 'Krishna']},
			{question: 'The Islamic calendar is based on which cycle?', 
				answers: ['Lunar', 'Lunisolar', 'Seasonal', 'Solar']},
			{question: 'Who was the last prophet in Islam?', 
				answers: ['Muhammad', 'Jesus', 'Pedro', 'Pablo']},
			{question: '&#8220;Cohen&#8221; is Hebrew for what?', 
				answers: ['Priest', 'Prince', 'Warrior', 'Blacksmith']},
			{question: 'What is the Hebrew term for a good deed done out of a sense of religious duty?', 
				answers: ['Mitzvah', 'Adam', 'Adar sheni', 'Adon']},
			{question: 'In which country was Buddha born?', 
				answers: ['Nepal', 'Nigeria', 'Ethiopia', 'Egypt']},
			{question: 'Where does Buddhism fall in a ranking of the world’s largest religion?', 
				answers: ['Fifth', 'Fourth', 'Sixth', 'Tenth']}
		],
		Design: [
			{question: 'Who is seen as the most famous female American fashion icon of the 1960’s?', 
				answers: ['Jacqueline Kennedy', 'Vera Wang', 'Coco Chanel', 'Kim Kardashian']},
			{question: 'The American designer born in 1939 as Ralph Lifshitz is better known as what?', 
				answers: ['Ralph Lauren', 'Christopher Lauris', 'Darian Nicholson', 'Bob Douglas']},
			{question: 'According to the commercial, “what is the fabric of our lives”?', 
				answers: ['Cotton', 'Paper', 'Towel', 'Plastic']},
			{question: 'Who invented the LBD (little black dress)?', 
				answers: ['Coco Chanel', 'Vera Wang', 'Kim Kardashian', 'Jacqueline Kennedy']},
			{question: 'Parkers, trenches, bombers and peas are types of what winter outerwear?', 
				answers: ['Coats', 'Shirts', 'T-shirts', 'Pants']},
			{question: 'What fashion fad did the 1983 film “Flashdance” make popular?', 
				answers: ['Legwarmers', 'Stockings', 'Leggings', 'Wristbands']},
			{question: 'The fashion designer, Gianni Versace, came from which country?', 
				answers: ['Italy', 'France', 'Germany', 'Spain']},
			{question: 'When was the company Nike founded?', 
				answers: ['1971', '1969', '1980', '1982']},
			{question: 'What animal is on Levi’s logo?', 
				answers: ['Horse', 'Lion', 'Dog', 'Leopard']},
			{question: 'Which fashion brand made the “Genius Jeans” that became part of the Guinness World Records?', 
				answers: ['Gucci', 'Benetton', 'Cartier', 'Chanel']},
			{question: 'What is the tallest building in the world?', 
				answers: ['Burj Khalifa', 'Goldin Finance', 'Lotte World Tower', 'One World Trade Center']},
			{question: 'When did construction on the Empire State building started?', 
				answers: ['1929', '1920', '1915', '1960']},
			{question: 'Who designed the Sydney Opera House?', 
				answers: ['Jorn Utzon', 'Christopher Mathius', 'Math Maclaren', 'Marck Robinson']},
			{question: 'Between 1933 to 1947, the Hoover Dam was called what?', 
				answers: ['Boulder Dam', 'Strong Dam', 'Weak Dam', 'Famous Dam']},
			{question: 'Where can you find the Petronas Towers?', 
				answers: ['Kuala Lumpur', 'Dubai', 'The Cairo', 'Jerusalen']},
			{question: 'Who invented the bidet?', 
				answers: ['Christophe Des Rosiers', 'Marck Staenberg', 'Luke Heisenberg', 'Richard Johnson']},
			{question: 'What is the smallest size bed available in the United States?', 
				answers: ['Twin', 'Triplet', 'Quadruplet', 'Quintuplet']},
			{question: 'Stripes, chevron, floral, and plaid are examples of what?', 
				answers: ['Patterns', 'Drawings', 'Figures', 'Textures']},
			{question: 'What design style uses lots of sea/ocean themed items?', 
				answers: ['Nautical', 'Coastal', 'Bohemian', 'Midcentury']},
			{question: 'What’s another name for a footrest?', 
				answers: ['Ottoman', 'Clauman', 'Robinman', 'Gauman']}
		],
		Law: [
			{question: 'Which American president was involved in the Watergate scandal?', 
				answers: ['Nixon', 'Joe Biden', 'Donald Trump', 'Barack Obama']},
			{question: 'What are the surnames of the father-son duos who both served as US presidents?', 
				answers: ['Adams and Bush', 'Joe Biden and Donald Trump', 'Barack Obama and Joe Biden', 'Donald Trump and Nixon']},
			{question: 'How many presidents have been impeached?', 
				answers: ['Three', 'Four', 'Five', 'Six']},
			{question: 'Before the laws were changed in 2000, how long was a French president’s term?', 
				answers: ['Seven years', 'Eight years', 'Nine months', '3 weeks']},
			{question: 'Who has been the longest-serving monarch of the United Kingdom?', 
				answers: ['Queen Elizabeth II', 'Queen Elizabeth I', 'King Carlos de Gales', 'King Enrique de Sussex']},
			{question: 'World War I began with the death of Archduke Franz Ferdinand, of which country?', 
				answers: ['Austria', 'Germany', 'Italy', 'Spain']},
			{question: 'Donald Trump and which North Korean leader are known to trade threats over the internet?', 
				answers: ['Kim Jong Un', 'Kim Il-sung', 'Kim Jong-il', 'Kim Il-sung II']},
			{question: 'What was Mao Zedong famous for?', 
				answers: ['Leading the Communist Party of China to victory during a Civil War', 'Free the pleople of India', 'Discover New Zealand', 'Travel around the world']},
			{question: 'Leader and political icon Nelson Mandela was from which African country?', 
				answers: ['South Africa', 'Nigeria', 'Ethiopia', 'Egypt']},
			{question: 'The largest political party in South Africa, the ANC, stands for what?', 
				answers: ['African National Congress', 'Democratic Alliance Afrikaans', 'Economic Freedom Fighters', 'Inkatha Freedom Party Zulu']},
			{question: 'What is the legal term for a voluntary written statement made under oath?', 
				answers: ['Affidavit', 'Madedavit', 'Frikidavit', 'Moldavit']},
			{question: 'What is the name of the classification of crime which is less serious than a felony?', 
				answers: ['Misdemeanor', 'Offense', 'Transgression', 'Fault']},
			{question: 'A verdict is a&#8230;', 
				answers: ['Decision or judgment', 'Decision of the police', 'Decision of jury', 'Decision of jailer']},
			{question: 'What is evidence in court, where a person tells everything they saw or know?', 
				answers: ['Testimony', 'Evidence', 'Gossip', 'Rumor']},
			{question: 'Who is the group of people sworn to make a decision/deliver a verdict in court?', 
				answers: ['Jury', 'Judge', 'Tribunal', 'Counselors']},
			{question: 'What was the verdict in the O.J. Simpson murder trial?', 
				answers: ['Not guilty', 'Guilty', 'Neutral', 'It cannot be know']},
			{question: 'How many homicides did Ted Bundy admit to?', 
				answers: ['30', '40', '50', '20']},
			{question: 'Ted Kaczynski was a former graduate of which university?', 
				answers: ['Harvard', 'Oxford', 'Standford', 'Cambridge']},
			{question: 'Gregory Lee Johnson was convicted in Texas for what in 1989?', 
				answers: ['Burning the flag', 'Burn the town hall', 'Made a massacre', 'Kill his father']},
			{question: 'Butch Cassidy was famous for doing what?', 
				answers: ['Stealing', 'Killing', 'Raping', 'Kidnapping']}
		],
		Animal: [
			{question: 'How long is the gestation period of an African elephant?', 
				answers: ['22 months', '11 months', '33 months', '2 years']},
			{question: 'What’s the scientific name of a wolf?&nbsp;', 
				answers: ['Canis lupus', 'Canis familiaris', 'Vulpini', 'Mephitidae']},
			{question: 'What is a female donkey called?', 
				answers: ['A Jenny', 'A Jenky', 'A donkay', 'A Jenney']},
			{question: 'Which mammal has no vocal cords?', 
				answers: ['Giraffe', 'Elephant', 'Zebra', 'Rhino']},
			{question: 'What’s the fastest land animal in the world?', 
				answers: ['The cheetah', 'The tiger', 'The lion', 'The dog']},
			{question: 'How many eyes does a bee have?', 
				answers: ['Five', 'Six', 'Four', 'Ten']},
			{question: 'Which animal symbolizes good luck in Europe?', 
				answers: ['Ladybug', 'Firefly', 'Pidgeon', 'Lizard']},
			{question: 'What name is used to refer to a group of frogs?', 
				answers: ['An army', 'A clowder', 'A drove', 'A herd']},
			{question: 'How many hearts does an octopus have?', 
				answers: ['Three', 'Four', 'Five', 'Seven']},
			{question: 'Do sponges have hearts?', 
				answers: ['No', 'Yes', 'Depends', 'You cannot tell']}
		],
		Business: [
			{question: 'Who is the richest person in the world as of 2021?', 
				answers: ['Elon Musk', 'Bill Gates', 'Carlos Slim', 'Marck Zuckerberg']},
			{question: 'Bill Gates is the founder of which company?', 
				answers: ['Microsoft', 'Amazon', 'Google', 'Apple']},
			{question: 'In what year did Steve Jobs die?', 
				answers: ['2011', '2021', '2015', '2013']},
			{question: 'Larry Page is the CEO of which company?', 
				answers: ['Google', 'Amazon', 'Microsoft', 'Apple']},
			{question: 'Richard Branson is the owner of which airline?', 
				answers: ['Virgin Atlantic', 'American Airlines', 'United Airlines', 'Copa Airlines']},
			{question: 'What vehicle is Volkswagen best known for in the world?', 
				answers: ['The Beetle', 'Jetta', 'Polo', 'Gol']},
			{question: 'Which watch company has a pointed crown as its logo?', 
				answers: ['Rolex', 'Piaget', 'Cartier', 'Blancpain']},
			{question: 'What is the slogan of Apple Inc.?', 
				answers: ['Think different', 'Think smart', 'Think everything', 'Think always']},
			{question: 'What is Hewlett Packard (HP) originally known for?', 
				answers: ['Printers', 'Calculators', 'Computers', 'CPUs']},
			{question: 'How many stripes does Adidas have?', 
				answers: ['1949', '1980', '1960', '1962']}
		]
	};

	const [userAnswer, setUserAnswer] = useState('');
	const [question, setQuestion] = useState('');
	const [answers, setAnswers] = useState([]);
	const [correctAnswers, setCorrectAnswers] = useState(0);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			categories = route.params.categories;
			items = [];
			indexItem = 0;
			categories.forEach((category) => {
				if (category == 'Science') {
					items = [...items, ...DATA.Science];
				} else if (category == 'Pop_culture') {
					items = [...items, ...DATA.Pop_culture];
				} else if (category == 'Sports') {
					items = [...items, ...DATA.Sports];
				} else if (category == 'Game') {
					items = [...items, ...DATA.Game];
				} else if (category == 'Health') {
					items = [...items, ...DATA.Health];
				} else if (category == 'History') {
					items = [...items, ...DATA.History];
				} else if (category == 'Music') {
					items = [...items, ...DATA.Music];
				} else if (category == 'Religion') {
					items = [...items, ...DATA.Religion];
				} else if (category == 'Design') {
					items = [...items, ...DATA.Design];
				} else if (category == 'Law') {
					items = [...items, ...DATA.Law];
				} else if (category == 'Animal') {
					items = [...items, ...DATA.Animal];
				} else if (category == 'Business') {
					items = [...items, ...DATA.Business];
				}
			});
			numberItems = items.length;
			//To choice an image
			let category;
			if (categories.length == 1) {
				category = categories[0];
			} else {
				shuffleArray(categories);
				category = categories[0];
			}
			if (category == 'Science') {
				categoryImage = require('../../assets/science.jpg');
			} else if (category == 'Pop_culture') {
				categoryImage = require('../../assets/popCulture.jpg');
			} else if (category == 'Sports') {
				categoryImage = require('../../assets/sports.jpg');
			} else if (category == 'Game') {
				categoryImage = require('../../assets/game.jpg');
			} else if (category == 'Health') {
				categoryImage = require('../../assets/health.jpg');
			} else if (category == 'History') {
				categoryImage = require('../../assets/history.jpg');
			} else if (category == 'Music') {
				categoryImage = require('../../assets/music.jpg');
			} else if (category == 'Religion') {
				categoryImage = require('../../assets/religion.jpg');
			} else if (category == 'Design') {
				categoryImage = require('../../assets/design.jpg');
			} else if (category == 'Law') {
				categoryImage = require('../../assets/law.jpg');
			} else if (category == 'Animal') {
				categoryImage = require('../../assets/animal.jpg');
			} else if (category == 'Business') {
				categoryImage = require('../../assets/business.jpg');
			}
			prepareNextItem();
		});

		return unsubscribe;
	}, [navigation])

	const getAchievements = async () => {
		jsonValue = await AsyncStorage.getItem('achievements');
	}

	const setAchievements = async (value) => {
		await AsyncStorage.setItem('achievements', value);
	}

	function checkAchievements() {
		getAchievements();

		if (jsonValue == null) {
			jsonValue = {
				Science: {Legendary: false, Expert: false, Beginner: false},
				Pop_culture: {Legendary: false, Expert: false, Beginner: false},
				Sports: {Legendary: false, Expert: false, Beginner: false},
				Game: {Legendary: false, Expert: false, Beginner: false},
				Health: {Legendary: false, Expert: false, Beginner: false},
				History: {Legendary: false, Expert: false, Beginner: false},
				Music: {Legendary: false, Expert: false, Beginner: false},
				Religion: {Legendary: false, Expert: false, Beginner: false},
				Design: {Legendary: false, Expert: false, Beginner: false},
				Law: {Legendary: false, Expert: false, Beginner: false},
				Animal: {Legendary: false, Expert: false, Beginner: false},
				Business: {Legendary: false, Expert: false, Beginner: false}
			}
			jsonValue = JSON.stringify(jsonValue);
			setAchievements(jsonValue);
		}
		const jsonObject = JSON.parse(jsonValue);
		const achievementsObject = jsonObject[categories[0]];

		console.log(jsonObject);

		const levels = ['Legendary', 'Expert', 'Beginner'];

		levels.forEach(level => {
		if (achievementsObject[level]) {
			if (level == 'Legendary') {
				legendaryAchievementLeft = false;
			} else if (level == 'Expert') {
				expertAchievementLeft = false;
			} else if (level == 'Beginner') {
				beginnerAchievementLeft = false;
			}
		} else {
			if (level == 'Legendary') {
				legendaryAchievementLeft = true;
			} else if (level == 'Expert') {
				expertAchievementLeft = true;
			} else if (level == 'Beginner') {
				beginnerAchievementLeft = true;
			}
		}
		});
	}

	function evaluateAchievement() {
			let percentageCorrectAnswers = correctAnswers * 100 / numberItems;
			checkAchievements();
			if (percentageCorrectAnswers >= 90 && categories.length == 1 && legendaryAchievementLeft) {
				navigation.navigate('Achievement', {
					level: 'Legendary',
					category: categories[0]
				})
			} else if (percentageCorrectAnswers >= 80 && percentageCorrectAnswers < 90 && categories.length == 1 && expertAchievementLeft) {
				navigation.navigate('Achievement', {
					level: 'Expert',
					category: categories[0]
				})
			} else if (percentageCorrectAnswers >= 70 && percentageCorrectAnswers < 80 && categories.length == 1 && beginnerAchievementLeft) {
				navigation.navigate('Achievement', {
					level: 'Beginner',
					category: categories[0]
				})
			} else {
				navigation.navigate('Main');
			}
	}

	const deleteData = async () => {
		try {
			await AsyncStorage.removeItem('achievements');
			let jsonValue = await AsyncStorage.getItem('achievements');
			console.log("Valor de la información: " + jsonValue);
		} catch (e) {
			console.log(e);
		}
	}

	function prepareNextItem() {
		//deleteData();
		if (numberItems == indexItem) {
			evaluateAchievement();
		} else {
			let tempAnswers = items[indexItem].answers;
			let question = items[indexItem].question;
			correctAnswer = tempAnswers[0];
			shuffleArray(tempAnswers);
			setQuestion(question);
			setAnswers(tempAnswers);

			indexItem = indexItem + 1;
		}
	}

	function countCorrectAnswer(answer) {
		if (answer == correctAnswer) {
			setCorrectAnswers(correctAnswers + 1);
		}
	}

	return (
		<View style={ styles.container }>
			<Image
				source={categoryImage}
				resizeMode="cover"
				style={ styles.image }
			/>
			<View style={{flex: 1, justifyContent: 'center', marginHorizontal: 15}}>
			<Text style={{fontSize: 20, fontWeight: 'bold'}}>{question}</Text>
			</View>
			<View style={{flex: 3, marginHorizontal: 15}}>
				{answers.map((answer) =>
					<TouchableOpacity key={answer} style={{flex: 1, backgroundColor: userAnswer == '' ? '#c2bfb0' : answer == correctAnswer ? '#66ba0c' : answer == userAnswer ? '#fd6e64' : '#c2bfb0', marginBottom: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}} onPress={() => {setUserAnswer(answer);countCorrectAnswer(answer);}} disabled={userAnswer == '' ? false : true}>
						<Text style={{fontSize: 17, fontWeight: 'bold'}}>{answer}</Text>
					</TouchableOpacity>
				)}
			{userAnswer != '' ? (
				<>
				<View style={{backgroundColor: '#808080', height: 1, width: '90%', alignSelf: 'center', marginBottom: 10}}/>
				<TouchableOpacity style={{flex:1, backgroundColor: '#3e4152', marginHorizontal: 15, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 5}} onPress={() => {setUserAnswer('');prepareNextItem();}}>
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
