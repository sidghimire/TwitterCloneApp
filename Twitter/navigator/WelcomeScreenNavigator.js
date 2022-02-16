import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screen/WelcomeScreen';
import WelcomeHeader from '../components/WelcomeHeader';

const Stack = createStackNavigator();

const WelcomeScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{header: () => null, headerShown: true,header: () => <WelcomeHeader/>,}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WelcomeScreenNavigator;
