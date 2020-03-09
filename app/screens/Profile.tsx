import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="Feed" onPress={() => {navigation.navigate('Feed')}} />
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
