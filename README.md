# SweetTooth
This is a clone of Twitter App. The development of this App Began on 2/16/2022.

All the commands to create and make the project is listed Below

## Create a New Project
The version of Node.js used in this project is 16.13.2 

We are using React Native CLI for this project.

Inorder to create a new project type the follwoing in terminal/cmd:
```
npx react-native init Twitter
```
After the creation of this project type
```
cd Twitter
```
This will allow you to enter into the project directory where we will be installing some necessary dependencies before starting in the building process.
## Installing Dependencies

###### Installing Navigation Libraries

We will be installing React Native Navigation. You can follow the instruction from this link [React Navigation](https://reactnavigation.org/docs/getting-started)
Type the following in terminal inside your project directory to install react navigation.
```
yarn add @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/stack @react-navigation/bottom-tabs react-native-gesture-handler
```
We will also be using Material Top Tabs for Left and Right Swipe
```
yarn add @react-navigation/material-top-tabs
```
```
yarn add @react-navigation/material-top-tabs react-native-tab-view
yarn add react-native-pager-view

```
This will primarily install React Navigation, Stack Navigation and Bottom Tab Navigation along with some other essential libraries.


###### Installing Firebase

We will be using Firebase out Backend-as-a-service (Bass). You can follow [Firebase Documentation](https://firebase.google.com/docs/build) for all necessary documentation.

> We will be using Firebase Web Version 9(Modular). DO NOT USE Firebase WEB VERSION 8 FOR THIS PROJECT.
 
Type the following in terminal inside your project directory to install Firebase.
```
yarn add firebase
```
This will primarily install Firebase and several of its important tools like 
- Firebase/auth
- Firebase/firestore/lite
- Firebase/storage
- Firebase/database

###### Installing Vector Icons

```
yarn add react-native-vector-icons
```

###### Installing React Native Camera For Camera Control
```
yarn add react-native-camera
```

###### Add permissions to your app android/app/src/main/AndroidManifest.xml file:

```
<!-- Required -->
<uses-permission android:name="android.permission.CAMERA" />

<!-- Include this only if you are planning to use the camera roll -->
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

<!-- Include this only if you are planning to use the microphone for video recording -->
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
```

###### Insert the following lines in android/app/build.gradle:

```
android {
  ...
  defaultConfig {
    ...
    missingDimensionStrategy 'react-native-camera', 'general' // <--- insert this line
    multiDexEnabled true // <--- insert this line
  }
}
```

###### Installing library for using animation
```
yarn add lottie-react-native
```

###### Installing React Native FS
```
yarn add react-native-fs
```

###### Install Image Picker to grab image from gallery
```
yarn add react-native-image-picker
```
Add the following to android/src/debug/AndroidManifest.xml

```
<uses-permission android:name="android.permission.CAMERA"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>

```

###### Install Image Resizer To resize image before upload
```
yarn add react-native-image-resizer
```

###### Install Gradient Color For Few Gui Features
```
yarn add react-native-linear-gradient
```





## Start The Project

I will be using an external phone for development. You can use an android emulator too as long as it works perfectly fine.

Type the following code in the terminal to start the project. It may take sometime as we are running the file for the first time.
```
npx react-native run-android
```




# Development of the project


## Create a new account for twitter.

Below you will see different GUI screens made in Adobe Xd. Protyping an already existing app is essential as it reduces the mistakes you can make while managing Navigation.

###### Welcome Screen
![WelcomeScreen](https://user-images.githubusercontent.com/25863990/154191849-71fcdd5d-8a89-4780-8cb1-aa0b701dd06f.png)


The Welcome Screen is the first screen a new user sees when opening this app. On pressing create account, the Create New Account navigation navigator is opened and on pressing Sign in the Sign in navigation navigator is opened
![Create Your Account](https://user-images.githubusercontent.com/25863990/154215711-0f4c435b-6dd9-45d3-9d26-94b12cb31f54.png)

This Window will allow the user to enter their credentials like email, phone, email and date of birth.

