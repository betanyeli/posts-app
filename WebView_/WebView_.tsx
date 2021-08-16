import * as React from 'react';
import {WebView}  from 'react-native-webview';
import { StyleSheet, SafeAreaView, ActivityIndicator, View } from 'react-native';
import Constants from 'expo-constants';
import { StackScreenProps } from '@react-navigation/stack';
import {WebViewParamList} from '../types';
import { useData } from '../context/DataContext';


export default function WebView_({navigation}: StackScreenProps<WebViewParamList, 'WebView_'>) {
  const {url} = useData();
  const [visible, setVisible] = React.useState(false);
  const webViewRef = React.useRef(null);


  return (
      <SafeAreaView style={{flex: 1}}>
    <WebView
      ref={webViewRef}
      style={styles.container}
      originWhitelist={['*']}
      source={{ uri: url}}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      allowsBackForwardNavigationGestures
      onLoadStart={() =>  setVisible(true)}
      onLoad={() => setVisible(false)}
    />
    {visible ? <ActivityIndicatorElement /> : null}
     </SafeAreaView>
  );
}

const ActivityIndicatorElement = () => {
  return (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator color="#009688" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});