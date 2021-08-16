import * as React from 'react';
import { StyleSheet, Image, Linking, TouchableOpacity} from 'react-native';
import { Text, View } from '../components/Themed';
import Icon from '../components/Icons/Ionicons';



export default function TabTwoScreen() {

  const onPress = (source: string) => {
    switch (source) {
      case "github":
        return Linking.openURL('https://github.com/betanyeli/posts-app');
        case "linkedin":
          return Linking.openURL('https://www.linkedin.com/in/betanyeli-bravo/');
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/postviewer.png')}
       />
    <Text style={styles.title}>Develop with ❤ by Beta</Text>
    <View style={styles.iconContainer}>
    <TouchableOpacity onPress={() => onPress("github")}>
    <Icon name="logo-github" color={'#ff477e'} size={50} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onPress("linkedin")}>
    <Icon name="logo-linkedin" color={'#ff477e'} size={50} />
    </TouchableOpacity>
    </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 40
    
  },
  iconContainer: {
    flexDirection: 'row', 
    backgroundColor: '#fff',
    margin: 10,

  }
 
});
