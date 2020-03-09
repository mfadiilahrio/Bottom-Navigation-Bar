import * as React from 'react';
import {Button, Text, View} from 'react-native';

export function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed screen</Text>
      <Button
        title="Go to feed"
        onPress={() => navigation.navigate('Feed')}
      />
    </View>
  );
}