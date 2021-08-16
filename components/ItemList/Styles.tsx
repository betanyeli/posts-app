import {
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    container: {
      height: Platform.OS  === 'ios' ? 150 : 130,
      width: SCREEN_WIDTH,
      justifyContent: 'center',
      padding: 16,
      borderRadius: 20,
      margin: 5
    },
    subContainer: {
      flexDirection: 'row', justifyContent: 'space-between'
    },
    deleteBox: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 130,
      borderRadius: 20,
      margin: 5
    },
    titleText: {
      fontSize: Platform.OS === 'ios' ? 18 : 20,
      fontWeight: "bold"
    }
  });

  export default Styles;