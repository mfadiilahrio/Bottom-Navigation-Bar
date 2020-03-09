import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Feed} from '../screens/Feed';
import {Profile} from '../screens/Profile';

const ProfileStack = createStackNavigator();

export function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      headerMode="screen">
      <ProfileStack.Screen name="Profile" component={Profile} options={{
        title: 'Profile'
      }} />
      <ProfileStack.Screen name="Feed" component={Feed} options={{
        title: 'Feed'
      }} />
    </ProfileStack.Navigator>
  );
}