import * as React from 'react';
import { StyleSheet, Image} from 'react-native';
import { Text, View } from '../components/Themed';



export default function TabTwoScreen() {

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/postviewer.png')}
       />
    <Text>Develop with love by Beta</Text>
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
