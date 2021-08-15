import React from 'react';
import {
  Animated,
  TouchableOpacity,
  Alert,
  Linking
} from 'react-native';
import { View, Text } from '../Themed';
import Styles from './Styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const COLOR_PALETTE = ["#03071E", "#370617", "#6a040f", "#9d0208","#d00000", "#dc2f02", "#e85d04", "#f48c06", "#faa307", "#ffba08"]


const ItemList = (props: any) => {
  const handlePress = async(url: any) => {
    if(url === null){
      Alert.alert(
        `😟`,
        "Url not found" ,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    } else {
      await Linking.openURL(url)
    }
    
  }


  const rightSwipe = () => {
    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
        <View style={Styles.deleteBox}>
         <Text>Delete Item</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <TouchableOpacity onPress={() => handlePress(props.data.url)} activeOpacity={0.6}>
    <Swipeable 
        renderRightActions={rightSwipe}>
      <View style={{...Styles.container, backgroundColor: COLOR_PALETTE[props.i % COLOR_PALETTE.length]}}>
        <Text>Details:  {props.data.author}.</Text>
      </View>
    </Swipeable>
    </TouchableOpacity>
  );
};

export default ItemList;

