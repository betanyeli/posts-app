import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import WebView_ from '../WebView_/WebView_';

export default function TabTwoScreen() {
// const { url } = route.params
// console.log("route", route)
  return (
    <View style={styles.container}>
    <Text>Holi soy yo jeje </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
