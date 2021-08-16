import * as React from 'react';
import {WebView}  from 'react-native-webview';
import { StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

export default function WebView_(url: any) {
  console.log("url ejejej", url.url)
  return (
      <SafeAreaView style={{flex: 1}}>
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{ uri: url.url}}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      allowsBackForwardNavigationGestures
    />
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});