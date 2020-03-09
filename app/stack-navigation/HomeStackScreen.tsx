import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';

const HomeStack = createStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Feed"
      headerMode="screen">
      <HomeStack.Screen name="Feed" component={Feed} options={{
        title: 'Feed'
      }} />
      <HomeStack.Screen name="Profile" component={Profile} options={{
        title: 'Profile'
      }} />

    </HomeStack.Navigator>
  );
}