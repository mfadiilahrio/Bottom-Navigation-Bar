import * as React from 'react';
import {Button, Text, View} from 'react-native';

export function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed screen</Text>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
