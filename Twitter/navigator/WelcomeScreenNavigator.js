import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screen/WelcomeScreen';
import WelcomeHeader from '../components/WelcomeHeader';
import CreateYourAccount1 from '../screen/CreateYourAccount1';
import CreateYourAccount2 from '../screen/CreateYourAccount2';
import AccountVerification from '../screen/AccountVerification';
import AddPassword from '../screen/AddPassword';
import PickProfilePicture from '../screen/PickProfilePicture';
import DescribeYourself from '../screen/DescribeYourself';
import ChooseUserName from '../screen/ChooseUsername';
const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 400,
    damping: 100,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
};
const WelcomeScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerTitle: () => <WelcomeHeader />,
            headerTitleAlign: 'center',
            headerTintColor: '#1C9CEA',
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="CreateYourAccount1"
          component={CreateYourAccount1}
          options={{
            headerShown: true,
            headerTitle: () => <WelcomeHeader />,
            headerTitleAlign: 'center',
            headerTintColor: '#1C9CEA',
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="CreateYourAccount2"
          component={CreateYourAccount2}
          options={{
            headerShown: true,
            headerTitle: () => <WelcomeHeader />,
            headerTitleAlign: 'center',
            headerTintColor: '#1C9CEA',
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="AccountVerification"
          component={AccountVerification}
          options={{
            headerShown: true,
            headerTitle: () => <WelcomeHeader />,
            headerTitleAlign: 'center',
            headerTintColor: '#1C9CEA',
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="AddPassword"
          component={AddPassword}
          options={{
            headerShown: true,
            headerTitle: () => <WelcomeHeader />,
            headerTitleAlign: 'center',
            headerTintColor: '#1C9CEA',
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="PickProfilePicture"
          component={PickProfilePicture}
          options={{
            headerShown: true,
            headerTitle: () => <WelcomeHeader />,
            headerTitleAlign: 'center',
            headerTintColor: '#1C9CEA',
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="DescribeYourself"
          component={DescribeYourself}
          options={{
            headerShown: true,
            headerTitle: () => <WelcomeHeader />,
            headerTitleAlign: 'center',
            headerTintColor: '#1C9CEA',
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="ChooseUsername"
          component={ChooseUserName}
          options={{
            headerShown: true,
            headerTitle: () => <WelcomeHeader />,
            headerTitleAlign: 'center',
            headerTintColor: '#1C9CEA',
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WelcomeScreenNavigator;
