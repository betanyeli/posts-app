import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    container: {
      height: 150,
      width: SCREEN_WIDTH,
      justifyContent: 'center',
      padding: 16,
    },
    deleteBox: {
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 150,
    },
  });

  export default Styles;