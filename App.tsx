/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
const queryClient = new QueryClient();
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Home from './App/Screens/Home';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SingleMovie from './App/Screens/SingleMovie';

export type RootStackParamList = {
  Home: undefined;
  SingleMovie: {movieID: number};
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            cardStyleInterpolator:
              CardStyleInterpolators.forRevealFromBottomAndroid,
          }}>
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="SingleMovie"
            component={SingleMovie}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
