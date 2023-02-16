# Trivia

React Native application to test users' knowledge though general culture questions, they are divided into different categories.

## Description

Create an application to test the knowledge of the users though questions. The user can select different categories he would like to test his knowledge. The user can create a profile with his own information. Achievements are unlocked when the user achieves a percentage of correct answers in the selected category. 

## Requeriments
 
1. Must have 218 questions divided in the following categories: science(20), pop culture(10), sports(19), game(20), health(20), history(20), music(29), religion(20), design(20), law(20), animal(10) and business(10). 
2. Must have a profile with the following information: 
    - Photo 
    - Name 
    - Bio 
    - Country 
    - Age
    - Sex
3. Must have favorite categories, also called "interests".
4. Must have a song at the beginning.
5. Must have 3 achievements types:
   - Beginner: this is unlocked when the percentage of correct answers is greater than or equal to 70 but less than 80.
   - Expert: this is unlocked when the percentage of correct answers is greater than or equal to 80 but less than 90.
   - Legendary: this is unlocked when the percentage of correct answers is greater than or equal to 90.
6. Must record the questions answered with the category and a label indicating if the answer was correct or incorrect.
7. Must have an option to let the user share the app.

## Stack

- React 17.0.2
- React Native: 0.66.3
- Javascript
- Axios
- Async Storage

## Install

Just download the app on this [url](https://github.com/Orlando17544/Portafolio/raw/main/trivia.apk) and install it in a phone.

---

### If you want to run the project from source code, you should follow this steps:

1. Clone the project
```
git clone https://github.com/Orlando17544/Trivia.git
```

2. Change directory to the project

3. Install dependencies
```
npm install
```

4. Start Metro
```
npx react-native start
```

5. Start your application

Android:
```
npx react-native run-android
```

iOS:
```
npx react-native run-ios
```

## Preview

<img src="https://github.com/Orlando17544/Portafolio/blob/main/src/assets/trivia.gif" alt="Simplefolio" width="900px" />
