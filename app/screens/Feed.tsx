import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default function Feed({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
      <Button title="Profile" onPress={() => {navigation.navigate('Profile')}} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})
