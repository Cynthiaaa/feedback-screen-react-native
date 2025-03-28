# React Native Feedback Screen

![Screenshot](assets/screenshot.png)

A simple and easy-to-use React Native feedback screen for collecting user reviews and feedback. This project allows users to rate the app with a 5-star review option, provide additional comments in a textarea, and send the data to Firebase for storage.

## Features

- **5-Star Rating**: Allows users to select a rating from 1 to 5 stars.
- **Textarea for Feedback**: Users can provide additional feedback or comments in a textarea.
- **Firebase Integration**: Sends the collected data (rating and feedback) to Firebase Realtime Database for storage.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version >= 14.0)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Firebase Account](https://firebase.google.com/) and a Firebase project setup

## Installation

### 1. Clone the repository

Clone the repository to your local machine.

### 2. Install Dependencies

Install the required dependencies using Expo CLI.

- npm install -g expo-cli

- npm install

- npm install firebase

### 3. Firebase Setup

The project is already configured with Firebase. You will need to replace the Firebase credentials in the `firebaseConfig.js` file.

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or use an existing one.
3. Add a new Firebase Web app to get your Firebase config.
4. Replace the credentials in the `firebaseConfig.js` file located in the `src` directory with your Firebase credentials.

### 4. Run the app with Expo

- npm start

For Android Emulator (without Expo Go) :
- npm run android
 
For iOS Simulator (macOS only) : 
- npm run ios

Happy Coding ! 